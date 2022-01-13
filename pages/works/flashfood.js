import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'

const Work = () => {
  return (
    <Layout title="Flashfood">
      <Container>
        <Title>
          FlashFood <Badge> as QA Engineer</Badge>
        </Title>
        <P>
          A shopping App that offer great deal for shoppers. Get massive savings
          on fresh food items like meat and produce that are nearing their best
          before date at grocery stores across Canada and the U.S.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.flashfood.com/">
              https://www.flashfood.com/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Swift, Kotlin, Nodejs, etc...</span>
          </ListItem>
        </List>

        <WorkImage src="/images/flashfood_map.png" alt="Flashfood" />
        <WorkImage src="/images/flashfood_phone.jpeg" alt="Flashfood" />
      </Container>
    </Layout>
  )
}

export default Work
