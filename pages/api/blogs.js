import { fetchNotionPage } from './notion';

export default async function handler(req, res) {
  const notionId = "15ebe0b9-a04a-80d8-95df-f035d182bd2c";
  const { recordMap } = await fetchNotionPage(notionId);

  const blockIds = recordMap.collection_query["8a2f72c1-c8fe-428d-a5b3-75f1065ded4a"]["d9775b19-f91b-4d77-9e39-fb8922741942"].collection_group_results.blockIds;

  const subPages = blockIds.map(rowId => {
    const block = recordMap.block[rowId].value;
    const id = block.properties["title"]?.[0]?.[0] || '';
    const name = block.properties["TG~G"]?.[0]?.[0] || '';
    const date = block.properties["@=E|"]?.[0]?.[1]?.[0]?.[1]?.start_date || '';

    return {
      id,
      name,
      date
    };
  }).filter(page => page.id && page.name);

  res.status(200).json({ subPages });
}
