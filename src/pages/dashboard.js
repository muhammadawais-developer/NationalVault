import React /*{useState}*/ from 'react';
import Dashboard from '../components/Dashboard copy';
import Aside from '../components/Aside';
import styled from 'styled-components';
const DashPage = () => {

  const Container = styled.div`
    display: grid;
    background: #121212;
    grid-template-columns: 15rem auto auto;
    transition: all 0.5s ease-in-out;
    height: 100vh;

    @media screen and (max-width: 1200px){
        height: 135vh;
        grid-template-columns: 5.7rem auto auto;
        transition: 0.5s 300ms ease-in-out;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        transition: 0.5s 300ms ease-in-out;
    }`
  return (
    <>
        <Container>
          <Aside item={'dashboard'}/>
          <Dashboard/>
        </Container>
    </>
  )
}

export default DashPage