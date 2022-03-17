import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks";

const PrivateRoutes = (): JSX.Element => {
  var { signed, loading } = useAuth();
  if(loading)
    return <h1>Carregando...</h1>
  return signed ? <Outlet /> : <Navigate to="/home" />;
};

export default PrivateRoutes;
