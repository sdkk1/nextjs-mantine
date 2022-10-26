import { useQuery } from 'react-query'

import type { Post } from '@/types'
import { supabase } from '@/utils/supabase'

const useQueryPosts = () => {
  const getPosts = async () => {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: true })
    if (error) {
      throw new Error(error.message)
    }
    return data
  }
  return useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: getPosts,
  })
}

export default useQueryPosts
