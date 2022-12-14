import { React, useContext } from 'react';


import { Heading, Box, Text, useColorModeValue, Avatar} from '@chakra-ui/react'
import { UserContext } from '../utils/UserContext';

const Profile = () => {
    const colorTitle = useColorModeValue('rgba(223, 229, 240, 0.80)','rgba(77, 73, 92, 0.80)');
    const [ { user }] = useContext(UserContext);
    return(
        <Box   verticalAlign="center">
            <Heading paddingY = '50px'  as='h1' size='4xl' noOfLines={1} fontFamily='-moz-initial' background={colorTitle} fontSize={{ base: '5xl', sm: '6xl', md: '7xl' }}  borderRadius="15px" justifyContent="center">
        Your Profile:
        <Avatar
                    size={'xl'}
                    src={`../assets/${user.avatar}.jpg`}
                  />
                  
      </Heading>
            <Box position="fixed" top="60%" left="50%" transform="translate(-50%, -50%)" width="500px" textAlign="center">
                <Box background={colorTitle} fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}  borderRadius="15px" justifyContent="center">
                    <Text>Username: {user.username}</Text>
                    <Text >Email: {user.email}</Text>
                </Box>
            </Box>
        </Box>
        
        
    )
};

export default Profile;