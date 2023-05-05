import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../store/actions";
import Moment from "react-moment";
import { Images, ReactTable } from "../../components";
import { useNavigate } from "react-router-dom";
import WithNavBar from "../../Layouts/WithNavBar";
import StudentTopbar from "../../components/StudentTopbar";
import StudentMenu from "../../components/StudentMenu";
import "./style.sass";
import CustomFooter from "../../components/CustomFooter";

function Transactions() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [allTransactions, setAllTransactions] = useState(null);
  const [tableData, setTableData] = useState([]);
  const columns = React.useMemo(() => [
    {
      Header: "Date",
      accessor: "date",
    },
    {
      Header: "Quantity",
      accessor: "quantity",
    },
    {
      Header: "Invoice ID",
      accessor: "invoice",
    },
    {
      Header: "Total",
      accessor: "total",
    },
  ]);

  const [currentUser, transactions] = useSelector((state) => {
    return [state.auth.cognito, state.transactions.listTransactions];
  });

  useEffect(() => {
    if (currentUser) {
      dispatch(
        Actions.dispatchListTransactions({
          userId: currentUser.username,
          sortDirection: "DESC",
        })
      );
    }
  }, [currentUser]);

  const data = [];
  useEffect(() => {
    if (transactions) {
      setAllTransactions(transactions);
      transactions?.map((dataa, key) => {
        data.push({
          date: (
            <div className="table-rows" key={key}>
              <Moment format="MMM DD, YYYY">{dataa?.createdAt}</Moment>
            </div>
          ),
          quantity: (
            <div className="table-rows" key={key}>
              <span className="">{dataa?.quantity}</span>
            </div>
          ),
          invoice: (
            <div className="table-rows" key={key}>
              <span className="">{dataa?.id}</span>
            </div>
          ),
          total: (
            <div className="table-rows" key={key}>
              <span className="">{dataa?.amount}</span>
            </div>
          ),
        });
      });
      setTableData(data);
    }
  }, [transactions]);
  return (
    <WithNavBar IsLoggedIn={true}>
      <div className={"container transactions-div pb-3"}>
        <StudentTopbar name={"Jhon"} />
        <StudentMenu active={"transactions"} />
        <div className={"heading"}>
          <div className={"start-item"}>My Transactions</div>
        </div>

        <div className={"transaction-table"}>
          {allTransactions?.length == 0 ? (
            <div className="text-center p-5 emptyCart">
              {/* <img src={Images.cartEmpty} alt="" className="img-fluid mb-4" /> */}
              <h4 className="heading-4">No Transactions Found</h4>
              <h5 className="heading-5 my-4">
                Purchase any course to view transactions
              </h5>
              <a
                className="blue-button col"
                onClick={() => navigate("/courses")}
              >
                Find a Course
              </a>
            </div>
          ) : (
            <div className="table-responsive transactionsTable">
              <ReactTable columns={columns} data={tableData} pagination={true} />
            </div>
          )}
        </div>
      </div>
      <CustomFooter />
    </WithNavBar>
  );
}

export default Transactions;
