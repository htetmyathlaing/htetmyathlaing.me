import { NotionRenderer } from 'react-notion-x';
import Head from 'next/head';
import { fetchNotionPage } from '../api/notion';


// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'

// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-tomorrow.css'

// used for rendering equations (optional)
import 'katex/dist/katex.min.css'

export default function BlogDetail({ recordMap, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <NotionRenderer 
        recordMap={recordMap} 
        fullPage={true} 
        darkMode={false} 
        disableHeader={true} 
      />
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const { recordMap, pageTitle } = await fetchNotionPage(id);

  if (!recordMap || Object.keys(recordMap).length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      recordMap,
      title: pageTitle || 'Blog Detail'
    }
  };
}
