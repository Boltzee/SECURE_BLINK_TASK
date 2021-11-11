import React from "react";
import NavBar from "./components/navbar/NavBar";
import Section1 from "./components/section1/Section1";
import { useAuthState } from "react-firebase-hooks/auth";
import db from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

function App() {
	let present_user;
	onAuthStateChanged(auth, (user) => {
		present_user = user ? user : "";
	});
	return (
		<div className="container-fluid p-0">
			<NavBar user={present_user} />
			<Section1 />
		</div>
	);
}

export default App;
