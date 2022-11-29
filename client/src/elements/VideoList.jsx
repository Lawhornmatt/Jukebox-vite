import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

const VideoContainer = ({ videos = [] }) => {
    return (
        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
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

export default VideoContainer;

// take place of hard coded grid items
// {videos && videos.map((video) => {
//     <GridItem w='200px' h='100px' bg='blue.500'> {/* bg is for visual purposes; remove when thumbnail is available */}
//         {/* video thumbnail & other properties */}
//     </GridItem>
// })}