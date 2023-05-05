import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../store/actions";
import * as TYPES from "../../store/actions/actions";
import { Button, Form, Col, ListGroup, Container } from "react-bootstrap";
import Moment from "react-moment";
// import { images, Header, Footer, CourseDetail } from '../../Components'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import WithNavBar from "../../Layouts/WithNavBar";
import { CourseDetail } from "../../components";

function CourseRegistration() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [validated, setValidated] = useState(false);
  const [existingStudent, setExistingStudent] = useState(true);
  const [studentId, setStudentId] = useState("");
  const [selectedCourse, setSelectedCourse] = useState({});
  const [listAllStudents, setListAllStudents] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [school, setSchool] = useState("");
  const [gradeLevel, setGradeLevel] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [user, setUser] = useState({});

  const [selectedCourseState, currentUser, students, tempUser] = useSelector(
    (state) => {
      return [
        state.courses.selectedCourseForCart,
        state.auth.cognito,
        state.students.listStudentsByParent,
        state.auth.user,
      ];
    }
  );

  useEffect(() => {
    if (currentUser) {
      dispatch(
        Actions.dispatchListStudentsByParent({ parentId: currentUser.username })
      );
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser) {
      setUser(tempUser);
    }
  }, [tempUser]);

  useEffect(() => {
    console.log("SELECTED COUrSE sTate ", selectedCourseState);
    setSelectedCourse(selectedCourseState);
  }, [selectedCourseState]);

  useEffect(() => {
    setListAllStudents(students);
  }, [students]);

  // const handleSubmit = (event) => {
  //   const payload = {
  //     packageId: selectedCourse.id,
  //     studentId: currentUser.sub,
  //     userId: currentUser.sub
  //   }
  //   dispatch(Actions.dispatchAddToCart(payload, currentUser.sub))
  //   navigate("/cart");

  //   // if(existingStudent) {
  //   //   var tempEmail = "";
  //   //   var tempPhone = "";
  //   //   var tempAddress = "";
  //   //   if(!email) {
  //   //     tempEmail = user.email;
  //   //   } else if(!firstName) {
  //   //     return toast.success("First name is required");
  //   //   } else if(!lastName) {
  //   //     return toast.success("Last name is required");
  //   //   } else if(!phone) {
  //   //     tempPhone = user.phone
  //   //   } else if(!address) {
  //   //     tempAddress = user.address
  //   //   }
  //   //   const cartItem = {
  //   //     parentId: currentUser.sub,
  //   //     firstName:firstName,
  //   //     lastName:lastName,
  //   //     school:school,
  //   //     grade:gradeLevel,
  //   //     email:tempEmail,
  //   //     phone:tempPhone,
  //   //     address:tempAddress,
  //   //     userType: "STUDENT"
  //   //   }

  //   //   if(!email) {
  //   //     const payload = {
  //   //       packageId: selectedCourse.id,
  //   //       studentId: currentUser.sub,
  //   //       userId: currentUser.sub
  //   //     }
  //   //     dispatch(Actions.dispatchAddToCart(payload, currentUser.sub))
  //   //     navigate("/cart");
  //   //   } else {
  //   //     dispatch(Actions.createStudent(cartItem)).then(response => {
  //   //       const student = JSON.parse(response.data.addUser);
  //   //       if(student.statusCode === 200) {
  //   //         const payload = {
  //   //           packageId: selectedCourse.id,
  //   //           studentId: student.body.data.id,
  //   //           userId: currentUser.sub
  //   //         }
  //   //         dispatch(Actions.dispatchAddToCart(payload, currentUser.sub))
  //   //         navigate("/cart");
  //   //       } else {
  //   //         return toast.error(student.body.message);
  //   //       }

  //   //     });
  //   //   }
  //   // } else {
  //   //   if(!studentId) {
  //   //     return toast.error("Please select a student");
  //   //   }
  //   //   const payload = {
  //   //     packageId: selectedCourse.id,
  //   //     studentId: studentId,
  //   //     userId: currentUser.sub
  //   //   }
  //   //   dispatch(Actions.dispatchAddToCart(payload, currentUser.sub))
  //   //   navigate("/cart");
  //   // }

  // };
  const handleSubmit = (event) => {
    if (selectedCourse?.price == 0) {
      const payload = {
        packageId: selectedCourse?.id,
        userId: currentUser?.username,
        quizId: selectedCourse?.packageItems?.items?.[0]?.quiz?.id,
      };
      console.log("Payload is ", payload);
      dispatch(Actions.dispatchCreateFreePackage(payload));
      navigate("/my-courses?checkoutId=1234");
    } else {
      const payload = {
        packageId: selectedCourse.id,
        studentId: currentUser.username,
        userId: currentUser.username,
      };
      dispatch(Actions.dispatchAddToCart(payload, currentUser.username));
      navigate("/cart");
    }
  };

  return (
    <WithNavBar IsLoggedIn={true}>
      <div className="signup-screen">
        <div className="signup-section CourseRegistration-section">
          <div className="container py-5">
            <div className="row px-0 justify-content-between">
              {/* <div className="col-xxl-5 col-lg-6 col-md-10 mx-auto py-5">
                <div className="row mx-0 signup-inner">
                  <div className="col py-4 py-md-0">
                    <div className="d-flex align-items-center">
                      <div className="w-100 py-5">
                        <Form
                          className="px-3 registration-form"
                        >
                          <h3>{user?.userType === "TEACHER" && "Student" } Registration</h3>
                          {user?.userType === "TEACHER" && (
                          <Form.Group
                            className={`input-wrapper input-toggle-switch`}
                            as={Col}
                            md="12"
                            controlId="includelunch"
                          >
                            <label className="switch">
                              <input
                                onChange={(e) => {
                                  setExistingStudent(!existingStudent);
                                }}
                                checked={!existingStudent}
                                id="includelunch"
                                name="includelunch"
                                type="checkbox"
                              />
                              <span className="slider round"></span>
                            </label>
                            <label
                              htmlFor="includelunch"
                              className="ms-2 body-2"
                            >
                              Are you registering as an existing student user?
                            </label>
                          </Form.Group>
                          )}
                          {!existingStudent ? (
                            <Form.Group
                              className="input-wrapper"
                              as={Col}
                              md="12"
                              controlId="grade level"
                            >
                              <Form.Label className="signup-labels body-2">
                                Pick an existing user to register{" "}
                                <span className="">*</span>
                              </Form.Label>
                              <Form.Select
                                className="body-2"
                                required
                                aria-label="grade level"
                                onChange={(e) => {
                                  setStudentId(e.target.value)
                                }}
                              >
                                <option value="">Select a student</option>
                                {listAllStudents.length > 0 && listAllStudents?.map((item, key) => {
                                  return (<option className={key} value={item?.id}>{item?.firstName} {item?.lastName} - {item?.email}</option>)
                                })}
                              </Form.Select>
                            </Form.Group>
                          ) : (
                            <>
                              <Form.Group
                                className="input-wrapper"
                                as={Col}
                                md="12"
                                controlId="firstname"
                              >
                                <Form.Label className="signup-labels body-2">
                                  First Name <span className="">*</span>
                                </Form.Label>
                                <Form.Control
                                  className="signup-input body-2"
                                  required
                                  type="text"
                                  placeholder="Enter student first name here"
                                  value={firstName}
                                  onChange={(e) => setFirstName(e.target.value)}
                                />
                              </Form.Group>
                              <Form.Group
                                className="input-wrapper"
                                as={Col}
                                md="12"
                                controlId="lastname"
                              >
                                <Form.Label className="signup-labels body-2">
                                  Last Name <span className="">*</span>
                                </Form.Label>
                                <Form.Control
                                  className="signup-input body-2"
                                  required
                                  type="text"
                                  placeholder="Enter student last name here"
                                  value={lastName}
                                  onChange={(e) => setLastName(e.target.value)}
                                />
                              </Form.Group>
                              <Form.Group
                                className="input-wrapper"
                                as={Col}
                                md="12"
                                controlId="school"
                              >
                                <Form.Label className="signup-labels body-2">
                                  School <span className="">*</span>
                                </Form.Label>
                                <Form.Control
                                  className="signup-input body-2"
                                  required
                                  type="text"
                                  placeholder="Enter the name of your student’s school"
                                  value={school}
                                  onChange={(e) => setSchool(e.target.value)}
                                />
                              </Form.Group>
                              <Form.Group
                                className="input-wrapper"
                                as={Col}
                                md="12"
                                controlId="grade level"
                              >
                                <Form.Label className="signup-labels body-2">
                                  Grade Level <span className="">*</span>
                                </Form.Label>
                                <Form.Select
                                  className="body-2"
                                  required
                                  aria-label="grade level"
                                  onChange={(e) => setGradeLevel(e.target.value)}
                                >
                                  <option value=""></option>
                                  <option value="4th">4th</option>
                                  <option value="5th">5th</option>
                                  <option value="6th">6th</option>
                                  <option value="7th">7th</option>
                                  <option value="8th">8th</option>
                                  <option value="9th">9th</option>
                                  <option value="10th">10th</option>
                                  <option value="11th">11th</option>
                                  <option value="12th">12th</option>
                                  <option value="other">other</option>
                                </Form.Select>
                              </Form.Group>
                              <Form.Group
                                className="input-wrapper"
                                as={Col}
                                md="12"
                                controlId="emailaddress"
                              >
                                <Form.Label className="signup-labels body-2">
                                  Email (if different from parent){" "}
                                  <span className=""></span>
                                </Form.Label>
                                <Form.Control
                                  className="signup-input body-2"
                                  required
                                  type="email"
                                  placeholder="Enter your student’s email here"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                />
                              </Form.Group>

                              <Form.Group
                                className="input-wrapper"
                                as={Col}
                                md="12"
                                controlId="phonenumber"
                              >
                                <Form.Label className="signup-labels body-2">
                                  Phone number (if different from parent){" "}
                                  <span className=""></span>
                                </Form.Label>
                                <Form.Control
                                  className="signup-input body-2"
                                  required
                                  type="text"
                                  placeholder="Enter your student’s phone number here"
                                  value={phone}
                                  onChange={(e) => setPhone(e.target.value)}
                                />
                              </Form.Group>
                              <Form.Group
                                className="input-wrapper"
                                as={Col}
                                md="12"
                                controlId="address"
                              >
                                <Form.Label className="signup-labels body-2">
                                  Address (if different from parent){" "}
                                  <span className=""></span>
                                </Form.Label>
                                <Form.Control
                                  className="signup-input body-2"
                                  required
                                  type="text"
                                  placeholder="City, State"
                                  value={address}
                                  onChange={(e) => setAddress(e.target.value)}
                                />
                              </Form.Group>
                            </>
                          )}

                          <Form.Group
                            className="input-wrapper mt-4"
                            as={Col}
                            md="12"
                          >
                            <Button onClick={() => handleSubmit()} className="blue-button w-100">
                              Registration
                            </Button>
                          </Form.Group>
                        </Form>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="col-xxl-5 col-lg-6 col-md-10 mx-auto py-5">
                <div className="row mx-0 signup-inner">
                  <CourseDetail
                    selectedClass={"false"}
                    currentColor={"black"}
                    lunch={false}
                    totalCost={60}
                    handleSubmit={handleSubmit}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer section */}
        {/* <Footer /> */}
      </div>
    </WithNavBar>
  );
}

export default CourseRegistration;
