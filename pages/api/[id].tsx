import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const getPostById = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = response.data;
    console.log(post)
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default getPostById;