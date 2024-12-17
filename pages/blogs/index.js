import React from 'react';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/blogs');
      const data = await response.json();
      setBlogs(data.data);
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
                <div className="mb-2 h-6 w-full rounded bg-indigo-500 md:w-3/4"></div>
                <div className="h-4 w-16 rounded bg-gray-600"></div>
              </li>
            ))}
          </ul>
        ) : (
          <ul>
            {blogs.map((blog) => (
              <li key={blog.id} className="mb-4">
                <Link
                  href={`/blogs/${blog.id}`}
                  className="text-2xl font-bold text-indigo-500"
                >
                  {blog.name}
                </Link>
                <div className="mt-1 text-sm text-gray-600">
                  {blog.createdAt}
                </div>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
