import React from "react";
import { Accordion, Col, Container, Form, ProgressBar, Row } from "react-bootstrap";
import { FaArrowRight, FaCheckCircle, FaChevronRight, FaExternalLinkAlt } from "react-icons/fa";
import { ButtonCTA, Images } from '../../components'
import WithNavBar from '../../Layouts/WithNavBar'
import './style.sass'

const UpcomingTest = () => {
    return (
        <WithNavBar
            children={
                <>
                    <Container className="mt-4 UpcomingTest">
                        <h2 className="heading mb-0">My Upcoming Test</h2>
                        <Row>
                            <Col md={9} className="">
                                <div className="upcomingTestDetails bg-white py-4 mt-4">
                                    <div className="d-flex px-5">
                                        <div className="me-4 py-2">
                                            <h1 className="testDate mb-0">
                                                MAY <br /> 07
                                            </h1>
                                        </div>
                                        <div className="ps-4 py-2 leftBorder">
                                            <h2 className="subjectName mb-0">SAT Without Essay</h2>
                                            <span className="testDateFull">
                                                Test Date : Saturday, May 7, 2022
                                            </span>
                                        </div>
                                    </div>
                                    <div className="my-4 row px-5">
                                        <div className="col-md-6">
                                            <p className="labels mb-0">
                                                Status:
                                                <span className="ms-2 statuses">
                                                    Registered <FaCheckCircle size={'1.25em'} />
                                                </span>
                                            </p>
                                            <p className="labels mb-0">
                                                Registration Number:
                                                <span className="ms-2 statuses">2670043792</span>
                                            </p>
                                            <p className="labels mb-0">
                                                Answer Service :
                                                <span className="ms-2 statuses">Yes</span>
                                            </p>
                                        </div>
                                        <div className="col-md-6">
                                            <p className="labels mb-0">
                                                Test Center:
                                                <span className="ms-2 statuses">Armijo Hs</span>
                                            </p>
                                            <p className="labels mb-0">
                                                Report to:
                                                <span className="ms-2 statuses">Armijio Hs</span>
                                            </p>
                                            <p className="labels mb-0">
                                                <span className="statuses">
                                                    824 Washington St. Fairfield, CA, 94533
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="pt-3 mt-3 mb-2 px-5 topBroder d-flex align-items-end">
                                        <Form.Group className="selectionList w-75" controlId="formBasicSelect">
                                            <Form.Label className="selectionLabel">I would like to:</Form.Label>
                                            <Form.Select className="selectionItems">
                                                <option>Print admission ticket</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <button className="btn selectionButton ms-3 me-auto"><FaArrowRight /></button>
                                    </div>
                                </div>
                                <div className="upcomingTestDetails bg-white py-4 mt-4">
                                    <div className="d-flex px-5">
                                        <div className="me-4 py-2">
                                            <h1 className="testDate mb-0">
                                                JUN <br /> 04
                                            </h1>
                                        </div>
                                        <div className="ps-4 py-2 leftBorder">
                                            <h2 className="subjectName mb-0">SAT Without Essay</h2>
                                            <span className="testDateFull">
                                                Test Date : Saturday, May 7, 2022
                                            </span>
                                        </div>
                                    </div>
                                    <div className="my-4 row px-5">
                                        <div className="col-md-6">
                                            <p className="labels mb-0">
                                                Status:
                                                <span className="ms-2 statuses">
                                                    Registered <FaCheckCircle size={'1.25em'} />
                                                </span>
                                            </p>
                                            <p className="labels mb-0">
                                                Registration Number:
                                                <span className="ms-2 statuses">2670043792</span>
                                            </p>
                                        </div>
                                        <div className="col-md-6">
                                            <p className="labels mb-0">
                                                Test Center:
                                                <span className="ms-2 statuses">San Joaquim Delta Coll</span>
                                            </p>
                                            <p className="labels mb-0">
                                                Report to:
                                                <span className="ms-2 statuses">San Joaquim Delta Coll</span>
                                            </p>
                                            <p className="labels mb-0">
                                                <span className="statuses">
                                                    85151 Pacific Avenue, Dericco Student Services <br /> Building Stockton, CA, 95207
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="pt-3 mt-3 mb-2 px-5 topBroder d-flex align-items-end">
                                        <Form.Group className="selectionList w-75" controlId="formBasicSelect">
                                            <Form.Label className="selectionLabel">I would like to:</Form.Label>
                                            <Form.Select className="selectionItems">
                                                <option>Print admission ticket</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <button className="btn selectionButton ms-3 me-auto"><FaArrowRight /></button>
                                    </div>
                                </div>
                                <h2 className="internalHeading mb-0 pt-4">My Scores</h2>
                                <div className="upcomingTestDetails myScoreDetails bg-white py-4 mt-3">
                                    <div className="px-5">
                                        <h2 className="subjectName mb-0">PSAT/NMSQT</h2>
                                        <span className="testDateFull">
                                            October 15, 2021  |  11th Grade
                                        </span>
                                    </div>
                                    <div className="my-4 d-flex px-5">
                                        <div className="pe-5 borderBottomWithSpace pb-3">
                                            <span className="subjectNameScore mb-2">
                                                Your EVBRW Score
                                            </span>
                                            <div className="d-flex mt-3">
                                                <div className="me-2">
                                                    <h1 className="testDate mb-0">
                                                        610
                                                    </h1>
                                                </div>
                                                <div className="ps-2 leftBorder">
                                                    <span className="testDateFull">
                                                        160 to 760
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="leftBorder ps-5 borderBottomWithSpace pb-3 pe-5">
                                            <span className="subjectNameScore mb-2">
                                                Your Math Score
                                            </span>
                                            <div className="d-flex mt-3">
                                                <div className="me-2">
                                                    <h1 className="testDate mb-0">
                                                        630
                                                    </h1>
                                                </div>
                                                <div className="ps-2 leftBorder">
                                                    <span className="testDateFull">
                                                        160 to 760
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-3 mt-3 mb-2 px-5 topBroder d-flex align-items-end">
                                        <ButtonCTA
                                            label={'View more detail'}
                                            purple
                                        />
                                    </div>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className="p-5 px-3 mt-4 bg-white dashboard_sidebar">
                                    <img src={Images.scholarship} alt="" className="img-fluid mb-3" />
                                    <h1 className="mb-3 heading">Practice for the SAT</h1>
                                    <p className="text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec finibus turpis. Cras ut iaculis nulla, et efficitur.
                                    </p>
                                    <ButtonCTA
                                        label={'Get free SAT Practice'}
                                        purple
                                        className={'px-3'}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </>
            }
        />
    )
}

export default UpcomingTest