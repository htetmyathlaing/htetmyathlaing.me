export default async function handler(req, res) {
  const { url, id, cache } = req.query;

  if (!url) {
    return res.status(400).send('Missing image URL');
  }

  const [urlWithoutTable] = url.split('?table=block');

  const proxyImageUrl = `https://www.notion.so/image/${encodeURIComponent(urlWithoutTable)}?table=block&id=${id}&cache=${cache}`;

  const notionUserId = process.env.NOTION_ACTIVE_USER;
  const notionToken = process.env.NOTION_TOKEN_V2;

  try {
    const response = await fetch(proxyImageUrl, {
      headers: {
        Cookie: `notion_user_id=${notionUserId}; token_v2=${notionToken}`,
      },
    });

    // Check if the response is a redirect
    if (response.status >= 300 && response.status < 400) {
      const redirectUrl = response.headers.get('Location');

      if (!redirectUrl) {
        return res
          .status(500)
          .send('Redirection failed: Missing Location header');
      }

      // Fetch the redirected image
      const finalResponse = await fetch(redirectUrl);
      const imageBuffer = await finalResponse.arrayBuffer();

      // Send the image with the correct content type
      res.setHeader('Content-Type', finalResponse.headers.get('Content-Type'));
      return res.status(200).send(Buffer.from(imageBuffer));
    }

    // If there's no redirection, handle the image directly
    const imageBuffer = await response.arrayBuffer();
    res.setHeader('Content-Type', response.headers.get('Content-Type'));
    res.status(200).send(Buffer.from(imageBuffer));
  } catch (error) {
    res.status(500).send('Failed to fetch image');
  }
}
