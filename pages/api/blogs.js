import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_TOKEN });

export default async function handler(req, res) {
  const databaseId = process.env.NOTION_DATABASE_ID;
  
  const response = await notion.databases.query({
    database_id: databaseId,
  });

  const blogs = response.results.map(page => {
    const id = page.properties.Blog.relation[0]?.id || '';
    const name = page.properties.Name.title[0]?.text?.content || '';
    const createdAt = page.properties.CreatedAt?.date?.start || '';

    return {
      id,
      name,
      createdAt
    };
  }).filter(page => page.id && page.name);

  res.status(200).json({ data: blogs });
}
