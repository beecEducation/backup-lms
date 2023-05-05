import "./style.sass";

const CustomDropDown = (props) => {
  return (
    <div className={"custom-select-component"}>
      <label className="custom-label">{props.label}</label>
      <select
        className={"custom-drop-down"}
        placeholder={props?.placeholder}
        name={props?.name}
        onChange={(e) => {
            props.onFilterChange(e)
        }}
        value={props?.value}
      >
        {props?.options?.map((item, i) => {
          return (
            <option key={i} value={item?.value}>
              {item?.text}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CustomDropDown;
