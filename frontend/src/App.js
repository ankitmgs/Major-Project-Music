import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./components/main";
import Login from "./components/main/Login";
import Signup from "./components/main/Signup";
import Admin from "./components/admin";
import User from "./components/user";
import Artist from "./components/artist";
import AdminProfile from "./components/admin/Profile";
import UserProfile from "./components/user/Profile";
import ResetPassword from "./components/main/ResetPassword";
import ContactUs from "./components/main/ContactUs";
import NewPassword from "./components/main/NewPassword";
import Uploads from "./components/artist/Uploads";
import ArtistProfile from "./components/artist/Profile";
import ArtistLogin from "./components/artist/Login";
import ArtistSignup from "./components/artist/Signup";
import Home from "./components/main/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Navigate to="/main/home" />} path="/"/>
          <Route element={<Main />} path="main">
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="resetpassword" element={<ResetPassword />} />
            <Route path="newpassword/:id/:token" element={<NewPassword />} />
            <Route path="signup" element={<Signup />} />
            <Route path="contactus" element={<ContactUs />} />
            <Route path="artistlogin" element={<ArtistLogin />} />
            <Route path="artistsignup" element={<ArtistSignup />} />
          </Route>

          <Route element={<Admin />} path="admin">
            <Route path="pofile" element={<AdminProfile />} />
          </Route>
          <Route element={<Artist />} path="artist">
            <Route path="uploads" element={<Uploads />} />
            <Route path="artistprofile" element={<ArtistProfile />} />
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
