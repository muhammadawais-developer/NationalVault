import React /*,{useEffect, useState}*/ from 'react'
import {FaBars} from 'react-icons/fa';
//import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItems, NavLinks, NavBtn, NavBtnLink} from './Navbar.js'

const Navbar = ({toggle}) => {

  /*const [scrollNav, setScrollNav] = useState(false)
  const changeNav = () => {
    if(window.scrollY >= 80){
      setScrollNav(true);
    }
    else{
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])*/

  return (
    <>
      <Nav /*scrollNav={scrollNav}*/>
        <NavbarContainer>
          <NavLogo to='/'>National Vault</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars/>
          </MobileIcon>
          <NavMenu>
            <NavItems>
              <NavLinks to='/'>Home</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to='dashboard'>Dashboard</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to='about'>About</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to='services'>Services</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to='careers'>Careers</NavLinks>
            </NavItems>
            <NavBtn>
              <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar