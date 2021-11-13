import React, { useState, useEffect } from "react";
import Style from "./Navbar.module.css";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";
import db, { provider } from "../../firebase";
import Google_svg from "./Google_svg";
import "./Navbar.css";
import brand from "./Brand_icon.svg";

import {
    Container,
    Row,
    Col,
    Navbar,
    Nav,
    Modal,
    Form,
    Button,
} from "react-bootstrap";

const auth = getAuth();
function NavBar({ user }) {
    console.log("The user present is ", user);

    return (
        <>
            <Navbar
                id="main_navbar"
                sticky="top"
                expand="lg"
                bg="light"
                className={`${Style.main_navbar}`}
            >
                <Navbar.Brand href="/">
                    <img src={brand} className="_logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav
                        className="n"
                        style={{ alignItems: `center`, width: `100%` }}
                        id="nav-cont"
                    >
                        <Nav.Link
                            href="#"
                            className={`${Style.n2} ms-auto`}
                            id="left"
                        >
                            Login
                        </Nav.Link>

                        <Nav.Link
                            href="#"
                            className={`${Style.n2} ms-auto`}
                            id="left"
                        >
                            <i>Register</i>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default NavBar;
