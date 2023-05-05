import "./style.sass";
import WithNavBar from "../../Layouts/WithNavBar";
import { TopNavbar } from "../../components";
import { Row, Col, Container } from "react-bootstrap";
import Reference from "../../assets/img/icons/reference.svg";
import Calculator from "../../assets/img/icons/calculator.svg";
import Notes from "../../assets/img/icons/notes.svg";
import Union from "../../assets/img/icons/union.svg";
import GreenTick from "../../assets/img/icons/greeenTick.svg";
import Step1 from "../Step01";
import DullTick from "../../assets/img/icons/dullTick.svg";
import { useState } from "react";
import Step2 from "../Step02";
import Step3 from "../Step03";
import Step4 from "../Step04";

export default function Steps() {
  const [count, setCount] = useState(1);
  function updateCount() {
    setCount(count + 1);
  }
  return (
    <>
      <div>
        <div className="expamBarWrape">
          <div
            style={{
              background: "linear-gradient(270deg, #0269B7 0%, #4EA2E2 99.24%)",
            }}
          >
            <TopNavbar steps={true} IsLoggedIn={true} />
            <br />
            <Container>
              <div className="examBarContainer">
                <Row>
                  <Col md={8}>
                    <h1 className="headingExam">
                      SAT Test 2 - Writing Section <br /> Section 44 Questions
                    </h1>
                  </Col>
                  <Col md={4}>
                    <Row>
                      {/* <Col className="text-center">
                        <img src={Reference} />
                        <p className="examBarMenu">Reference</p>
                      </Col>
                      <Col className="text-center">
                        <img src={Calculator} />
                        <p className="examBarMenu">Calculator</p>
                      </Col>
                      <Col className="text-center">
                        <img src={Notes} />
                        <p className="examBarMenu">Notes</p>
                      </Col>
                      <Col className="text-center">
                        <img src={Union} />
                        <p className="examBarMenu">Line Foucus</p>
                      </Col> */}
                    </Row>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
          <div style={{ background: "#F2F2F2" }}>
            <Container>
              <div className="stepCount">
                <Row style={{ margin: "0px" }}>
                  <Col
                    style={{ borderBottom: "4px solid #3CA333" }}
                    className=""
                    md="3"
                    sm="3"
                    xs="3"
                  >
                    <div className="colFlex">
                      <img src={GreenTick} />
                      <div style={{ marginLeft: "10px" }}>
                        <h1 className="stepText">Step1</h1>
                        <p className="stepTextDetail">Categorize</p>
                      </div>
                    </div>
                  </Col>
                  <Col
                    style={
                      count > 1
                        ? {
                            display: "flex",
                            borderBottom: "4px solid #3CA333",
                            padding: "0px",
                          }
                        : {
                            display: "flex",
                            borderBottom: "none",
                            padding: "0px",
                          }
                    }
                    md="3"
                    sm="3"
                    xs="3"
                  >
                    <div className="colFlex">
                      <img src={count > 1 ? GreenTick : DullTick} />
                      <div style={{ marginLeft: "10px" }}>
                        <h1 className="stepText">Step2</h1>
                        <p className="stepTextDetail">Review Skills</p>
                      </div>
                    </div>
                  </Col>
                  <Col
                    style={
                      count > 2
                        ? {
                            display: "flex",
                            borderBottom: "4px solid #3CA333",
                            padding: "0px",
                          }
                        : {
                            display: "flex",
                            borderBottom: "none",
                            padding: "0px",
                          }
                    }
                    className="colFlex"
                    md="3"
                    sm="3"
                    xs="3"
                  >
                    <div className="colFlex">
                      <img src={count > 2 ? GreenTick : DullTick} />
                      <div style={{ marginLeft: "10px" }}>
                        <h1 className="stepText">Step3</h1>
                        <p className="stepTextDetail">Try Again</p>
                      </div>
                    </div>
                  </Col>
                  <Col
                    style={
                      count > 3
                        ? {
                            display: "flex",
                            borderBottom: "4px solid #3CA333",
                            padding: "0px",
                          }
                        : {
                            display: "flex",
                            borderBottom: "none",
                            padding: "0px",
                          }
                    }
                    className="colFlex"
                    md="3"
                    sm="3"
                    xs="3"
                  >
                    <div className="colFlex">
                      <img src={count > 3 ? GreenTick : DullTick} />
                      <div style={{ marginLeft: "10px" }}>
                        <h1 className="stepText">Step4</h1>
                        <p className="stepTextDetail">Check Solution</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
            {count === 1 ? (
              <Step1 updateCount={updateCount} />
            ) : count === 2 ? (
              <Step2 updateCount={updateCount} />
            ) : count === 3 ? (
              <Step3 updateCount={updateCount} />
            ) : count === 4 ? (
              <Step4 />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}
