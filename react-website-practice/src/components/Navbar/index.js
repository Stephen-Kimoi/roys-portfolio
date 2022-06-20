import React from "react"; 
import { FaBars } from "react-icons/fa"; 
import { 
    Nav, 
    NavbarContainer, 
    Navlogo, 
    MobileIcon,
    NavItem, 
    NavMenu, 
    NavLinks, 
    NavBtn, 
    NavBtnLink
}   from './NavbarElements'; 

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                   <Navlogo to="/">sk_solutions</Navlogo> 
                   <MobileIcon onClick={ toggle }>
                       <FaBars /> 
                   </MobileIcon> 
                   <NavMenu>
                       <NavItem>
                           <NavLinks to="about">About</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to="discover">Discover</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to="services">Services</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to="connect">Connect</NavLinks>
                       </NavItem>
                   </NavMenu> 
                   <NavBtn>
                       <NavBtnLink to="/signin">Sign in</NavBtnLink>
                   </NavBtn>
                </NavbarContainer>
            </Nav>

        </>
    )
}

export default Navbar;