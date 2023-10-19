import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import PopOver from '../PopOver/PopOver';
import { useAppContext } from '../../../context';


const NavBar = () => {
    const { state: { user } } = useAppContext()
    const [isSticky, setSticky] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, [])

    const scrollTop = () => window['scrollTo']({ top: 0, behavior: 'smooth' });
    return (
        <Navbar className={`navbar navbar-expand-lg navbar-light ${isSticky ? "navStyle" : "navDefault"}`} expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/" onClick={scrollTop} className="navBrn"/>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto mainNav" activeKey="/home">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" className="nav-link" onClick={() => window['scrollTo']({ top: 0, behavior: 'smooth' })}>Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#about" className="nav-link">About</Nav.Link>
                        </Nav.Item>
                        {/*<Nav.Item>
                            <Nav.Link href="#approach" className="nav-link">Approach</Nav.Link>
                        </Nav.Item>*/}
                        <Nav.Item>
                            <Nav.Link href="#team" className="nav-link">Team</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#contact" className="nav-link">Contact</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/dashboard/profile" className="nav-link">Platform</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            {
                                user.email ?
                                    <div>
                                        <PopOver />
                                    </div> :
                                    <Link to="/login">
                                        <button className="loginBtn">Login</button>
                                    </Link>
                            }
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;