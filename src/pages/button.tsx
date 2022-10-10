import Link from 'next/link'

import { ReplyIcon } from '@heroicons/react/solid'
import { Button, Group } from '@mantine/core'
import { BrandGithub, ThreeDCubeSphere } from 'tabler-icons-react'

import Layout from '@/components/Layout'

const ButtonDemo = () => (
  <Layout title='Button'>
    <Group
      direction='column'
      position='center'
    >
      <Button
        classNames={{
          leftIcon: 'text-pink-500 h-6 w-6',
          rightIcon: 'text-orange-500 h-6 w-6',
        }}
        color='cyan'
        radius='lg'
        uppercase
        leftIcon={<BrandGithub />}
        rightIcon={<ThreeDCubeSphere />}
      >
        Press
      </Button>
      <Button className='mt-4'>Click</Button>
      <Link href='/'>
        <ReplyIcon className='mt-4 h-6 w-6 cursor-pointer text-gray-300' />
      </Link>
    </Group>
  </Layout>
)

export default ButtonDemo
