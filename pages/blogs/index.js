import Link from 'next/link';
import { usePosts } from '../../hooks/usePosts';

export default function Blog() {
  const { posts } = usePosts();

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto p-4 pt-0">
        <ul>
          {posts.map(post => (
            <li key={post.id} className="mb-4">
              <Link href={`/blogs/${post.id}`} className="text-2xl font-bold text-blue-500">{post.title}</Link>
              <p>{post.summary}</p>
              <p className="text-sm text-gray-600">Created at: {post.created_at}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
