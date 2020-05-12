import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'



function Header(){
  return(
    <div>
     
     <Navbar bg="light" variant="light" className="p-1">
    <Navbar.Brand href="#home"><h2>ShortLink</h2></Navbar.Brand>
    <Nav className="mr-auto ">
      <Nav.Link href="https://rapidapi.com/BigLobster/api/url-shortener-service">Api</Nav.Link>
      <Nav.Link href="https://akshays-repo.github.io/akshay/index.html">About me</Nav.Link>
    </Nav>
    </Navbar>
  </div>
    
  )
}
export default Header;


