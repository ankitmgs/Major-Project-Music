import React from 'react';
import { useNavigate } from "react-router-dom";



const UserProfile = () => {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: "#eee" }} className="p-5">
      <div className='container' >
        <div className='card p-5 m '>
          <div className='p-4'>
            <h2>Profile</h2>
            <br>
            </br>
            <p>
              UserName
            </p>
            <hr></hr>
            <p>
              Email
            </p>
            <hr></hr>
            <p>
              Gender
            </p>
            <hr></hr>
            <p>
              Date Of birth
            </p>
            <hr></hr>
            <p>
              Mobile Number
            </p>
            <hr></hr>
            <p>
              Country or region
            </p>
            <hr></hr>
            <button className="btn btn-primary" onClick={(e) => navigate("/user/editprofile")}>
              Edit  Profile
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default UserProfile