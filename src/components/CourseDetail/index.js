import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../store/actions";
import * as TYPES from "../../store/actions/actions";
import { Button, ListGroup } from "react-bootstrap";
import Moment from "react-moment";
import { CourseRegTags, Images } from "../";
import { useNavigate } from "react-router-dom";
import "./style.sass";

const CourseDetail = ({ selectedClass, currentColor, lunch, totalCost, handleSubmit }) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState({});
  const [selectedCourseState] = useSelector((state) => {
    return [state.courses.selectedCourseForCart];
  });

  useEffect(() => {
    console.log("selected course is ", selectedCourseState)
    setSelectedCourse(selectedCourseState);
  }, [selectedCourseState]);

  return (
    <div className="col px-0 py-4 py-md-0 course-detail-view">
      <div className="d-flex align-items-center">
        <div className="w-100 course-detail-form">
          {/* <CourseRegTags tag={selectedClass?.category} currentColor={currentColor} /> */}
          {/* <CourseRegTags tag={'STEM'} currentColor={currentColor} /> */}
          <div className="pb-1 text-center">
            {/* <img src={selectedClass?.image} className='img-fluid course-detail-img my-1' /> */}
            {/* <img src={selectedCourse?.image} className='img-fluid course-detail-img my-1' /> */}
            <img
              src="https://hspt.s3.amazonaws.com/hspt-package-graphic.png"
              className="course-image img-fluid"
            />
            {/* <img
              src={selectedCourse ? selectedCourse.image : Images.loginImage}
              className="course-image img-fluid"
            /> */}
            {/* <h4 className='mt-4'>{selectedClass?.name}</h4> */}
            <h4 className="mt-4">{selectedCourse?.title}</h4>
          </div>

          <ListGroup
            className="row flex-row mx-0 px-3"
            style={{ marginBottom: "157px" }}
            variant="flush"
          >
            <ListGroup.Item className="body-1 text-start col-5 py-3 px-0">
              Title
            </ListGroup.Item>
            <ListGroup.Item className="body-1 text-end col-7 py-3 px-0">
              {selectedCourse?.title}
            </ListGroup.Item>
            <ListGroup.Item className="body-1 text-start col-5 py-3 px-0">
              Price
            </ListGroup.Item>
            <ListGroup.Item className="body-1 text-end col-7 py-3 px-0">
              ${selectedCourse?.price}
            </ListGroup.Item>
            <ListGroup.Item className="body-1 text-start col-5 py-3 px-0">
              Category
            </ListGroup.Item>
            <ListGroup.Item className="body-1 text-end col-7 py-3 px-0">
              {selectedCourse?.category}
            </ListGroup.Item>
            <ListGroup.Item className="body-1 text-start col-5 py-3 px-0 sub-length">
              Subscription Length
            </ListGroup.Item>
            <ListGroup.Item className="body-1 text-end col-7 py-3 px-0 sub-length">
              {selectedCourse?.duration / 24} Days
            </ListGroup.Item>
            {/* <ListGroup.Item className="body-1 text-start col-5 py-3 px-0 border-bottom-0">Lunch</ListGroup.Item>
                        <ListGroup.Item className="body-1 text-end col-7 py-3 px-0 border-bottom-0">{lunch ? 'Yes' : 'No'}</ListGroup.Item> */}
            <ListGroup.Item className="body-1 text-start col-5 py-3 px-0 total-price">
              Purchase Total
            </ListGroup.Item>
            <ListGroup.Item
              className="body-1 text-end col-7 py-3 px-0 total-price"
              style={{ borderBottomWidth: "1px" }}
            >
              ${selectedCourse?.price}
            </ListGroup.Item>
            <Button onClick={() => handleSubmit()} className="blue-button w-100 mt-5">{selectedCourse?.price == 0 ? "Buy Now" : "Add to Cart"}</Button>
          </ListGroup>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
