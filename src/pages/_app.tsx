import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { MantineProvider } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import type { MantineThemeOverride } from '@mantine/core'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
})

const myTheme: MantineThemeOverride = {
  colorScheme: 'dark',
  fontFamily: 'Verdana, sans-serif',
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const MyApp = ({ Component, pageProps }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={myTheme}
    >
      <NotificationsProvider limit={2}>
        <Component {...pageProps} />
      </NotificationsProvider>
    </MantineProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
)

export default MyApp
