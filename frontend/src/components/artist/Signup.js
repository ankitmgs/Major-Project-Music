import React, { useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCheckbox,
  MDBCol,
  MDBContainer,
  MDBFile,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import { Formik } from "formik";
import app_config from "../../config";
import Swal from "sweetalert2";
import { CircularProgress } from "@mui/material";

const Signup = () => {
  const url = app_config.api_url;
  const [loading, setLoading] = useState(false);
  const signupForm = {};

  const SignupSubmit = (formdata) => {
    setLoading(true);
    fetch(url + "/user/register", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res.status);
        if (res.status === 201) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Registered Successfully",
          });
        } else if (res.status === 409) {
          Swal.fire({
            icon: "warning",
            title: "Email already exists !",
            // text: "Email already exist !!",
          });
        } else if (res.status === 401) {
          Swal.fire({
            icon: "warning",
            // title: "Success",
            title: "Password not matching !",
          });
        } else if (res.status === 422) {
          Swal.fire({
            icon: "warning",
            // title: "Success",
            title: "Enter all the given fields !",
          });
        }
        setLoading(false);
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ backgroundColor: "skyblue" }}>
      <Formik initialValues={signupForm} onSubmit={SignupSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <MDBContainer fluid className="h-custom">
              <MDBRow className="d-flex justify-content-center align-items-center h-100">
                <MDBCol col="12" className="m-5">
                  <MDBCard
                    className="card-registration card-registration-2"
                    style={{ borderRadius: "15px" }}
                  >
                    <MDBCardBody className="p-0">
                      <MDBRow>
                        <MDBCol md="6" className="p-5 bg-white" style={{borderRadius: "15px"}}>
                          <h3
                            className="fw-normal mb-5"
                            style={{ color: "#4835d4" }}
                          >
                            General Infomation
                          </h3>
                          <select
                            class="form-select form-select-lg mb-4"
                            aria-label="Default select example"
                          >
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>

                          <MDBRow>
                            <MDBCol md="6">
                              <MDBInput
                                wrapperClass="mb-4"
                                label="First Name"
                                size="lg"
                                id="form1"
                                type="text"
                              />
                            </MDBCol>

                            <MDBCol md="6">
                              <MDBInput
                                wrapperClass="mb-4"
                                label="Last Name"
                                size="lg"
                                id="form2"
                                type="text"
                              />
                            </MDBCol>
                          </MDBRow>

                          <select
                            class="form-select form-select-lg mb-4"
                            aria-label="Default select example"
                          >
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                          <MDBInput
                            wrapperClass="mb-4"
                            label="Position"
                            size="lg"
                            id="form3"
                            type="text"
                          />

                          <MDBRow>
                            <MDBCol md="6">
                              <MDBInput
                                wrapperClass="mb-4"
                                label="Bussines Arena"
                                size="lg"
                                id="form4"
                                type="text"
                              />
                            </MDBCol>

                            <MDBCol md="6">
                              <select
                                class="form-select form-select-lg mb-3"
                                aria-label="Default select example"
                              >
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </MDBCol>
                          </MDBRow>
                        </MDBCol>

                        <MDBCol
                          md="6"
                          className="bg-indigo p-5"
                          style={{ backgroundColor: "black", borderRadius: "0 15px 15px 0 " }}
                        >
                          <h3
                            className="fw-normal mb-5 text-white"
                            style={{ color: "#4835d4" }}
                          >
                            Contact Details
                          </h3>
                          <MDBInput
                            wrapperClass="mb-4"
                            labelClass="text-white"
                            label="Name"
                            size="lg"
                            id="form5"
                            type="text"
                            style={{ color: "white" }}
                          />
                          <MDBInput
                            wrapperClass="mb-4"
                            labelClass="text-white"
                            label="Username"
                            size="lg"
                            id="form5"
                            type="text"
                            style={{ color: "white" }}
                          />
                          <label style={{ color: "white" }}>
                            Upload Avatar Image
                          </label>
                          <MDBFile className="mb-4" id="customFile" />

                          <MDBInput
                            style={{ color: "white" }}
                            wrapperClass="mb-4"
                            labelClass="text-white"
                            label="Additional Information"
                            size="lg"
                            id="form6"
                            type="text"
                          />

                          <MDBRow>
                            <MDBCol md="5">
                              <MDBInput
                                style={{ color: "white" }}
                                wrapperClass="mb-4"
                                labelClass="text-white"
                                label="Zip Code"
                                size="lg"
                                id="form6"
                                type="text"
                              />
                            </MDBCol>

                            <MDBCol md="7">
                              <MDBInput
                                style={{ color: "white" }}
                                wrapperClass="mb-4"
                                labelClass="text-white"
                                label="Place"
                                size="lg"
                                id="form7"
                                type="text"
                              />
                            </MDBCol>
                          </MDBRow>

                          <MDBInput
                            style={{ color: "white" }}
                            wrapperClass="mb-4"
                            labelClass="text-white"
                            label="Country"
                            size="lg"
                            id="form8"
                            type="text"
                          />

                          <MDBRow>
                            <MDBCol md="5">
                              <MDBInput
                                style={{ color: "white" }}
                                wrapperClass="mb-4"
                                labelClass="text-white"
                                label="Code +"
                                size="lg"
                                id="form9"
                                type="text"
                              />
                            </MDBCol>

                            <MDBCol md="7">
                              <MDBInput
                                style={{ color: "white" }}
                                wrapperClass="mb-4"
                                labelClass="text-white"
                                label="Phone Number"
                                size="lg"
                                id="form10"
                                type="text"
                              />
                            </MDBCol>
                          </MDBRow>

                          <MDBInput
                            style={{ color: "white" }}
                            wrapperClass="mb-4"
                            labelClass="text-white"
                            label="Your Email"
                            size="lg"
                            id="form8"
                            type="email"
                          />
                          <MDBCheckbox
                            name="flexCheck"
                            id="flexCheckDefault"
                            labelClass="text-white mb-4"
                            label="I do accept the Terms and Conditions of your site."
                          />
                          <MDBBtn color="light" size="lg">
                            Register
                          </MDBBtn>
                        </MDBCol>
                      </MDBRow>
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

export default Signup;
