import "./style.scss"

const CustomMeter=({score,percentage,min_score,max_score,title})=>{
    return (
        <div className={"custom-meter-div"}>
            <div className="semi-circle" data-score={score} data-value={percentage}>
                <div className="arc">
                </div>
                <div className={"score"}>
                    {score}
                </div>
            </div>
            <div className={"sub-div"}>
                <div className={"first"}>{min_score}</div>
                <div className={"middle"}>{title}</div>
                <div className={"last"}>{max_score}</div>
            </div>
        </div>

    )
}

export default CustomMeter