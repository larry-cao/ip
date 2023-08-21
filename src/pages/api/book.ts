import { NextRequest, NextResponse } from 'next/server';
import { supabase } from "@/utils/supabase";
import { ifError } from 'assert';

export const config = {
  runtime: 'edge', // 指定函数的运行时 'nodejs' (default) | 'edge'
};

const find = async (req: NextRequest) => {
  const { data, error } = await supabase
  .from('book')
  .select()
  if (error) {
    return NextResponse.json({
      name: `find book error!`,
    });
  } else {
    return NextResponse.json(data);
  }
  
};

const insert = async (req: NextRequest) => {
  const { data, error } = await supabase
  .from('book')
  .insert({ id: 1, name: 'java' })
  if (error) {
    return NextResponse.json({
      name: `insert book error!`,
    });
  } else {
    return NextResponse.json(data);
  }
  
};

const update = async (req: NextRequest) => {
  const { data, error } = await supabase
  .from('book')
  .update({ name: 'vue' })
  .eq('id', 1)
  if (error) {
    return NextResponse.json({
      name: `update book error!`,
    });
  } else {
    return NextResponse.json(data);
  }
  
};

const del = async (req: NextRequest) => {
  const { data, error } = await supabase
  .from('book')
  .delete()
  .eq('id', 1)
  if (error) {
    return NextResponse.json({
      name: `del book error!`,
    });
  } else {
    return NextResponse.json(data);
  }
  
};

export default {find,insert, update, del}
