import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import * as Actions from '../../store/actions'
// import * as TYPES from '../../store/actions/actions';
import { Button, Form, Col, ListGroup } from 'react-bootstrap';
import Moment from 'react-moment';
import { CourseDetail } from '../../components'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
function EditCart() {
    const dispatch = useDispatch()
    let navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [selectedClass, setSelectedClass] = useState([])
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [gradeLevel, setGradeLevel] = useState("")
    const [school, setSchool] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [currentUser, setCurrentUser] = useState("")
    const [currentRegUser, setCurrentRegUser] = useState("")
    const [currentColor, setCurrentColor] = useState("")
    const [lunch, setLunch] = useState(false)
    const [showToggle, setShowToggle] = useState(false)
    const [currentRegClass, setCurrentRegClass] = useState([])
    const [totalCost, setTotalCost] = useState(0)
    // get registered course data and save it in constant
    // const [
    //     currentRegisteredCourse
    // ] = useSelector((state) => {
    //     return [
    //         state.classReg.dataForClassReg
    //     ]
    // });
    // save registered course data in usestate
    // useEffect(() => {
    //     setCurrentRegClass(currentRegisteredCourse?.body)
    // }, [currentRegisteredCourse, currentRegClass])

    // get current user and save it in constant
    // const [
    //     currentLoggedinUser
    // ] = useSelector((state) => {
    //     return [
    //         state.userInfo.userAllData
    //     ]
    // });
    // save current user data in usestate
    // useEffect(() => {
    //     setCurrentUser(currentLoggedinUser)
    // }, [currentLoggedinUser, currentUser])

    // get edit user and save it in constant
    // const [
    //     currentRegStudent
    // ] = useSelector((state) => {
    //     return [
    //         state.cartInfo.cartSingleData
    //     ]
    // });
    // save edit user data in usestate
    // useEffect(() => {
    //     setCurrentRegUser(currentRegStudent)
    //     setFirstname(currentRegUser?.firstName)
    //     setLastname(currentRegUser?.lastName)
    //     setSchool(currentRegUser?.school)
    //     setGradeLevel(currentRegUser?.grade)
    //     setEmail(currentRegUser?.email)
    //     setPhone(currentRegUser?.phone)
    //     setAddress(currentRegUser?.address)
    //     setLunch(currentRegUser?.lunch == "TRUE" ? true : currentRegUser?.classId == 'e65898bd-734f-45cb-a9d7-8f08b7b2569f' ? true : currentRegUser?.classId == '37722818-fe60-4f77-ad80-b551ca0b88b2' ? true : false)
    // }, [currentRegStudent, currentRegUser])

    // get selected course and save it in constant
    // const [
    //     selectedCourseData
    // ] = useSelector((state) => {
    //     return [
    //         state.cartInfo.cartSingleData
    //     ]
    // });
    // save selected course data related things into usestates
    // useEffect(() => {
    //     setSelectedClass(selectedCourseData)
    //     setCurrentColor(selectedClass?.class?.category == 'STEM' ? '#D44074' : selectedClass?.class?.category == 'College Prep' ? '#39B5F3' : selectedClass?.class?.category == 'College Prep' ? '#39B5F3' : selectedClass?.class?.category == 'Communication' ? '#FF6256' : selectedClass?.class?.category == 'English' ? '#76B362' : selectedClass?.class?.category == 'Leadership' ? '#9960D5' : '#10A0DE')
    //     setShowToggle(selectedClass?.classId == 'e65898bd-734f-45cb-a9d7-8f08b7b2569f' ? true : selectedClass?.classId == '37722818-fe60-4f77-ad80-b551ca0b88b2' ? true : false)
    //     // setLunch(selectedClass?.classId == 'e65898bd-734f-45cb-a9d7-8f08b7b2569f' ? true : selectedClass?.classId == '37722818-fe60-4f77-ad80-b551ca0b88b2' ? true : false)
    // }, [selectedCourseData, selectedClass])
    // const handleSubmit = (event) => {
    //     const form = event.currentTarget;
    //     event.preventDefault();
    //     if (form.checkValidity() === false) {
    //         event.stopPropagation();
    //     }
    //     else {
    //         const cartItem = {
    //             id: selectedClass?.id,
    //             classId: selectedClass?.classId,
    //             userId: currentUser?.id,
    //             firstName: firstname,
    //             lastName: lastname,
    //             email: email,
    //             grade: gradeLevel,
    //             school: school,
    //             phone: phone,
    //             address: address,
    //             lunch: lunch ? 'TRUE' : 'FALSE',
    //         }
    //         dispatch(Actions.dispatchCartUpdate(cartItem, cartItem.userId)).then(response => {
    //             setTimeout(() => {
    //                 navigate('/cart')
    //             }, 2000);
    //         }).catch(e => {
    //             dispatch({ type: TYPES.UI_STOP_LOADING });
    //             toast.error(e.errors[0].message)
    //         });
    // }
    // setValidated(true);
    // };

    // useEffect(() => {
    //     if (!showToggle && lunch) {
    //         setTotalCost(60 + selectedClass?.class?.price)
    //     }
    //     else {
    //         setTotalCost(selectedClass?.class?.price)
    //     }
    // }, [lunch, totalCost])

    return (
        <div className='signup-screen'>
            {/* top nav bar */}
            {/* <Header /> */}
            {/* signup section */}
            <div className="signup-section CourseRegistration-section">
                <div className="container py-5">
                    <div className="row px-0 justify-content-between">
                        <div className="col-xxl-5 col-lg-6 col-md-10 mx-auto py-5">
                            <div className="row mx-0 signup-inner">
                                <div className="col py-4 py-md-0">
                                    <div className="d-flex align-items-center">
                                        <div className="w-100 py-5">
                                            <div className="px-3">
                                                <h3 className='heading-3 mb-4'>Student Registration</h3>
                                                <p className="parent-summary body-2 mb-0">
                                                    Parent Name: firstName lastName
                                                </p>
                                                <p className="parent-summary body-2 mb-0">
                                                    Parent Email: email
                                                </p>
                                                <p className="parent-summary body-2 mb-0">
                                                    Parent Phone Number: phone
                                                </p>
                                                <p className="signup-summary body-1 mt-4">All Fields must be filled unless marked (Optional)</p>
                                            </div>
                                            <Form
                                                className='px-3 registration-form'
                                                noValidate
                                                validated={validated}
                                            // onSubmit={handleSubmit}
                                            >
                                                <Form.Group className='input-wrapper' as={Col} md="12" controlId="firstname">
                                                    <Form.Label className='signup-labels body-2'>First name <span className=''>*</span></Form.Label>
                                                    <Form.Control
                                                        className='signup-input body-2'
                                                        required
                                                        type="text"
                                                        placeholder="Enter student first name here"
                                                        value={firstname}
                                                        onChange={(e) => setFirstname(e.target.value)}
                                                    />
                                                </Form.Group>
                                                <Form.Group className='input-wrapper' as={Col} md="12" controlId="lastname">
                                                    <Form.Label className='signup-labels body-2'>Last Name <span className=''>*</span></Form.Label>
                                                    <Form.Control
                                                        className='signup-input body-2'
                                                        required
                                                        type="text"
                                                        placeholder="Enter student last name here"
                                                        value={lastname}
                                                        onChange={(e) => setLastname(e.target.value)}
                                                    />
                                                </Form.Group>
                                                <Form.Group className='input-wrapper' as={Col} md="12" controlId="school">
                                                    <Form.Label className='signup-labels body-2'>School <span className=''>*</span></Form.Label>
                                                    <Form.Control
                                                        className='signup-input body-2'
                                                        required
                                                        type="text"
                                                        placeholder="Enter the name of your student’s school"
                                                        value={school}
                                                        onChange={(e) => setSchool(e.target.value)}
                                                    />
                                                </Form.Group>
                                                <Form.Group className='input-wrapper' as={Col} md="12" controlId="grade level">
                                                    <Form.Label className='signup-labels body-2'>Grade Level <span className=''>*</span></Form.Label>
                                                    <Form.Select className='body-2' value={gradeLevel} onChange={(e) => setGradeLevel(e.target.value)} required aria-label="grade level">
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
                                                </Form.Group>
                                                <Form.Group className='input-wrapper' as={Col} md="12" controlId="emailaddress">
                                                    <Form.Label className='signup-labels body-2'>Email (if different from parent) <span className=''>*</span></Form.Label>
                                                    <Form.Control
                                                        className='signup-input body-2'
                                                        required
                                                        type="email"
                                                        placeholder="Enter your student’s email here"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                </Form.Group>

                                                <Form.Group className='input-wrapper' as={Col} md="12" controlId="phonenumber">
                                                    <Form.Label className='signup-labels body-2'>Phone number (if different from parent) <span className=''>*</span></Form.Label>
                                                    <Form.Control
                                                        className='signup-input body-2'
                                                        required
                                                        type="text"
                                                        placeholder="Enter your student’s phone number here"
                                                        value={phone}
                                                        onChange={(e) => setPhone(e.target.value)}
                                                    />
                                                </Form.Group>
                                                <Form.Group className='input-wrapper' as={Col} md="12" controlId="address">
                                                    <Form.Label className='signup-labels body-2'>Address  (if different from parent) <span className=''>*</span></Form.Label>
                                                    <Form.Control
                                                        className='signup-input body-2'
                                                        required
                                                        type="text"
                                                        placeholder="City, State"
                                                        value={address}
                                                        onChange={(e) => setAddress(e.target.value)}
                                                    />
                                                </Form.Group>
                                                <Form.Group className={`input-wrapper input-toggle-switch ${showToggle && 'invisible'}`} as={Col} md="12" controlId="includelunch">
                                                    <label className="switch">
                                                        <input onChange={(e) => { setLunch(!lunch) }} checked={lunch} id='includelunch' name='includelunch' type="checkbox" />
                                                        <span className="slider round"></span>
                                                    </label>
                                                    <label htmlFor='includelunch' className='ms-2 body-2'>
                                                        Lunch Included?  (+$60)
                                                    </label>
                                                </Form.Group>
                                                <Form.Group className='input-wrapper mt-4' as={Col} md="12">
                                                    <Button type="submit" className='blue-button w-100'>Update</Button>
                                                </Form.Group>
                                            </Form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-5 col-lg-6 col-md-10 mx-auto py-5">
                            <div className="row mx-0 signup-inner">
                                <CourseDetail
                                    // selectedClass={selectedClass?.class}
                                    selectedClass={0}
                                    // currentColor={currentColor}
                                    currentColor={"#d44074"}
                                    lunch={lunch}
                                    totalCost={totalCost}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer section */}
            {/* <Footer /> */}
        </div>
    );
}

export default EditCart;
