import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaSpinner } from 'react-icons/fa';

export default function Blog() {
  const [subPages, setSubPages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/blogs');
      const data = await response.json();
      setSubPages(data.subPages);
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div className="min-h-[calc(100vh-6rem)] p-4">
      <main className="container mx-auto p-4">
        {loading ? (
          <ul>
            {Array.from({ length: 10 }).map((_, index) => (
              <li key={index} className="mb-4 animate-pulse">
                <div className="h-6 bg-indigo-500 rounded w-full md:w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-600 rounded w-16"></div>
              </li>
            ))}
          </ul>
        ) : (
          <ul>
            {subPages.map(page => (
              <li key={page.id} className="mb-4">
                <Link href={`/blogs/${page.id}`} className="text-2xl font-bold text-indigo-500 ">{page.name}</Link>
                <div className="text-sm text-gray-600">{page.date}</div>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
