import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../store/actions";
import { ButtonCTA, Images } from "../";
import { FaBell, FaRegQuestionCircle } from "react-icons/fa";
import { IoEarthSharp } from "react-icons/io5";
import BeecLogo from "../../assets/img/icons/beecLogo.svg";
import "./style.sass";
import { CgShoppingCart } from "react-icons/cg";
import { API, Storage } from "aws-amplify";

const TopNavbar = ({ IsLoggedIn, steps }) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [currentUserCart, setCurrentUserCart] = useState([]);
  const [user, setUser] = useState({});
  const [profileImg, setProfileImg] = useState(Images.defaultAvatar);

  const [currentUser, currentLoggedinUserCart, userDetails] = useSelector(
    (state) => {
      return [state.auth.cognito, state.cart.listCartItems, state.auth.user];
    }
  );

  useEffect(() => {
    if (currentUser) {
      console.log("Current user is ", currentUser)
      dispatch(
        Actions.getUserDetails({
          userType: typeof(currentUser.profile) !== 'undefined' ? currentUser.profile: "TEACHER",
          id: currentUser.username,
        })
      );
    }
  }, [currentUser]);

  useEffect(() => {
    setCurrentUserCart(currentLoggedinUserCart);
  }, [currentLoggedinUserCart]);

  useEffect(() => {
    if (userDetails) {
      setUser(userDetails);
      const image = Storage.get(`${userDetails.id}.jpg`).then((url) => {
        // USAGE
        checkIfImageExists(url, (exists) => {
          if (exists) {
            setProfileImg(url);
          } else {
            setProfileImg(Images.defaultAvatar);
          }
        });
      });
      // setProfileImg(image);
    }
  }, [userDetails]);

  function checkIfImageExists(url, callback) {
    const img = new Image();
    img.src = url;

    if (img.complete) {
      callback(true);
    } else {
      img.onload = () => {
        callback(true);
      };

      img.onerror = () => {
        callback(false);
      };
    }
  }

  const onLogout = () => {
    dispatch({
      type: "USER_LOGOUT",
    });
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <Navbar
      style={steps ? { background: "transparent" } : { background: "white" }}
      className="main-top-nav-bar"
    >
      <Container className="">
        <Navbar.Brand className="" href={user?.id ? "/my-courses" : "/"}>
          {steps ? (
            <img
              src={BeecLogo}
              className="d-inline-block align-top img-fluid"
              alt="BEEC-LMS Logo"
            />
          ) : (
            <img
              src={Images.logoColored}
              className="d-inline-block align-top img-fluid"
              alt="BEEC-LMS Logo"
            />
          )}
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          {IsLoggedIn ? (
            <>
              <Nav className="align-items-center">
                {
                  steps?"":
               
                <Nav.Link>
                  <FaBell size={23} />
                </Nav.Link>
                 }
              </Nav>

              <NavDropdown
                className="user-menu"
                title={
                  <>
                    <img src={profileImg} className="user-image img-fluid" />
                    {steps ? (
                      <span style={{color:"white" }} className="user-name mx-sm-3 mx-1">
                        {user?.firstName}
                      </span>
                    ) : (
                      <span className="user-name mx-sm-3 mx-1">
                        {user?.firstName}
                      </span>
                    )}
                  </>
                }
                id="collasible-nav-dropdown"
              >
                {/* <NavDropdown.Item onClick={() => navigate("/dashboard_revised")}>
                  Dashboard
                </NavDropdown.Item> */}
                <NavDropdown.Item onClick={() => navigate("/edit-profile")}>
                  My Profile
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/my-courses")}>
                  My Courses
                </NavDropdown.Item>
                {user?.userType !== "STUDENT" && (
                  <>
                    <NavDropdown.Item onClick={() => navigate("/students")}>
                      My Students
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      onClick={() => navigate("/transaction-history")}
                    >
                      Transactions
                    </NavDropdown.Item>
                    {/* <NavDropdown.Item
                      onClick={() => navigate("/printpdf")}
                    >
                      Print PDF
                    </NavDropdown.Item> */}
                  </>
                )}
                <NavDropdown.Item onClick={() => onLogout()} href="#">
                  Logout
                </NavDropdown.Item>
              </NavDropdown>

              <Nav className="align-items-center">
                {user?.userType !== "STUDENT" && (
                  <Nav.Link onClick={() => navigate("/courses")}>
                    <ButtonCTA
                      label={"Find a Course"}
                      lightBlue
                      height="33px"
                    />
                  </Nav.Link>
                )}
                {
                  steps?"":
               
                <Nav.Link
                  onClick={() => navigate("/cart")}
                  href="#"
                  className="position-relative"
                >
                  <img
                    src={Images.cart}
                    alt=""
                    className="img-fluid cart_icon"
                  />
                  {currentUserCart && currentUserCart?.items?.length != 0 ? (
                    <span className="cart_item_count label-2">
                      {currentUserCart?.length}
                    </span>
                  ) : null}
                </Nav.Link>
                 }
                {/* <Nav.Link>
                  <CgShoppingCart size={23} onClick={() => navigate("/cart")} />
                </Nav.Link> */}
              </Nav>
            </>
          ) : (
            <>
              <Nav className="me-auto align-items-center">
                <NavDropdown title="My Score Reports" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#">Settings</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#">SCORE SENDS</Nav.Link>
                <Nav.Link href="#">AP POTENTIAL</Nav.Link>
                <Nav.Link href="#">END DEMO</Nav.Link>
              </Nav>
              <Nav className="align-items-center">
                <Nav.Link href="#" className=" text-capitalize">
                  {" "}
                  <FaRegQuestionCircle color="#808080" /> Support
                </Nav.Link>
                <Nav.Link href="#" className="">
                  {" "}
                  <IoEarthSharp color="#808080" /> EN
                </Nav.Link>
              </Nav>
              <NavDropdown
                className="user-menu"
                title={
                  <>
                    <img
                      src={Images.userPlaceholder}
                      className="user-image img-fluid"
                    />
                    <span className="user-name mx-sm-3 mx-1">John Doe</span>
                  </>
                }
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Settings</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Help</NavDropdown.Item>
                <NavDropdown.Item onClick={() => onLogout()} href="#">
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
