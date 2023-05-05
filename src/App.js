import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "./store/actions";
import Navigation from "./Navigation";
import { Auth } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@aws-amplify/ui-react/styles.css";
import "./assets/sass/style.sass";
import "bootstrap/dist/css/bootstrap.min.css";
import { RingLoader } from "react-spinners";

export default function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsloading] = useState(true);
  const [loadingStatus] = useSelector((state) => {
    return [state.helper.isLoading];
  });
  useEffect(() => {
    setIsloading(loadingStatus);
  }, [loadingStatus, isLoading]);

  return (
    <main>
      {isLoading ? (
        <div className="loaderStyling">
          <RingLoader color={"#10A0DE"} size={100} loading={isLoading} />
        </div>
      ) : null}
      <Navigation />
      <ToastContainer />
    </main>
  );
}
