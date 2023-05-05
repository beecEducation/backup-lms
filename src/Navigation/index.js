import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import {
  MainQuestion,
  ScoreReports,
  ScoreDetails,
  UpcomingTest,
  EditProfile,
} from "../Views";
import Login from "../Views/Auth/Login";
import Signup from "../Views/Auth/Signup";
import Transactions from "../Views/Transactions";
import Cart from "../Views/Cart";
import EditCart from "../Views/Cart/EditCart";
import Dashboard from "../Views/Dashboard";
import PackageQuizzes from "../Views/PackageQuizzes";
import Courses from "../Views/Courses";
import { Auth } from "aws-amplify";
import { useSelector } from "react-redux";
import CourseRegistration from "../Views/CourseRegistration";
import StartTest from "../Views/StartTest";
import ScoreOverview from "../Views/ScoreOverview";

import SignIn from "../Views/SignIn";

import Students from "../Views/Students";
import MyCourses from "../Views/MyCourses";
import Quiz from "../Views/Quiz";
import Register from "../Views/Register";
import PrintPdf from "../Views/PrintPdf";
import HSPTScoreReport from "../Views/HSPTScoreReport";
import Steps from "../Views/Steps"

export default function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  const [currentLoggedinUser] = useSelector((state) => {
    return [state.auth.cognito];
  });

  useEffect(() => {
    if (currentLoggedinUser) {
      setCurrentUser(currentLoggedinUser.username);
    }
  }, [currentLoggedinUser]);

  return (
    <>
      <Routes>
        <Route path={"/hspt"} element={<HSPTScoreReport />} />
        <Route path={"/printpdf"} element={<PrintPdf />} />
        <Route path={"/register"} element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/quiz" element={<MainQuestion />} />
        <Route path="/new_quiz" element={<Quiz />} />
        <Route path="/score-report" element={<ScoreReports />} />
        <Route path="/score-details" element={<ScoreDetails />} />
        <Route path="/upcoming-test" element={<UpcomingTest />} />
        <Route path="/transaction-history" element={<Transactions />} />
        <Route path="/my-courses" element={<MyCourses />} />
        <Route path="/students" element={<Students />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="cart" element={<Cart />} />
        <Route path="edit-cart" element={<EditCart />} />
        <Route path="/quizzes" element={<PackageQuizzes />} />
        <Route path="/login-copy" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course-registration" element={<CourseRegistration />} />
        <Route path="*" element={<Navigate to="/login" />} />
        <Route path="/start_test" element={<StartTest />} />
        <Route path="/score_overview" element={<ScoreOverview />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/step" element={<Steps />} />

      </Routes>
    </>
  );
}
