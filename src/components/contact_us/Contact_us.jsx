import React, { useState } from "react";
import { Container, Row, Form, Col, InputGroup, Button } from "react-bootstrap";
import Style from "./Contact_us.module.css";
import Facebook from "./Facebook.svg";
import Twitter from "./Twitter.svg";
import Linkedin from "./Linkedin.svg";
import Github from "./Github.svg";
import Location from "./Location.svg";
import Call from "./Call.svg";
import Message from "./Message.svg";

function FormExample() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            setClick(true);
            click_animation();
        }
        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
                <Form.Group
                    as={Col}
                    sm="6"
                    className={`mb-4`}
                    controlId="validationCustom01"
                >
                    <Form.Control
                        className={Style.input_field}
                        required
                        type="text"
                        placeholder="Name"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Please provide a name
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                    as={Col}
                    sm="6"
                    className={`mb-4`}
                    controlId="validationCustom04"
                >
                    <Form.Control
                        className={Style.input_field}
                        required
                        type="email"
                        placeholder="Email"
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid Email
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group
                    as={Col}
                    sm="6"
                    className={`mb-4`}
                    controlId="validationCustom01"
                >
                    <Form.Control
                        className={Style.input_field}
                        required
                        type="text"
                        placeholder="Phone"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        We need your phone number in case we need to contact you
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                    as={Col}
                    sm="6"
                    className={`mb-4`}
                    controlId="validationCustom02"
                >
                    <Form.Control
                        className={Style.input_field}
                        required
                        type="text"
                        placeholder="Subject"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Please provide a subject for your query
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group controlId="validationCustom05">
                    <Form.Control
                        as="textarea"
                        placeholder="Message"
                        className={Style.input_field2}
                        style={{ height: "130px", resize: "none" }}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a message
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <div className={Style.button_surround}>
                <Button
                    type="submit"
                    className={`btn btn-dark ${Style.form_submit}`}
                >
                    Submit
                </Button>
            </div>
        </Form>
    );
}

function Contact_us() {
    return (
        <>
            <Container fluid={true} className={`mb-3 ${Style.contact_us_cont}`}>
                <Row className={Style.contact_us_row}>
                    <div className={`col-sm-5 ${Style.contact_div}`}>
                        <h5 className={Style.contact_heading}>
                            Contact Information
                        </h5>
                        <div className={Style.align_left}>
                            <div className={Style.contact_info}>
                                <img width="50" src={Message} alt="" />
                                contact@coursepro.com
                            </div>
                            <a
                                href="tel:1800-562-895"
                                className={`${Style.contact_info}`}
                                style={{
                                    display: "inline-block",
                                    textDecoration: "none",
                                    color: "#201F23",
                                }}
                            >
                                <img width="50" src={Call} alt="" />
                                1800-562-895, 1800-869-877
                            </a>
                            <div
                                className={Style.contact_info}
                                style={{ marginBottom: "3rem" }}
                            >
                                <img width="50" src={Location} alt="" />
                                102 Street, India
                            </div>
                        </div>
                        <h5
                            className={Style.contact_heading}
                            style={{ marginBottom: "1.3rem" }}
                        >
                            Social Media Channel
                        </h5>
                        <div className={Style.social_media_list}>
                            <a href="/">
                                <img width="35" src={Facebook} alt="Facebook" />
                            </a>
                            <a href="/">
                                <img width="35" src={Twitter} alt="Twitter" />
                            </a>
                            <a href="/">
                                <img width="35" src={Github} alt="Github" />
                            </a>
                            <a href="/">
                                <img width="35" src={Linkedin} alt="Linkedin" />
                            </a>
                        </div>
                    </div>
                    <div className={`col-sm-7 mb-4`}>
                        <h6 className={Style.form_heading}>
                            Fill up the form and our team will get back to you
                            within 24 hours
                        </h6>
                        <FormExample />
                    </div>
                </Row>
            </Container>
        </>
    );
}

export default Contact_us;
