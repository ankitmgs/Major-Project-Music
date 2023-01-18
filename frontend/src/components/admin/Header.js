import React from "react";
import { NavLink } from "react-router-dom";

const AdminHeader = () => {
  return (
    <div>
      {" "}
      <div id="preview" className="preview">
        <div style={{ display: "none" }} />
        <div>
          <div data-draggable="true" style={{ position: "relative" }}>
            <section
              draggable="false"
              className="overflow-hidden pt-0"
              data-v-271253ee=""
            >
              <section className="" style={{ paddingBottom: 1 }}>
                {/* Navbar */}
                <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-2">
                  {/* Container wrapper */}
                  <div className="container-fluid">
                    <div className="d-flex">
                      {/* Toggle button */}
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <i className="fas fa-bars" />
                      </button>
                      {/* Navbar brand */}
                      <a className="navbar-brand ms-3">
                        {/* <i
                      className="fas fa-gem text-primary"
                      aria-controls="#picker-editor"
                      /> */}
                        Admin
                      </a>
                    </div>
                    {/* Collapsible wrapper */}
                    <div
                      className="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      {/* Left links */}
                      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                          <NavLink
                            className="nav-link hover-underline-animation"
                            to="/admin/"
                          >
                            Home
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink
                            className="nav-link hover-underline-animation"
                            to="/admin"
                          >
                            Uploads
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink
                            className="nav-link hover-underline-animation"
                            to="/admin"
                          >
                            Profile
                          </NavLink>
                        </li>
                        {/* <li className="nav-item">
                      <NavLink className="nav-link" to="/podcasts">Podcasts</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li> */}
                      </ul>
                      {/* Left links */}
                    </div>
                    {/* Collapsible wrapper */} {/* Right elements */}
                    <div className="d-flex align-items-center">
                      <NavLink to="/admin">
                        <button
                          type="button"
                          className="btn  btn-link px-3 mb-1 me-2"
                          aria-controls="#picker-editor"
                        >
                          Login
                        </button>
                      </NavLink>
                      <NavLink to="/admin">
                        <button
                          type="button"
                          className="btn  btn-primary mb-1 me-lg-3"
                          aria-controls="#picker-editor"
                        >
                          Sign up
                        </button>
                      </NavLink>
                    </div>
                    {/* Right elements */}
                  </div>
                  {/* Container wrapper */}
                </nav>
                {/* Navbar */}
              </section>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
