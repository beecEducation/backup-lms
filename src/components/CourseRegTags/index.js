import React from "react";

const CourseRegTags = ({ tag, currentColor }) => {
    return (
        <div
            className="course-reg-tag"
            style={{ backgroundColor: currentColor }}
        >
            <span className="tag-name label-1">{tag}</span>
        </div>
    )
}

export default CourseRegTags