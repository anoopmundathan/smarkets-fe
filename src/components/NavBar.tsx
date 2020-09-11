import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

interface NavBarProps {
  children: React.ReactNode
}

const NavBar: React.FC<NavBarProps> = ({ children }) => (
  <Navbar style={{ background: '#000' }}>
    <Navbar.Brand href="#home">{children}</Navbar.Brand>
  </Navbar>
)

export default NavBar
