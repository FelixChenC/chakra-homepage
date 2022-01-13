import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'

const Work = () => {
  return (
    <Layout title="ShareLego">
      <Container>
        <Title>
          Share Your Lego <Badge>2022</Badge>
        </Title>
        <P>
          A social media platform like app, user can sign in with their google
          account, and share their lego photo with title of the Lego, item
          number, even comment for specific photo. Let spread the Lego to
          everyone with all the lovely Lego you build.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://postyourlego.netlify.app/">
              https://postyourlego.netlify.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React,Sanity,Tailwind</span>
          </ListItem>
        </List>

        <WorkImage src="/images/sharelego_home.png" alt="Sharelego" />
        <WorkImage src="/images/sharelego_detail.png" alt="Sharelego" />
      </Container>
    </Layout>
  )
}

export default Work
