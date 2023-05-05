import * as Images from "./../Images"
import "./style.sass"
import {Text} from "@aws-amplify/ui-react";

const QuestionDifficulty=({level,showText=false})=>{
    return (
       <div className="difficulty-row">
           {level=="Hard"?(
               <div className="difficulty-col">
                   <img src={Images.filledBox}/>
                   <img src={Images.filledBox}/>
                   <img src={Images.filledBox}/>
                   {showText?(<Text>Hard</Text>):""}
               </div>
           ):""}

           {level=="Medium"?(
               <div className="difficulty-col">
                   <img src={Images.filledBox}/>
                   <img src={Images.filledBox}/>
                   <img src={Images.emptyBox}/>
                   {showText?(<Text>Medium</Text>):""}
               </div>
           ):""}

           {level=="Easy"?(
               <div className="difficulty-col">
                   <img src={Images.filledBox}/>
                   <img src={Images.emptyBox}/>
                   <img src={Images.emptyBox}/>
                   {showText?(<Text>Easy</Text>):""}
               </div>
           ):""}

       </div>
    );
}

export default QuestionDifficulty