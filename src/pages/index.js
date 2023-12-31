import React, {useState} from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import NavBar from '../components/Navbar/index';
import Services from '../components/Services';
import SideBar from '../components/Sidebar/SideBar';

const Home = () => {
    const [isOpen, setisOpen] = useState(false)
    const toggle = () => {
        setisOpen(!isOpen)
    }

  return (
    <>
        <SideBar isOpen={isOpen} toggle={toggle}/>
        <NavBar toggle={toggle}/>
        <HeroSection/>
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <Services/>
        <InfoSection {...homeObjThree}/>
        <Footer/>
    </>
  )
}

export default Home;