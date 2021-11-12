import React from "react";
import NavBar from "./components/navbar/NavBar";
import db from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import Not_found from "./components/not_found/Not_found";

const auth = getAuth();

function App() {
    let present_user;
    onAuthStateChanged(auth, (user) => {
        present_user = user ? user : "";
    });
    return (
        <div className="container-fluid p-0">
            <Router>
                <NavBar user={present_user} />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="*" element={<Not_found />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
