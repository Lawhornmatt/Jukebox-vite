import { React, useContext } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

import { UserContext } from '../utils/UserContext';

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [ { user }, dispatch ] = useContext(UserContext);

  /* // Just injects fake login data into the global store for debugging
  function fakeLogIn(e) {
    dispatch({
      type: 'LOGIN_USER',
      payload: { data: {
        username: 'test user',
        avatar: 9,
        email: 'fake@notReal.com',
        darkmode: true,
        email_vis: false,
        hosted_room: null
      }}
    });
  }
  */

  function handleLogOut(e) {
    dispatch({
      type: 'LOGOUT_USER',
      payload: ''
    });
  }

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Flex alignItems={'center'} padding={'5px'}>
            <Link to='/'><Box paddingRight={'15px'}>JukeBox</Box></Link>

            <Link to='/room'><Button colorScheme='blue'marginRight={'10px'}>Rooms</Button></Link>
            
            <Link to='/about'><Button colorScheme='blue'marginRight={'10px'}>About</Button></Link>

            <Link to='/contact'><Button colorScheme='blue'>Contact</Button></Link>
          </Flex>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              {user ? (
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={`../assets/${user.avatar}.jpg`}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={`../assets/${user.avatar}.jpg`}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>{user.username}</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  {/* <MenuItem>Your Room</MenuItem> */}
                  <Link to='/profile'><MenuItem>My Profile</MenuItem></Link>
                  {/* <MenuItem onClick={handleLogIn}>Login</MenuItem> */}
                  {/* <br/> */}
                  <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
                </MenuList>
                </Menu>
                ) : (
                <Menu>
                  <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'../assets/empty.svg'}
                  /> 
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'../assets/empty.svg'}
                    /> 
                  </Center>
                  <br />
                  <Center>
                    <p>User Not Logged In</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  {/* <MenuItem>Your Room</MenuItem> */}
                  {/* <MenuItem>Account Settings</MenuItem> */}

                  <Link to='/login'><Button>Log In</Button></Link>
                </MenuList>
                </Menu>
                )}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

/*
            <button onClick={handleLogIn}>Login</button>
            <br/>
            <button onClick={handleLogOut}>Log Out</button>
*/