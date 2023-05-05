import React, { useState, useEffect } from "react";
import { useTable, usePagination, useSortBy } from "react-table";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import "./style.sass";

function Table({ columns, data, pagination }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: pagination ? 25 : 1000 },
    },
    useSortBy,
    usePagination
  );

  // Render the UI for your table
  return (
    <React.Fragment>
      <table className="reactTable" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(
                    column.getSortByToggleProps({ title: undefined })
                  )}
                >
                  {column.render("Header")}
                  {/* <div>{column.canFilter ? column.render('Filter') : null}</div> */}
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <FaSortDown />
                    ) : (
                      <FaSortUp />
                    )
                  ) : (
                    <FaSort />
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {pagination ? (
        <div className="pagination reactTablePagination">
          <nav aria-label="..." className="mx-auto mt-4">
            <ul className="pagination">
              <li className={`page-item ${!canPreviousPage && "disabled"}`}>
                <button
                  className="page-link"
                  onClick={() => gotoPage(0)}
                  disabled={!canPreviousPage}
                >
                  First
                </button>
              </li>
              <li className={`page-item ${!canPreviousPage && "disabled"}`}>
                <button
                  className="page-link"
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                >
                  Previous
                </button>
              </li>
              <li className={`page-item ${!canNextPage && "disabled"}`}>
                <button
                  className="page-link"
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                >
                  Next
                </button>
              </li>
              <li className={`page-item ${!canNextPage && "disabled"}`}>
                <button
                  className="page-link"
                  onClick={() => gotoPage(pageCount - 1)}
                  disabled={!canNextPage}
                >
                  Last
                </button>
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
    </React.Fragment>
  );
}

const ReactTable = ({ columns, data, pagination }) => {
  return <Table columns={columns} data={data} pagination={pagination} />;
};

export default ReactTable;
