import React from "react";
import { Container, Row } from "react-bootstrap";
import Style from "./Jumbotron.module.css";
import Pic from "./Pic.jpg";

function Jumbotron() {
    return (
        <>
            <Container fluid={true} className={Style.main_cont}>
                <Row className={Style.main_row}>
                    <div className={`col-md-6 ${Style.text_col}`}>
                        <div className={Style.text_container}>
                            <h2
                                style={{
                                    color: "white",
                                    marginBottom: "1rem",
                                    fontWeight: "bold",
                                    textTransform: "capitalize",
                                }}
                            >
                                AnyTime, anywhere
                                <br /> Learn on your schedule from any device
                            </h2>
                            <div
                                style={{ marginBottom: "1rem" }}
                                className={Style.italic_text}
                            >
                                <i>
                                    We Believe everyone has the capcity to be
                                    creative
                                </i>{" "}
                                <span
                                    style={{
                                        fontWeight: "bold",
                                        color: "white",
                                    }}
                                >
                                    Course Pro
                                </span>{" "}
                                <i>
                                    is a place where people develop their own
                                    potential
                                </i>
                            </div>
                            <button className="btn btn-dark">
                                <i style={{ fontSize: "x-small" }}>
                                    Let's Get Started
                                </i>
                            </button>
                        </div>
                    </div>
                    <div className={`col-md-6 ${Style.image_col}`}></div>
                </Row>
                <Row className={Style.extra_row}>
                    <div className={`col-sm-4 ${Style.no_col} ${Style.extra1}`}>
                        <h5 className={Style.temp_text}>Total Students</h5>
                        <h2 className={Style.temp_num}>5140</h2>
                    </div>
                    <div className={`col-sm-4 ${Style.no_col}`}>
                        <h5 className={Style.temp_text}>Partners</h5>
                        <h2 className={Style.temp_num}>4123</h2>
                    </div>
                    <div className={`col-sm-4 ${Style.no_col} ${Style.extra2}`}>
                        <h5 className={Style.temp_text}>
                            Affiliate Distribution
                        </h5>
                        <h2 className={Style.temp_num}>4.18 Lac</h2>
                    </div>
                </Row>
            </Container>
        </>
    );
}

export default Jumbotron;
