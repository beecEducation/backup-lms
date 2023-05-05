import React, { useState, useEffect } from "react";

import "./style.sass";
import { Button, Col, Container, Row, Form, Modal } from "react-bootstrap";
import { Images } from "../../components";
import { Text } from "@aws-amplify/ui-react";

const Register = () => {

    return (
        <Container className={"register-div"} fluid>
            <Row>
                <Col md={4} className={"first-half"}>
                    <img src={Images.logoColored} />
                    <Text className={"main-title"}>
                        Beyond <br /> Education Consulting
                    </Text>
                    <Text className={"sub-title"}>Sign-Up Here</Text>
                    <div className={"input-group"}>
                        <label className={"custom-label"}>
                            First Name<sup>*</sup>
                        </label>
                        <input
                            type={"text"}
                            className={"custom-input"}
                            placeholder={"First Name"}
                        />
                    </div>
                    <div className={"input-group"}>
                        <label className={"custom-label"}>
                            Last Name<sup>*</sup>
                        </label>
                        <input
                            type={"text"}
                            className={"custom-input"}
                            placeholder={"Last Name"}
                        />
                    </div>
                    <div className={"input-group"}>
                        <label className={"custom-label"}>
                            Email Address<sup>*</sup>
                        </label>
                        <input
                            type={"email"}
                            className={"custom-input"}
                            placeholder={"Email Address"}
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
                        />
                    </div>
                    <div className={"input-group"}>
                        <label className={"custom-label"}>
                            Confirm Password<sup>*</sup>
                        </label>
                        <input
                            type={"password"}
                            className={"custom-input"}
                            placeholder={"***********"}
                        />
                    </div>
                    <Text className={"text-center custom-link mt-2"} >
                        SignIn
                    </Text>
                    <Button
                        className={"login-btn"}
                    >
                        Register
                    </Button>

                    <div className={"main"}>
                        {" "}
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms and conditions</li>
                        </ul>
                    </div>

                </Col>
                <Col
                    md={8}
                    className={"second-half d-none d-md-block"}
                    style={{ backgroundImage: `url(${Images.loginImage})` }}
                >
                </Col>
            </Row>


        </Container>
    );
};

export default Register;
