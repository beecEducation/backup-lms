import React from "react";
import { Accordion, Col, Container, ProgressBar, Row } from "react-bootstrap";
import { FaChevronRight, FaExternalLinkAlt } from "react-icons/fa";
import { ButtonCTA, Images } from "../../components";
import WithNavBar from "../../Layouts/WithNavBar";
import "./style.sass";

const ScoreDetails = () => {
  return (
    <WithNavBar
      children={
        <>
          <Container className="mt-4">
            <Row>
              <Col md={9} className="">
                <div className=" d-flex justify-content-between align-items-center">
                  <h2 className="heading mb-0">Score Details</h2>
                  <a href="#" className="expandButton">
                    Expand All
                    <FaExternalLinkAlt className="ms-2" size={"1.5em"} />
                  </a>
                </div>
                <div className="mt-3 detailToggle">
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <div className="">
                          <p className="mb-1 heading">Cross-Test Scores</p>
                          <span className="subHeading">
                            Scores that show how well you analyze texts and
                            solve problems related to science, history, and
                            social studies.
                          </span>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="row">
                          <div className="col-md-6 p-3">
                            <div className="d-flex justify-content-center">
                              <div className="">
                                <p className="internal_heading">
                                  Analysis in Science
                                </p>
                                <div className="d-flex justify-content-center align-items-center">
                                  <span className="mainScore">520</span>
                                  <span className="scoreRange ms-3">
                                    200 to 800
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Col>
              <Col md={3}>
                <div className="p-5 px-3 bg-white dashboard_sidebar">
                  <img
                    src={Images.scholarship}
                    alt=""
                    className="img-fluid mb-3"
                  />
                  <h1 className="mb-3">
                    Qualify for a $40,000 <br /> BigFuture Scholarship
                  </h1>
                  <ButtonCTA label={"Get Started"} purple />
                </div>
                <div className=" mt-4 bg-white dashboard_sidebar">
                  <div className="pt-5 px-3">
                    <img src={Images.share} alt="" className="img-fluid mb-3" />
                    <h1 className="mb-3">
                      Send Your SAT <br /> Scores to Colleges
                    </h1>
                  </div>
                  <div className="inner_links">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-between"
                    >
                      <span className="link_text">Popular Tools</span>
                      <FaChevronRight className="arrow_right" />
                    </a>
                  </div>
                  <div className="inner_links">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-between"
                    >
                      <span className="link_text">PAP Potential</span>
                      <FaChevronRight className="arrow_right" />
                    </a>
                  </div>
                  <div className="inner_links">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-between"
                    >
                      <span className="link_text">SAT Score Sends</span>
                      <FaChevronRight className="arrow_right" />
                    </a>
                  </div>
                  <div className="inner_links">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-between"
                    >
                      <span className="link_text">SAT Registration</span>
                      <FaChevronRight className="arrow_right" />
                    </a>
                  </div>
                  <div className="inner_links">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-between"
                    >
                      <span className="link_text">SAT Practice</span>
                      <FaChevronRight className="arrow_right" />
                    </a>
                  </div>
                  <div className="inner_links">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-between"
                    >
                      <span className="link_text">My College List</span>
                      <FaChevronRight className="arrow_right" />
                    </a>
                  </div>
                  <div className="inner_links">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-between"
                    >
                      <span className="link_text">College Search</span>
                      <FaChevronRight className="arrow_right" />
                    </a>
                  </div>
                  <div className="inner_links">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-between"
                    >
                      <span className="link_text">
                        College Board Career Finder
                      </span>
                      <FaChevronRight className="arrow_right" />
                    </a>
                  </div>
                  <div className="inner_links">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-between"
                    >
                      <span className="link_text">BioFuture Scholarship</span>
                      <FaChevronRight className="arrow_right" />
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </>
      }
    />
  );
};

export default ScoreDetails;
