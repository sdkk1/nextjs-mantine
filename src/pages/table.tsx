import Link from 'next/link'

import { ReplyIcon } from '@heroicons/react/solid'
import { Center, Container, Loader, Table } from '@mantine/core'

import Layout from '@/components/Layout'
import useQueryTodos from '@/hooks/useQueryTodos'

const TableDemo = () => {
  const { data, status } = useQueryTodos()

  const rows = data?.map((element) => (
    <tr key={element.id}>
      <td>{element.id}</td>
      <td>{element.title}</td>
      <td>{element.created_at}</td>
    </tr>
  ))

  if (status === 'loading') {
    return (
      <Layout title='table'>
        <Center>
          <Loader
            color='blue'
            size='lg'
          />
        </Center>
      </Layout>
    )
  }

  return (
    <Layout title='Table'>
      <Container>
        <Table
          striped
          horizontalSpacing='lg'
          verticalSpacing='sm'
          captionSide='top'
        >
          <caption>Todo items from Supabase</caption>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </Container>
      <Center>
        <Link href='/'>
          <ReplyIcon className='mt-4 h-6 w-6 cursor-pointer text-gray-300' />
        </Link>
      </Center>
    </Layout>
  )
}

export default TableDemo
