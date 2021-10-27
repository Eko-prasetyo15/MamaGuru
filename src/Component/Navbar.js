import React from "react"
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import history from "../history";
const Header = () => {
    let id = localStorage.getItem('id')

    const Logout = () => {
        localStorage.removeItem('id');
        history.push('/')
    }
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Link to="/">
                        <Navbar.Brand>
                            <img alt="" src="http://portal-dev.ap-southeast-1.elasticbeanstalk.com/logo_full.png" width="100" height="60" className="d-inline-block align-top" />
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {!id ? (
                                <Link to="/login" data-rb-event-key="/login" className="nav-link">
                                    <Navbar.Text >Login</Navbar.Text>
                                </Link>
                            ) : (
                                <>
                                    <Link to="/report" data-rb-event-key="/login" className="nav-link">
                                        <Navbar.Text style={{ verticalAlign: 'middle' }}>
                                            Report
                                        </Navbar.Text>
                                    </Link>
                                    <Link to="/offers" data-rb-event-key="/offers" className="nav-link">
                                        <Navbar.Text style={{ verticalAlign: 'middle' }}>
                                            Offer
                                        </Navbar.Text>
                                    </Link>
                                    <Link to="/payment" data-rb-event-key="/payment" className="nav-link">
                                        <Navbar.Text style={{ verticalAlign: 'middle' }}>
                                            Payment
                                        </Navbar.Text>
                                    </Link>
                                    <Link to="/settings" data-rb-event-key="/settings" className="nav-link">
                                        <Navbar.Text style={{ verticalAlign: 'middle' }}>
                                            Settings
                                        </Navbar.Text>
                                    </Link>
                                    <Link to="/" data-rb-event-key="/" className="nav-link">
                                        <Navbar.Text style={{ verticalAlign: 'middle' }} onClick={Logout}>
                                            Logout
                                        </Navbar.Text>
                                    </Link>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default Header