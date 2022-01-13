import NextLink from 'next/link'
import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  Link,
  List,
  SimpleGrid,
  Icon,
  useColorModeValue,
  ListItem
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoGithub, IoLogoDiscord } from 'react-icons/io5'
import thumbYoutube from '../public/images/strike.jpg'
import thumbInkdrop from '../public/images/zaku.jpg'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="0.5rem"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a QA Engineer based in Toronto!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Felix Chen
            </Heading>
            <p>QA Engineer (Front-end Developer)</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/profile.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            As a QA Engineer, working to improve the user experience, test new
            feature/function within the app, and perform exploratory testing to
            find rare bugs and defects. Prepare test plans, test case and
            automation scripts for regression testing. Please checkout this
            awesome food/money saving app -
            <NextLink href="/works/flashfood">
              <Link> Flashfood</Link>
            </NextLink>
            .
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorschema="teal">
                Apps I Worked On
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2017</BioYear>
            Completed Bachelor&apos;s Degree in University Of Waterloo
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Completed post-graduated certificated program of Computer
            Application development in Conestoga College
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Work in Flashfood as a QA Engineer
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            My hobbies
          </Heading>
          <Paragraph>
            Gamimg, Music,{' '}
            <Link href="https://www.instagram.com/felix_darkshader/">
              Plastic Model
            </Link>
            , reading
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/felixChenC" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @FelixChenC
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/darkshader" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  #felix_darkshader
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://discord.gg/HXd9Ddmv" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoDiscord} />}
                >
                  Felix&apos;s hobby and study house
                </Button>
              </Link>
            </ListItem>
          </List>

          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              href="https://www.instagram.com/p/CYQmrDGu_Yf/"
              title="Metal build Strike Gundam"
              thumbnail={thumbYoutube}
            >
              Aile Strike Gundam
            </GridItem>
            <GridItem
              href="https://www.instagram.com/p/CXhE_8Yu2UP/"
              title="Zaku Warrior in custom paint"
              thumbnail={thumbInkdrop}
            >
              Zaku Warrior
            </GridItem>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
