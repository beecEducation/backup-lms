import "./style.sass"
import {Images} from "../index";
import {IoMdArrowDropup} from "react-icons/io";
import {Text} from "@aws-amplify/ui-react";
const ManChart=({score})=>{
    return(
        <div className={"man-chart-div"}>
            <div className={"chart-div"}>
                {(() => {
                    let td = [];
                    for (let i = 1; i <= 10; i++) {
                        if (score>=i){
                            if (score==i){
                                td.push(<object type="image/svg+xml"
                                                data={Images.userIcon}
                                                className="man-icon active has-arrow">
                                </object>)
                            }else{
                                td.push(<object type="image/svg+xml"
                                                data={Images.userIcon}
                                                className="man-icon active">
                                </object>)
                            }

                        }else{
                            td.push(<object type="image/svg+xml"
                                            data={Images.userIcon}
                                            className="man-icon">
                            </object>);
                        }

                    }
                    return td;
                })()}

            </div>
            <div>
                <IoMdArrowDropup size={20} style={{"--data-perc":`${score*10}%`}} className={"arrow-icon"}/>
                <span className={"text"}>You scored higher than or equal to {score*10}% of students.</span>
            </div>

        </div>

    )
}

export default ManChart