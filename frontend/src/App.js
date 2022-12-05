import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/main';
import Login from './components/main/Login';
import Signup from './components/main/Signup';
import Admin from './components/admin';
import User from './components/user';
import AdminProfile from './components/admin/Profile';
import UserProfile from './components/user/Profile';
import Uploads from './components/user/Uploads';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route element={<Main />} path="main">
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
          
          <Route element={<Admin />} path="admin">
            <Route path="pofile" element={<AdminProfile />} />
          
          </Route>
          
          <Route element={<User />} path="user">
            <Route path="profile" element={<UserProfile />} />
            <Route path="uploads" element={<Uploads />} />
          
          </Route>

          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
