import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import '../CSS/videoCard.css';

const VideoContainer = ({ videos=[] }) => {
    return (
        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <Grid templateColumns={`repeat(${videos.length}, 0fr)`} gap={4} m="4px" p="4px" w="70vw" overflowX="auto" overflowY="hidden" whiteSpace="nowrap" className="video-container">
            {videos.map((video) => (
                <GridItem w='200px' h='150px' key={video.id}>
                    <img style={{width: '300px', height: '150px', objectFit: 'contain'}} src={video.snippet.thumbnails.medium.url}></img>
                </GridItem>
            ))}
            </Grid>
        </div>
    )
}

export default VideoContainer;
