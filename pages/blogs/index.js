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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl font-bold text-indigo-500">
          <FaSpinner className="animate-spin" /> 
        </div>
      </div>
    );
  }

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
