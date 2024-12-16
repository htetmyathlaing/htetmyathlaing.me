import { useEffect, useState } from 'react';
import { fetchPosts } from '../utils/api';

export const usePosts = (id = null) => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchPosts();
      setPosts(data);
      if (id) {
        const singlePost = data.find(post => post.id === id);
        setPost(singlePost);
      }
    };

    getPosts();
  }, [id]);

  return { posts, post };
};
