// import { NextRequest, NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';
// import { supabase } from "@/utils/supabase";

import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://dnlbbmenhgfyzgbtkeur.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRubGJibWVuaGdmeXpnYnRrZXVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIwMDI5NzMsImV4cCI6MjAwNzU3ODk3M30.n-nJif09wLePZZUI8Hz9EtpKXoVzkKWkt94uqIqzFSA')

// export const config = {
//   runtime: 'edge', // 指定函数的运行时 'nodejs' (default) | 'edge'
// };

// interface Data {
//   message?: string;
//   // book?: <type-of-book>[];
// }

export default async function handler(req: NextApiRequest, res: NextApiResponse){

  //   try {
  //   // Your code logic here
  //   res.status(200).json({ message: 'Success' });
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).json({ message: 'Internal Server Error' });
  // }
// export default async function handler(req, res) {
  const { name } = req.query

  // const url = new URL(req.url || '')
  // const searchParams = new URLSearchParams(url.search)
  // const name = searchParams.get('name')
  console.log(name);
  if (!name) {
    res.status(200).json({ message: `name empty!`})
  }
  // res.status(200).json({ message: `name` + name})

  const { data, error } = await supabase
  .from('book')
  .insert({ name: name })
  .select()
  if (error) {
    res.status(200).json({ message: `insert book error!` + JSON.stringify(error)})
  } else {
    res.status(200).json(data)
  }
  
};

// import { NextApiResponse, NextApiRequest } from 'next';

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     // Your code logic here
//     res.status(200).json({ message: 'Success' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// }

