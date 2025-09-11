import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'

const NavBar = ({setCategories}) => {
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
            <Navbar.Brand href="">
                <Badge bg='danger'className='p-2'>News App</Badge>
            </Navbar.Brand>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
           
            <Nav.Link onClick={()=>setCategories('business')} >Business</Nav.Link>
            <Nav.Link onClick={()=>setCategories('sports')} >Sports</Nav.Link>
             <Nav.Link onClick={()=>setCategories('entertainment')}>Entertainment</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
