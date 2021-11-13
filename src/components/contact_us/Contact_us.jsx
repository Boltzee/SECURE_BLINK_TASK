import React from "react";
import { Container, Row, Form, Col, InputGroup, Button } from "react-bootstrap";
import Style from "./Contact_us.module.css";

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
                <Form.Group as={Col} xm="6" controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                        defaultValue="Mark"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} xm="6" controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                        defaultValue="Otto"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group controlId="validationCustom04">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid Email.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group controlId="validationCustom05">
                    <Form.Label>Enter your message</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a message"
                        style={{ height: "100px" }}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a massage.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Button
                type="submit"
                className={`btn btn-dark ${Style.form_submit}`}
            >
                Submit form
            </Button>
        </Form>
    );
}

function Contact_us() {
    return (
        <>
            <Container fluid={true}>
                <Row>
                    <div className="col-sm-4">
                        <h5>Contact Information</h5>
                        <div className="contact_info">
                            contact@coursepro.com
                        </div>
                        <a href="tel:1800-562-895" className="contact_info">
                            1800-562-895, 1800-869-877
                        </a>
                        <div className="contact_info">102 Street, India</div>
                    </div>
                    <div className="col-sm-8">
                        <FormExample />
                    </div>
                </Row>
            </Container>
        </>
    );
}

export default Contact_us;
