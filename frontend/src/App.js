import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/main';
import Login from './components/main/Login';
import Signup from './components/main/Signup';
import Admin from './components/admin';
import User from './components/user';
import Artist from './components/artist';
import AdminProfile from './components/admin/Profile';
import UserProfile from './components/user/Profile';
import ResetPassword from './components/main/ResetPassword';
import ContactUs from './components/main/ContactUs';
import NewPassword from './components/main/NewPassword';
import Uploads from './components/artist/Uploads';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route element={<Main />} path="main">
            <Route path="login" element={<Login />} />
            <Route path="resetpassword" element={<ResetPassword />} />
            <Route path="newpassword/:id/:token" element={<NewPassword />} />
            <Route path="signup" element={<Signup />} />
            <Route path="contactus" element={<ContactUs/>} />
          </Route>
          
          <Route element={<Admin />} path="admin">
            <Route path="pofile" element={<AdminProfile />} />
          
          </Route>
          <Route element={<Artist />} path="artist">
          <Route path="uploads" element={<Uploads />} />
          
          </Route>
          
          <Route element={<User />} path="user">
            <Route path="profile" element={<UserProfile />} />
          
          </Route>

          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
