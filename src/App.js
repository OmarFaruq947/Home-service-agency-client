import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import AddService from "./components/Admin/AddService/AddService";
import MakeAdmin from "./components/Admin/MakeAdmin/MakeAdmin";
import ManageService from "./components/Admin/ManageService/ManageService";
import OrderList from "./components/Admin/OrderList/OrderList";
import Book from "./components/ServicePiker/Book/Book";
import BookingList from "./components/ServicePiker/BookingList/BookingList";
import Review from "./components/ServicePiker/Review/Review";
import Services from "./components/Home/Services/Services";

export const UserContext = createContext();

function App() {  
  const [loggedInUser, setLoggedInUser] = useState({});
  const [Service_infoObject, setService_infoObject] = useState([]);
  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, Service_infoObject, setService_infoObject]}>
      
      <Router>
        <Switch>

          {/* PrivateRoute section start */}
          <PrivateRoute path="/Book">
            <Book></Book>
          </PrivateRoute>

          <PrivateRoute path="/Admin">
            <OrderList></OrderList>
          </PrivateRoute>

          <PrivateRoute path="/Services">
            <Services></Services>
          </PrivateRoute>
          {/* PrivateRoute section End */}




          {/* login section start */}
          <Route path="/login">
            <Login></Login>
          </Route>
          {/* login section end */}





          {/* Home section start */}
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/Home">
            <Home></Home>
          </Route>
          {/*Home section end */}



          

          <Route path="/AddService">
            <AddService></AddService>
          </Route>

          <Route path="/MakeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>

          <Route path="/ManageService">
            <ManageService></ManageService>
          </Route>

          <Route path="/OrderList">
            <OrderList></OrderList>
          </Route>

          <Route path="/Booking">
            <BookingList></BookingList>
          </Route>

          <Route path="/Review">
            <Review></Review>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
