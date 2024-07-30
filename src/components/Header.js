import React from 'react'
import { Container,Row, Nav, Navbar } from 'react-bootstrap'

function Header() {
  return (
    <header>
      <header>
    <Navbar variant='dark'  expand="lg" className="bg-body-tertiary" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">Proshop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/cart"> <i className='fas fa-shopping-cart'></i> cart</Nav.Link>
            <Nav.Link href="/Login"> <i className='fas fa-user'></i>  Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </header>
    </header>
  )
}

export default Header
