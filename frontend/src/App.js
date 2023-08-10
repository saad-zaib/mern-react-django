import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./containers/Home.js";
import Layouts from "./hocs/Layouts.js";
import About from "./containers/About.js";
import Contact from "./containers/Contact.js";
import ListingDetail from "./containers/ListingDetail.js";
import NotFound from "./components/NotFound.js";
import { useSelector } from "react-redux";
import LoginReg from "./containers/auth/LoginReg.js";
import { Navigate } from "react-router-dom";
import SendPasswordResetEmail from "./containers/auth/SendPasswordResetEmail.js";
import ResetPassword from "./containers/auth/ResetPassword.js";
import Dashboard from "./containers/Dashboard.js";
import { Provider } from "react-redux";
import Services from "./containers/Services.js";

function App() {
  const { access_token } = useSelector((state) => state.auth);
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Layouts />}>
            <Route index element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
{/* You can also use private route that will give an alert that please login first when user is redirected to login page */}
            <Route  path="/listings/:slug" element={!access_token ? <LoginReg /> : <ListingDetail/>} />

            <Route exact path="/not-found" element={<NotFound />} />

            <Route
              path="login"
              element={
                !access_token ? <LoginReg /> : <Navigate to="/dashboard" />
              }
            />

            <Route
              path="sendpasswordresetemail"
              element={<SendPasswordResetEmail />}
            />
            <Route
              path="api/user/reset/:id/:token"
              element={<ResetPassword />}
            />
          </Route>
          <Route
            path="/dashboard"
            element={access_token ? <Dashboard /> : <Navigate to="/login" />}
          />
        </Routes>
      </Router>
  );
}

export default App;
