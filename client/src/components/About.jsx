import { React, useReducer, useContext } from 'react';
import ReactDOM from 'react-dom';
import { Heading, Highlight, Image, Box, Text, Flex, useColorModeValue,Button} from '@chakra-ui/react';
import { UserContext } from '../utils/UserContext';

// import { accessUserContext } from '../utils/UserContext';
// import { UserContext } from '../utils/UserContext';

// Import our reducer
// import { reducer } from '../utils/reducers';

// Import our action
// import { LOGIN_USER, LOGOUT_USER } from '../utils/actions';


const About = () => {
    // const initialUser = accessUserContext();
    // const [state, dispatch] = useReducer(reducer, initialUser);

    const [ { user }, dispatch ] = useContext(UserContext);

    function handleLogIn(e) {
        dispatch({
          type: 'LOGIN_USER',
          payload: { data: 'Hello World'}
        });
      }

    function handleLogOut(e) {
        dispatch({
          type: 'LOGOUT_USER',
          payload: ''
        });
      }

    const colorTitle = useColorModeValue('rgba(223, 229, 240, 0.80)','rgba(77, 73, 92, 0.80)');

    return(
        <Box   verticalAlign="center">
            
            <Heading 
                paddingY = '150px'  as='h1' size='4xl' 
                noOfLines={1} 
                fontFamily='-moz-initial' 
                background={colorTitle} 
                fontSize={{ base: '5xl', sm: '6xl', md: '7xl' }}  
                borderRadius="15px" 
                justifyContent="center">

                {user}
                    
            </Heading>

            <button onClick={handleLogIn}>Login</button>
            <br/>
            <button onClick={handleLogOut}>Log Out</button>

            <Text  style={{ maxWidth:900}} fontSize='3xl'>
                {`Our goal is to help you connect with friends and meet new people, join us 
                as we revolutionize our platform for an optimized user experience. We have big 
                plans for this project so stay tuned!
                `}
            </Text>
        </Box>
        
        
    )
};

export default About;