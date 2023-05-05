import "./style.sass";
import { Container, Navbar, NavDropdown } from "react-bootstrap";
import { Images } from "../index";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Actions from "../../store/actions";

const QuizNavbar = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [currentUserCart, setCurrentUserCart] = useState([]);
  const [user, setUser] = useState({});

  const [currentUser, currentLoggedinUserCart, userDetails] = useSelector(
    (state) => {
      return [state.auth.cognito, state.cart.listCartItems, state.auth.user];
    }
  );

  useEffect(() => {
    if (currentUser) {
      dispatch(
        Actions.getUserDetails({
          userType:
            typeof currentUser.profile !== "undefined"
              ? currentUser.profile
              : "TEACHER",
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
    }
  }, [userDetails]);

  const onLogout = () => {
    dispatch({
      type: "USER_LOGOUT",
    });
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <Navbar className="quiz-nav-bar">
        <Navbar.Brand className="" href={user?.id ? "/quizzes" : "/"}>
          <img
            src={Images.logo}
            className="d-inline-block align-top img-fluid"
            alt="BEEC-LMS Logo"
          />
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <NavDropdown
            className="user-menu"
            title={
              <>
                <img
                  src={Images.userPlaceholder}
                  className="user-image img-fluid"
                />
                <span className="user-name mx-sm-3 mx-1">
                  {" "}
                  {user?.firstName}
                </span>
              </>
            }
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item onClick={() => navigate("/quizzes")}>
              Dashboard
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
              </>
            )}
            <NavDropdown.Item onClick={() => onLogout()} href="#">
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default QuizNavbar;
