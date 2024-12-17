import React from 'react';
import { NotionRenderer } from 'react-notion-x';
import Head from 'next/head';
import { fetchNotionPage } from '../api/notion';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';

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

export default function BlogDetail({ recordMap, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
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
    </>
  );
}

BlogDetail.propTypes = {
  recordMap: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

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
      title: pageTitle || 'Blog Detail',
    },
  };
}
