import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = (props) => {


    const auth = useSelector(state => state.auth);

    const renderLogedInLinks = () => {
        return (
            <Nav>
                <li className='nav-item'>
                    <span className="nav-link">Signout</span>
                </li>
            </Nav>);
    }
    const renderNonLogedInLinks = () => {
        return (
            <Nav>
                <li className='nav-item'>
                    <NavLink to="/signin" className="nav-link">Signin</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to="/signup" className='nav-link'>Signup</NavLink>
                </li>
            </Nav>);
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ zIndex: 1 }}>
                <Container fluid>
                    {/* <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand> */}
                    <Link to="/" className='navbar-brand'>Admin DashBoard</Link>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        {/* <Nav>
                         
                            <li className='nav-item'>
                                <NavLink to="/signin" className="nav-link">Signin</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to="/signup" className='nav-link'>Signup</NavLink>
                            </li>
                        </Nav> */}
                        {auth.authenticate ? renderLogedInLinks():renderNonLogedInLinks()}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
