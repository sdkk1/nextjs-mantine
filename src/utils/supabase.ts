import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

// eslint-disable-next-line import/prefer-default-export
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
