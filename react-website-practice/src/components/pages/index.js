import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import Hero from '../Hero';
import InfoSection from '../InfoSection'
import { homeObjOne, homeObjThree, homeObjTwo } from '../InfoSection/Data';
import Services from '../Services';

const Home = () => { 
  const [ isOpen, setIsOpen ] = useState(false); 

  const toggle = () => {
    setIsOpen(!isOpen) 
  } 
     
  return (
    <>
       <Sidebar isOpen={isOpen} toggle={toggle}/> 
       <Navbar toggle={toggle}/> 
       <Hero /> 
       <InfoSection {...homeObjOne}/> 
       <InfoSection {...homeObjTwo} /> 
       <Services />
       <InfoSection {...homeObjThree} />
    </>
  )
}

export default Home