import React from "react";
import "./style.sass"
import { useNavigate } from "react-router-dom";

const StudentMenu=({active})=>{
    let navigate = useNavigate();
    function handleClick(route) {
        navigate(route);
    }

    return (
        <div className={"student-menu-bar"}>
            <div onClick={()=>{handleClick("/my-courses")}} className={`menu-item ${active=="courses"?"active":""}`}>
                Courses
            </div>
            <div onClick={()=>{handleClick("/students")}} className={`menu-item ${active=="students"?"active":""}`}>
                Students
            </div>
            <div onClick={()=>{handleClick("/transaction-history")}} className={`menu-item ${active=="transactions"?"active":""}`}>
                Transactions
            </div>
        </div>
    )
}
export default StudentMenu