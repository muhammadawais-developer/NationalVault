import React /*{useState}*/ from 'react';
import Transactions from '../components/Transactions';
import Aside from '../components/Aside';
import styled from 'styled-components';

const TransactionsPage = () => {

  const Container = styled.div`
    display: grid;
    background: #121212;
    grid-template-columns: 15rem auto;
    transition: all 0.5s ease-in-out;

    @media screen and (max-width: 1200px){
        grid-template-columns: 5.7rem auto;
        transition: 0.5s 300ms ease-in-out;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        transition: 0.5s 300ms ease-in-out;
    }`
  return (
    <>
        <Container>
          <Aside/>
          <Transactions/>
        </Container>
    </>
  )
}

export default TransactionsPage