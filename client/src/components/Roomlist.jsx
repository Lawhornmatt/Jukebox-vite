import React from 'react'
import {
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Box,
} from '@chakra-ui/react'

export default function Listrooms(){
    const { isOpen, onOpen, onClose } = useDisclosure();


    return(
        <div>
            <button colorScheme="blue" onClick = {onOpen}>
                Click here to join a room!
            </button>
            <Drawer
            isOpen = {isOpen}
            placement = "bottom"
            onClose = {onClose}
            isFullHeight = {true}
            >
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Choose a room to Join</DrawerHeader>
                        <DrawerBody>
                            {[...Array(20)].map((_, i) => (
                                <Box key={i} minH="100px" border="3px outset" borderLeftColor="blue.300" borderRightColor="red.300" borderTopColor="blue.300" borderBottomColor="red.300" borderRadius="md" margin="10px" _hover={{color: "blue.300",border:"inset",cursor: "pointer"}}>
                                    {`Room ${i}`}
                                </Box>
                            ))}
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </div>
    )
}