import React, { useEffect, useState } from 'react';
import { NotionRenderer } from 'react-notion-x';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import { FaSpinner } from 'react-icons/fa'; // Import FaSpinner from react-icons

import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'katex/dist/katex.min.css';

const Code = dynamic(
  () => import('react-notion-x/build/third-party/code').then((mod) => mod.Code),
  { ssr: false },
);
const Collection = dynamic(
  () =>
    import('react-notion-x/build/third-party/collection').then(
      (mod) => mod.Collection,
    ),
  { ssr: false },
);
const Equation = dynamic(
  () =>
    import('react-notion-x/build/third-party/equation').then(
      (mod) => mod.Equation,
    ),
  { ssr: false },
);
const Pdf = dynamic(
  () => import('react-notion-x/build/third-party/pdf').then((mod) => mod.Pdf),
  { ssr: false },
);
const Modal = dynamic(
  () =>
    import('react-notion-x/build/third-party/modal').then((mod) => mod.Modal),
  { ssr: false },
);

export default function BlogDetail({ id }) {
  const [recordMap, setRecordMap] = useState(null);
  const [title, setTitle] = useState('Blog Detail');
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    async function fetchData() {
      setLoading(true); // Set loading to true when fetching starts
      const response = await fetch(`/api/notion/${id}`);
      const data = await response.json();
      setRecordMap(data.recordMap);
      setTitle(data.pageTitle || 'Blog Detail');
      setLoading(false); // Set loading to false when fetching ends
    }
    fetchData();
  }, [id]);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {loading ? (
        <div className="flex h-screen items-center justify-center">
          <FaSpinner className="animate-spin text-4xl font-bold text-indigo-500" />
        </div>
      ) : (
        <NotionRenderer
          recordMap={recordMap}
          fullPage={true}
          darkMode={true}
          disableHeader={true}
          components={{
            Code,
            Collection,
            Equation,
            Pdf,
            Modal,
          }}
        />
      )}
    </>
  );
}

BlogDetail.propTypes = {
  id: PropTypes.string.isRequired,
};

BlogDetail.getInitialProps = async ({ query }) => {
  return { id: query.id };
};
