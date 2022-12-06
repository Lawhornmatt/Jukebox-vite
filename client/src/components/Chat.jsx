import React, { useEffect, useRef, useState  } from "react";
import { Avatar, Flex, Text, Box, Divider } from "@chakra-ui/react";
import Footer from "./ChatFooter"
import { useMutation, useQuery} from '@apollo/client';
import { FIND_ROOM } from '../utils/queries';

const Chat = () =>
{
  const findRoomId = "638e6065a877b7225959ba47";


    const { loading, data } = useQuery(FIND_ROOM, {variables: {findRoomId}});
      

    const [messages, setMessages] = useState([
      { from: "computer", text: "Welcome to the chat!" },
      { from: "computer", text: "Try playing a video!" }


      ]);
      

      const [inputMessage, setInputMessage] = useState("");

      const handleSendMessage = () => {
        if (!inputMessage.trim().length) {
          return;
        }
        const data = inputMessage;
    
        setMessages((old) => [...old, { from: "me", text: data }]);
        setInputMessage("");
      };

      const AlwaysScrollToBottom = () => {
        const elementRef = useRef();
        useEffect(() => elementRef.current.scrollIntoView());
        return <div ref={elementRef} />;
      };
      return (
        <Box className="rambo" position="absolute" right="0" top="100px" h="60%" overflowY="scroll" flexDirection="column" p="3">
          {messages.map((item, index) => {
            if (item.from === "me") {
              return (
                <Flex key={index} w="100%" justify="flex-end">
                  <Flex
                    bg="black"
                    color="white"
                    minW="100px"
                    maxW="350px"
                    my="1"
                    p="3"
                  >
                    <Text>{item.text}</Text>
                  </Flex>
                </Flex>
              );
            } else {
              return (
                <Flex key={index} w="100%">

                  <Flex
                    bg="gray.100"
                    color="black"
                    minW="100px"
                    maxW="350px"
                    my="1"
                    p="3"
                  >
                    <Text>{item.text}</Text>
                  </Flex>
                </Flex>
              );
            }
          })}
          <AlwaysScrollToBottom />
          <Divider />
    	          <Footer
      	                 inputMessage={inputMessage}
      	                 setInputMessage={setInputMessage}
                         handleSendMessage={handleSendMessage}
    	            />
        </Box>
        

        
      );
    };

export default Chat;