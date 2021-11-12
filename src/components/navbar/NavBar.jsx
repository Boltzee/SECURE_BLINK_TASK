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

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [validated, setValidated] = useState(false);
    const [validated2, setValidated2] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
        } else {
            event.preventDefault();
            credentialSignIn(event);
        }
    };
    const handleSubmit2 = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated2(true);
        } else {
            event.preventDefault();
            credentialSignUp(event);
        }
    };

    const dualEvent = () => {
        handleClose();
        handleShow2();
    };

    const dualEvent2 = () => {
        handleClose2();
        handleShow();
    };

    const signup = async (e) => {
        e.preventDefault();

        signInWithPopup(auth, provider)
            .then((result) => {
                const credential =
                    GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential =
                    GoogleAuthProvider.credentialFromError(error);
            });
    };

    const credentialSignIn = (e) => {
        const email = document.getElementById("email").value;
        const pass = document.getElementById("password").value;
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                document.getElementById("email").value = "";
                document.getElementById("password").value = "";
                handleClose();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    };

    const credentialSignUp = (e) => {
        const email = document.getElementById("email2").value;
        const pass = document.getElementById("password2").value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const name = document.getElementById("name8").value;
                db.collection("users").doc(userCredential.user.uid).set({
                    name: name,
                    email: email,
                    password: pass,
                });
                document.getElementById("name8").value = "";
                document.getElementById("email2").value = "";
                document.getElementById("password2").value = "";
                handleClose2();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    };

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
                        {user ? (
                            <Cart instinct2={instinct2} instinct6={instinct6} />
                        ) : (
                            ""
                        )}
                        {!user ? (
                            <Nav.Link
                                href="#"
                                onClick={handleShow}
                                className={`${Style.n2} ms-auto`}
                                id="left"
                            >
                                Login
                            </Nav.Link>
                        ) : (
                            <SignOut />
                        )}
                        {!user ? (
                            <Nav.Link
                                href="#"
                                onClick={handleShow}
                                className={`${Style.n2} ms-auto`}
                                id="left"
                            >
                                <i>Register</i>
                            </Nav.Link>
                        ) : (
                            <SignOut />
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <div className="login-prompt">
                        <h1
                            style={{ color: `#20303c` }}
                            className="header-login"
                        >
                            Log In
                        </h1>
                        <br />

                        <div>
                            Don't have an account?{" "}
                            <span
                                onClick={dualEvent}
                                style={{ color: `#3483ff`, cursor: `pointer` }}
                            >
                                Sign up
                            </span>
                        </div>
                    </div>
                    <div className="container-google">
                        <a
                            href="#"
                            onClick={(e) => {
                                signup(e);
                                handleClose();
                            }}
                            className="btn btn-outline-dark google-button"
                        >
                            <Google_svg />
                            <div className="login-with-google">
                                Login with Google
                            </div>
                        </a>
                    </div>
                    <Form
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}
                    >
                        <Row>
                            <Form.Group
                                controlId="validationCustom01"
                                className="input-container"
                            >
                                <Form.Control
                                    id="email"
                                    className="input-field"
                                    type="text"
                                    placeholder="Email"
                                    name="email"
                                    style={{ color: `black` }}
                                    required
                                />
                                <Form.Control.Feedback className="feedback">
                                    Looks good!
                                </Form.Control.Feedback>
                                <Form.Control.Feedback
                                    type="invalid"
                                    className="feedback"
                                >
                                    Please provide a valid email.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group
                                controlId="validationCustom04"
                                className="input-container"
                                style={{ marginTop: `0.6rem` }}
                            >
                                <Form.Control
                                    id="password"
                                    className="input-field"
                                    type="password"
                                    placeholder="Password"
                                    name="psw"
                                    style={{ color: `black` }}
                                    required
                                />
                                <Form.Control.Feedback
                                    type="invalid"
                                    className="feedback"
                                >
                                    Please provide a valid password.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <div
                            className="login_forgot"
                            style={{ marginTop: `-0.2rem` }}
                        >
                            <Button
                                outline
                                rounded
                                className="login-btn-submit"
                                type="submit"
                                style={{ margin: `0.2rem` }}
                            >
                                Log In
                            </Button>
                        </div>
                    </Form>
                    <div className="divider"></div>
                    <div></div>
                    <div className="terms">
                        * By logging in, you agree to our{" "}
                        <span style={{ color: `#3483ff` }}>Terms of Use</span>{" "}
                        and to receive HotelX emails & updates and acknowledge
                        that you read our{" "}
                        <span style={{ color: `#3483ff` }}>Privacy Policy</span>
                        .
                    </div>
                </Modal.Body>
            </Modal>

            <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <div className="login-prompt">
                        <h1
                            style={{ color: `#20303c` }}
                            className="header-login"
                        >
                            Sign Up
                        </h1>
                        <br />
                        <div>
                            Already have an account?{" "}
                            <span
                                onClick={dualEvent2}
                                style={{ color: `#3483ff`, cursor: `pointer` }}
                            >
                                Log In
                            </span>
                        </div>
                    </div>
                    <div className="container-google">
                        <a
                            href="#"
                            onClick={(e) => {
                                signup(e);
                                handleClose2();
                            }}
                            className="btn btn-outline-dark google-button"
                        >
                            <Google_svg />
                            <div className="login-with-google">
                                Continue with Google
                            </div>
                        </a>
                    </div>
                    <Form
                        noValidate
                        validated={validated2}
                        onSubmit={handleSubmit2}
                    >
                        <Row>
                            <Form.Group
                                controlId="validationCustom01"
                                className="input-container"
                            >
                                <Form.Control
                                    id="name8"
                                    className="input-field"
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    style={{ color: `black` }}
                                    required
                                />
                                <Form.Control.Feedback className="feedback">
                                    Looks good!
                                </Form.Control.Feedback>
                                <Form.Control.Feedback
                                    type="invalid"
                                    className="feedback"
                                >
                                    Please provide a valid name.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group
                                controlId="validationCustom02"
                                className="input-container"
                                style={{ marginTop: `0.6rem` }}
                            >
                                <Form.Control
                                    id="email2"
                                    className="input-field"
                                    type="text"
                                    placeholder="Email"
                                    name="email"
                                    style={{ color: `black` }}
                                    required
                                />
                                <Form.Control.Feedback className="feedback">
                                    Looks good!
                                </Form.Control.Feedback>
                                <Form.Control.Feedback
                                    type="invalid"
                                    className="feedback"
                                >
                                    Please provide a valid email.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group
                                controlId="validationCustom04"
                                className="input-container"
                                style={{ marginTop: `0.6rem` }}
                            >
                                <Form.Control
                                    id="password2"
                                    className="input-field"
                                    type="password"
                                    placeholder="Password"
                                    name="psw"
                                    style={{ color: `black` }}
                                    required
                                />
                                <Form.Control.Feedback
                                    type="invalid"
                                    className="feedback"
                                >
                                    Please provide a valid password.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Button
                            variant="outline-primary"
                            className="login-btn-submit"
                            type="submit"
                        >
                            Sign Up
                        </Button>
                    </Form>
                    <div className="divider"></div>
                    <div className="terms">
                        * By logging in, you agree to our{" "}
                        <span style={{ color: `#3483ff` }}>Terms of Use</span>{" "}
                        and to receive HotelX emails & updates and acknowledge
                        that you read our{" "}
                        <span style={{ color: `#3483ff` }}>Privacy Policy</span>
                        .
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default NavBar;
