import React, { useContext } from 'react';
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
    FormErrorMessage,
    FormHelperText,
    Input } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

// User Context
import { UserContext } from '../utils/UserContext';


export default function InitialFocus() {

    const [ { user }, dispatch ] = useContext(UserContext);

    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
    <>
      {user ? (

      <>
        {user.hosted_room ? (
          <Link to='/room'>
            <Button ml={4} ref={finalRef}>
              Checkout Your Hosted Room
            </Button>
          </Link>
        ) : (
          <>
            <Button onClick={onOpen} colorScheme='yellow'>Click Here to Create a Room</Button>


            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}>

                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Create your account</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <FormControl>
                      <FormLabel>First name</FormLabel>
                      <Input ref={initialRef} placeholder='First name' />
                    </FormControl>

                    <FormControl mt={4}>
                      <FormLabel>Last name</FormLabel>
                      <Input placeholder='Last name' />
                    </FormControl>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme='blue' mr={3}>
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
        <Link to='/signup'>
          <Button ml={4} ref={finalRef}>
            Create an Account
          </Button>
        </Link>
      </>
      )}
    </>
    )
  }