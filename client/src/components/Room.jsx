import React, { useState, useEffect } from 'react';
import VideoList from './VideoList';
import Youtube from 'react-youtube';
import { Input, InputGroup, Button, InputRightElement } from '@chakra-ui/react';
import { useQuery, useMutation } from '@apollo/client';
import Chat from './Chat';
import { FIND_ROOM, LIST_ROOMS } from '../utils/queries';
import { ADD_VID_QUEUE, LOAD_NEXT_VID } from '../utils/mutations';
import { extractYTid } from '../utils/extract';
import { useImmerReducer } from 'use-immer';


function ourReducer(draft, action) {
    switch (action.type) {
        case 'addToCollection':
            draft.videoCollection[0] = action.value;
            return;
        case 'removeFromCollection':
            draft.videoCollection[0].shift();
            return;
    }
}

const initialState = {
    videoCollection: []
};

const Room = () => {
    const { data: allRooms } = useQuery(LIST_ROOMS);
    const rooms = allRooms?.rooms[1]._id || '';
    const { loading, data: dataa } = useQuery(FIND_ROOM, {
        variables: { findRoomId: rooms }
    });
    const queryData = dataa?.find_room || [];
    const [addVidQueue, { error }] = useMutation(ADD_VID_QUEUE);
    const [Id, setId] = useState('');
    const [state, dispatch] = useImmerReducer(ourReducer, initialState);
    
    useEffect(() => {
        const reqController = new AbortController();
        

        async function go() {
            try {
              let thisData;
              if(thisData != queryData) {
                  const ids = await queryData.vid_queue.join(',');
                  const data = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${ids}&key=AIzaSyB93EpyzcT4xY7BIowr-YKv7arfLc6qfoA`, { signal: reqController.signal });
                  const jsonData = await data.json();
                  dispatch({ type: 'addToCollection', value: jsonData.items });
              }
              if (!Id) {
                setId(queryData.current_vid);
              }
              thisData = queryData;
            } catch {
                console.log('Our request was cancelled.');
            }
        }
        go();

        return () => {
            reqController.abort();
        }
    }, [queryData]);

    async function onPlayerStateChange(event) {
      // 0 means finished and 2 means paused
      if(event.data === 0) {
        const id = await state.videoCollection[0][0].id;
        setId(await id);
        dispatch({ type: 'removeFromCollection' });
      }
    }

    const opts = {
        height: '500',
        width: '750',
        playerVars: {
            autoplay: 1,
            mute: 1,
        }
    };

        

    function queue(e) {
        const { data } = addVidQueue({
            variables: { id: '638f7bb860bb4e98fba80087', ytid: e.target.parentNode.parentNode.firstChild.value}
        });
        e.target.parentNode.parentNode.firstChild.value = '';
    }

    return(
        <>
        <Chat position="absolute" right="0"></Chat>
            <div style={{margin: '0 auto',flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly'}}>
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
                
                
                <Youtube videoId={Id} opts={opts} onStateChange={onPlayerStateChange} />
            </div>
            <h1>Queued Videos:</h1>
            <VideoList videos= {state.videoCollection[0]} />
        </>
        
    )
    
};

export default Room;