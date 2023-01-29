import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import app_config from "../../config";
import Loader from "../utils/loader";

const EditArtist = () => {
  const [isloading, setIsloading] = useState(true);
  const artistId = useParams();
  const [initialForm, setInitialForm] = useState(null);
  const url = app_config.api_url;

  const getArtistbyId = () => {
    // console.log("artist id ye hai", artistId.artid);
    // setIsloading(false);
    fetch(url + "/artist/getbyid/" + artistId.artid)
      .then((res) => {
        console.log(res.status);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setInitialForm(data);
        console.log("asdf",initialForm);
        setIsloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getArtistbyId();
  }, []);

  const updateSubmit = (formdata) => {
    fetch(url + "/artist/update/" + artistId.artid, {
      method: "PUT",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Music File Updated Successfully !!",
          });
          // navigate("/artist/manageSongs");
        }
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {isloading && initialForm ? (
        <Loader />
      ) : (
        <Formik initialValues={initialForm} onSubmit={updateSubmit}>
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className="container">
                <div className="card">
                  <div className="container">
                    <h3 className="d-flex justify-content-center">
                      Edit Artist Details
                    </h3>
                    <div className="row mb-3">
                      <div className="col-md-12">
                        <input
                          className="form-control"
                          placeholder="Edit Name"
                          id="name" 
                          // value={values.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-12">
                        <input
                          className="form-control"
                          placeholder="Edit Email"
                          id=""
                        //   value={values.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-12">
                        <input
                          className="form-control"
                          placeholder="Edit Gender"
                          id=""
                        //   value={values.gender}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button type="submit" className=" btn btn-secondary w-50 my-3">
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default EditArtist;
