import { useRouter } from 'next/router';
import { usePosts } from '../../hooks/usePosts';

export default function BlogDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { post } = usePosts(id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <iframe 
      src={`https://htetmyathlaing.medium.com/${id}`}
      className="w-full h-screen"
      allowFullScreen>
    </iframe>
  );
}
