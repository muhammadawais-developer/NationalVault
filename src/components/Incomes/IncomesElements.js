import styled from "styled-components";
import '../../assets/fonts.css';

// const card_border_radius = 2;
// const border_radius_1 = 0.4;
// const border_radius_2 = 0.8;
// const border_radius_3 = 1.2;
// const card_padding = 1.8;
// const padding_1 = 1.2;
// box_shadow = 0.2rem 3rem rgba(132, 139, 200, 0.18) 

//Dashboard (main)

export const Main = styled.main`
    background: #121212;
    padding: 1.8rem 0.5rem 1rem 1rem;

    @media screen and (max-width: 768px){
        padding: 0 1rem 1rem 1rem;
    }

`
export const MainTop = styled.div`
    display: grid;
    grid-template-columns: auto 10rem;
    gap: 1.6rem;

    @media screen and (max-width: 768px){
        display: block;
        gap: 0;
    }
`

export const H1 = styled.h1`
    font-weight: 700;
    color: #E7EEDB;
`
export const H2 = styled.h1`
    font-weight: 500;
    color: #E7EEDB;
    margin-top: 1rem;
    font-size: 30px;
`

export const Plans = styled.div`
    border: none;
    margin: auto;
`

//Right (section)
export const Accurals = styled.div`
    background: #2F3135;
    padding: 0.8rem;
    height: 40vh;
    border-radius: 0.5rem;
    transition: all 300ms ease;
    overflow: auto;

    @media screen and (max-width: 768px){
        height: 30vh;
    }

    ::-webkit-scrollbar {
        width: 10px;
    }
    
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
        border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb {
        background: #01bf71;
        border-radius: 4px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
        background: 01bf72; 
    }
`
export const Accural = styled.div`
    background: rgba(0,0,0,0.25);
    color: #01BF71;
    font-size: 1.2rem;
    text-align: center;
    padding: 0.2rem;
    align-content: center;
    border-radius: 0.3rem;
    display: grid;
    grid-template-columns: repeat(3, 0.4fr);
    gap: 0.5rem;
    margin-bottom: 0.2rem;
    transition: all 200ms ease-in-out;

    &:first-child{
        background: transparent;
    }

    @media screen and (max-width: 768px){
        font-size: 1rem;
    }
`
export const Date = styled.p`
    font-weight: 400;
    color: #F2ECFF;
`

export const Amount = styled.b`
    font-weight: 600;
    color: #F2ECFF;
`

export const Rate = styled.p`
    font-weight: 400;
    color: ${({neg}) => (neg ? 'red' : '#01bf71')};
`
