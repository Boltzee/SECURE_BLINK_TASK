import React from "react";
import Section1 from "../section1/Section1";
import Contact_us from "../contact_us/Contact_us";
import { Container } from "react-bootstrap";

function Homepage() {
    return (
        <div>
            <Container>
                <Section1 />
                <Contact_us />
            </Container>
        </div>
    );
}

export default Homepage;
