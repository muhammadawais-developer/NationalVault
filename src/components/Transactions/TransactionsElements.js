import styled from "styled-components";
import '../../assets/fonts.css';

// const card_border_radius = 2;
// const border_radius_1 = 0.4;
// const border_radius_2 = 0.8;
// const border_radius_3 = 1.2;
// const card_padding = 1.8;
// const padding_1 = 1.2;
// box_shadow = 0.2rem 3rem rgba(132, 139, 200, 0.18) 

//transactions (main)

export const Main = styled.main`
    background: #121212;
    padding: 1.8rem 0.5rem 0 1rem;

    @media screen and (max-width: 768px){
        padding: 0 1rem;
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

export const Date = styled.div`
    font-size: 1rem;
    color: #F2ECFF;
`

export const Insights = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    width: 95%;

    @media screen and (max-width: 1200px){
        width: 92%;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
    }

    @media screen and (max-width: 768px){
        width: 100%;
        grid-template-columns: 1fr;
        grid-gap: 0;
    }
`
export const InsightWrapper = styled.div`
    background: #2F3135;
    display: block;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem; /*0.5rem*/
    margin-top: 0.5rem;
    transition: all 300ms ease; 
`

export const InsMiddle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const InsLeft = styled.div`
    background: transparent;
    color: #F2ECFF;
`

export const InsTitle = styled.h3`
    margin: 0.5rem 0 0.6rem;
    font-size: 0.87rem;
`

export const InsAmount = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;

    @media screen and (max-width: 480px){
        font-size: 0.8rem;
    }
`

export const InsProgress = styled.div`
    position: relative;
    width: 92px;
    height: 92px;
    border-radius: 50%;
    margin-bottom: 0.65rem;

    @media screen and (max-width: 768px){
        width: 150px;
    }
`
export const ProgImg = styled.svg`
    width: 10rem;
    height: 10rem;
    transform: rotate(-90deg);
`
export const Circle = styled.circle`
    fill: none;
    stroke: #01BF71;
    stroke-width: 10;
    margin-bottom: 0;
    /*box-shadow: 10px 10px rgba(1, 191, 113, 0.5);*/
    transform: translate(70px, 15px);
    /*stroke-linecap: round;*/

    &.antimask{
        stroke: rgba(0,0,0,0.25);
    }

    &.total{
        stroke-dasharray: 100;
        stroke-dashoffset: 19;
    }

    &.withdrawal{
        stroke-dasharray: 100;
        stroke-dashoffset: 70;
    }

    &.deposit{
        stroke-dasharray: 100;
        stroke-dashoffset: 4;
    }

    &.accural{
        stroke-dasharray: 100;
        stroke-dashoffset: 50;
    }

    @media screen and (max-width: 768px){
        transform: translate(70px, 45px);
    }
`

export const InsProgressNumber = styled.div`
    position: absolute;
    top: 5px;
    left: 8px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    color: #01BF71;

    &.long{
        font-size: 0.8rem;
    }
` 

export const Stamp = styled.small`
    margin-top: 0;
    display: block;
    font-size: 0.8rem;
    color: #fff;
    opacity: 40%;
`

//Recent Transactions (main)

export const RecentTransaction = styled.div`
    margin: 2rem 0;
    width: 95%;

    @media screen and (max-width: 1200px){
        width: 92%;
    }

    @media screen and (max-width: 768px){
        position: relative;
        margin: 3rem 0 0 0;
        width: 100%;
    }
`
export const H2 = styled.h2`
    color: #E7EEDB;
    margin-bottom: 0.8rem;
`
export const TxTable = styled.table`
    background: #2F3135;
    width: 99.9%;
    border-radius: 0.5rem;
    padding: 1.8rem;
    text-align: center;
    transition: all 300ms ease;

    @media screen and (max-width: 768px){
        position: relative;
        width: 100%;
        margin: 0 0 2rem 0;
    }
`
export const TxTHead = styled.thead`
    color: #E7EEDB;
    border: none;
`
export const TxTTh = styled.th`
    font-weight: 700;

    @media screen and (max-width: 768px){
        &:nth-child(5), &:first-child{
            display: none;
        }
    }
`
export const TxTBody  = styled.tbody`
    font-size: 0.9rem;
    border: none;
`
export const TxTTd = styled.td`
    font-size: 0.9rem;
    height: 2.5rem;
    border-bottom: 1px solid grey;
    color: #F2ECFF;
    
    @media screen and (max-width: 768px){
        font-size: 0.8rem;
        &:nth-child(5), &:first-child{
            display: none;
        }
    }
`
export const TxTTr = styled.tr`
    border: none;
    padding: 0 5px; 
`