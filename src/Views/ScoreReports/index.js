import React from "react";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import { ButtonCTA, Images } from '../../components'
import WithNavBar from '../../Layouts/WithNavBar'
import './style.sass'
import DashboardSidebar from "../../components/DashboardSidebar";

const ScoreReports = () => {
    return (
        <WithNavBar
            children={
                <>
                    <Container className="mt-4">
                        <Row>
                            <Col md={12} className="">
                                <div className="p-3 pb-2 bg-white score_card">
                                    <Row>
                                        <Col md={3}>
                                            <h1 className="card_heading">SAT with Essay</h1>
                                            <p className="score_content">March 8, 2019  |  11th Grade</p>
                                        </Col>
                                        <Col md={9}>
                                            <div className="">
                                                <h1 className="card_heading">Your Total Score</h1>
                                                <p className="score_content">
                                                    <span className="top_scores">1010</span>
                                                    <span className="top_total_score ms-3">400 to 1600</span>
                                                </p>
                                            </div>
                                            <div className="align-items-center d-flex justify-content-between mt-3 progress_bar_area">
                                                <span className="me-2">400</span>
                                                <ProgressBar now={60} />
                                                <span className="ms-2">1600</span>
                                            </div>
                                        </Col>
                                        <div className="mt-3 pt-3 score_footer">
                                            <Row>
                                                <Col md={4} className="middle_border">
                                                    <h1 className="card_heading">Your Evidence-Based Reading and Writing Score</h1>
                                                    <p className="score_content">
                                                        <span className="scores">490</span>
                                                        <span className="total_score ms-3">200 to 800</span>
                                                    </p>
                                                </Col>
                                                <Col md={8}>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div className="ms-3">
                                                            <h1 className="total_score">Your Math Score</h1>
                                                            <p className="score_content">
                                                                <span className="scores">520</span>
                                                                <span className="total_score ms-3">200 to 800</span>
                                                            </p>
                                                        </div>
                                                        <div className="">
                                                            <ButtonCTA
                                                                label={'View more detail'}
                                                                purple
                                                            />
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Row>
                                </div>
                            </Col>
                            {/* <DashboardSidebar/> */}
                        </Row>
                    </Container>
                </>
            }
        />
    )
}

export default ScoreReports