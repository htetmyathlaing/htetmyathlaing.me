export default async function handler(req, res) {
  const { url, id, cache } = req.query;

  if (!url) {
    return res.status(400).send('Missing image URL');
  }

  const [urlWithoutTable] = url.split('?table=block');

  const proxyImageUrl = `https://www.notion.so/image/${encodeURIComponent(urlWithoutTable)}?table=block&id=${id}&cache=${cache}`;

  // const workedUrl = "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F33fe4a3b-368b-4e0f-8e4e-5b7f0f536832%2Ff6bc51de-c150-474d-bc75-8b55e7fac662%2Fimage.png%3FspaceId%3D33fe4a3b-368b-4e0f-8e4e-5b7f0f536832?table=block&id=161be0b9-a04a-8049-b141-c8ba62a9d714&cache=v2";

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
