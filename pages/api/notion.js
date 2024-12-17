import { NotionAPI } from 'notion-client';

export async function fetchNotionPage(notionId) {
  const notion = new NotionAPI({
    activeUser: process.env.NOTION_ACTIVE_USER,
    authToken: process.env.NOTION_TOKEN_V2,
  });
  let recordMap = {},
    pageTitle = null;
  try {
    recordMap = await notion.getPage(notionId);
    pageTitle =
      recordMap?.block?.[Object.keys(recordMap.block)[0]]?.value?.properties
        ?.title?.[0]?.[0];
  } catch (e) {
    throw new Error(e.message);
  }
  return { recordMap, pageTitle };
}

export default async function handler(req, res) {
  const { notionId } = req.query;

  if (!notionId) {
    return res.status(400).json({ error: 'Missing notionId' });
  }

  try {
    const { recordMap, pageTitle } = await fetchNotionPage(notionId);
    res.status(200).json({ recordMap, pageTitle });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
