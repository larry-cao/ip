// import { NextRequest, NextResponse } from 'next/server';
import type { NextApiRequest, NextApiResponse } from 'next';
// import { supabase } from "@/utils/supabase";

import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://dnlbbmenhgfyzgbtkeur.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRubGJibWVuaGdmeXpnYnRrZXVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIwMDI5NzMsImV4cCI6MjAwNzU3ODk3M30.n-nJif09wLePZZUI8Hz9EtpKXoVzkKWkt94uqIqzFSA')

export const config = {
  runtime: 'edge', // 指定函数的运行时 'nodejs' (default) | 'edge'
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // const { searchParams } = new URL(req.url)
  // const email = searchParams.get('email')
  const { id, name } = req.query
  const { data, error } = await supabase
  .from('book')
  .insert({ id: id, name: name })
  if (error) {
    res.status(200).json({ message: `insert book error!` + error})
  } else {
    res.status(200).json(data)
  }
  
};

