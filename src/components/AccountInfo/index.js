import React, {useState} from 'react';
import axios from "axios";
import {Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton} from "./AccountInfoElements";
import {Demo} from '../SignUp/SignupElements';
import { useNavigate } from 'react-router-dom';

const AccountInfo = () => {
    const [accNo, setAccNo] = useState('');
    const navigate = useNavigate();

    const getInfo = async(e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/accinfo', {
                accNo: accNo
            });
            navigate("/dashboard");
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <>
    <Container>
        <FormWrap>
            <Icon to='/'>National Vault</Icon>
            <FormContent>
                <Form onSubmit={getInfo}>
                    <FormH1>Confirm Account Details</FormH1>
                    <FormLabel htmlFor='for'>Enter Account Number</FormLabel>
                    <FormInput type='number' value={accNo} onChange={(e) => setAccNo(e.target.value)} required />
                    <FormButton type='submit'>Continue</FormButton>
                    <Demo to='/dashboard'> Continue as Demo</Demo>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
    </>
  )
}

export default AccountInfo