import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as Actions from "../../store/actions";
import * as TYPES from "../../store/actions/actions";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Form, Modal, Col } from "react-bootstrap";
import { Images } from "../../components";
import "./style.sass";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [validatedForgot, setValidatedForgot] = useState(false);
  const [validatedCode, setValidatedCode] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [showForgot, setShowForgot] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      dispatch({ type: TYPES.UI_START_LOADING });
      Auth.signIn(username, password)
        .then((user) => {
          dispatch(Actions.submitLoginUser(Auth?.user?.attributes));
          if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
            // const { requiredAttributes } = user.challengeParam; // the array of required attributes, e.g ['email', 'phone_number']
            Auth.completeNewPassword(
              user, // the Cognito User Object
              password // the new password
            )
              .then((user) => {
                dispatch({ type: TYPES.UI_STOP_LOADING });
                // at this time the user is logged in if no MFA required
              })
              .catch((error) => {
                dispatch({ type: TYPES.UI_STOP_LOADING });
                toast.error(error.message);
              });
          } else {
            
            // other situations
            toast.success("Successfully Signed in");
            dispatch({ type: TYPES.UI_STOP_LOADING });
            // dispatch(Actions.dispatchUserData(user ? user?.attributes?.sub : Auth.attributes.sub));
            // dispatch(Actions.dispatchCartItems(user ? user?.attributes?.sub : Auth.attributes.sub));
            // dispatch(Actions.dispatchTransactions(user ? user?.attributes?.sub : Auth.attributes.sub));
            // setTimeout(() => {
            navigate("/courses");
            // }, 2000);
          }
        })
        .catch((error) => {
          dispatch({ type: TYPES.UI_STOP_LOADING });
          if(error.code === "UserNotConfirmedException"){
          } else {
            toast.error(error.message);
          }
        });
      setValidated(true);
    }
  };
  const submitForgot = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      try {
        const user = await Auth.forgotPassword(username);
        if (user) {
          toast.success("A code has been sent to " + username);
          setShowNewPassword(true);
          // dispatch(Actions.dispatchUserData(recentRegister));
          // navigate('/login')
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
    setValidatedForgot(true);
  };
  const submitCode = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      try {
        const user = await Auth.forgotPasswordSubmit(username, code, password);
        if (user) {
          toast.success("Password Reset Successfully");
          setShowNewPassword(false);
          setTimeout(() => {
            window.location.assign("/login");
          }, 1000);
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
    setValidatedCode(true);
  };
  const setEmptyFields = () => {
    setShowForgot(!showForgot);
    setUsername("");
    setPassword("");
    setCode("");
  };

  return (
    <div className="signup-screen">
      {/* top nav bar */}
      {/* <Header /> */}
      {/* signup section */}
      <div className="signup-section">
        <div className="col-lg-10 col-xl-8 col-md-11 col-11 mx-auto py-5">
          <div className="row align-items-lg-center mx-0 signup-inner">
            <div className="col-md-5 py-4 py-md-0">
              <div className="d-flex align-items-center">
                <div className="w-100 py-4 py-lg-0">
                  <div className="px-3 mb-5">
                    <h3 className="heading-3 mb-1">Login to your account</h3>
                    <p className="signup-summary">
                      All Fields must be filled unless marked (Optional)
                    </p>
                    <p className="signup-summary"></p>
                  </div>
                  <Form
                    className="px-3"
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
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
                        className="signup-input body-2"
                        type="email"
                        placeholder="Email Address"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
                        className="signup-input body-2"
                        type="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                    </Form.Group>
                    <Form.Group className="input-wrapper mt-5" as={Col} md="12">
                      <Button type="submit" className="blue-button w-100">
                        Login
                      </Button>
                    </Form.Group>
                    <Form.Group className="input-wrapper mt-4" as={Col} md="12">
                      <Button
                        onClick={() => setEmptyFields()}
                        className="blue-button-outline w-100"
                      >
                        Forgot Password
                      </Button>
                    </Form.Group>
                    <Form.Group className="input-wrapper mt-4" as={Col} md="12">
                      <Button
                        href="#"
                        onClick={() => navigate("/signup")}
                        className="blue-button-outline w-100"
                      >
                        Sign Up
                      </Button>
                    </Form.Group>
                  </Form>
                </div>
              </div>
            </div>
            <div className="col-md-7 pe-0 d-none d-md-block">
              <img
                src={Images.signup}
                alt="signup"
                className="img-fluid signup-image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* footer section */}
      {/* <Footer /> */}
      <Modal show={showForgot} onHide={() => setShowForgot(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Forgot Password</Modal.Title>
        </Modal.Header>
        {showNewPassword ? (
          <Form noValidate validated={validatedCode} onSubmit={submitCode}>
            <Modal.Body>
              <Form.Group
                className="input-wrapper"
                as={Col}
                md="12"
                controlId="Forgot code"
              >
                <Form.Label className="signup-labels body-2">
                  Enter Code <span className="">*</span>
                </Form.Label>
                <Form.Control
                  className="signup-input body-2"
                  type="text"
                  placeholder="Enter Code"
                  required
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="input-wrapper"
                as={Col}
                md="12"
                controlId="forgot password"
              >
                <Form.Label className="signup-labels body-2">
                  Enter New Password <span className="">*</span>
                </Form.Label>
                <Form.Control
                  className="signup-input body-2"
                  type="password"
                  placeholder="Enter New Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit" className="blue-button">
                Submit
              </Button>
            </Modal.Footer>
          </Form>
        ) : (
          <Form
            noValidate
            validated={validatedForgot}
            onSubmit={submitForgot}
            // onSubmit={() => setShowNewPassword(true)}
          >
            <Modal.Body>
              <Form.Group
                className="input-wrapper"
                as={Col}
                md="12"
                controlId="Forgot password"
              >
                <Form.Label className="signup-labels body-2">
                  Email Address <span className="">*</span>
                </Form.Label>
                <Form.Control
                  className="signup-input body-2"
                  type="email"
                  placeholder="Email Address"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit" className="blue-button">
                Submit
              </Button>
            </Modal.Footer>
          </Form>
        )}
      </Modal>
    </div>
  );
}

export default Login;
