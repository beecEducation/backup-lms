// import MaterialTable from "material-table";
// import { ThemeProvider, createTheme } from '@mui/material'
// import "./style.sass"
// import {forwardRef, useState} from 'react';

// import AddBox from '@material-ui/icons/AddBox';
// import ArrowDownward from '@material-ui/icons/ArrowDownward';
// import Check from '@material-ui/icons/Check';
// import ChevronLeft from '@material-ui/icons/ChevronLeft';
// import ChevronRight from '@material-ui/icons/ChevronRight';
// import Clear from '@material-ui/icons/Clear';
// import DeleteOutline from '@material-ui/icons/DeleteOutline';
// import Edit from '@material-ui/icons/Edit';
// import FilterList from '@material-ui/icons/FilterList';
// import FirstPage from '@material-ui/icons/FirstPage';
// import LastPage from '@material-ui/icons/LastPage';
// import Remove from '@material-ui/icons/Remove';
// import SaveAlt from '@material-ui/icons/SaveAlt';
// import Search from '@material-ui/icons/Search';
// import ViewColumn from '@material-ui/icons/ViewColumn';

// const tableIcons = {
//     Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
//     Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
//     Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//     Delete: forwardRef((props, ref) => <DeleteOutline color={"error"} {...props} ref={ref} />),
//     DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
//     Edit: forwardRef((props, ref) => <Edit color={"primary"} {...props} ref={ref} />),
//     Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
//     Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
//     FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
//     LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
//     NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
//     PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
//     ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//     Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
//     SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
//     ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
//     ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
// };

// const MdDataTable=({columns=[],data=[],editAction=null,deleteAction=null})=>{
//     const TableCellStyle = { borderRight: '1px solid #e5e5e5' };
//     const defaultMaterialTheme = createTheme();
//     const tableColumns=columns.map(item=>{
//         item.cellStyle= TableCellStyle
//         return item
//     });
//     const actions=[]
//     if (editAction){
//         actions.push({
//             icon: tableIcons.Edit,
//             tooltip: 'Edit',
//             onClick: (event, rowData) => editAction()
//         })
//     }

//     if (deleteAction){
//         actions.push({
//             icon: tableIcons.Delete,
//             tooltip: 'Delete',
//             onClick: (event, rowData) => deleteAction()
//         })
//     }



//     return (
//         <div style={{ maxWidth: '100%' }}>
//             <ThemeProvider theme={defaultMaterialTheme}>
//                 <MaterialTable
//                     style={{padding:"20px"}}
//                     icons={tableIcons}
//                     columns={tableColumns}
//                     data={data}
//                     actions={actions}
//                     title=""
//                     options={{
//                         actionsColumnIndex: -1,
//                         exportButton: true,
//                         search: true,
//                         headerStyle: { border:"1px solid #e5e5e5",color:"#10A0DE",fontWeight:600},
//                         rowStyle: x => {
//                             if (x.tableData.id % 2) {
//                                 return {backgroundColor: "#f2f2f2",border:"1px solid #e5e5e5"}
//                             }else{
//                                 return {border:"1px solid #e5e5e5"}
//                             }
//                         }
//                     }}
//                     localization={{
//                         pagination: {
//                             labelRowsPerPage: '',
//                             labelRowsSelect: 'Pages',
//                             labelDisplayedRows: '{from}-{to} of {count}',
//                         },
//                     }}

//                 />
//             </ThemeProvider>

//         </div>
//     )
// }

// export default MdDataTable