import styled from "styled-components";
import '../../assets/fonts.css';

//Dashboard (main)

export const Main = styled.main`
    background: #121212;
    padding: 1.8rem 0.5rem 1rem 1rem;

    @media screen and (max-width: 768px){
        padding: 0 1rem 1rem 1rem;
    }

`
export const MainTop = styled.div`
    margin-bottom: 2rem;
`

export const H1 = styled.h1`
    font-weight: 700;
    color: #E7EEDB;
`

export const H2 = styled.h1`
    font-weight: 500;
    font-size: 25px;
    color: #E7EEDB;
    margin-bottom: 2rem;
`
export const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
    margin-bottom: 2rem;

    @media screen and (max-width: 1450px){
        grid-template-columns: 1fr 1fr;
        gap: 0.5rem;
    }

    @media screen and (max-width: 865px){
        grid-template-columns: 1fr;
        gap: 0.5rem;
    }

`
export const Card = styled.div`
    display: flex; 
    margin: auto;

    &.unequipped{
        opacity: 35%;
    }
`
