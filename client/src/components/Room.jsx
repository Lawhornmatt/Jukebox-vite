import React, { useState, useEffect } from 'react';
import VideoList from './VideoList';
import Youtube from 'react-youtube';
import { Input, InputGroup, Button, InputRightElement } from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import { FIND_ROOM } from '../utils/queries';
import { extractYTid } from '../utils/extract';
import { useImmerReducer } from 'use-immer';


function ourReducer(draft, action) {
    switch (action.type) {
        case 'addToCollection':
            draft.videoCollection.push(action.value);
            return;
    }
}

const initialState = {
    videoCollection: []
};

const Room = () => {
    const { data: queryData } = useQuery(FIND_ROOM, {
        variables: { findRoomId: '6388e0bc4775de5124495f0d' }
    });
    const [Id, setId] = useState('');
    const [state, dispatch] = useImmerReducer(ourReducer, initialState);
    
    useEffect(() => {
        const reqController = new AbortController();
        

        async function go() {
            
            try {
                console.log('queryData', queryData.find_room.vid_queue);
                const ids = queryData.find_room.vid_queue.join(',')
                const data = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${ids}&key=AIzaSyB93EpyzcT4xY7BIowr-YKv7arfLc6qfoA`, { signal: reqController.signal });
                const jsonData = await data.json();
                dispatch({ type: 'addToCollection', value: jsonData.items });
            } catch {
                console.log('Our request was cancelled.');
            }
        }
        go();

        return () => {
            reqController.abort();
        }
    }, [queryData]);

    const opts = {
        height: '500',
        width: '750',
        playerVars: {
            autoplay: 1
        }
    };

    

    function queue(e) {
        setId(e.target.parentNode.parentNode.firstChild.value);
        e.target.parentNode.parentNode.firstChild.value = '';
    }

    return(
        <>
            <div style={{margin: '0 auto',flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly'}}>
                <h1>Welcome to the room!</h1>
                <label>Insert a YouTube video ID to queue</label>
                <div>
                    <InputGroup size='md'>
                        <Input
                            pr='4.5rem'
                            type='text'
                            placeholder='Enter ID'
                        />
                        <InputRightElement width='4.5rem' pr='5px'>
                            <Button onClick={queue} h='1.75rem' size='sm'>
                                Queue
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </div>
                
                <Youtube videoId={Id} opts={opts} />
            </div>
            <VideoList videos= {state.videoCollection[0]} />
        </>
    )
};

export default Room;