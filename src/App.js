import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import RequireAuth from '../src/Pages/Login/RequireAuth';
import Blogs from './Pages/Blogs/Blogs';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import MyOrders from './Pages/MyOrders/MyOrders';
import MyProfile from './Pages/MyProfile/MyProfile';
import ResetPassword from './Pages/ResetPassword/ResetPassword';
import Navbar from './Pages/Shared/Navbar';
import Singup from './Pages/SingUp/Singup';
import Reviews from './Reviews/Reviews';
import Purchase from './Pages/Purchase/Purchase';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import ProductDetails from './Pages/ProductDetails.js/ProductDetails';

function App() {
  return (
    <div className='max-w-screen-2xl m-auto bg-base-100;'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='ProductDetails/:id' element={
          <RequireAuth>
            <ProductDetails />
          </RequireAuth>} />
        <Route path='/orders' element={
          <RequireAuth>
            <MyOrders />
          </RequireAuth>} />
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>} />
        <Route path='/purchase' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/profile' element={<MyProfile />} />
        <Route path='/Portfolio' element={<MyPortfolio />} />
        <Route path='/login' element={<Login />} />
        <Route path='/singup' element={<Singup />} />
        <Route path='/resetpass' element={<ResetPassword />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
