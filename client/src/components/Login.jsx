import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

// User Context
import { UserContext } from '../utils/UserContext';

import Auth from '../utils/auth';

import {
  Flex,
  Box,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Text,
} from '@chakra-ui/react';


const Login = (props) => {

  const [ { user }, dispatch ] = useContext(UserContext);

  function handleLogIn(userData) {
    dispatch({
      type: 'LOGIN_USER',
      payload: { data: userData}
    });
  }


  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

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
    // console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      
      Auth.login(data.login.token);

      // console.log(JSON.stringify(data.login.user))
      handleLogIn(data.login.user);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };
  return (
    <Flex
    minH={'100vh'}
    align={'center'}
    justify={'center'}
    bg={useColorModeValue('gray.50', 'gray.800')}>

      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>

        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
        </Stack>

          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              // <form spacing={4} onSubmit={handleFormSubmit}>
              <div spacing={4}>
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
                <Stack spacing={10}>
                  <Button
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{ bg: 'blue.500' }}
                    // type="submit"
                    onClick={handleFormSubmit}
                    >
                    Sign in
                  </Button>
                </Stack>
                <Stack pt={6}>
                    <Text align={'center'}>
                      Don't have an account?
                      <Link 
                        to='/signup' 
                        color={'blue.400'}> 
                        Signup here!
                      </Link>
                    </Text>
                </Stack>  
              </div>
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

export default Login;
