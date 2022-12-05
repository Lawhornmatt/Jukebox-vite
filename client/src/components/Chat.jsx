import React, { useEffect, useRef, useState  } from "react";
import { Avatar, Flex, Text, Box, Divider } from "@chakra-ui/react";
import Footer from "./ChatFooter"

const Chat = () =>
{
    const [messages, setMessages] = useState([
        { from: "computer", text: "Hi, My Name is HoneyChat" },
        { from: "me", text: "Hey there" },
        { from: "me", text: "Myself Ferin Patel" },
        {
          from: "computer",
          text: "Nice to meet you. You can send me message and i'll reply you with same message.",
        },
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
        <Box position="absolute" right="0" top="100px" h="60%" overflowY="scroll" flexDirection="column" p="3">
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
                  <Avatar
                    name="Computer"
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                    bg="blue.300"
                  ></Avatar>
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