import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const getAllPosts = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const posts = response.data;
    return res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default getAllPosts;