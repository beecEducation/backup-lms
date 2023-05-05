import  "./style.sass"

const DashboardCard=(props)=>{
    return (
      <div className={"card"}
           style={{
               padding:props.padding,
               minHeight:props.height,
               marginTop:props.marginTop
      }}
      >
          <div className={"card-body"}>
              {props.children}
          </div>
      </div>
    );
}

export default DashboardCard