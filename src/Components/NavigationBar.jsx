import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

export default function NavigationBar() {

    return (
        <Navbar expand="lg" className="bg-body-tertiary sticky-top">

            <Container>

                <LinkContainer to="/">
                    <Navbar.Brand>
                        <img
                            alt=""
                            src="/images/logo.png"
                            width="auto"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        {' '}
                        <span className='text-blue fw-bold text-decoration-underline'>Hanspaulské Stavitelství</span>
                    </Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto">

                        {/* <LinkContainer to="/">
                            <Nav.Link>Domů</Nav.Link>
                        </LinkContainer> */}

                        <LinkContainer to="/reference">
                            <Nav.Link>Reference</Nav.Link>
                        </LinkContainer>


                        <NavDropdown title="Co vše pro Vás zajistíme" id="basic-nav-dropdown">

                            <LinkContainer to="/stavby">
                                <NavDropdown.Item href="">
                                    Provádění Staveb
                                </NavDropdown.Item>
                            </LinkContainer>

                            <LinkContainer to="/projekty-rodinnych-domu">
                                <NavDropdown.Item href="">
                                    Projekty Rodinných Domů
                                </NavDropdown.Item>
                            </LinkContainer>

                            <LinkContainer to="/inzenyrska-cinnost">
                                <NavDropdown.Item href="">
                                    Inženýrská Činnost
                                </NavDropdown.Item>
                            </LinkContainer>

                            <LinkContainer to="/projekcni-kancelar">
                                <NavDropdown.Item href="">
                                    Projektové Práce
                                </NavDropdown.Item>
                            </LinkContainer>

                            {/* <LinkContainer to="/hypoteka">
                                <NavDropdown.Item href="">
                                    Hypotéka
                                </NavDropdown.Item>
                            </LinkContainer> */}

                            <LinkContainer to="/reality">
                                <NavDropdown.Item href="">
                                    Reality
                                </NavDropdown.Item>
                            </LinkContainer>

                        </NavDropdown>

                    </Nav>

                    <Nav>
                        <LinkContainer to="/kontakty">
                            <Nav.Link>Kontakt</Nav.Link>
                        </LinkContainer>

                    </Nav>

                </Navbar.Collapse>

            </Container>

        </Navbar>
    );
}