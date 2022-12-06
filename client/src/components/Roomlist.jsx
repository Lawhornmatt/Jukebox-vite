import React from "react";
import {
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { LIST_ROOMS } from "../utils/queries";
import { CREATE_ROOM } from "../utils/mutations";
import { useMutation, useQuery } from "@apollo/client";

export default function Listrooms() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [roomList, setRoomList] = useState([]);
  const { data } = useQuery(LIST_ROOMS);
  const [createRoom] = useMutation(CREATE_ROOM);

  useEffect(() => {
    console.log("data: ", data);
    if (data) {
      const { rooms } = data;
      setRoomList([...rooms]);
    }
  }, [data]);

  if (roomList) {
    console.log("roomList: ", roomList);
  }

  const onCreate = async (values) => {
    const { room_name } = values;
    try {
      const response = await createRoom({
        variables: {
          room_name,
        },
      });
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <Button colorScheme="blue" onClick={onOpen}>
        Click here to join a room!
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        isFullHeight={true}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Choose a room to Join</DrawerHeader>
            <DrawerBody>
              {roomList?.map((room, index) => (
                <Box
                  key={index}
                  minH="100px"
                  border="3px outset"
                  borderLeftColor="blue.300"
                  borderRightColor="red.300"
                  borderTopColor="blue.300"
                  borderBottomColor="red.300"
                  borderRadius="md"
                  margin="10px"
                  _hover={{
                    color: "blue.300",
                    border: "inset",
                    cursor: "pointer",
                  }}
                >
                  {`Room ${index + 1}`}
                    <div>
                        {room.room_name}
                    </div>
                </Box>
              ))}
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </div>
    
  );
}
