import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'

const Work = () => {
  return (
    <Layout title="Realtor">
      <Container>
        <Title>
          Realtor <Badge>web application</Badge>
        </Title>
        <P>
          A app for searching a real estate in world for rent or buy, user can
          search the property by different filter options
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://realestate-search.vercel.app/">
              https://realestate-search.vercel.app/{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React,Tailwind</span>
          </ListItem>
        </List>

        <WorkImage src="/images/realtor1.png" alt="Sharelego" />
        <WorkImage src="/images/realtor2.png" alt="Sharelego" />
      </Container>
    </Layout>
  )
}

export default Work
