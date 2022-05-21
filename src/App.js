import { Route, Routes } from 'react-router-dom';
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

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/appointment' element={
          <RequireAuth>
            <MyOrders />
          </RequireAuth>} />
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/profile' element={<MyProfile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/singup' element={<Singup />} />
        <Route path='/resetpass' element={<ResetPassword />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
