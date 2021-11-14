import React from "react";
import Style from "./Workings.module.css";
import { Container } from "react-bootstrap";
import Diag from "./Diag.svg";

function Workings() {
    return (
        <>
            <Container>
                <div className={Style.main_header}>
                    <span className={Style.span_contact}>Refer</span>
                    <br />
                    <h4 className={Style.span_header}>How It's Work</h4>
                </div>
            </Container>
            <div style={{ width: "100%", marginBottom: "4rem" }}>
                <img src={Diag} alt="Working" className={Style.diag} />
            </div>
        </>
    );
}

export default Workings;
