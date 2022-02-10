import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue,
  Center
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoFacebook, IoLogoLinkedin } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'

const Home = () => (
  
  
  <Layout>
    <Container>
      <center>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
      Hello, I am a Tasneem, a freelancer, entrepreneur and more ..
      </Box>
      </center>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Tasneem Akter
          </Heading>
          <p>Digital Marketer (student, entrepreneur)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/t.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
         Tasneem Akter Tonni is a smart , Modern Lady passionate with her Dream to build and stand a succesfull business. Most of her time, she likes to spend her time by reading comics or scrolling social media . and on the rest time, she likes to travel and explore new places and the beautiful nature.  
        </Paragraph>
        <Box align="center" my={4}>
         
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1999</BioYear>
          Born in Dhaka (ঢাকা), Bangladesh.
        </BioSection>
        <BioSection>
          <BioYear>2005</BioYear>
          Joined the Motijheel Model high School and college in Dhaka.
        </BioSection>
       
        <BioSection>
          <BioYear>2015</BioYear>
          Passed 10th Class with a great result.
        </BioSection>
        <BioSection>
          <BioYear>2015</BioYear>
          joined Dhaka City College.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Passed Her HSC examination.
        </BioSection>
        <BioSection>
          <BioYear>2017 to present</BioYear>
          joined Dhaka city College as University
        </BioSection>
        
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
        😍 Art, 😍 Nature, 😍 Culture, 😍 Travelling , 😍 eating various foods
        
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://www.facebook.com/aktu.hasi" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoFacebook} />}
              >
                @Tasneemakter
              </Button>
            </Link>
          </ListItem>
         
         
          <ListItem>
            <Link href="https://www.instagram.com/tonni2022/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @tonni2022
              </Button>
            </Link>
          </ListItem>
        </List>

        
         

       
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
