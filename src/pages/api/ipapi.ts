import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

// export const config = {
//   runtime: 'edge', // 指定函数的运行时 'nodejs' (default) | 'edge'
// };

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  try {
    const { ip } = req.query
    const response = await fetch('http://ip-api.com/json/'+ ip);
    // console.log(response);
    const data = await response.json();
    // console.log(data);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
