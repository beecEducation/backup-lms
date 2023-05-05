import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../store/actions";
import { Images, ReactTable } from "../../components";
import { useNavigate } from "react-router-dom";
import WithNavBar from "../../Layouts/WithNavBar";
import { Text } from "@aws-amplify/ui-react";
import "./style.sass";
import { Col, Modal, Row, Button } from "react-bootstrap";
import CustomFooter from "../../components/CustomFooter";
import { BsPencil } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import UserAddedModal from "../../components/UserAddedModal";
import UserDeleteModal from "../../components/UserDeleteModal";
import StudentTopbar from "../../components/StudentTopbar";
import StudentMenu from "../../components/StudentMenu";
import { toast } from "react-toastify";

function Students() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [enableAction, setEnableAction] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [school, setSchool] = useState("");
  const [gradeLevel, setGradeLevel] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [deleteUserId, setDeleteUserId] = useState(null);
  const [deletedUserName, setDeletedUserName] = useState(null);
  const handleShow = () => setShowModal(true);
  const handleHide = () => setShowModal(false);
  const [listAllStudents, setListAllStudents] = useState([]);
  const [tableData, setTableData] = useState([]);
  const columns = React.useMemo(() => [
    {
      Header: "Student Name",
      accessor: "student",
    },
    {
      Header: "Username / Email",
      accessor: "username",
    },
    {
      Header: "",
      accessor: "actions",
      disableSortBy: true,
    },
  ]);

  const [currentUser, students] = useSelector((state) => {
    return [state.auth.cognito, state.students.listStudentsByParent];
  });

  useEffect(() => {
    if (currentUser) {
      console.log("Current user is : ", currentUser)
      dispatch(
        Actions.dispatchListStudentsByFamiy({
          familyId: currentUser['custom:familyId'],
          sortDirection: "DESC",
        })
      );
      // dispatch(
      //   Actions.dispatchListStudentsByParent({
      //     parentId: currentUser.username,
      //     sortDirection: "DESC",
      //   })
      // );
    }
  }, [currentUser]);

  const data = [];
  useEffect(() => {
    setListAllStudents(students);
    students?.map((dataa, key) => {
      data.push({
        student: (
          <div className="table-rows" key={key}>
            <span className="active">
              {dataa?.firstName} {dataa?.lastName}
            </span>
          </div>
        ),
        username: (
          <div className="table-rows" key={key}>
            <span className="">{dataa?.email}</span>
          </div>
        ),
        actions: (
          <div className="table-rows" key={key}>
            {enableAction ? (
              <span>
                <BsPencil
                  onClick={handleShow}
                  className={"mr-2"}
                  style={{
                    color: "rgba(0, 0, 0, 0.5)",
                    cursor: "pointer",
                  }}
                />{" "}
                <MdOutlineCancel
                  onClick={() => {
                    setShowDeleteModal(true);
                    setDeleteUserId(dataa?.id);
                    setDeletedUserName(
                      dataa?.firstName + " " + dataa?.lastName
                    );
                  }}
                  style={{ color: "red", cursor: "pointer" }}
                />
              </span>
            ) : (
              ""
            )}
          </div>
        ),
      });
    });
    setTableData(data);
  }, [students, enableAction]);

  const handleSubmit = () => {
    if (!email) {
      return toast.error("Email is required");
    } else if (!firstName) {
      return toast.success("First name is required");
    } else if (!lastName) {
      return toast.success("Last name is required");
    }
    const payload = {
      parentId: currentUser.username,
      firstName: firstName,
      lastName: lastName,
      school: school,
      grade: gradeLevel,
      email: email,
      phone: phone,
      address: address,
      userType: "STUDENT",
    };
    dispatch(Actions.createStudent(payload)).then((response) => {
      const student = JSON.parse(response.data.addUser);
      if (student.statusCode === 200) {
        setShowModal(false);
        setShowUserModal(true);
        setFirstName("");
        setLastName("");
        setSchool("");
        setGradeLevel("");
        setEmail("");
        setPhone("");
        setAddress("");
        toast.success(student.body.message)
      } else {
        toast.error(student.body.message);
      }
    });
  };

  const handleDelete = () => {
    if (!deleteUserId) {
      return toast.error("Please select a user to delete");
    }

    dispatch(
      Actions.deleteUser({ userId: deleteUserId, parentId: currentUser.username })
    ).then((response) => {
      const parsed = JSON.parse(response.data.removeUser);
      if (parsed.statusCode === 200) {
        setDeleteUserId(null);
        setShowDeleteModal(false);
      } else {
        return toast.error(parsed.body.message);
      }
    });
    // deleteUser
  };

  return (
    <WithNavBar IsLoggedIn={true}>
      <div className={"container students student-table"}>
        <StudentTopbar name={"Jhon"} />
        <StudentMenu active={"students"} />
        <Row className={"heading"}>
          <Col xs={7} className={"start-item"}>
            My Students
          </Col>
          <Col
            xs={3}
            className={"end-item active"}
            style={{ textAlign: "end" }}
          >
            <span style={{ cursor: "pointer" }} onClick={handleShow}>
              Add Student
            </span>
          </Col>
          <Col xs={2} className={"end-item"}>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                setEnableAction(!enableAction);
              }}
            >
              Action
            </span>
          </Col>
        </Row>

        <div className={"pb-3"}>
          {listAllStudents?.length == 0 ? (
            <div className="text-center bg-white p-5 emptyCart">
              <h4 className="heading-4">No Students Found</h4>
              <a
                href="#myCoursesSection"
                className="blue-button col"
                onClick={() => navigate("/")}
              >
                Find a Course
              </a>
            </div>
          ) : (
            <div className="table-responsive studentsTable">
              <ReactTable columns={columns} data={tableData} pagination={true} />
            </div>
          )}
        </div>
        <Modal show={showModal} onHide={handleHide} size="md" centered>
          <Modal.Body style={{ padding: "20px" }}>
            <div className={"student-modal-heading"}>Student Information</div>
            <div className={"student-input-group"}>
              <label className={"custom-label"}>
                First Name <sup>*</sup>
              </label>
              <input
                className={"custom-input"}
                type={"text"}
                placeholder={"Enter student first name here"}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className={"student-input-group"}>
              <label className={"custom-label"}>
                Last Name <sup>*</sup>
              </label>
              <input
                className={"custom-input"}
                type={"text"}
                placeholder={"Enter student last name here"}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className={"student-input-group"}>
              <label className={"custom-label"}>
                School <sup>*</sup>
              </label>
              <input
                className={"custom-input"}
                type={"text"}
                placeholder={"Enter the name of your student’s school"}
                value={school}
                onChange={(e) => setSchool(e.target.value)}
              />
            </div>
            <div className={"student-input-group"}>
              <label className={"custom-label"}>
                Grade level <sup>*</sup>
              </label>
              <select
                className={"custom-drop-down"}
                placeholder={"Grade Level"}
                value={gradeLevel}
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
                {/* })} */}
              </select>
            </div>
            <div className={"student-input-group"}>
              <label className={"custom-label"}>
                Email <sup>*</sup>
              </label>
              <input
                className={"custom-input"}
                type={"email"}
                placeholder={"Enter your student’s email here"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={"student-input-group"}>
              <label className={"custom-label"}>
                Phone Number <sup>*</sup>
              </label>
              <input
                className={"custom-input"}
                type={"text"}
                placeholder={"Enter your student’s phone number here"}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className={"student-input-group"}>
              <label className={"custom-label"}>
                Address <sup>*</sup>
              </label>
              <input
                className={"custom-input"}
                type={"text"}
                placeholder={"City, State"}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className={"student-btn-div mt-3"}>
              <button onClick={handleSubmit} className={"student-modal-btn"}>
                Create
              </button>
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          show={showUserModal}
          onHide={() => setShowUserModal(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body style={{ padding: "0px" }}>
            <Row>
              <Col md={6}>
                <img
                  className={"welcome-img img-responsive"}
                  src={Images.loginModalImage}
                />
              </Col>
              <Col md={6} style={{ padding: "55px" }}>
                <div className={"container box-body"}>
                  <Text className={"main-text"}>{"User Added!"}</Text>
                  <Text className={"sub-text"}>
                    {"You have successfully added a user."}
                  </Text>
                  <Button
                    className={"ok-btn"}
                    size="lg"
                    onClick={() => setShowUserModal(false)}
                  >
                    Ok
                  </Button>
                </div>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>

        <Modal
          show={showDeleteModal}
          onHide={() => setShowDeleteModal(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body style={{ padding: "0px" }}>
            <Row>
              <Col md={6}>
                <img
                  className={"welcome-img img-responsive"}
                  src={Images.loginModalImage}
                />
              </Col>
              <Col md={6} style={{ padding: "55px" }}>
                <div className={"container box-body"}>
                  <Text className={"main-text"}>Delete {deletedUserName}?</Text>
                  <Text className={"sub-text"}>
                    Are you sure you want to delete this user?
                  </Text>
                  <div className={"btn-div"}>
                    <Button
                      className={"no-btn"}
                      size="md"
                      onClick={() => setShowDeleteModal(false)}
                    >
                      No
                    </Button>
                    <Button
                      className={"yes-btn"}
                      size="md"
                      onClick={() => handleDelete()}
                    >
                      Yes
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>

        {/* <UserAddedModal
          showModal={showUserModal}
          title={"User Added!"}
          description={"You have successfully added a user."}
        />
        {showDeleteModal && (
        <UserDeleteModal
          showModal={showDeleteModal}
          title={deletedUserName}
          user={deletedUserName}
          description={"Are you sure you want to delete this user?"}
        />
      )} */}
      </div>
      <CustomFooter />
    </WithNavBar>
  );
}

export default Students;
