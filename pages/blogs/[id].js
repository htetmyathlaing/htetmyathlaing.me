import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import NotionPage from '../../components/NotionPage';

export default function BlogDetail({ id }) {
  const [recordMap, setRecordMap] = useState(null);
  const [title, setTitle] = useState('Blog Detail');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/api/notion/${id}`);
      const data = await response.json();
      setRecordMap(data.recordMap);
      setTitle(data.pageTitle || 'Blog Detail');
    }
    fetchData();
  }, [id]);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <NotionPage recordMap={recordMap} />
    </>
  );
}

BlogDetail.propTypes = {
  id: PropTypes.string.isRequired,
};

BlogDetail.getInitialProps = async ({ query }) => {
  return { id: query.id };
};
