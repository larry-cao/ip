import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

// export const config = {
//   runtime: 'edge', // 指定函数的运行时 'nodejs' (default) | 'edge'
// };

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  try {
    const { ip } = req.query
    // const ip = '65.75.220.30'
    const response = await fetch('https://v2.api.iphub.info/guest/ip/'+ip);
    const data = await response.json();
    // console.log(data);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
