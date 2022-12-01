import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

import {
    Flex,
    Box,
    // FormControl,
    FormLabel,
    Input,
    InputGroup,
    // HStack,
    // InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';

// do this if we want to add show password function
//   import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
//   const [showPassword, setShowPassword] = useState(false);

const Signup = () => {
    const [formState, setFormState] = useState({
      name: '',
      email: '',
      password: '',
    });
    const [addUser, { error, data }] = useMutation(ADD_USER);
  
    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    // submit form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(formState);
  
      try {
        const { data } = await addUser({
          variables: { ...formState },
        });
  
        Auth.login(data.addUser.token);
      } catch (e) {
        console.error(e);
      }
    };
  
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>

        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>

          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>

          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <div>
                {data ? (
                <p>
                    Success! You may now head{' '}
                    <Link to="/">back to the homepage.</Link>
                </p>
                ) : (
                <form spacing={4} onSubmit={handleFormSubmit}>
                        <Box>
                            <FormLabel>Username</FormLabel>
                            <Input 
                                name="username"
                                type="text"
                                value={formState.username}
                                onChange={handleChange} 
                            />
                        </Box>

                        <FormLabel>Email address</FormLabel>
                        <Input 
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange} 
                        />
                        <FormLabel>Password</FormLabel>
                        <Input 
                            name="password"
                            type="password"
                            value={formState.password}
                            onChange={handleChange}
                        />

                    <Stack spacing={10} pt={2}>
                        <Button
                        loadingText="Submitting"
                        size="lg"
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                            bg: 'blue.500',
                        }}
                        type="submit">
                        Sign up
                        </Button>
                    </Stack>

                    <Stack pt={6}>
                        <Text align={'center'}>
                        Already a user? <Link color={'blue.400'}>Login</Link>
                        </Text>
                    </Stack>
                </form>
                )}
                 {error && (
                    <div className="my-3 p-3 bg-danger text-white">
                        {error.message}
                    </div>
                )}
            </div>
          </Box>
        </Stack>
      </Flex>
    );
  }

export default Signup; 


//    <InputRightElement h={'full'}>
//         <Button
//         variant={'ghost'}
//         onClick={() =>
//             setShowPassword((showPassword) => !showPassword)
//         }>
//         {showPassword ? <ViewIcon /> : <ViewOffIcon />}
//         </Button>
//     </InputRightElement>