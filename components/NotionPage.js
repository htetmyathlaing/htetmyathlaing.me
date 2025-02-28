import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { NotionRenderer } from 'react-notion-x';
import dynamic from 'next/dynamic';
import { FaSpinner } from 'react-icons/fa';

import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'katex/dist/katex.min.css';

const Code = dynamic(
  () => import('react-notion-x/build/third-party/code').then((m) => m.Code),
  {
    ssr: false,
    loading: () => <div className="notion-code">Loading code...</div>,
  },
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

const proxyImageUrl = (url, block) => {
  const proxyImageApi = '/api/notion/proxy-image';
  return `${proxyImageApi}?url=${encodeURIComponent(url)}&id=${block.id}`;
};

export default function NotionPage({ recordMap }) {
  const components = useMemo(
    () => ({
      Code,
      Collection,
      Equation,
      Pdf,
      Modal,
    }),
    [],
  );

  return !recordMap ? (
    <div className="flex h-screen items-center justify-center">
      <FaSpinner className="animate-spin text-4xl font-bold text-indigo-500" />
    </div>
  ) : (
    <NotionRenderer
      recordMap={recordMap}
      fullPage={true}
      darkMode={true}
      disableHeader={true}
      previewImages={true}
      components={components}
      mapImageUrl={proxyImageUrl}
    />
  );
}

NotionPage.propTypes = {
  recordMap: PropTypes.object,
  loading: PropTypes.bool,
};
