import React from "react";
import Style from "./Student.module.css";
import { Row } from "react-bootstrap";
import one from "./one.png";
import two from "./two.png";
import three from "./three.png";
import four from "./four.png";

function Students() {
    return (
        <>
            <div className={Style.main_header}>
                <span className={Style.span_contact}>Top Earners</span>
                <br />
                <h4 className={Style.span_header}>
                    Transforming Your Ideas
                    <br />
                    Into Reality
                </h4>
            </div>
            <Row style={{ marginBottom: "4.5rem" }}>
                <div className="col-sm-3 mb-4">
                    <div className={Style.cont}>
                        <img src={one} width="100%" alt="" />
                        <div className={Style.income}>&#8377;4,00,000</div>
                    </div>
                </div>
                <div className="col-sm-3 mb-4">
                    <div className={Style.cont}>
                        <img src={two} width="100%" alt="" />
                        <div className={Style.income}>&#8377;8,00,000</div>
                    </div>
                </div>
                <div className="col-sm-3 mb-4">
                    <div className={Style.cont}>
                        <img src={three} width="100%" alt="" />
                        <div className={Style.income}>&#8377;6,00,000</div>
                    </div>
                </div>
                <div className="col-sm-3 mb-4">
                    <div className={Style.cont}>
                        <img src={four} width="100%" alt="" />
                        <div className={Style.income}>&#8377;4,50,000</div>
                    </div>
                </div>
            </Row>
        </>
    );
}

export default Students;
