import React from 'react';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from 'react-router-dom';

const NavbarHead = ({user}) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand to='/'>Главная</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink className="nav-item nav-link" to="/">Ссылка куда-то</NavLink>
                    {user && (<NavLink className="nav-item nav-link" to="/">Ещё одна ссылка</NavLink>)}
                    <NavDropdown title="Менюха" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Жмяк</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Тись</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Не нажимай!</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="#action/3.4">Где детанатор?</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    {!user && (
                        <NavLink className="nav-item nav-link" to="/login">Вход</NavLink>
                    )}
                    {user && (
                        <NavLink className="nav-item nav-link" to="/logout" style={{color: "red"}}>
                            Выход
                        </NavLink>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarHead;