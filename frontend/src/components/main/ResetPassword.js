import React from 'react'
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="card text-center mt-5 mx-auto " style={{ width: 500 }}>
                <div className="card-header h5 text-white bg-info">New Password</div>
                <div className="card-body  px-5">
                    <p className="card-text py-3 ">
                        Enter your email address and we'll send you an email with instructions to
                        reset your password.
                    </p>
                    <div class="mb-4">
                        {/* <label for="email" class="form-label ">Email</label> */}
                        <input type="email" id="email" className="form-control py-2" name="email" placeholder="Enter Your Email"
                            required=""/>
                    </div>

                    <button  href="#" className="btn btn-info w-100"  onClick={() => navigate("/main/newpassword/" )}>
                       Send Login Link
                    </button>
                    <div className="d-flex justify-content-between mt-4 py-4">
                        <a className="" href="#">
                            Login
                        </a>
                        <a className="" href="#">
                            Register
                        </a>
                    </div>
                </div>
            </div>


        </>
    )
}

export default ResetPassword