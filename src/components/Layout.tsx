import Head from 'next/head'
import type { FC, ReactNode } from 'react'

type Props = {
  title: string
  children: ReactNode
}

const Layout: FC<Props> = ({ title = 'Mantine', children }) => (
  <div className='flex min-h-screen'>
    <Head>
      <title>{title}</title>
    </Head>
    <header></header>
    <main className='flex flex-1 flex-col justify-center p-4'>{children}</main>
    <footer></footer>
  </div>
)

export default Layout
