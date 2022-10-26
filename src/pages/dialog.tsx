import Link from 'next/link'
import { useEffect, useState } from 'react'

import { ReplyIcon } from '@heroicons/react/solid'
import { Button, Dialog, Group, Text, TextInput } from '@mantine/core'

import Layout from '@/components/Layout'

const DialogDemo = () => {
  const [isOpened, setIsOpened] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsOpened(true)
    }, 1500)
  }, [])

  return (
    <Layout title='Dialog'>
      <Group
        direction='column'
        position='center'
      >
        <Button onClick={() => setIsOpened(!isOpened)}>Toggle dialog</Button>
        <Link href='/'>
          <ReplyIcon className='mt-4 h-6 w-6 cursor-pointer text-gray-300' />
        </Link>
      </Group>

      <Dialog
        opened={isOpened}
        withCloseButton
        onClose={() => setIsOpened(false)}
        size='lg'
        radius='md'
      >
        <Text
          size='sm'
          mb='md'
        >
          Subscribe to email newsletter
        </Text>
        <Group>
          <TextInput
            placeholder='xxx@gmail.com'
            className='flex-1'
          />
          <Button onClick={() => setIsOpened(false)}>Subscribe</Button>
        </Group>
      </Dialog>
    </Layout>
  )
}

export default DialogDemo
