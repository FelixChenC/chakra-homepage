import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbDukemon from '../public/images/contents/dukemon.jpg'
import thumbZaku from '../public/images/contents/zaku_front.jpg'
import thumbJustice from '../public/images/contents/justice.jpg'
import thumbStrikeRouge from '../public/images/contents/strike-rouge.jpg'
import thumbStrike from '../public/images/contents/strike-front.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h4" fontSize={20} mb={4}>
        Instagram Posts
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Dukemon"
            thumbnail={thumbDukemon}
            href="https://www.instagram.com/p/CXcHjgcOhzI/"
          />
          <GridItem
            title="Zaku Warrior"
            thumbnail={thumbZaku}
            href="https://www.instagram.com/p/CXe1oxOOIf1/"
          />
        </SimpleGrid>
      </Section>
      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Justice Gundam"
            thumbnail={thumbJustice}
            href="https://www.instagram.com/p/CXsdpCGux1C/"
          />
          <GridItem
            title="Strike Rouge Gundam"
            thumbnail={thumbStrikeRouge}
            href="https://www.instagram.com/p/CXwD4cju9J0/"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Aile Strike Gundam"
            thumbnail={thumbStrike}
            href="https://www.instagram.com/p/CYQmrDGu_Yf/"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
