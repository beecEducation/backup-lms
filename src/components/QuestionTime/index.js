import {Text} from "@aws-amplify/ui-react";
import "./style.sass"

const QuestionTime=(props)=>{
    return (
        <div className={"question-time-div"}>
            <div className={`box`}>
                <Text className={"label"}>{props.label}</Text>
                <div className={`box-content ${props.borderRight?"border-right":""}`}>
                    <div>
                        <Text className={"time"}>{props.time1} </Text>
                        <Text className={"text"}>{props.text1}</Text>
                    </div>
                    <div className={"mt-3"}>
                        <Text className={"time"}>{props.time2} </Text>
                        <Text className={"text"}>{props.text2}</Text>
                    </div>
                </div>


            </div>
        </div>

    )
}
export default QuestionTime