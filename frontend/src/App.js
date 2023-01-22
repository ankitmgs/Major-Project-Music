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
import { UserProvider } from "./UserContext";
import { useState } from "react";
import ArtistAuth from "./ArtistAuth";
import ArtistHome from "./components/artist/Home";
import NotFound from "./components/NotFound";
import ManageArtist from "./components/admin/ManageArtist";
import UserHome from "./components/user/Home";
import UserDashboard from "./components/user/Dashboard";
import AdminDashboard from "./components/admin/Dashboard";
import ArtistDashboard from "./components/artist/Dashboard";
import EditProfile from "./components/user/EditProfile";
import ManageUser from "./components/admin/ManageUser";


function App() {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  return (
    <div>
      <UserProvider user={currentUser}>
        <BrowserRouter>
          <Routes>
            <Route element={<Navigate to="/main/home" />} path="/" />
            <Route path='*' element={<NotFound />} />
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
              <Route path="profile" element={<AdminProfile />} />
              <Route path="adminDashboard" element={<AdminDashboard />} />
              <Route path="manageUsers" element={<ManageUser />} />
              <Route path="manageArtists" element={<ManageArtist />} />
            </Route>


            <Route
              element={
                <ArtistAuth>
                  <Artist />
                </ArtistAuth>
              }
              path="artist"
            >
              <Route path="manageArtist" element={<ManageArtist />} />
              <Route path="uploads" element={<Uploads />} />
              <Route path="artistprofile" element={<ArtistProfile />} />
              <Route path="home" element={<ArtistHome />} />
              <Route path="artistdashboard" element={<ArtistDashboard />} />
            </Route>

            <Route element={<User />} path="user">
              <Route path="profile" element={<UserProfile />} />
              <Route path="editprofile" element={<EditProfile />} />
              <Route path="home" element={<UserHome />} />
              <Route path="manageUsers" element={<ManageUser />} />
              <Route path="userDashboard" element={<UserDashboard />} />

            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
