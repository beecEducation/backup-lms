import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../store/actions";
import { Button, Form, Col, Modal, Tabs, Tab } from "react-bootstrap";
// import Moment from 'react-moment';
import { Images } from "../../components";
import "./style.sass";
import { v4 } from "uuid";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signupFormValidation, setSignupFormValidation] = useState(false);
  const [verificationValidated, setVerificationValidated] = useState(false);
  const [recentRegister, setRecentRegister] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [studentDateOfBirth, setStudentDateOfBirth] = useState("");
  const [studentGender, setStudentGender] = useState("");
  const [studentNotes, setStudentNotes] = useState("");
  const [companyName, setCompanyName] = useState("BEEC");
  const [selectedCompany, setSelectedCompany] = useState(
    "c3b4f8f0-4278-4753-b7a6-fe6327db4fa3"
  );
  const [userType, setUserType] = useState("STUDENT");
  const [noGuardian, setNoGuardian] = useState(false);
  const [guardianFirstName, setGuardianFirstName] = useState("");
  const [guardianLastName, setGuardianLastName] = useState("");
  const [guardianRelation, setGuardianRelation] = useState("");
  const [guardianPhone, setGuardianPhone] = useState("");
  const [guardianEmail, setGuardianEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [school, setSchool] = useState("");
  const [grade, setGrade] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [code, setCode] = useState("");
  const [showVerification, setShowVerification] = useState(false);

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.stopPropagation();
  //   } else {
  //     if (password !== passwordConfirm) {
  //       toast.error("Password must match with confirm password");
  //     } else {
  //       try {
  //         const { user } = await Auth.signUp({
  //           username: v4(),
  //           password,
  //           attributes: {
  //             email: username,
  //             given_name: firstName,
  //             family_name: lastName,
  //             profile: "TEACHER",
  //           },
  //         });
  //         if (user) {
  //           toast.success("A code has been sent to " + username);
  //           console.log("Recent register user is ", user);
  //           setRecentRegister(user);
  //           setShowVerification(true);
  //         }
  //       } catch (error) {
  //         toast.error(error.message);
  //       }
  //     }
  //     setSignupFormValidation(true);
  //   }
  // };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    } else {
      if (password !== passwordConfirm) {
        return toast.error("Password must match with confirm password");
      } else {
        let userData = {
          firstName: firstName,
          lastName: lastName,
          email: username,
          phone: phoneNo,
          companyId: selectedCompany,
          password: password,
        };
        const parent = {};

        if (userType === "STUDENT") {
          userData.school = school;
          userData.grade = grade;
          userData.dob = studentDateOfBirth;
          userData.gender = studentGender;
          userData.notes = studentNotes;

          if (!noGuardian) {
            parent.firstName = guardianFirstName;
            parent.lastName = guardianLastName;
            parent.email = guardianEmail;
            parent.phone = guardianPhone;
            parent.relation = guardianRelation;
          }
        }
        if (!noGuardian) {
          console.log("I am no guardian=false");
          dispatch(Actions.dispatchCreateUser(userData, parent, "SIGNUP"))
            .then((res) => {
              const parsedResponse = JSON.parse(res);
              if (parsedResponse.statusCode === 200) {
                toast.success("A code has been sent to " + username);
                setRecentRegister({
                  username: parsedResponse?.body?.Username,
                });
                setShowVerification(true);
              } else {
                toast.error(parsedResponse?.body?.message);
              }
            })
            .catch((err) => {
              console.log("Error in creating user : ", err);
            });
        } else {
          console.log("I am no guardian");

          dispatch(Actions.dispatchCreateUser(userData, null, "SIGNUP"))
            .then((res) => {
              console.log("SIGNUP SUCCESS", JSON.parse(res));
              const parsedResponse = JSON.parse(res);
              if (parsedResponse.statusCode === 200) {
                toast.success("A code has been sent to " + username);
                setRecentRegister({
                  username: parsedResponse?.body?.Username,
                });
                setShowVerification(true);
              } else {
                toast.error(parsedResponse?.body?.message);
              }

              // dispatch(Actions.listAllUsersAction())
              // navigate('/users')
            })
            .catch((err) => {
              console.log("Error in creating user : ", err);
            });
        }
      }
      setSignupFormValidation(true);
    }
  };

  const submitVerification = async (event) => {
    // if (code === "" || typeof code === "undefined" || code === null) {
    //   return toast.error("Please enter the code");
    // }

    // console.log("Event is ", event);
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      console.log("Hello world", recentRegister)
      try {
        const user = await Auth.confirmSignUp(recentRegister.username, code, {
          forceAliasCreation: true,
        });
        if (user === "SUCCESS") {
          toast.success("You have successfully registered");
          // dispatch(Actions.dispatchUserData(recentRegister));
          navigate("/login");
        }
      } catch (error) {
        console.log("error in verification: ", error);
        toast.error(error.message);
      }
    }
    setVerificationValidated(true);
  };

  const resendVerificationEmail = async () => {
    try {
      await Auth.resendSignUp(username);
      toast.success("Code resent successfully");
    } catch (err) {
      toast.error("Failed to resend code");
      console.log("error resending code: ", err);
    }
  };

  return (
    <div className="signup-screen">
      {/* top nav bar */}
      {/* <Header /> */}
      {/* signup section */}
      <div className="signup-section">
        <div className="col-lg-10 col-xl-8 col-md-11 col-11 mx-auto py-5">
          <div className="row mx-0 signup-inner registration-inner">
            <div className="col-xxl-5 col-md-6 py-4 py-md-0">
              <div className="d-flex align-items-center">
                <div className="w-100 py-5 registration-form">
                  <div className="px-3">
                    <h3 className="heading-3 mb-1">Create your account</h3>
                    <p className="signup-summary body-1">
                      All Fields must be filled unless marked (Optional)
                    </p>
                  </div>
                  <div className="signup-user-selection px-3">
                    {/* <p className="signup-summary body-1">
                      <i>Signup as a:</i>
                    </p> */}
                    {/* <Tabs
                      id="select-user-type"
                      variant="pills"
                      activeKey={userType}
                      onSelect={(k) => setUserType(k)}
                      className="mb-3"
                    >
                      <Tab eventKey="STUDENT" title="Student"></Tab>
                      <Tab eventKey="PARENT" title="Parent"></Tab>
                    </Tabs> */}
                  </div>
                  <Form
                    className="px-3 registration-form newRegForm"
                    noValidate
                    validated={signupFormValidation}
                    onSubmit={(e) => handleSubmit(e)}
                  >
                    {userType === "STUDENT" && (
                      <Form.Check>
                        <Form.Check.Input
                          type="checkbox"
                          className="signup-checkbox"
                          id="no-guardian"
                          checked={noGuardian}
                          onChange={(e) => setNoGuardian(e.target.checked)}
                        />
                        <Form.Check.Label
                          htmlFor="no-guardian"
                          className="signup-labels body-2"
                        >
                          Student is account holder, no guardian required
                        </Form.Check.Label>
                      </Form.Check>
                    )}
                    <Form.Group
                      className="input-wrapper"
                      as={Col}
                      md="12"
                      controlId="firstName"
                    >
                      <Form.Label className="signup-labels body-2">
                        First Name <span className="">*</span>
                      </Form.Label>
                      <Form.Control
                        autoComplete="off"
                        className="signup-input body-2"
                        type="text"
                        placeholder="First Name"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                    </Form.Group>
                    <Form.Group
                      className="input-wrapper"
                      as={Col}
                      md="12"
                      controlId="last name"
                    >
                      <Form.Label className="signup-labels body-2">
                        Last Name <span className="">*</span>
                      </Form.Label>
                      <Form.Control
                        autoComplete="off"
                        className="signup-input body-2"
                        type="text"
                        placeholder="Last Name"
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                      {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                    </Form.Group>
                    <Form.Group
                      className="input-wrapper"
                      as={Col}
                      md="12"
                      controlId="email address"
                    >
                      <Form.Label className="signup-labels body-2">
                        Email Address <span className="">*</span>
                      </Form.Label>
                      <Form.Control
                        autoComplete="off"
                        className="signup-input body-2"
                        type="email"
                        placeholder="Email Address"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                    </Form.Group>
                    {userType === "STUDENT" && (
                      <>
                        <Form.Group
                          className="input-wrapper"
                          as={Col}
                          md="12"
                          controlId="school"
                        >
                          <Form.Label className="signup-labels body-2">
                            School Name <span className="">*</span>
                          </Form.Label>
                          <Form.Control
                            autoComplete="off"
                            className="signup-input body-2"
                            type="text"
                            placeholder="School Name"
                            required
                            value={school}
                            onChange={(e) => setSchool(e.target.value)}
                          />
                          {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                        </Form.Group>
                        <Form.Group
                          className="input-wrapper"
                          as={Col}
                          md="12"
                          controlId="grade"
                        >
                          <Form.Label className="signup-labels body-2">
                            Grade <span className="">*</span>
                          </Form.Label>
                          <Form.Control
                            autoComplete="off"
                            className="signup-input body-2"
                            type="text"
                            placeholder="Grade"
                            required
                            value={grade}
                            onChange={(e) => setGrade(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group
                          className="input-wrapper"
                          as={Col}
                          md="12"
                          controlId="date of birth"
                        >
                          <Form.Label className="signup-labels body-2">
                            Date of Birth <span className="">*</span>
                          </Form.Label>
                          <Form.Control
                            autoComplete="off"
                            className="signup-input body-2"
                            type="date"
                            placeholder="Date of Birth"
                            required
                            value={studentDateOfBirth}
                            onChange={(e) =>
                              setStudentDateOfBirth(e.target.value)
                            }
                          />
                        </Form.Group>
                        <Form.Group
                          className="input-wrapper"
                          as={Col}
                          md="12"
                          controlId="gender"
                        >
                          <Form.Label className="signup-labels body-2">
                            Gender <span className="">*</span>
                          </Form.Label>
                          <Form.Control
                            autoComplete="off"
                            className="signup-input body-2"
                            as="select"
                            required
                            value={studentGender}
                            onChange={(e) => setStudentGender(e.target.value)}
                          >
                            <option value="" selected disabled>
                              Choose Gender
                            </option>
                            <option value="BOY">Boy</option>
                            <option value="GIRL">Girl</option>
                            <option value="NA">Other</option>
                          </Form.Control>
                        </Form.Group>
                        <Form.Group
                          className="input-wrapper"
                          as={Col}
                          md="12"
                          controlId="notes"
                        >
                          <Form.Label className="signup-labels body-2">
                            Notes <span className="">*</span>
                          </Form.Label>
                          <Form.Control
                            autoComplete="off"
                            className="signup-input body-2"
                            type="text"
                            placeholder="Enter Notes"
                            required
                            value={studentNotes}
                            onChange={(e) => setStudentNotes(e.target.value)}
                          />
                          {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                        </Form.Group>
                      </>
                    )}
                    {userType === "STUDENT" && !noGuardian && (
                      <>
                        <Form.Group
                          className="input-wrapper"
                          as={Col}
                          md="12"
                          controlId="guardianFirstName"
                        >
                          <Form.Label className="signup-labels body-2">
                            Guardian First Name <span className="">*</span>
                          </Form.Label>
                          <Form.Control
                            autoComplete="off"
                            className="signup-input body-2"
                            type="text"
                            placeholder="Guardian First Name"
                            required
                            value={guardianFirstName}
                            onChange={(e) =>
                              setGuardianFirstName(e.target.value)
                            }
                          />
                          {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                        </Form.Group>
                        <Form.Group
                          className="input-wrapper"
                          as={Col}
                          md="12"
                          controlId="guardianLastName"
                        >
                          <Form.Label className="signup-labels body-2">
                            Guardian Last Name <span className="">*</span>
                          </Form.Label>
                          <Form.Control
                            autoComplete="off"
                            className="signup-input body-2"
                            type="text"
                            placeholder="Guardian Last Name"
                            required
                            value={guardianLastName}
                            onChange={(e) =>
                              setGuardianLastName(e.target.value)
                            }
                          />
                          {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                        </Form.Group>
                        <Form.Group
                          className="input-wrapper"
                          as={Col}
                          md="12"
                          controlId="guardianEmail"
                        >
                          <Form.Label className="signup-labels body-2">
                            Guardian Email <span className="">*</span>
                          </Form.Label>
                          <Form.Control
                            autoComplete="off"
                            className="signup-input body-2"
                            type="text"
                            placeholder="Guardian Email"
                            required
                            value={guardianEmail}
                            onChange={(e) => setGuardianEmail(e.target.value)}
                          />
                          {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                        </Form.Group>
                        <Form.Group
                          className="input-wrapper"
                          as={Col}
                          md="12"
                          controlId="guardianPhoneNo"
                        >
                          <Form.Label className="signup-labels body-2">
                            Guardian Phone Number <span className="">*</span>
                          </Form.Label>
                          <Form.Control
                            autoComplete="off"
                            className="signup-input body-2"
                            type="text"
                            placeholder="Guardian Phone Number"
                            required
                            value={guardianPhone}
                            onChange={(e) => setGuardianPhone(e.target.value)}
                          />
                          {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                        </Form.Group>
                        <Form.Group
                          className="input-wrapper"
                          as={Col}
                          md="12"
                          controlId="guardianRelation"
                        >
                          <Form.Label className="signup-labels body-2">
                            Guardian Relation to Student{" "}
                            <span className="">*</span>
                          </Form.Label>
                          <Form.Control
                            autoComplete="off"
                            className="signup-input body-2"
                            type="text"
                            placeholder="Guardian Relation to Student"
                            required
                            value={guardianRelation}
                            onChange={(e) =>
                              setGuardianRelation(e.target.value)
                            }
                          />
                          {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                        </Form.Group>
                      </>
                    )}
                    <Form.Group
                      className="input-wrapper"
                      as={Col}
                      md="12"
                      controlId="phoneNo"
                    >
                      <Form.Label className="signup-labels body-2">
                        Phone Number <span className="">*</span>
                      </Form.Label>
                      <Form.Control
                        autoComplete="off"
                        className="signup-input body-2"
                        type="text"
                        placeholder="Phone Number"
                        required
                        value={phoneNo}
                        onChange={(e) => setPhoneNo(e.target.value)}
                      />
                      {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                    </Form.Group>
                    <Form.Group
                      className="input-wrapper"
                      as={Col}
                      md="12"
                      controlId="password"
                    >
                      <Form.Label className="signup-labels body-2">
                        Password <span className="">*</span>
                      </Form.Label>
                      <Form.Control
                        autoComplete="off"
                        className="signup-input body-2"
                        type="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                    </Form.Group>
                    <Form.Group
                      className="input-wrapper"
                      as={Col}
                      md="12"
                      controlId="confirm password"
                    >
                      <Form.Label className="signup-labels body-2">
                        Confirm Password <span className="">*</span>
                      </Form.Label>
                      <Form.Control
                        autoComplete="off"
                        className="signup-input body-2"
                        type="password"
                        placeholder="Confirm Password"
                        required
                        value={passwordConfirm}
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                      />
                      {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                    </Form.Group>
                    <Form.Group className="input-wrapper mt-4" as={Col} md="12">
                      <Button type="submit" className="blue-button w-100">
                        Sign Up
                      </Button>
                    </Form.Group>
                    <Form.Group className="input-wrapper mt-4" as={Col} md="12">
                      <Button
                        href="#"
                        onClick={() => navigate("/login")}
                        className="blue-button-outline w-100"
                      >
                        Login
                      </Button>
                    </Form.Group>
                  </Form>
                </div>
              </div>
            </div>
            <div className="col-xxl-7 col-md-6 pe-0 d-none d-md-block">
              <img
                src={Images.signup}
                alt="signup"
                className="img-fluid registration-image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* footer section */}
      {/* <Footer /> */}
      <Modal
        show={showVerification}
        onHide={() => showVerification(false)}
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Email Verification</Modal.Title>
        </Modal.Header>
        <Form
          className="px-3 registration-form newRegForm"
          noValidate
          validated={verificationValidated}
          onSubmit={(e) => submitVerification(e)}
        >
          <Modal.Body>
            <Form.Group
              className="input-wrapper"
              as={Col}
              md="12"
              controlId="verification code"
            >
              <Form.Label className="signup-labels body-2">
                Confirmation Code <span className="">*</span>
              </Form.Label>
              <Form.Control
                autoComplete="off"
                className="signup-input body-2"
                type="text"
                placeholder="Enter Code Here"
                required
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                }}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              type="submit"
              className="blue-button"
            >
              Submit
            </Button>
            <Button
              onClick={() => resendVerificationEmail()}
              className="blue-button"
            >
              Resend Code
            </Button>
            <Button
              onClick={() => setShowVerification(false)}
              className="blue-button"
            >
              Cancel
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default Signup;
