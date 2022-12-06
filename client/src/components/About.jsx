import { React } from 'react';
import {
    Heading, 
    Highlight, 
    Image, 
    Box, 
    Text, 
    Flex, 
    useColorModeValue,
    Button } from '@chakra-ui/react';

const About = () => {

    const colorTitle = useColorModeValue('rgba(223, 229, 240, 0.80)','rgba(77, 73, 92, 0.80)');

    return(
        <Box verticalAlign="center">
            <Heading 
                paddingY = '150px'  as='h1' size='4xl' 
                noOfLines={1} 
                fontFamily='-moz-initial' 
                background={colorTitle} 
                fontSize={{ base: '5xl', sm: '6xl', md: '7xl' }}  
                borderRadius="15px" 
                justifyContent="center">
                Welcome to Jukebox!
            </Heading>
            <Text  style={{ maxWidth:900}} fontSize='3xl'>
                {`Our goal is to help you connect with friends and meet new people, join us 
                as we revolutionize our platform for an optimized user experience. We have big 
                plans for this project so stay tuned!
                `}
            </Text>
        </Box>
    )
};

export default About;