import React from "react";

const CourseTags = ({ tag }) => {
    return (
        <div
            className="course-tag"
            style={{
                backgroundColor:
                    `${tag == 'STEM' ?
                        '#D44074' :
                        tag == 'College Prep' ?
                            '#39B5F3' :
                            tag == 'College Prep' ?
                                '#39B5F3' :
                                tag == 'Communication' ?
                                    '#FF6256' :
                                    tag == 'English' ?
                                        '#76B362' :
                                        tag == 'Leadership' ?
                                            '#9960D5' :
                                            '#10A0DE'}`
            }}
        >
            <span className="tag-name label-1">{tag}</span>
        </div>
    )
}

export default CourseTags