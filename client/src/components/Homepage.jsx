import React, {useState, useEffect, useRef} from 'react'
import {Image, Box, Text, Flex, useColorModeValue,Button} from '@chakra-ui/react'
import NET from 'vanta/dist/vanta.net.min'
import InitialFocus from './Modal';

// User Context
//import { accessUser } from '../utils/UserContext';

export default function Homepage (){
    //const { users, loginUser, logoutUser } = accessUser();  // Accesses the UserContext
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)
    const color = useColorModeValue('blue', 'black')
    const colorTitle = useColorModeValue('rgba(223, 229, 240, 0.80)','rgba(77, 73, 92, 0.80)')
    useEffect(() =>{
        if(!vantaEffect){
            setVantaEffect(NET({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x3f4aff,
                backgroundColor: 0x1c1020,
              }))
        }
        return () => {
            if(vantaEffect) vantaEffect.destroy()
        }
    },[vantaEffect])
    return (
        <Box ref={myRef} height="100vh" width='100vw' borderTop={`1px solid ${color}`}>
            <Box position="fixed" top="45%" left="50%" transform="translate(-50%, -50%)" width="500px" textAlign="center">
                <Flex background={colorTitle} fontSize={{ base: '5xl', sm: '6xl', md: '7xl' }}  borderRadius="15px" justifyContent="center">
                    <Text>JukeBox</Text>
                </Flex>
                <InitialFocus></InitialFocus>
            </Box>
        </Box>
    )
}