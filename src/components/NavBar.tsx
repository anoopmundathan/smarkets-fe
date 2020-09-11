import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

interface NavBarProps {
  children: React.ReactNode
}

const NavBar: React.FC<NavBarProps> = ({ children }) => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">{children}</Navbar.Brand>
  </Navbar>
)

export default NavBar
