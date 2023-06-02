import { useEffect, useState } from 'react';
import { Router, useRouter } from 'next/router';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  body: string;
}

const PostPage = () => {
  const { query } = useRouter();
  const { id } = query;
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`/api/${id}`);
        const postData: Post = response.data;
        setPost(postData);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostPage;