import React from "react";
import Style from "./Review.module.css";
import { Container, Row } from "react-bootstrap";
import Aphos from "./Aphos.svg";
import Picture1 from "./Picture1.png";
import Picture2 from "./Picture2.png";

const Reviews = () => {
    return (
        <>
            <div className={Style.main_header}>
                <span className={Style.span_contact}>Testimonials</span>
                <br />
                <h4 className={Style.span_header}>
                    Check Out What Our
                    <br />
                    Students Think About Us
                </h4>
            </div>
            <Container fluid={true} style={{ marginBottom: "6rem" }}>
                <Row className={`${Style.reviews_row}`}>
                    <div className={`col-sm-6 ${Style.comment_col}`}>
                        <div className={Style.comment_cont}>
                            <div className={Style.comment}>
                                It's a comprehensive online learning platform
                                for everyone looking to learn and course pro.
                                provinding this platform which is very
                                beneficial for practicals. Students can revise
                                everything at home like dissection and slides
                            </div>
                            <div className={Style.comment_info}>
                                <div className={Style.person_info}>
                                    <img
                                        src={Picture1}
                                        className={Style.img}
                                        alt="picture"
                                    />
                                    <div className="ms-1">
                                        <span className={Style.name}>
                                            Anshul Jain
                                        </span>
                                        <br />
                                        <span>
                                            <i>yesterday</i>
                                        </span>
                                    </div>
                                </div>
                                <div className={Style.aphos}>
                                    <img
                                        src={Aphos}
                                        width="20"
                                        height="20"
                                        alt="quotation"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`col-sm-6 ${Style.comment_col}`}>
                        <div className={Style.comment_cont}>
                            <div className={Style.comment}>
                                It's a comprehensive online learning platform
                                for everyone looking to learn and course pro.
                                provinding this platform which is very
                                beneficial for practicals. Students can revise
                                everything at home like dissection and slides
                            </div>
                            <div className={Style.comment_info}>
                                <div className={Style.person_info}>
                                    <img
                                        src={Picture2}
                                        alt="picture"
                                        className={Style.img}
                                    />
                                    <div className="ms-1">
                                        <span className={Style.name}>
                                            Rajkumar Jain
                                        </span>
                                        <br />
                                        <span>
                                            <i>yesterday</i>
                                        </span>
                                    </div>
                                </div>
                                <div className={Style.aphos}>
                                    <img
                                        src={Aphos}
                                        width="20"
                                        height="20"
                                        alt="quotation"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default Reviews;
