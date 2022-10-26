import { useQuery } from 'react-query'

import { delay } from '../utils/delay'
import { supabase } from '../utils/supabase'

import type { Todo } from '../types'

const useQueryTodos = () => {
  const getTodos = async () => {
    const { data, error } = await supabase
      .from('todos')
      .select('*')
      .order('created_at', { ascending: true })

    await delay(2000)

    if (error) {
      throw new Error(error.message)
    }

    return data
  }

  return useQuery<Todo[]>({
    queryKey: ['todos'],
    queryFn: getTodos,
  })
}

export default useQueryTodos
