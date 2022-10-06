import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Admin from "./pages/admin/admin";
import Employee from "./pages/admin/employee";
import AddEmp from "./pages/admin/addemp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EmpList from "./pages/admin/emplist";
import AboutUs from "./pages/aboutus";
import ContactUs from "./pages/contactus";
import AvailableServices from "./pages/user/availableservice";
import Signup from "./pages/user/signup";
import Signin from "./pages/user/signin";
import ForgotPassword from "./pages/user/forgotpassword";

import Service from "./pages/admin/services";
import AddService from "./pages/admin/addservice";
import ServiceList from "./pages/admin/servicelist";
import UpcomingServices from "./pages/user/upcomingservices";
import Home from "./pages/home";
import OfferZone from "./Offer/OfferZone";
import UpdateEmployee from "./pages/admin/updatemp";
import UpdateService from "./pages/admin/updateservice";
import ShowAllFeedback from "./pages/admin/showallfeedback";
import BookService from "./pages/user/bookservice";
import ShowAllBookedServices from "./pages/admin/showallbookedservices";
import UserDetails from "./pages/user/userdetails";
import ShowProfile from "./pages/user/updateuser";
import UpdateUser from "./pages/user/updateuser";
import CustOrder from "./pages/user/custorder";
import UploadImage from "./pages/admin/uploadimage";
import ShowPending from "./pages/admin/showpending";
import ShowCompleted from "./pages/admin/showcompleted";
import Protected from "./Protected";
import CreateAdmin from "./pages/admin/CreateAdmin";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/admin" element={<Protected cmp={<Admin />} />} />
        <Route path="/employees" element={<Protected cmp={<Employee />} />} />
        <Route path="/add-employee" element={<Protected cmp={<AddEmp />} />} />
        <Route path="/list-employee" element={<Protected cmp={<EmpList />} />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/home/:id" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/available-services" element={<AvailableServices />} />
        <Route path="/upcoming-services" element={<UpcomingServices />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/services" element={<Protected cmp={< Service />} />} />
        <Route path="/add-services" element={<Protected cmp={<AddService />} />} />
        <Route path="/services-list" element={<Protected cmp={<ServiceList />} />} />
        <Route path="/offerzone" element={<OfferZone />} />
        <Route path="/updateservice/:id" element={<Protected cmp={<UpdateService />} />} />
        <Route path="/updateemp/:id" element={<Protected cmp={<UpdateEmployee />} />} />
        <Route path="/showallfeedback" element={<Protected cmp={<ShowAllFeedback />} />} />
        <Route path="/bookservice/:id" element={<Protected cmp={<BookService />} />} />
        <Route path="/createadmin" element={<CreateAdmin></CreateAdmin>}></Route>
        <Route
          path="/showallbookedservices"
          element={<Protected cmp={<ShowAllBookedServices />} />}
        />
        <Route path="/availableservice/:id" element={<Protected cmp={<AvailableServices />} />} />
        <Route path="/userdetails/:id" element={<Protected cmp={<UserDetails />} />} />
        <Route path="/updateuser/:id" element={<Protected cmp={<UpdateUser />} />} />
        <Route path="/custorder/:id" element={<Protected cmp={<CustOrder />} />} />
        <Route path="/uploadimage/:id" element={<Protected cmp={<UploadImage />} />} />
        <Route path="/showpending" element={<Protected cmp={<ShowPending />} />} />
        <Route path="/showcompleted" element={<Protected cmp={<ShowCompleted />} />} />
        {/* <Route path="/offerzone" element={<Protected cmp={<OfferZone />} />} /> */}
      </Routes>
      <ToastContainer position="top-right" autoClose={2000} />
    </BrowserRouter>
  );
}

export default App;
