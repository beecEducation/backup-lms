import { useDispatch } from "react-redux";
import * as Images from "./../Images"
import "./style.sass"
import {Text} from "@aws-amplify/ui-react";
import { Button } from "react-bootstrap";

const QuestionAnswer=({answer,showText=false})=>{
    const dispatch = useDispatch();
    
    const onReviewClick  = () => {
    }
    return (
        <div className="answer-row">
            {answer=="correct"?(
                <div className="answer-col">
                    <img src={Images.correct}/>
                    {showText?(<Text>Correct</Text>):""}
                </div>
            ):""}

            {answer=="skipped"?(
                <div className="answer-col">
                    <img src={Images.minus}/>
                    {showText?(<Text>Skipped</Text>):""}
                </div>
            ):""}

            {answer=="incorrect"?(
                <div className="answer-col">
                    <img src={Images.cross}/>
                    {showText?(<Text>Incorrect</Text>):""}
                </div>
            ):""}
            {answer=="review"?(
                <div className="answer-col">
                    <button className="btn btn-link">
                        Review
                    </button>
                </div>
            ):""}

        </div>
    );
}

export default QuestionAnswer