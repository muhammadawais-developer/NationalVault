import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { Container, Form, FormH1,FormButton, FormContent, FormInput, FormLabel, FormWrap, Icon, Text, Direct, Demo } from './SignInElements';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/signin', {
            email: email,
            password: password
        });
        navigate("/dashboard");
    } catch (error) {
        if (error.response) {
          console.log(error);
            //setMsg(error.response.data.msg);
        }
    }
}

  return (
    <>
    <Container>
        <FormWrap>
            <Icon to='/'>National Vault</Icon>
            <FormContent>
                <Form onSubmit={Auth}>
                    <FormH1>Sign in to your account</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' placeholder='johndoe@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' placeholder='*****' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <FormButton type='submit'>Continue</FormButton>
                    <Demo to='/dashboard'> Continue as Demo</Demo>
                    <Text>Forget Password</Text>
                    <Text>Do not have an account? <Direct to='/signup'>Create now!</Direct>  </Text> 
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
    </>
  )
}

export default SignIn;