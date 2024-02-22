import { React, useContext } from "react";
import Layout from "./components/Layout";
import LoginRegister from "./components/LoginRegister";
import TicketForm from "./components/TicketForm";
import ViewTickets from "./components/ViewTickets";
import TicketDetails from "./components/TicketDetails";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./store/auth-context";
import { AuthProvider, useAuth } from "./components/auth/AuthProvider";
import RequireAuth from "./components/auth/RequireAuth";
import Home from "./components/Home";
import LoginAuthCheck from "./components/auth/LoginAuthCheck";

// const oktaAuth = setAuth();

const App = () => {
  const auth = useAuth();
  console.log(auth.user);

  return (
    <div className="App">
      <Routes>
        <Route path="/smvalidation" element={<Layout />}>
            <Route path="/smvalidation/home" element={<RequireAuth><Home /></RequireAuth>}/>
            <Route path="/smvalidation/login" element={<LoginAuthCheck><LoginRegister /></LoginAuthCheck>} />
            <Route path="/smvalidation/ticket" element={<RequireAuth><TicketForm /></RequireAuth>} />
            <Route path="/smvalidation/viewtickets" element={<RequireAuth><ViewTickets /></RequireAuth>} />
          <Route
            path="/smvalidation/ticketdetails"
            element={<RequireAuth><TicketDetails /></RequireAuth>}
          />
        </Route>

      </Routes>
    </div>
  );
};

export default App;
