import React from "react";
import { useMutation } from "@apollo/client";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CREATE_ROOM } from "../utils/mutations";
import { UserContext } from "../utils/UserContext";
import { useContext } from "react";

const NewRoom = () => {
  const [{ user }] = useContext(UserContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formState, setFormState] = useState({
    hostId: "63882622cbd1ebaa7be485c4",
    room_name: "",
  });
  const [roomName, setRoomName] = useState("");
  const [createRoom, { error, data }] = useMutation(CREATE_ROOM);

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("roomName: ", roomName);
    console.log("user: ", user);

    console.log("createRoom: ", createRoom);
    console.log("data: ", data);
    try {
      const response = await createRoom({
        variables: { hostId: user._id, roomName },
      });
      console.log("response: ", response);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      {user ? (
        <>
          {user.hosted_room ? (
            <Link to="/room">
              <Button ml={4} ref={finalRef}>
                Checkout Your Hosted Room
              </Button>
            </Link>
          ) : (
            <>
              <Button onClick={onOpen} colorScheme="yellow">
                Click Here to Create a Room
              </Button>
              <Link to="/signup">
                <Button ml={4} ref={finalRef}>
                  Create an Account
                </Button>
              </Link>

              <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Create a New Room</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <FormControl>
                      <FormLabel>Room Name</FormLabel>
                      <Input
                        ref={initialRef}
                        placeholder=""
                        onChange={(e) => setRoomName(e.target.value)}
                      />
                    </FormControl>
                  </ModalBody>

                  <ModalFooter>
                    <Button
                      colorScheme="blue"
                      mr={3}
                      onClick={handleFormSubmit}
                    >
                      Save
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </>
          )}
        </>
      ) : (
        <>
          <Link to="/signup">
            <Button ml={4} ref={finalRef}>
              Create an Account
            </Button>
          </Link>
        </>
      )}
    </>
  );
};
export default NewRoom;
