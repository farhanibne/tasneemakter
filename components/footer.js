import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Tasneem Akter Tonni. All Rights Reserved. ❤️ Created By <a href='https://farhanibnesaif.vercel.app'>DZ</a>
    </Box>
  )
}

export default Footer
