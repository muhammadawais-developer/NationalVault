import React, {useState} from 'react';

import {FaTimes, FaBars} from "react-icons/fa";
import {MdPayments} from "react-icons/md";
import {BsFillGrid1X2Fill, BsCashCoin} from "react-icons/bs";
import {VscGraph} from "react-icons/vsc";
import {TbExchange, TbLogout} from "react-icons/tb";

import {AsideWrapper, AsideTop, Top, Logo, CloseBtn, MenuBtn, Sidebar, SidebarItem, SidebarIcon, H3} from "./AsideElements";

const Aside = (item) => {
    const [isOpen, setisOpen] = useState(true);
    const toggle = () => {
        setisOpen(!isOpen);
    }

  return (
    <>
        <AsideTop>
            <MenuBtn onClick={toggle}> <FaBars/> </MenuBtn>
            <Logo className='logo'>National Vault</Logo>
        </AsideTop>

        <AsideWrapper isOpen={!isOpen}>
            <Top>
              <Logo>National Vault</Logo>
              <CloseBtn onClick={toggle}> <FaTimes/> </CloseBtn>
            </Top>
            <Sidebar>
              <SidebarItem to="/dashboard" id='dashboard'> 
                <SidebarIcon>
                  <BsFillGrid1X2Fill/>
                </SidebarIcon>
                <H3>Dashboard</H3>
              </SidebarItem>
              <SidebarItem to='/transactions' id='transactions'> 
                <SidebarIcon>
                  <TbExchange/>
                </SidebarIcon>
                <H3>Transations</H3>
              </SidebarItem>
              <SidebarItem to="/analytics" id='analytics'> 
                <SidebarIcon>
                    <VscGraph/>
                </SidebarIcon>
                <H3>Analytics</H3>
              </SidebarItem>
              <SidebarItem to="/subcriptions" id='cards'> 
                <SidebarIcon>
                  <MdPayments/>
                </SidebarIcon>
                <H3>Subcriptions</H3>
              </SidebarItem>
              <SidebarItem to="/incomes" id='incomes'> 
                <SidebarIcon>
                  <BsCashCoin/>
                </SidebarIcon>
                <H3>Incomes</H3>
              </SidebarItem>
              <SidebarItem to="/" onClick={toggle}> 
                <SidebarIcon>
                  <TbLogout/>
                </SidebarIcon>
                <H3>Sign Out</H3>
              </SidebarItem>
            </Sidebar>
          </AsideWrapper>
    </>  
  )
}
export default Aside