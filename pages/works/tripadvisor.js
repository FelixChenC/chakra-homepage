import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'

const Work = () => {
  return (
    <Layout title="TripAdvisor">
      <Container>
        <Title>
          Trip Advisor <Badge> web application</Badge>
        </Title>
        <P>
          A web application allow people to see the restaurants, hotel, and
          attraction that are on the trip advisor website on the map. You can
          see their address, reward that had earned, ratings and more info of
          the place that you interesting. Use of trip advisor api from rapid api
          to get all the data for restaurants , hotel and attraction on the map,
          and use google-map-react to render the real time map on the app.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Link to the app</Meta>
            <Link href="https://tripadvisorfc.netlify.app/">
              https://tripadvisorfc.netlify.app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>JavaScript, React.js</span>
          </ListItem>
        </List>

        <WorkImage src="/images/tripAdvisor.png" alt="tripAdvisor" />
      </Container>
    </Layout>
  )
}

export default Work
