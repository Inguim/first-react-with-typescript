import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "../pages/Welcome";
import NoMatch from "../pages/NoMatch";
import Login from "../pages/Login";
import Register from "../pages/Register";

import PrivateRoutes from "./PrivateRoutes";
import NotAssignRoutes from "./NotAssignRoutes";
import { Cards, Dashboard, NewCard } from "../pages/Dashboard";

const RoutesElements = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<NotAssignRoutes />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/" element={<PrivateRoutes />}>
          <Route index element={<Welcome />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="cards" element={<Cards />} />
            <Route path="card/new" element={<NewCard />} />
          </Route>
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RoutesElements;
