import React from 'react';
import { useNavigate } from "react-router-dom";



const UserProfile = () => {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: "#eee" }} className="p-5">
      <div className='container' >
        <div className='card p-4'>
          <div className='avatar'>

          </div>
          <div className='p-4'>
            <h2>Profile</h2>
            <div className='' style={{display: "flex"}}>
              <p className='w-50 m-0' style={{alignItems: "center"}}>
                UserName
              </p>
              <p>Rehnuma Bano</p>
            </div>
            <hr className='mt-0' />
            <div className='' style={{display: "flex"}}>
              <p className='w-50 m-0' style={{alignItems: "center"}}>
                Email
              </p>
              <p>demo@gmail.com</p>
            </div>
            <hr className='mt-0' />
            <div className='' style={{display: "flex"}}>
              <p className='w-50 m-0' style={{alignItems: "center"}}>
                Date Of Birth
              </p>
              <p>11/09/2002</p>
            </div>
            <hr className='mt-0' />
            <div className='' style={{display: "flex"}}>
              <p className='w-50 m-0' style={{alignItems: "center"}}>
               Mobile No.
              </p>
              <p>672153615345</p>
            </div>
            <hr className='mt-0' />
            <div className='' style={{display: "flex"}}>
              <p className='w-50 m-0' style={{alignItems: "center"}}>
               Country or region
              </p>
              <p>India</p>
            </div>
            <hr className='mt-0' />
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