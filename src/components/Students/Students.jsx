import React from "react";
import Style from "./Student.module.css";
import { Row } from "react-bootstrap";

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
            <Row style={{ marginBottom: "5rem" }}>
                <div className="col-sm-3">
                    <div className={Style.cont}></div>
                </div>
                <div className="col-sm-3">
                    <div className={Style.cont}></div>
                </div>
                <div className="col-sm-3">
                    <div className={Style.cont}></div>
                </div>
                <div className="col-sm-3">
                    <div className={Style.cont}></div>
                </div>
            </Row>
        </>
    );
}

export default Students;
