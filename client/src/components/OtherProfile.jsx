import { React, useContext } from 'react';
import { useParams } from "react-router-dom";

import { Heading, Box, Text, useColorModeValue, Avatar} from '@chakra-ui/react'
import { useQuery} from '@apollo/client';

import { FIND_USERNAME } from '../utils/queries';

const OtherProfile = () => {
    const colorTitle = useColorModeValue('rgba(223, 229, 240, 0.80)','rgba(77, 73, 92, 0.80)');
    const {name} =  useParams();
    const { loading, data } = useQuery(FIND_USERNAME, {variables: {username:name}});

    return(
        <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Here is the matchup!</h1>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Box   verticalAlign="center">
            <Heading paddingY = '50px'  as='h1' size='4xl' noOfLines={1} fontFamily='-moz-initial' background={colorTitle} fontSize={{ base: '5xl', sm: '6xl', md: '7xl' }}  borderRadius="15px" justifyContent="center">
            {data.find_username.username}'s Profile:
        <Avatar
                    size={'xl'}
                    src={`../assets/${data.find_username.avatar}.jpg`}
                  />
                  
      </Heading>
            <Box position="fixed" top="60%" left="50%" transform="translate(-50%, -50%)" width="500px" textAlign="center">
                <Box background={colorTitle} fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}  borderRadius="15px" justifyContent="center">
                    <Text>Username: {data.find_username.username}</Text>
                </Box>
            </Box>
        </Box>
        
        )}
    </div>
    )
};

export default OtherProfile;