import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Images } from "../";
import "./style.sass";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Topbar = ({}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogout = () => {
    dispatch({
      type: "USER_LOGOUT",
    });
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <Navbar className="py-3 pt-sm-5 pb-sm-4 main-top-bar">
      <Container fluid className="mx-sm-5">
        <Navbar.Brand className="" href="/">
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
                <span className="user-name mx-sm-3 mx-1">John Doe</span>
              </>
            }
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item onClick={() => navigate('/my-courses')}>My Courses</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">My Students</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Transactions</NavDropdown.Item>
            <NavDropdown.Item onClick={() => onLogout()}>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Topbar;
