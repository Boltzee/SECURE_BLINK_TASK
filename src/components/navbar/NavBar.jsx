import React, { useState, useEffect } from "react";
import Style from "./Navbar.module.css";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
} from "firebase/auth";
import db, { provider } from "../../firebase";

import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";

const auth = getAuth();
function NavBar({ user }) {
	console.log("The user present is ", user);

	const [show, setShow] = useState(false);
	const [show2, setShow2] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleClose2 = () => setShow2(false);
	const handleShow2 = () => setShow2(true);

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
				const user = result.user;
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				const email = error.email;
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
					<img src="/newLogo.png" className="_logo" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav
						className="n"
						style={{ alignItems: `center`, width: `100%` }}
						id="nav-cont"
					>
						<Nav.Link href="/" className="n2" id="home_id">
							HOME
						</Nav.Link>
						<Nav.Link href="/menu" className="n2" id="menu_id">
							MENU
						</Nav.Link>
						<Nav.Link href="/locate" className="n2" id="locate_id">
							LOCATE
						</Nav.Link>
						<Nav.Link
							href="/contact_us"
							className="n2"
							id="contact_id"
						>
							CONTACT US
						</Nav.Link>
						{user ? (
							<Nav.Link href="/user" className="n2" id="user_id">
								MY ACCOUNT
							</Nav.Link>
						) : (
							""
						)}
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
								LOGIN
							</Nav.Link>
						) : (
							<SignOut />
						)}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
}

export default NavBar;
