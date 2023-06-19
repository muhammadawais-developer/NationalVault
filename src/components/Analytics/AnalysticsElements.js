import styled from "styled-components";
import {Link} from "react-router-dom";
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
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;

    @media screen and (max-width: 1200px){
        grid-template-columns: 1fr;
        gap: 0;
    }
`
export const InsightWrapper = styled.div`
    background: #2F3135;
    padding: 1rem;
    border-radius: 0.5rem; /*0.5rem*/
    margin-top: 1rem;
    transition: all 300ms ease; 
`

export const InsIcon = styled.span`
    background: #transparent;
    color: #01bf71;
    font-size: 2.5rem;
    margin-bottom: 0;
`

export const InsMiddle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const InsLeft = styled.div`
    background: transparent;
    margin-right: 10px;
    color: #F2ECFF;
`

export const InsTitle = styled.h3`
    margin: 1rem 0 0.6rem;
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

    @media screen and (max-width: 768px){
        width: 150px;
    }
`
export const ProgImg = styled.svg`
    transform: rotate(-90deg);
    width: 10rem;
    height: 10rem;
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


    &.balance{
        stroke-dasharray: 100;
        stroke-dashoffset: 19;
    }

    &.expenses{
        stroke-dasharray: 100;
        stroke-dashoffset: 70;
    }

    &.savings{
        stroke-dasharray: 100;
        stroke-dashoffset: 84;
    }

    @media screen and (max-width: 768px){
        transform: translate(70px, 45px);
    }
`

export const InsProgressNumber = styled.div`
    position: absolute;
    top: 5px;
    left: 10px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    color: #01BF71;
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
    margin-top: 2rem;

    /*@media screen and (max-width: 1200px){
        width: 94%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        margin: 2rem 0 0 4.4rem;
    }*/

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
    width: 100%;
    border-radius: 0.5rem;
    padding: 1.8rem;
    text-align: center;
    transition: all 300ms ease;

    @media screen and (max-width: 1200px){
        position: absolute;
        width: 85%;
        margin: 0;
    }

    @media screen and (max-width: 768px){
        width: 100%;
        margin: 0;
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
export const Collapsable = styled(Link)`
    text-align: center;
    display: block;
    margin: 0.5rem auto;  
    color:  #F2ECFF;
    transition: 0.2s all ease-in-out;

    &:hover{
        color: #01BF71;
        transition: 300ms all ease-in-out;
        font-weight: 700;
        text-decoration: none;
    }
`
//Right (section)

export const SectionRight = styled.div`
    background: #121212;
    padding: 2.65rem 1rem 0 1rem;
    transition: all 0.3s ease;

    @media screen and (max-width: 768px){
        padding: 16.5rem 1rem 1rem 1rem;
    }
`
export const SectionTop = styled.div`
    justify-content: end;
    gap: 2rem;
    margin: 2.2rem 0 1rem 0;
    color: #F2ECFF;
    background: transparent;

    @media screen and (max-width: 768px){
       display: none;
    }
`
export const Profile = styled.div`
    display: flex;
    gap: 2rem;
`
export const Info = styled.div`
    font-size: 1rem;
    font-weight: bold;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const Pfp = styled.img`
    display: none;
`

export const RecentAnalytics = styled.div`
    margin-top: 1.5rem;
    border: none;
    width: 55%;

    @media screen and (max-width: 1200px){
        width: 95%;
    }
`
export const AnalyticsWrapper = styled.div`
    background: #2F3135;
    padding: 0.8rem;
    border-radius: 0.5rem;
    margin-bottom: 0.7rem;
    transition: all 300ms ease;
`
export const Analytic = styled.div`
    background: rgba(0,0,0,0.25);
    color: #01BF71;
    padding: 0.1rem 1.2rem 0.1rem 0.4rem;
    align-content: center;
    border-radius: 0.3rem;
    display: grid;
    grid-template-columns: auto repeat(4, 1rem);
    gap: 1.1rem;
    margin-bottom: 0.2rem;
    transition: all 200ms ease-in-out;
`
export const Month = styled.b`
    font-size: 1rem;
    font-weight: 600;
    color: #F2ECFF;
`
export const Value = styled.p`
    font-size: 0.8rem;
    font-weight: 300;
    color: ${({neg}) => (neg ? 'red' : '#01BF71')};
`

export const Graph = styled.div`
    background: #2F3135;
    position: relative;
    border-radius: 0.5rem;
    /*top: 2.5rem;*/
    transition: all 0.2s ease-in-out;
    padding: 0.2rem 0.4rem 0.2rem 0.4rem;
    margin-top: 3rem;
    width: 55%;



    @media screen and (max-width: 1200px){
        max-width: 100%;
        display: block;
        width:95%;
        height: auto;
    } 

`
