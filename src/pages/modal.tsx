import Link from 'next/link'
import { useState } from 'react'

import { ReplyIcon } from '@heroicons/react/solid'
import { Button, Group, Modal } from '@mantine/core'

import AuthenForm from '@/components/AuthenForm'
import Layout from '@/components/Layout'

const ModalDemo = () => {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <Layout title='Modal'>
      <Modal
        title='Authorization Form'
        centered
        opened={isOpened}
        onClose={() => setIsOpened(false)}
      >
        <AuthenForm setIsOpened={setIsOpened} />
      </Modal>
      <Group
        direction='column'
        position='center'
      >
        <Button onClick={() => setIsOpened(true)}>Open Modal</Button>
        <Link href='/'>
          <ReplyIcon className='mt-4 h-6 w-6 cursor-pointer text-gray-300' />
        </Link>
      </Group>
    </Layout>
  )
}

export default ModalDemo
