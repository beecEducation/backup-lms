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
import { FaEdit } from "react-icons/fa";
import { CustomFooter, Images } from "../../components";
import { API, Storage } from "aws-amplify";

function EditProfile() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [profileImg, setProfileImg] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gradeLevel, setGradeLevel] = useState("");
  const [school, setSchool] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [user, setUser] = useState({});

  const [userTemp] = useSelector((state) => {
    return [state.auth.user];
  });

  useEffect(async () => {
    if (userTemp) {
      setUser(userTemp);
      const image = await Storage.get(`${userTemp.id}.jpg`);
      setProfileImg(image);
      setFirstName(userTemp.firstName);
      setLastName(userTemp.lastName);
      setGradeLevel(userTemp.grade);
      setSchool(userTemp.school);
      setEmail(userTemp.email);
      setPhone(userTemp.phone);
      setAddress(userTemp.address);
    }
  }, [userTemp]);

  const handleSubmit = () => {
    dispatch(
      Actions.dispatchUpdateUser({
        firstName: firstName,
        lastName: lastName,
        school: school,
        phone: phone,
        address: address,
        userType: userTemp.userType,
      })
    );
    navigate("/edit-profile");
  };

  return (
    <WithNavBar IsLoggedIn={true}>
      <div className="signup-screen">
        <div className="signup-section CourseRegistration-section min-vh-100">
          <div className="container py-5">
            <div className="row px-0 justify-content-between">
              <div className="col-xxl-5 col-lg-6 col-md-10 mx-auto py-5">
                <div className="row mx-0 signup-inner">
                  <div className="col py-4 py-md-0">
                    <div className="d-flex align-items-center">
                      <div className="w-100 py-5">
                        <Form className="px-3 registration-form">
                          <h3>My Profile</h3>
                          <Form.Group
                            className="input-wrapper mt-3"
                            as={Col}
                            md="12"
                            controlId="profileImage"
                          >
                            <div className="profile_pictue w-100 d-inline-flex align-items-center justify-content-center">
                              <img
                                src={profileImg || Images.avatar}
                                alt="profile picture"
                                className="img-fluid"
                              />
                              <label htmlFor="profileImage" className="ms-3">
                                <FaEdit />
                              </label>
                            </div>
                            <Form.Control
                              className="signup-input body-2 mt-2 h-100 d-none"
                              type="file"
                              onChange={async (e) => {
                                if (!e.target.files[0]) return;
                                const file = e.target.files[0];
                                var re = /(?:\.([^.]+))?$/;
                                var ext = re.exec(file.name)[1];
                                if (
                                  ext === "jpg" ||
                                  ext === "png" ||
                                  ext === "jpeg"
                                ) {
                                  await Storage.put(`${user?.id}.jpg`, file);
                                  setProfileImg(
                                    URL.createObjectURL(e.target.files[0])
                                  );
                                } else {
                                  toast.error(
                                    "Please upload a valid image file"
                                  );
                                }
                              }}
                            />
                          </Form.Group>
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
                              placeholder="Enter your first name here"
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
                              placeholder="Enter your last name here"
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                            />
                          </Form.Group>
                          <Form.Group
                            className="input-wrapper"
                            as={Col}
                            md="12"
                            controlId="emailaddress"
                          >
                            <Form.Label className="signup-labels body-2">
                              School
                              <span className="">*</span>
                            </Form.Label>
                            <Form.Control
                              className="signup-input body-2"
                              required
                              type="text"
                              placeholder="Enter your email here"
                              value={school}
                              onChange={(e) => setSchool(e.target.value)}
                            />
                          </Form.Group>
                          {/* <Form.Group
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
                          </Form.Group> */}
                          <Form.Group
                            className="input-wrapper"
                            as={Col}
                            md="12"
                            controlId="phonenumber"
                          >
                            <Form.Label className="signup-labels body-2">
                              Phone number
                              <span className="">*</span>
                            </Form.Label>
                            <Form.Control
                              className="signup-input body-2"
                              required
                              type="text"
                              placeholder="Enter your phone number here"
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
                              Address
                              <span className="">*</span>
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
                          <Form.Group
                            className="input-wrapper mt-4"
                            as={Col}
                            md="12"
                          >
                            <Button
                              onClick={() => handleSubmit()}
                              className="blue-button w-100"
                            >
                              Update
                            </Button>
                          </Form.Group>
                        </Form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer section */}
        {/* <CustomFooter /> */}
      </div>
    </WithNavBar>
  );
}

export default EditProfile;
