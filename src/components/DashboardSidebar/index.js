import "./style.sass"
import {ButtonCTA, Images} from "../index";
import {FaChevronRight} from "react-icons/fa";
import {Col} from "react-bootstrap";
import React from "react";
const DashboardSidebar=()=>{
return (
    <Col md={3}>
        <div className="p-5 px-3 bg-white dashboard_sidebar">
            <img src={Images.scholarship} alt="" className="img-fluid mb-3" />
            <h1 className="mb-3">Qualify for a $40,000 <br /> BigFuture Scholarship</h1>
            <ButtonCTA
                label={'Get Started'}
                purple
            />
        </div>
        <div className=" mt-4 bg-white dashboard_sidebar">
            <div className="pt-5 px-3">
                <img src={Images.share} alt="" className="img-fluid mb-3" />
                <h1 className="mb-3">Send Your SAT <br /> Scores to Colleges</h1>
            </div>
            <div className="inner_links">
                <a href="#" className="d-flex align-items-center justify-content-between">
                    <span className="link_text">Popular Tools</span>
                    <FaChevronRight className="arrow_right" />
                </a>
            </div>
            <div className="inner_links">
                <a href="#" className="d-flex align-items-center justify-content-between">
                    <span className="link_text">PAP Potential</span>
                    <FaChevronRight className="arrow_right" />
                </a>
            </div>
            <div className="inner_links">
                <a href="#" className="d-flex align-items-center justify-content-between">
                    <span className="link_text">SAT Score Sends</span>
                    <FaChevronRight className="arrow_right" />
                </a>
            </div>
            <div className="inner_links">
                <a href="#" className="d-flex align-items-center justify-content-between">
                    <span className="link_text">SAT Registration</span>
                    <FaChevronRight className="arrow_right" />
                </a>
            </div>
            <div className="inner_links">
                <a href="#" className="d-flex align-items-center justify-content-between">
                    <span className="link_text">SAT Practice</span>
                    <FaChevronRight className="arrow_right" />
                </a>
            </div>
            <div className="inner_links">
                <a href="#" className="d-flex align-items-center justify-content-between">
                    <span className="link_text">My College List</span>
                    <FaChevronRight className="arrow_right" />
                </a>
            </div>
            <div className="inner_links">
                <a href="#" className="d-flex align-items-center justify-content-between">
                    <span className="link_text">College Search</span>
                    <FaChevronRight className="arrow_right" />
                </a>
            </div>
            <div className="inner_links">
                <a href="#" className="d-flex align-items-center justify-content-between">
                    <span className="link_text">College Board Career Finder</span>
                    <FaChevronRight className="arrow_right" />
                </a>
            </div>
            <div className="inner_links">
                <a href="#" className="d-flex align-items-center justify-content-between">
                    <span className="link_text">BioFuture Scholarship</span>
                    <FaChevronRight className="arrow_right" />
                </a>
            </div>
        </div>
    </Col>
)
}
export default DashboardSidebar