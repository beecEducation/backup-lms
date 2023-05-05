import "./style.sass"

const CustomInput=(props)=>{
return (
    <div className={"custom-input-component"}>
        <label className="custom-label">{props.label}</label>
        <input type="text" className="custom-input" placeholder={props.placeholder}/>
    </div>

)
}

export default CustomInput