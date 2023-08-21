import { createClient } from "@supabase/supabase-js";
​
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
​
export const supabase = createClient(supabaseUrl || '', supabaseKey || '');

// import { createClient } from '@supabase/supabase-js'
// import { Database } from './database.types'

// export const supabase = createClient<Database>(
//   process.env.NEXT_PUBLIC_SUPABASE_URL || '',
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
// )
