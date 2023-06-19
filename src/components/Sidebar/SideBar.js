import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarRoute,SidebarMenu, SidebarWrap } from './SideBarItems';

const SideBar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to='/' onClick={toggle}>Home</SidebarLink>
            <SidebarLink to='dashboard' onClick={toggle}>Dashboard</SidebarLink>
            <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
            <SidebarLink to='services' onClick={toggle}>Services</SidebarLink>
            <SidebarLink to='careers' onClick={toggle}>Careers</SidebarLink>
          </SidebarMenu>
          <SidebarWrap>
            <SidebarRoute to='signin'>Sign In</SidebarRoute>
          </SidebarWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default SideBar