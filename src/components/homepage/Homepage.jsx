import React from "react";
import Section1 from "../section1/Section1";
import Contact_us from "../contact_us/Contact_us";
import Reviews from "../Reviews/Reviews";
import { Container } from "react-bootstrap";

function Homepage() {
    return (
        <div>
            <Container>
                <Section1 />
                <Reviews />
            </Container>
            <Contact_us />
        </div>
    );
}

export default Homepage;
