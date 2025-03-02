import { NotionAPI } from 'notion-client';

export default async function fetchNotionPage(notionId) {
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
