import React from 'react';
import Aside from '../components/Aside';
import Analytics from '../components/Analytics';
import styled from 'styled-components';

const AnalyticsPage = () => {
    const Container = styled.div`
    display: grid;
    background: #121212;
    grid-template-columns: 15rem 1fr;
    transition: all 0.5s ease-in-out;
    height: 100vh;

    @media screen and (max-width: 1200px){
        grid-template-columns: 5.7rem 1fr;
        transition: 0.5s 300ms ease-in-out;
    }

    @media screen and (max-width: 768px){
        display: block;
        transition: 0.5s 300ms ease-in-out;
    }`
  return (
    <>
        <Container>
          <Aside/>
          <Analytics/>
        </Container>
    </>
  )
}

export default AnalyticsPage