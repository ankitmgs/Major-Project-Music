import React from 'react'

const UserProfile = () => {
  return (

    <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-5 h-100 rounded bg-white mt-2  mb-5">
        {" "}
        <div className="row">
          <div className="col-md-3 border-right">
            <>
              <div className="flex-shrink-0">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                  alt="Generic placeholder image"
                  className="img-fluid"
                  style={{ width: 180, borderRadius: 10 }}
                />
              </div>

              <h5 className="mb-1">Danny McLoan</h5>
              <p className="mb-2 pb-1" style={{ color: "#2b2a2a" }}>
                Senior Journalist
              </p>
              <div
                className="d-flex justify-content-start rounded-3 p-2 mb-2"
                style={{ backgroundColor: "#efefef" }}
              >
                <div>
                  <p className="small text-muted mb-1">Articles</p>
                  <p className="mb-0">41</p>
                </div>
                <div className="px-3">
                  <p className="small text-muted mb-1">Followers</p>
                  <p className="mb-0">976</p>
                </div>
                <div>
                    <p class="small text-muted mb-1">Rating</p>
                    <p class="mb-0">8.5</p>
                  </div>
              </div>
            </>
            <div class="d-flex pt-1">
              <button type="button" class="btn btn-outline-primary me-1 flex-grow-1">Chat</button>
              <button type="button" class="btn btn-primary flex-grow-1">Follow</button>
            </div>
          </div>
          <div className="col-md-5 border-right">
            {" "}
            <div className="p-3 py-5">
              {" "}
              <div className="d-flex justify-content-between align-items-center mb-3">
                {" "}
                <h4 className="text-right">Profile Settings</h4>{" "}
              </div>{" "}
              <div className="row mt-2">
                {" "}
                <div className="col-md-6">
                  <label className="labels">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="first name"
                    defaultValue=""
                  />
                </div>{" "}
                <div className="col-md-6">
                  <label className="labels">Surname</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue=""
                    placeholder="surname"
                  />
                </div>{" "}
              </div>{" "}
              <div className="row mt-3">
                {" "}
                <div className="col-md-12">
                  <label className="labels">PhoneNumber</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter phone number"
                    defaultValue=""
                  />
                </div>{" "}
                <div className="col-md-12">
                  <label className="labels">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter address"
                    defaultValue=""
                  />
                </div>{" "}
                <div className="col-md-12">
                  <label className="labels">Email ID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter email id"
                    defaultValue=""
                  />
                </div>{" "}
                <div className="col-md-12">
                  <label className="labels">Education</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="education"
                    defaultValue=""
                  />
                </div>{" "}
              </div>{" "}
              <div className="row mt-3">
                {" "}
                <div className="col-md-6">
                  <label className="labels">Country</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="country"
                    defaultValue=""
                  />
                </div>{" "}
                <div className="col-md-6">
                  <label className="labels">State/Region</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue=""
                    placeholder="state"
                  />
                </div>{" "}
              </div>{" "}
              <div className="mt-5 text-center">
                <button className="btn btn-primary profile-button" type="button">
                  Save Profile
                </button>
              </div>{" "}
            </div>{" "}
          </div>{" "}

        </div>
      </div>

    </section>


  )
}

export default UserProfile