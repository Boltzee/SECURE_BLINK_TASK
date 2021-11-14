import React from "react";
import Contact_us from "../contact_us/Contact_us";
import Reviews from "../Reviews/Reviews";
import Workings from "../diagram/Workings";
import { Container } from "react-bootstrap";
import Jumbotron from "../jumbotron/Jumbotron";
import Courses from "../Courses/Courses";
import Students from "../Students/Students";

function Homepage() {
    return (
        <div>
            <Jumbotron />
            <Container>
                <Courses />
                <Students />
            </Container>
            <Workings />
            <Container>
                <Reviews />
            </Container>
            <Contact_us />
        </div>
    );
}

export default Homepage;
