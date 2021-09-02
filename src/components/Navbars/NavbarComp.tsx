import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './NavbarComp.css'

export const NavbarComp:React.FC = ()=> {
    return (
        <Navbar bg='dark'>
            <Container>
            <Link className='link' to='/'><Navbar.Brand style={{color:'#fff'}}>Raju Medicals</Navbar.Brand></Link>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text style={{color:'#fff'}}>
                        Signed in as: <a href="#login" style={{color:'#fff'}}>Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
