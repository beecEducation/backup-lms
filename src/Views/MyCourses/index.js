/*
  API's used in this file
  1. listStudentPackages or listUserPackages
  2. listUserQuizzesByUserPackageId
*/

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../store/actions";
import Moment from "react-moment";
import { Images, ReactTable } from "../../components";
import { useNavigate } from "react-router-dom";
import WithNavBar from "../../Layouts/WithNavBar";
import StudentTopbar from "../../components/StudentTopbar";
import StudentMenu from "../../components/StudentMenu";
import "./style.sass";
import { toast } from "react-toastify";
import CustomFooter from "../../components/CustomFooter";

function MyCourses() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [allTransactions, setAllTransactions] = useState([]);
  const [myCourses, setMyCourses] = useState([]);
  const [user, setUser] = useState({});
  const [tableData, setTableData] = useState([]);
  const columns = React.useMemo(() => [
    {
      Header: "",
      accessor: "image",
      disableSortBy: true,
    },
    {
      Header: "Course Name",
      accessor: "name",
    },
    {
      Header: "Enrolled Student",
      accessor: "student",
    },
    {
      Header: "Last Activity",
      accessor: "activity",
    },
    {
      Header: "Licensed Until",
      accessor: "license",
    },
  ]);

  const [currentUser, courses, userTemp] = useSelector((state) => {
    return [state.auth.cognito, state.courses.myCourses, state.auth.user];
  });

  useEffect(() => {
    if (currentUser) {
      if (window?.location?.href?.includes("checkoutId=")) {
        toast.success(
          "We've confirmed your payment. Thank you for registration"
        );
        if (currentUser.profile === "STUDENT") {
          dispatch(
            Actions.dispatchMyCousesForStudent({
              studentId: currentUser.username,
              sortDirection: "DESC",
            })
          );
        } else {
          dispatch(
            Actions.dispatchMyCousesForParent({
              userId: currentUser.username,
              sortDirection: "DESC",
            })
          );
        }
        setTimeout(() => {
          navigate("/my-courses");
          window?.location?.reload();
        }, 5000);
      } else {
        if (currentUser.profile === "STUDENT") {
          dispatch(
            Actions.dispatchMyCousesForStudent({
              studentId: currentUser.username,
              sortDirection: "DESC",
            })
          );
        } else {
          dispatch(
            Actions.dispatchMyCousesForParent({
              userId: currentUser.username,
              sortDirection: "DESC",
            })
          );
        }
      }
    }
  }, [currentUser]);

  const data = [];
  useEffect(() => {
    if (courses) {
      setMyCourses(courses);
      courses?.map((singleCourse, key) => {
        data.push({
          image: (
            <div className="table-rows" key={key}>
              {/* <img className="cart-course-img" src={singleCourse?.package?.image} /> */}
              <img className="cart-course-img" src="https://hspt.s3.amazonaws.com/hspt-package-graphic.png" />
            </div>
          ),
          name: (
            <div className="table-rows" key={key}>
              <a
                href="#"
                className="text-decoration-none"
                onClick={() => onClickCourse(singleCourse?.id)}
              >
                <span className="active text-decoration-underline">
                  {/* {singleCourse?.package?.title} */}
                  {singleCourse?.package?.alias ? singleCourse?.package?.alias : singleCourse?.package?.title}
                </span>
              </a>
            </div>
          ),
          student: (
            <div className="table-rows" key={key}>
              <span className="">
                {singleCourse?.student?.firstName} {singleCourse?.student?.lastName}
              </span>
            </div>
          ),
          activity: (
            <div className="table-rows" key={key}>
              <Moment format="MMM DD, YYYY" add={singleCourse?.duration}>
                {singleCourse?.updatedAt}
              </Moment>
            </div>
          ),
          license: (
            <div className="table-rows" key={key}>
              <Moment format="MMM DD, YYYY" add={singleCourse?.duration}>
                {singleCourse?.expiresAt}
              </Moment>
            </div>
          ),
        });
      });
      setTableData(data);
    }
  }, [courses]);

  useEffect(() => {
    if (userTemp) {
      setUser(userTemp);
    }
  }, [userTemp]);

  const onClickCourse = (id) => {
    dispatch(Actions.dispatchListUserQuizzesByUserPackageId({ id })).then(
      (response) => {
        navigate("/quizzes");
      }
    );
  };

  return (
    <WithNavBar IsLoggedIn={true}>
      <div className={"container courses-view pb-3"}>
        <StudentTopbar name={"John"} />
        <StudentMenu active={"courses"} />
        <div className={"heading"}>
          <div className={"start-item"}>My Courses</div>
        </div>

        <div className={"courses-table"}>
          {myCourses?.length == 0 ? (
            <div className="text-center p-5 emptyCart">
              {/* <img src={Images.cartEmpty} alt="" className="img-fluid mb-4" /> */}
              <h4 className="heading-4">No Courses Found</h4>
              <h5 className="heading-5 my-4">Purchase any course to view it</h5>
              <a
                className="blue-button col"
                onClick={() => navigate("/courses")}
              >
                Find a Course
              </a>
            </div>
          ) : (
            <div className="table-responsive myCoursesTable">
              <ReactTable columns={columns} data={tableData} pagination={true} />
            </div>
          )}
        </div>
      </div>
      <CustomFooter />
    </WithNavBar>
  );
}

export default MyCourses;
