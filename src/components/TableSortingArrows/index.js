import "./style.sass"
import {FaSortDown, FaSortUp} from "react-icons/fa";
import React from "react";
const TableSortingArrows=({active})=>{
    return (
        <>
            {active==="down"?(
                <FaSortDown className={"table-sorting-arrows"}/>
            ):(
                <FaSortUp className={"table-sorting-arrows"}/>
            )}
        </>
    )
}
export default TableSortingArrows;