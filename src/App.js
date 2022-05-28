import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Footer from '../src/Pages/Shared/Footer';
import RequireAuth from '../src/Pages/Login/RequireAuth';
import Blogs from './Pages/Blogs/Blogs';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile/MyProfile';
import ResetPassword from './Pages/ResetPassword/ResetPassword';
import Navbar from './Pages/Shared/Navbar';
import Singup from './Pages/SingUp/Singup';
import Purchase from './Pages/Purchase/Purchase';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import AddReviews from './Pages/Dashboard/AddReviews/AddReviews';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import RequireAdminAuth from './Pages/Dashboard/RequireAdminAuth';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders/ManageAllOrders';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import ManageProducts from './Pages/Dashboard/ManageProducts/ManageProducts';
import Payment from './Pages/Dashboard/Payment/Payment';
import AddProfile from './Pages/Dashboard/MyProfile/AddProfile';
import pageNotFound from './Pages/404/PageNotFound';
import PageNotFound from './Pages/404/PageNotFound';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='purchase/:id' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>} />
        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          
          <Route path='myorders' element={<MyOrders />} />
          <Route path='payment/:id' element={<Payment />} />
          <Route path='addreview' element={<AddReviews />} />
          <Route path='myprofile' element={<MyProfile />} />
          <Route path='myprofile' element={<MyProfile />} />
          <Route path='add-profile' element={<AddProfile />} />
          <Route path='manage-orders' element={<ManageAllOrders />} />
          <Route path='add-product' element={<AddProduct />} />
          <Route path='manage-products' element={<ManageProducts />} />
          <Route path='make-Admin' element={
            <RequireAdminAuth>
              <MakeAdmin />
            </RequireAdminAuth>
          }/>
        </Route>
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/Portfolio' element={<MyPortfolio />} />
        <Route path='/login' element={<Login />} />
        <Route path='/singup' element={<Singup />} />
        <Route path='/resetpass' element={<ResetPassword />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
