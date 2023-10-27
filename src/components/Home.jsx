import React from 'react'
import {Box,Container,Heading,Image,Stack,Text} from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions={
    pos:'absolute',
    left:'50%',
    top:'50%',
    transform:'translate(-50%,-50%)',
    textTransform:'uppercase',
    p:'4',
    size:"4xl"
};

const Home = () => {
  return (
    <Box>
        <MyCarousel/>
        <Container maxW={'container.xl'} minH={'100vh'} p="16">
            <Heading
               textTransform={'uppercase'}
               py="2"
               w={'fit-content'}
               borderBottom={'2px solid'}
               m='auto'
               >
                Services
            </Heading>
            <Stack
              h="full"
              p={'4'}
              alignItems={'center'}
              direction={['column','row']}
              >
                <Image src={img5} h={['40','400']}filter={"hue-rotate(-130deg)"}/>
                <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={"center"}>
                Gaming has undeniably become a cornerstone of modern entertainment, 
                transcending its niche origins to influence various sectors from education to healthcare.
                 As technological advancements continue at an exponential pace, the intersection between gaming and coding becomes even more pronounced. 
                 Game developers push the boundaries of what's possible, demanding innovative software solutions and pioneering new hardware. 
                 Virtual Reality (VR) and Augmented Reality (AR) games, once mere concepts, are now immersive experiences, thanks to the strides made in coding techniques and hardware engineering.
                  Moreover, blockchain technology is ushering in a new era of decentralized gaming, allowing for true ownership of digital assets. As Artificial Intelligence (AI) becomes more sophisticated, 
                  we can expect games with smarter NPCs (Non-Player Characters) and intricate storylines dynamically tailored to individual player actions. The future of coding isn't just about building software—it's about crafting rich, 
                interactive worlds and experiences, and gaming stands at the forefront of this revolution.

                </Text>
            </Stack>

        </Container>
    </Box>
  );
};
  const MyCarousel=()=>(
      <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        >
            <Box w="full" h={'100vh'}>
                <Image src={img1}/>
                <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingOptions}>
                    Watch The Future
                </Heading>
            </Box>

            <Box w="full" h={'100vh'}>
                <Image src={img2}/>
                <Heading bgColor={"whiteAlpha.900"} color={'black'} {...headingOptions} >
                    FUTURE IS GAMING
                </Heading>
            </Box>
            <Box w="full" h={'100vh'}>
                <Image src={img3}/>
                <Heading bgColor={"whiteAlpha.600"} color={'black'} {...headingOptions} >
                     Gaming on Console
                </Heading>
            </Box>

            <Box w="full" h={'100vh'}>
                <Image src={img4}/>
                <Heading bgColor={"whiteAlpha.600"} color={'black'} {...headingOptions} >
                    NIGHT LIFE IS COOL
                </Heading>
            </Box>

        </Carousel>
  );


export default Home