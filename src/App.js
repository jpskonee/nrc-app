import React from "react";
import "../src/styles/app.scss";
import Navbar from "./components/Partials/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from "./components/Homepage/HomePage";
import LoginReg from "./components/LoginReg/LoginReg";
import UserProfilePage from "./components/UserData/UserProfilePage";
import NewsPage from "../src/components/NewPage/NewsPage";
import AboutUs from "../src/components/Static-Pages/AboutUs";
import TripGuide from "../src/components/Static-Pages/TripGuide";
import Services from "../src/components/Static-Pages/Services";
import GettingStarted from "../src/components/Static-Pages/GettingStarted";
import ContactUs from "../src/components/Static-Pages/ContactUs";
import BookingPage from "../src/components/Bookingpage/BookingPage";
import { AuthProvider } from "./components/StateManagement/AuthState";
import PaymentSuccess from "./components/Partials/PaymentSuccess";
import PrivateRoute from "./PrivateRoute";




function App() {
  return (
    <AuthProvider >
    <Router>
         <Navbar />
      <Switch>
         <Route exact path="/" component={HomePage} />
         <Route exact path="/404" component={HomePage} />
         <Route exact path="/login" component={LoginReg} />
         <Route exact path="/about" component={AboutUs} />
         <PrivateRoute exact path="/paymentsuccess" component={PaymentSuccess} />
         <PrivateRoute exact path="/user" component={UserProfilePage} />
         <Route exact path="/tripguide" component={TripGuide} />
         <Route exact path="/services" component={Services} />
         <Route exact path="/gettingstarted" component={GettingStarted} />
         <Route exact path="/contact" component={ContactUs} />
         <Route exact path="/news" component={NewsPage} />
         <PrivateRoute exact path="/booking" component={BookingPage} />
         
      </Switch>
      </Router>
      </AuthProvider>
  );
}

export default App;
