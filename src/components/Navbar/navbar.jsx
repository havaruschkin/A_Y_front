import React from 'react';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

function NavbarHead () {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href='/'>Главная</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#features">Ссылка куда-то</Nav.Link>
                    <Nav.Link href="#pricing">Ещё одна ссылка</Nav.Link>
                    <NavDropdown title="Менюха" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Жмяк</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Тись</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Не нажимай!</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="#action/3.4">Где детанатор?</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">Вход</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarHead;