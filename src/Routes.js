// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
// import SignInSide from "views/Login/SignInSide";
import Dashboard from "./components/dashboard/Dashboard";
// import { SnackBarMessageResponse } from "utils/Response/SnackBarMessageResponse";
// import SnackBarUtils from "utils/MUI/SnackbarUtils";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {DashboardContent} from 'components/dashboard/Dashboard';

import ProductoPage from "./views/Productos/ProductoPage/ProductosPage";
// import MainPage from "views/Principal/MainPage/MainPage";
import DashboardPage from "views/Principal/MainPage";
// import ReportesPage from "views/informes/InformeMain";
import ReportesPage from "views/Reports/ReportesPage";
import { ProductoProvider } from "./views/Productos/Common/ProductoProvider";
import MiniDrawer from "components/dashboard/dash";

export default function App() {
  const isAuthenticated = localStorage.getItem("token");
  // const dispatch = useDispatch();
  // const Snackbar = useSelector((state) => state.mensajeria);
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   if (
  //     Array.isArray(Snackbar.message) &&
  //     Snackbar.view &&
  //     Snackbar.message.length > 0
  //   ) {
  //     setMessage(SnackBarMessageResponse(Snackbar));
  //   }
  // }, [Snackbar, message]);

  return (
    <>
      <HashRouter>
        <Routes>
          {/* {isAuthenticated = true ( */}
          <Route path="*" element={<Dashboard logout={isAuthenticated} />}>
            <Route
              index
              element={
                <ProductoProvider>
                  <DashboardPage />
                  {/* o InboxPage, o lo que quieras como inicio */}
                </ProductoProvider>
              }
            />
            <Route
              path="dashboard"
              element={
                <ProductoProvider>
                  <DashboardPage />
                </ProductoProvider>
              }
            />
            <Route
              path="productos"
              element={
                <ProductoProvider>
                  <ProductoPage />
                </ProductoProvider>
              }
            />
            <Route
              path="reportes"
              element={
                <ProductoProvider>
                  <ReportesPage />
                </ProductoProvider>
              }
            />
          </Route>
          {/* ) : (
            <>
              <Route
                path="/login"
                element={<SignInSide authenticate={isAuthenticated} />}
              />
              <Route path="/*" element={<Navigate to="/login" />} />
            </>
          )} */}
        </Routes>
      </HashRouter>
      <ToastContainer theme="colored" hideProgressBar />
    </>
  );
}
