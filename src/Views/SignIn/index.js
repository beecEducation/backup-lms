import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as Actions from "../../store/actions";
import * as TYPES from "../../store/actions/actions";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "./style.sass";
import { Button, Col, Container, Row, Form, Modal } from "react-bootstrap";
import { Images } from "../../components";
import { Text } from "@aws-amplify/ui-react";

const SignIn = () => {
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
  const [showVerification, setShowVerification] = useState(false);
  const [validatedVerification, setValidatedVerification] = useState(false);
  const [showForceNewPassword, setShowForceNewPassword] = useState(false);
  const [forceNewPassword, setForceNewPassword] = useState("");
  const [user, setUser] = useState({});

  const handleSubmit = async () => {
    if (!username) {
      toast.error("Please enter username");
      return;
    } else if (!password) {
      toast.error("Please enter password");
      return;
    }
    dispatch({ type: TYPES.UI_START_LOADING });
    Auth.signIn(username, password)
      .then((user) => {
        console.log("User is ", user)
        console.log("Auth attributes are ", Auth?.user?.attributes)
        setUser(user);
        var userAttributes = Auth?.user?.attributes;
        userAttributes.username = user.username;
        dispatch(Actions.submitLoginUser(userAttributes));
        if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
          setShowForceNewPassword(true);
          // Auth.completeNewPassword(
          //   user, // the Cognito User Object
          //   password // the new password
          // )
          //   .then((user) => {
          //     dispatch({ type: TYPES.UI_STOP_LOADING });
          //     // at this time the user is logged in if no MFA required
          //   })
          //   .catch((error) => {
          //     dispatch({ type: TYPES.UI_STOP_LOADING });
          //     toast.error(error.message);
          //   });
        } else {
          // other situations
          toast.success("Successfully Signed in");
          dispatch({ type: TYPES.UI_STOP_LOADING });
          // Call get user details API
          dispatch(Actions.getUserDetails({ id: user.username })).then((userDetails) => {
            console.log("USER DETAILS ========================", userDetails)
            if(userDetails?.status === "PENDING") {
              const input = {
                id: user.username,
                status: "ENABLED"
              }
              dispatch(Actions.dispatchUpdateUserStatus(input));
            }
          });
          if (user?.attributes?.profile === "STUDENT") {
            navigate("/my-courses");
          } else {
            navigate("/courses");
          }
        }
      })
      .catch((error) => {
        console.log("I am in error ", error.code)
        dispatch({ type: TYPES.UI_STOP_LOADING });
        if (error.code === "UserNotConfirmedException") {
          setShowVerification(true);
        } else if (error.code === "UserNotFoundException") {
          dispatch(Actions.checkUserEmail(username, "CHECK_EMAIL")).then((res) => {
            const jsonParsed = JSON.parse(res);
            console.log("JSON PARSED ", jsonParsed, "STATUS CODE ", jsonParsed.statusCode, "BODY ", jsonParsed.body.data.id, "BODY DATA ", jsonParsed.body)
            if(jsonParsed.statusCode === 200 && jsonParsed.body.data.id) {
              setUsername(jsonParsed.body.data.id)
              setShowVerification(true);
            } else {
              toast.error("User not found");
            }
          })
        } else {
          toast.error(error.message);
        }
      });
    setValidated(true);
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

  const submitVerification = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      try {
        const user = await Auth.confirmSignUp(username, code);
        if (user === "SUCCESS") {
          toast.success("You have successfully registered");
          setShowVerification(false);
          navigate("/login");
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
    setValidated(true);
  };

  const submitForceNewPassword = async (event) => {
    event.preventDefault();
    try {
      Auth.completeNewPassword(
        user, // the Cognito User Object
        forceNewPassword // the new password
      )
        .then((user) => {
          dispatch({ type: TYPES.UI_STOP_LOADING });
          setShowForceNewPassword(false)
          toast.success("Password Reset Successfully");
          // at this time the user is logged in if no MFA required
        })
        .catch((error) => {
          dispatch({ type: TYPES.UI_STOP_LOADING });
          toast.error(error.message);
        });
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <Container className={"signin-div"} fluid>
      <Row>
        <Col md={4} className={"first-half"}>
          <img src={Images.logoColored} />
          <Text className={"main-title"}>
            Beyond <br /> Education Consulting
          </Text>
          <Text className={"sub-title"}>Sign-in Here</Text>
          <div className={"input-group"}>
            <label className={"custom-label"}>
              Username<sup>*</sup>
            </label>
            <input
              type={"text"}
              className={"custom-input"}
              placeholder={"Username e.g smith"}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={"input-group"}>
            <label className={"custom-label"}>
              Password<sup>*</sup>
            </label>
            <input
              type={"password"}
              className={"custom-input"}
              placeholder={"***********"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Text
            className={"text-center custom-link mt-2"}
            onClick={() => setEmptyFields()}
          >
            Forget Password
          </Text>
          <Text
            className={"text-center custom-link mt-2"}
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </Text>
          <Button
            className={"login-btn"}
            onClick={() => {
              handleSubmit();
            }}
          >
            Login
          </Button>

          {/* <div className={"main"}>
            {" "}
            <ul>
              <li>Privacy Policy</li>
              <li>Terms and conditions</li>
            </ul>
          </div> */}
        </Col>
        <Col
          md={8}
          className={"second-half d-none d-md-block"}
          style={{ backgroundImage: `url(${Images.loginImage})` }}
        ></Col>
      </Row>

      <Modal
        show={showForceNewPassword}
        onHide={() => setShowForceNewPassword(false)}
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>New Password</Modal.Title>
        </Modal.Header>
        <Form noValidate onSubmit={submitForceNewPassword}>
          <Modal.Body>
            <Form.Group className="input-wrapper" as={Col} md="12">
              <Form.Label className="signup-labels body-2">
                New Password <span className="">*</span>
              </Form.Label>
              <Form.Control
                autoComplete="off"
                className="signup-input body-2"
                type="password"
                placeholder="Enter Code Here"
                required
                value={forceNewPassword}
                onChange={(e) => setForceNewPassword(e.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" className="blue-button">
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      <Modal
        show={showVerification}
        onHide={() => setShowVerification(false)}
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Email Verification</Modal.Title>
        </Modal.Header>
        <Form
          noValidate
          validated={validatedVerification}
          onSubmit={submitVerification}
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
                onChange={(e) => setCode(e.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" className="blue-button">
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

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
          <Form noValidate validated={validatedForgot} onSubmit={submitForgot}>
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
    </Container>
  );
};

export default SignIn;
