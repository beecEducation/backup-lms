import React from "react";
import { ListGroup } from "react-bootstrap";
import Moment from "react-moment";
import { CourseRegTags, images } from "../";

const CourseDetail = ({ selectedClass, currentColor, lunch, totalCost }) => {
    let NormalTime = ''
    let NormalTimeFormatted = ''
    const convertTime = (time) => {
        NormalTime = time?.split(':')
        if (NormalTime) {
            NormalTimeFormatted = NormalTime[0] >= 12 && (NormalTime[0] - 12 || 12) + ':' + NormalTime[1] + ' PM' || (Number(NormalTime[0]) || 12) + ':' + NormalTime[1] + ' AM'
        }
        return NormalTimeFormatted;
    }
    return (
        <div className="col px-0 py-4 py-md-0">
            <div className="d-flex align-items-center">
                <div className="w-100 py-5 course-detail-form">
                    <CourseRegTags tag={selectedClass?.category} currentColor={currentColor} />
                    <div className="px-3 pt-3 pb-1 text-center">
                        <img src={selectedClass?.image} className='img-fluid course-detail-img my-1' />
                        <h4 className='mt-4'>{selectedClass?.name}</h4>
                    </div>
                    <div className="location-summary text-center my-3 d-flex align-items-center justify-content-center">
                        <div className="location-icon me-2">
                            <img src={images.location} alt="" className="img-fluid" />
                        </div>
                        <div className="">
                            <p className="location-name mb-0">
                                {selectedClass?.location?.split(/,(.*)/s)[0]}
                            </p>
                            <p className="location-location mb-0">
                                {selectedClass?.location?.split(/,(.*)/s)[1]}
                            </p>
                        </div>
                    </div>
                    <ListGroup className="row flex-row mx-0 px-3" variant="flush">
                        <ListGroup.Item className="body-1 text-start col-5 py-3 px-0">Taught by</ListGroup.Item>
                        <ListGroup.Item className="body-1 text-end col-7 py-3 px-0">{selectedClass?.instructor?.firstName} {selectedClass?.instructor?.lastName}</ListGroup.Item>
                        <ListGroup.Item className="body-1 text-start col-5 py-3 px-0">Date</ListGroup.Item>
                        <ListGroup.Item className="body-1 text-end col-7 py-3 px-0">
                            <Moment format="MMM DD, YYYY">{selectedClass?.startDate}</Moment> - <Moment format="MMM DD, YYYY">{selectedClass?.endDate}</Moment>
                        </ListGroup.Item>
                        <ListGroup.Item className="body-1 text-start col-5 py-3 px-0">Time</ListGroup.Item>
                        <ListGroup.Item className="body-1 text-end col-7 py-3 px-0">{convertTime(selectedClass?.startTime)} - {convertTime(selectedClass?.endTime)}</ListGroup.Item>
                        <ListGroup.Item className="body-1 text-start col-5 py-3 px-0">Cost</ListGroup.Item>
                        <ListGroup.Item className="body-1 text-end col-7 py-3 px-0">{selectedClass?.price}</ListGroup.Item>
                        <ListGroup.Item className="body-1 text-start col-5 py-3 px-0 border-bottom-0">Lunch</ListGroup.Item>
                        <ListGroup.Item className="body-1 text-end col-7 py-3 px-0 border-bottom-0">{lunch ? 'Yes' : 'No'}</ListGroup.Item>
                    </ListGroup>
                    <div
                        className="purchase-total d-flex justify-content-between align-items-center px-3 mb-3"
                        style={{ backgroundColor: currentColor }}
                    >
                        <span className="">Purchase Total</span>
                        <span className="">${totalCost}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseDetail