import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Formik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import app_config from "../../config";
import Swal from "sweetalert2";

const Login = () => {
  const url = app_config.api_url;
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const loginForm = {
    email: "",
    password: "",
  };

  const LoginSubmit = (formdata) => {
    console.log(formdata);
    setLoading(true);

    const reqOpt = {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url + "/artist/authenticate", reqOpt)
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "You have loggedin successfully!",
          });
        } else if (res.status === 400) {
          Swal.fire({
            icon: "error",
            title: "Failed",
            text: "Email or password is incorrect!",
          });
        } else {
          Swal.fire({
            icon: "warning",
            title: "Failed",
            text: "Something Error !!",
          });
        }
        setLoading(false);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        sessionStorage.setItem("artist", JSON.stringify(data));
        navigate("/artist/uploads");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ background: "#50b7d2" }}>
      <Formik initialValues={loginForm} onSubmit={LoginSubmit}>
        {({ values, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <MDBContainer fluid>
              <MDBRow className="d-flex justify-content-center align-items-center h-100">
                <MDBCol col="12">
                  <MDBCard
                    className="bg-dark text-white my-5 mx-auto"
                    style={{ borderRadius: "1rem", maxWidth: "400px" }}
                  >
                    <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                      <h2 className="fw-bold mb-2 text-uppercase">Artist</h2>
                      <p className="text-white-50 mb-5">
                        Please enter your login and password!
                      </p>

                      <MDBInput
                        wrapperClass="mb-4 mx-5 w-100"
                        labelClass="text-white"
                        label="Email address"
                        id="email"
                        type="email"
                        size="lg"
                        style={{ color: "white" }}
                        value={values.email}
                        onChange={handleChange}
                      />

                      <MDBInput
                        wrapperClass="mb-4 mx-5 w-100"
                        labelClass="text-white"
                        label="Password"
                        id="password"
                        type="password"
                        size="lg"
                        style={{ color: "white" }}
                        value={values.password}
                        onChange={handleChange}
                      />

                      <p className="small mb-3 pb-lg-2">
                        <NavLink to="/main/resetpassword">
                          <a class="text-white-50" href="#!">
                            Forgot password?
                          </a>
                        </NavLink>
                      </p>
                      <button
                        outline
                        className="btn btn-primary mx-2 px-5"
                        size="lg"
                        type="submit"
                        style={{ color: "white", backgroundColor: "#6a11cb" }}
                      >
                        {loading ? (
                          <CircularProgress
                            size="1rem"
                            style={{ color: "white" }}
                            className="py-0"
                          />
                        ) : (
                          "Login"
                        )}
                      </button>

                      <div className="d-flex flex-row mt-3 mb-5">
                        <MDBBtn
                          tag="a"
                          color="none"
                          className="m-3"
                          style={{ color: "white" }}
                        >
                          <MDBIcon fab icon="facebook-f" size="lg" />
                        </MDBBtn>

                        <MDBBtn
                          tag="a"
                          color="none"
                          className="m-3"
                          style={{ color: "white" }}
                        >
                          <MDBIcon fab icon="twitter" size="lg" />
                        </MDBBtn>

                        <MDBBtn
                          tag="a"
                          color="none"
                          className="m-3"
                          style={{ color: "white" }}
                        >
                          <MDBIcon fab icon="google" size="lg" />
                        </MDBBtn>
                      </div>

                      <div>
                        <p className="mb-0">
                          Don't have an account?{" "}
                          <NavLink
                            to="/main/signup"
                            class="text-white-50 fw-bold"
                          >
                            Sign Up
                          </NavLink>
                        </p>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
