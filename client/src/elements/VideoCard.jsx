import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import '../CSS/videoCard.css';

const VideoCard = () => {
    return (
        <div className="grid-container">
            <Grid templateColumns='repeat(5, 1fr)' gap={6} m="4px" p="4px" w="50vw" overflowX="auto" overflowY="hidden" whiteSpace="nowrap">
                <GridItem w='200px' h='100px' bg='blue.500'></GridItem>
                <GridItem w='200px' h='100px' bg='blue.500' />
                <GridItem w='200px' h='100px' bg='blue.500' />
                <GridItem w='200px' h='100px' bg='blue.500' />
                <GridItem w='200px' h='100px' bg='blue.500' />
            </Grid>
        </div>
    )
}

export default VideoCard;