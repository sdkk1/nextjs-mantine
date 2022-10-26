import type { FC } from 'react'

import { Badge, Button, Card, Group, Image, Text } from '@mantine/core'

type Props = {
  title: string
  content: string
  status: string
  postUrl: string
}

const CustomCard: FC<Props> = ({ title, content, status, postUrl }) => (
  <Card shadow='md'>
    <Card.Section>
      <Image
        src={postUrl}
        height={160}
        alt='With default placeholder'
        withPlaceholder
      />
    </Card.Section>
    <Group
      position='apart'
      my='md'
    >
      <Text weight={800}>{title}</Text>
      <Badge
        color='pink'
        radius='lg'
        variant='filled'
      >
        {status}
      </Badge>
    </Group>
    <Text size='sm'>{content}</Text>
    <Button
      mt='md'
      size='xs'
      variant='light'
      color='indigo'
      fullWidth
    >
      Subscribe
    </Button>
  </Card>
)

export default CustomCard
