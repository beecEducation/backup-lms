import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Text} from "@aws-amplify/ui-react";
import "./style.sass"

const StudentTopbar=({name})=>{
    const dispatch = useDispatch();
    const [user, setUser] = useState({});

    const [userTemp] = useSelector((state) => {
      return [state.auth.user];
    });

    useEffect(() => {
        if (userTemp) {
          setUser(userTemp);
        }
      }, [userTemp]);

    return (
        <div className={"student-topbar"}>
            <Text>Welcome, {user?.firstName} {user?.lastName}</Text>
        </div>
    )
}

export default StudentTopbar