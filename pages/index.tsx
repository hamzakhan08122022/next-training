import { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
}

const HomePage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/api');
        const postsData: Post[] = response.data;
        setPosts(postsData);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>
              <div className="post-link">{post.title}</div>
            </Link>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .post-link {
          color: blue;
          cursor: pointer;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default HomePage;