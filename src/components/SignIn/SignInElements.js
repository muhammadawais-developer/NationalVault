import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    /*background: linear-gradient(10deg, rgba(1, 147, 86, 1) 0%, rgba(10, 201, 122, 1) 50%);*/
`

export const FormWrap = styled.div`
    background: linear-gradient(10deg, rgba(1, 147, 86, 1) 0%, rgba(10, 201, 122, 1) 50%);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px){
        margin-left: 16px;
        margin-top: 8px;
    }
`

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px){
        padding: 10px;
    }
`

export const Form = styled.form`
    backgroud: #101010;
    max-width: 480px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 480px){
        padding: 32px 32px;
    }
`

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`
export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`

export const FormButton = styled.button`
    background: #fff;
    padding: 8px 20px;
    border: none;
    border-radius: 4px;
    color: #01bf71;
    font-size: 20px;
    cursor: pointer;
    margin: 14px auto;
    transition: all 0.2s ease-in-out;

    &:hover{
        background: #212121;
        color: #fff;
        transition: all 0.2s ease-in-out;
    }
`

export const Demo = styled(Link)`
    background: #fff;
    padding: 8px 20px;
    border: none;
    text-decoration: none;
    border-radius: 4px;
    color: #01bf71;
    opacity: 60%;
    font-size: 16px;
    cursor: pointer;
    margin: 14px auto;
    transition: all 0.2s ease-in-out;

    &:hover{
        background: #212121;
        color: #fff;
        transition: all 0.2s ease-in-out;
    }
`

export const Text = styled.span`
    text-align: center;
    margin-top: 10px;
    color: #fff;
    font-size: 14px;
`
export const Direct = styled(Link)`
    font-size: 16px;
    text-decoration: none;
    color: #010606;
    font-weight: 500;
    transition: 0.2s all ease-out;
    margin-left: 3px;
    animation: blinker 1s linear infinite;

    &:hover{
        color: #01fb71;
        transition: 0.2s all ease-out;
        font-size: 20px;
        font-weight: 600;
        animation: none;
    }

    @keyframes blinker {
        50%{
            opacity: 10%;
        }
    }
`