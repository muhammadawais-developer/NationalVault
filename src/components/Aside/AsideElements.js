import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const AsideTop = styled.div`
    display: none;
    
    @media screen and (max-width: 768px){  
        background: #2F3135;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1 rem;
        position: sticky;
        padding: 0.8rem 0;
        top: 0;
        z-index: ${({isOpen}) => (isOpen ? '10' : '3')};
    }
`

export const AsideWrapper = styled.aside`
    height: auto;
    background: #2F3135;
    transition: all 300ms ease-in-out;

    @media screen and (max-width: 1200px){
        transition: all 300ms ease-in-out;
    }

    @media screen and (max-width: 768px){
        position: fixed;
        height: 100%;
        top: 0;
        left: 0;
        width: 17rem;
        z-index: 3;
        transition: all 400ms ease-in-out;
        opacity: ${({isOpen}) => (isOpen ? '99.5%' : '0')};
        left: ${({isOpen}) => (isOpen ? '0' : '-100%')}; 
    }
`

//Sidebar(aside)

export const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.8rem;
    color: #01bf71;
    padding-left: 15px;
`

export const Logo = styled.div`
    font-size: 2rem;
    align-content: center;
    font-weight: 700;
    display: flex;
    gap: 0.8rem;

    @media screen and (max-width: 1200px){
        display: none;
    }

    @media screen and (max-width: 768px){
        &.logo{
            color: #01bf71;
            display: flex;
        }
    }
`

export const CloseBtn = styled.button`
    display: none;
    border: none;

    @media screen and (max-width: 768px){
        display: flex;
        cursor: pointer;
        margin: 1px 0 0 210px;
        background: transparent;
        color: #fff;
        font-size: 2.2rem;
        outline: none;
        transition: all 300ms ease-in-out;

        &:hover{
            color: #01BF71;
            transition: all 300ms ease-in-out;
        }
    }
`

export const MenuBtn = styled.button`
    display: none;
    border: none;

    @media screen and (max-width: 768px){
        display: ${({isOpen}) => (isOpen ? 'none' : 'flex')};
        cursor: pointer;
        background: transparent;
        position: absolute;
        left: 20px;
        color: #fff;
        font-size: 2rem;
        outline: none;
        transition: all 300ms ease-in-out;

        &:hover{
            color: #01BF71;
            transition: all 300ms ease-in-out;
        }
    }
`
export const Sidebar = styled.div`
    backgroud: #F0FCF4;
    display: flex;
    flex-direction: column;
    height: 86vh;
    position: relative;
    top: 2rem;
`

export const H3 = styled.h3`
    font-weight: 500;
    margin-left: 0.5rem;

    @media screen and (max-width: 1200px){
        display: none;
    }

    @media screen and (max-width: 768px){
        display: inline;
    }
`

export const SidebarItem = styled(Link)`
    display: flex;
    color: #F2ECFF;
    text-decoration: none;
    margin-left: 2rem;
    gap: 1rem;
    align-items: center;
    position: relative;
    height: 3.7rem;
    transition: all 300ms ease;

    &:last-child{
        position: absolute;
        bottom: 5rem;
        width: 100%;
    }

    &:hover{
        color: #01bf71;
        margin-left: 1rem;
    }

    &.active{
        background: #01BF71;
        color: #fff;
        padding-left: 6px;
        margin-left: 0;
    }

    @media screen and (max-width: 1200px){
        width: 5.6rem;

        &:last-child{
            position: absolute;
            bottom: 11rem;
        }

        &.active{
            padding-left: 2rem;
        }
    }

    @media screen and (max-width: 768px){
        width: 100%;
        height: 3.4rem;

        &:last-child{
            position: absolute;
            bottom: 5rem;
        }

        &.active{
            padding-left: 2rem;
        }
    }
`

export const SidebarIcon = styled.span`
    font-size: 1.6rem;
`