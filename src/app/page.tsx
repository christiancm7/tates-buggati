import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
import Marquee from 'react-fast-marquee'
import LocalPizzaIcon from '@mui/icons-material/LocalPizza'
import { Box, Typography } from '@mui/material'
export default function Home() {
  return (
    <>
      <Marquee>
        <Typography>I mean bro, its literally a beaver with a hat</Typography>
        <Box
          sx={{
            width: '30px',
          }}
        >
          <LocalPizzaIcon sx={{ textAlign: 'center' }} />
        </Box>
        email: support@bucceebase.com
      </Marquee>
      <Hero />

      {/* <Introduction />
      <NavBar />
      <TableOfContents />
      <Testimonial
        id="testimonial-from-tommy-stroman"
        author={{
          name: 'Tommy Stroman',
          role: 'Front-end developer',
          image: avatarImage1,
        }}
      >
        <p>
          “I didn’t know a thing about icon design until I read this book. Now I
          can create any icon I need in no time. Great resource!”
        </p>
      </Testimonial>
      <Screencasts />
      <Testimonial
        id="testimonial-from-gerardo-stark"
        author={{
          name: 'Gerardo Stark',
          role: 'Creator of Pandemicons',
          image: avatarImage2,
        }}
      >
        <p>
          “I’ve tried to create my own icons in the past but quickly got
          frustrated and gave up. Now I sell my own custom icon sets online.”
        </p>
      </Testimonial>
      <Resources />
      <FreeChapters />
      <Pricing />
      <Testimonials />
      <Author />
      <Footer /> */}
    </>
  )
}
