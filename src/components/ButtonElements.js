import styled from 'styled-components';

export const Button = styled.button`
    border-radius: 50px;
    white-spaces: nowrap;
    background: ${({primary}) => (primary ? '#01BF71' : '#010606')};
    padding: ${({big}) => (big ? '10px 20px' : '10px 14px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '25px' : '18px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff': '#01BF71')};
    }        
`