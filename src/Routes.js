// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
// import SignInSide from "views/Login/SignInSide";
import Dashboard from "./components/Dashboard/Dashboard";
// import { SnackBarMessageResponse } from "utils/Response/SnackBarMessageResponse";
// import SnackBarUtils from "utils/MUI/SnackbarUtils";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import UsuariosPage from "./views/Usuarios/UsuariosPage/UsuariosPage";
import { UsuarioProvider } from "views/Usuarios/Common/UsuarioProvider";
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
              path="usuarios"
              element={
                <UsuarioProvider>
                  <UsuariosPage />
                </UsuarioProvider>
              }
            />

            {/* <Route
              path="aplicativos"
              element={
                <UsuarioProvider>
                  <AplicativosPage />
                </UsuarioProvider>
              }
            /> */}
            {/* <Route
              path="roles"
              element={
                <UsuarioProvider>
                  <RolesPage />
                </UsuarioProvider>
              }
            /> */}
            {/* <Route
              path="permisos"
              element={
                <UsuarioProvider>
                  <PermisosPage />
                </UsuarioProvider>
              }
            /> */}
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
