import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { Container, Form, FormH1,FormButton, FormContent, FormInput, FormLabel, FormWrap, Icon, Text, Direct, Demo} from './SignupElements';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  //const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const Register = async(e) => {
    e.preventDefault();
    try{
      await axios.post('http://localhost:5000/signup', {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword
      });
      navigate('/accNo');
    }
    catch(error){
      if(error){
        if(error.response){
          console.log(error);
          //setMsg(error.response.data.msg);
        }
      }
    }
  }

  return (
    <>
    <Container>
        <FormWrap>
            <Icon to='/'>National Vault</Icon>
            <FormContent>
                <Form onSubmit={Register}>
                    <FormH1>Create new account</FormH1>
                    <FormLabel htmlFor='for'>Full Name</FormLabel>
                    <FormInput type='text' placeholder='John Doe' value={name} onChange={(e) => setName(e.target.value)} required />
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' placeholder='johndoe@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' placeholder='*****' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <FormLabel htmlFor='for'>Confirm Password</FormLabel>
                    <FormInput type='password' placeholder='*****' value={confPassword} onChange={(e) => setConfPassword(e.target.value)} required />
                    <FormButton type='submit'> Continue </FormButton>
                    <Demo to='/accNo'> Continue as Demo</Demo>
                    <Text>Already have an account? <Direct to='/signin'>Login Here</Direct>  </Text> 
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
    </>
  )
}

export default SignUp