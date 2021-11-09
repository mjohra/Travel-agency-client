import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import Login from "./Pages/SignForm/Login/Login";
import Registration from "./Pages/SignForm/Registration/Registration";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import Home from "./Pages/Home/Home/Home";
import AddService from "./Pages/Home/AddService/AddService";
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails";
import ManageOrder from "./Pages/Orders/ManageOrder/ManageOrder";
import MyOrder from "./Pages/Orders/MyOrder/MyOrder";
import PrivateRoute from "./Pages/SignForm/PrivateRoute/PrivateRoute";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header/>
          <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute exact path="/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute exact path="/manageOrder">
            <ManageOrder></ManageOrder>
          </PrivateRoute>
          <PrivateRoute exact path="/myOrder">
            <MyOrder></MyOrder>
          </PrivateRoute>
          <PrivateRoute exact path="/servicedetails/:id">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Registration></Registration>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
          </Switch>
        </Router>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
