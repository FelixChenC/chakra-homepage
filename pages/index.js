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
import { GridItem, GridItemStyle } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord
} from 'react-icons/io5'
import thumbYoutube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'

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
            <p>Some random title (builder/developer/designer)</p>
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
              src="/images/takuya.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Sitting in the sun, away from everyone who had done him harm in the
            past, he quietly listened to those who roamed by. He felt at peace
            in the moment, hoping it would last, but knowing the reprieve would
            soon come to an end. He closed his eyes, the sun beating down on
            face and he smiled. He smiled for the first time in as long as he
            could remember.{' '}
            <NextLink href="/works/inkdrop">
              <Link>InkDrop</Link>
            </NextLink>
            .
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorschema="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1993</BioYear>
            Born in Taishan(台山), China
          </BioSection>
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
                  @Darkshader
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://discord.gg/random" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoDiscord} />}
                >
                  Discord
                </Button>
              </Link>
            </ListItem>
          </List>

          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              href="https://www.youtube.com/devaslife"
              title="Dev as Life"
              thumbnail={thumbYoutube}
            >
              My Youtube channel
            </GridItem>
            <GridItem
              href="https://www.inkdrop.app/"
              title="Inkdrop"
              thumbnail={thumbInkdrop}
            >
              A Markdown note-taking app
            </GridItem>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
