import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import NotionPage from '../../components/NotionPage';
import fetchNotionPage from '../../utils/fetchNotionPage';

export default function BlogDetail({ recordMap, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={title} />
        <meta property="og:type" content="article" />
      </Head>
      <NotionPage recordMap={recordMap} />
    </>
  );
}

BlogDetail.propTypes = {
  recordMap: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export async function getServerSideProps({ params }) {
  const { recordMap, pageTitle } = await fetchNotionPage(params.id);
  return {
    props: {
      recordMap,
      title: pageTitle || 'Blog Detail',
    },
  };
}
