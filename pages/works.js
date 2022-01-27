import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbFlashfood from '../public/images/flashfood.jpg'
import thumbLego from '../public/images/sharelego.png'
import thumbTripAdvisor from '../public/images/tripAdvisor.png'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Apps
        </Heading>
        <SimpleGrid column={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="tripadvisor"
              title="TripAdvisor"
              thumbnail={thumbTripAdvisor}
            >
              A website that show all available restaurant, hotel, and
              attraction around you.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="shareLego"
              title="ShareLego"
              thumbnail={thumbLego}
            >
              A website that can share your Lego collection to other people.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="flashfood"
              title="Flashfood"
              thumbnail={thumbFlashfood}
            >
              Food saving App for both shopper and grocery store
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
