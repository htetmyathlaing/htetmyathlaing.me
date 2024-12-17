import Link from 'next/link';
import { fetchNotionPage } from '../api/notion';

// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'

// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-tomorrow.css'

// used for rendering equations (optional)
import 'katex/dist/katex.min.css'

export default function Blog({ subPages }) {
  return (
    <div className="min-h-screen p-4">
      <main className="container mx-auto p-4">
        <ul>
          {subPages.map(page => (
            <li key={page.id} className="mb-4">
              <Link href={`/blogs/${page.id}`} className="text-2xl font-bold text-indigo-500 ">{page.name}</Link>
              <div className="text-sm text-gray-600">{page.date}</div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
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

  return {
    props: {
      subPages
    }
  };
}
