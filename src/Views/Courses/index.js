import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../store/actions";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaChevronCircleRight, FaRegClock } from "react-icons/fa";
import { CourseTags } from "../../components/index";
import "./style.sass";
import { useNavigate } from "react-router-dom";
import WithNavBar from "../../Layouts/WithNavBar";
import CustomFooter from "../../components/CustomFooter";
function Courses() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [coursesData, setCoursesData] = useState([]);
  // const [courseID, setCourseID] = useState([])
  useEffect(() => {
    dispatch(Actions.listAllCourses());
  }, []);

  // // get all courses and save it in constant
  const [listAllCourses] = useSelector((state) => {
    return [state.courses.listCourses];
  });
  // save all courses data related things into usestates
  useEffect(() => {
    setCoursesData(listAllCourses);
  }, [listAllCourses]);

  return (
    <>
      <WithNavBar IsLoggedIn={true}>
        <div className="third-section" id="myCoursesSection">
          <div className="container pb-5">
            <div className="col-md-6 mx-auto text-center mt-5">
              <h1 className="mb-0 heading-1">Our Courses</h1>
              <p className="summary mt-3">
                Comprehensive assessments designed to simulate realistic testing
                conditions and provide truly actionable insights. Stop worrying
                about your next exam and join thousands of other students that
                have already experienced the BEEC Advantage. Get started today!
              </p>
            </div>
            <div className="row mx-0">
              <div className="course-inner my-4">
                <Row xs={1} md={2} lg={3} xl={3} className="">
                  {coursesData?.map((data, key) => (
                    <>
                      {data?.status === "ENABLED" && (
                        <Col className="my-3" key={key}>
                          <Card className="h-100 shadow">
                            <CourseTags tag={data?.category} />
                            <Card.Img
                              variant="top"
                              className="img-fluid courses-top-img"
                              src="https://hspt.s3.amazonaws.com/hspt-package-graphic.png"
                            />
                            {/* <Card.Img
                              variant="top"
                              className="img-fluid courses-top-img"
                              src={data?.image}
                            /> */}
                            <Card.Body>
                              <h4 className="heading-4 name mb-1 mt-2 text-center">
                                {data?.alias ? data?.alias : data?.title}
                              </h4>
                              <p className="summary body-1 mb-0 mt-4">
                                {data?.summary}
                              </p>
                            </Card.Body>
                            <Card.Footer className="pb-3">
                              <div className="d-flex justify-content-between">
                                <div className="d-flex align-items-center">
                                  <div className=""></div>
                                  <div className="ms-2"></div>
                                </div>
                                <div className="course-link">
                                  <a
                                    href="#"
                                    to="/detail"
                                    onClick={() => {
                                      dispatch(
                                        Actions.selectedCourseForRegistration(
                                          data
                                        )
                                      );
                                      console.log("Data is ", data)
                                      navigate("/course-registration");
                                    }}
                                  >
                                    <FaChevronCircleRight size={"1.5em"} />
                                  </a>
                                </div>
                              </div>
                            </Card.Footer>
                          </Card>
                        </Col>
                      )}
                    </>
                  ))}
                </Row>
              </div>
            </div>
          </div>
        </div>
        <CustomFooter />
      </WithNavBar>
    </>
  );
}

export default Courses;
