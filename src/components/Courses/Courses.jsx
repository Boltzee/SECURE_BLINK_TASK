import React from "react";
import Style from "./Courses.module.css";
import {
    Row,
    Card,
    CardGroup,
    ListGroup,
    ListGroupItem,
} from "react-bootstrap";
import one from "./1.jpg";
import two from "./2.jpg";
import three from "./3.jpg";
import date from "./date.svg";
import time from "./time.svg";

function Courses() {
    return (
        <>
            <div className={Style.main_header}>
                <span className={Style.span_contact}>Courses</span>
                <br />
                <h4 className={Style.span_header}>Our Most Popular Courses</h4>
            </div>
            <Row style={{ marginBottom: "5rem" }}>
                <CardGroup>
                    <Card className={Style.card}>
                        <Card.Img variant="top" src={one} />
                        <Card.Body>
                            <Card.Title
                                style={{
                                    fontSize: "small",
                                    fontWeight: "bold",
                                    marginBottom: "1rem",
                                }}
                            >
                                Ultimate Business Intelligence Analyst A to Z
                                Course 2021
                            </Card.Title>
                            <Card.Text>
                                <div
                                    style={{
                                        fontSize: "x-small",
                                        marginBottom: "1rem",
                                    }}
                                >
                                    46,995 <i>Student</i>
                                </div>
                                <div className={Style.pos}>
                                    <div className={Style.course_info}>
                                        <img src={date} width="10" alt="" />
                                        <span>11 hr 20 mins</span>
                                    </div>
                                    <div className={Style.course_info}>
                                        <img src={time} width="10" alt="" />
                                        <span>11 hr 20 mins</span>
                                    </div>
                                </div>
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem className={Style.fix}>
                                <div className={Style.person_info}>
                                    <img
                                        src={one}
                                        className={Style.img}
                                        alt="picture"
                                    />
                                    <div className="ms-1">
                                        <span className={Style.name}>
                                            Anshul Jain
                                        </span>
                                    </div>
                                </div>
                                <span
                                    style={{
                                        color: "#01CB63",
                                        fontSize: "small",
                                    }}
                                >
                                    &#8377;2000
                                </span>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                    <Card className={Style.card}>
                        <Card.Img variant="top" src={two} />
                        <Card.Body>
                            <Card.Title
                                style={{
                                    fontSize: "small",
                                    fontWeight: "bold",
                                    marginBottom: "1rem",
                                }}
                            >
                                Adobe Photoshop Training: From Beginner to Pro
                            </Card.Title>
                            <Card.Text>
                                <div
                                    style={{
                                        fontSize: "x-small",
                                        marginBottom: "1rem",
                                    }}
                                >
                                    46,995 <i>Student</i>
                                </div>
                                <div className={Style.pos}>
                                    <div className={Style.course_info}>
                                        <img src={date} width="10" alt="" />
                                        <span>11 hr 20 mins</span>
                                    </div>
                                    <div className={Style.course_info}>
                                        <img src={time} width="10" alt="" />
                                        <span>11 hr 20 mins</span>
                                    </div>
                                </div>
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem className={Style.fix}>
                                <div className={Style.person_info}>
                                    <img
                                        src={one}
                                        className={Style.img}
                                        alt="picture"
                                    />
                                    <div className="ms-1">
                                        <span className={Style.name}>
                                            Anshul Jain
                                        </span>
                                    </div>
                                </div>
                                <span
                                    style={{
                                        color: "#01CB63",
                                        fontSize: "small",
                                    }}
                                >
                                    &#8377;2000
                                </span>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                    <Card className={Style.card}>
                        <Card.Img variant="top" src={three} />
                        <Card.Body>
                            <Card.Title
                                style={{
                                    fontSize: "small",
                                    fontWeight: "bold",
                                    marginBottom: "1rem",
                                }}
                            >
                                Social Media Marketing - A to Z Content
                                Marketing class 2021
                            </Card.Title>
                            <Card.Text>
                                <div
                                    style={{
                                        fontSize: "x-small",
                                        marginBottom: "1rem",
                                    }}
                                >
                                    46,995 <i>Student</i>
                                </div>
                                <div className={Style.pos}>
                                    <div className={Style.course_info}>
                                        <img src={date} width="10" alt="" />
                                        <span>11 hr 20 mins</span>
                                    </div>
                                    <div className={Style.course_info}>
                                        <img src={time} width="10" alt="" />
                                        <span>11 hr 20 mins</span>
                                    </div>
                                </div>
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem className={Style.fix}>
                                <div className={Style.person_info}>
                                    <img
                                        src={one}
                                        className={Style.img}
                                        alt="picture"
                                    />
                                    <div className="ms-1">
                                        <span className={Style.name}>
                                            Anshul Jain
                                        </span>
                                    </div>
                                </div>
                                <span
                                    style={{
                                        color: "#01CB63",
                                        fontSize: "small",
                                    }}
                                >
                                    &#8377;2000
                                </span>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                </CardGroup>
            </Row>
        </>
    );
}

export default Courses;
