import TextField from "@mui/material/TextField";
import { Formik } from "formik";
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import Swal from "sweetalert2";
import app_config from "../../config";

const fileTypes = ["MP3", "WAV"];

const Uploads = () => {
  const [file, setFile] = useState(null);
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('artist')));
  const handleChange = (file) => {
    setFile(file);
  };

  const url = app_config.api_url;

  const uploadForm = {
    title: "",
    thumbnail: "",
    artist: currentUser._id,
    composer: "",
    producer: "",
    writer: "",
    genre: "",
    description: "",
    contibutor: "",
    language: "",
    copyrightYear: "",
    copyrightHolder: "",
    ISRCcode: "",
    songDuration: "",
    Bpm: "",
  };

  const uploadFile = (file) => {
    // console.log(files);
    // const file = files[0];
    setFile(file);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
      }
    });
  };

  const uploadImage = (e) => {
    const file = e.target.files[0];
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
      }
    });
  };

  const UploadSubmit = (formdata) => {
    formdata.musicfile = file.name;
    fetch(url + "/music/add", {
      method: "POST",
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
            text: "Music Uploded Successfully !!",
          });
        }
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Formik initialValues={uploadForm} onSubmit={UploadSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="container mt-5 mb-5">
              <div className="card mt-5 p-4">
                <h1 style={{ textAlign: "center" }}>Upload Music</h1>
                <hr className="m-0" />
                <div className="row">
                  <div className="col-md-12 py-5">
                    <div
                      className="d-flex justify-content-center"
                      style={{ width: "100%" }}
                    >
                      <FileUploader
                        handleChange={uploadFile}
                        
                        types={fileTypes}
                      />
                    </div>
                    <div className="d-flex justify-content-center">
                      <p>
                        {file
                          ? `File name: ${file.name}`
                          : "no files uploaded yet"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <textarea
                      className="form-control mb-4"
                      id="title"
                      value={values.title}
                      onChange={handleChange}
                      rows="2"
                      placeholder="Song Title"
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 mb-4">
                    <div className="custom-file">
                      <label>Thumbnail</label>
                      <br />
                      <input
                        type="file"
                        className="custom-file-input"
                        id="thumbnail"
                        value={values.thumbnail}
                        onChange={handleChange}
                      />
                      <label
                        className="custom-file-label"
                        for="inputGroupFile01"
                      >
                        Choose file
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      id="artist"
                      value={values.artist}
                      onChange={handleChange}
                      placeholder="Artist Name"
                    />
                  </div>
                  <div className="col-md-6 col-sm-12 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      id="composer"
                      onChange={handleChange}
                      aria-describedby=""
                      placeholder="Composer Name"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      id="producer"
                      value={values.producer}
                      onChange={handleChange}
                      aria-describedby=""
                      placeholder="Producer Name"
                    />
                  </div>
                  <div className="col-md-6 col-sm-12 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      id="writer"
                      value={values.writer}
                      onChange={handleChange}
                      aria-describedby=""
                      placeholder="Writer Name"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <textarea
                      className="form-control mb-4"
                      id="description"
                      value={values.description}
                      onChange={handleChange}
                      rows="2"
                      placeholder="Description"
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      id="contibutor"
                      value={values.contibutor}
                      onChange={handleChange}
                      placeholder="Contributor Name"
                    />
                  </div>
                  <div className="col-md-6 col-sm-12 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      id="language"
                      value={values.language}
                      onChange={handleChange}
                      placeholder="Language"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12 mb-4">
                    <input
                      type="number"
                      className="form-control"
                      id=""
                      aria-describedby=""
                      placeholder="Copyright Year"
                    />
                  </div>
                  <div className="col-md-6 col-sm-12 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      id="copyrightYear"
                      value={values.copyrightYear}
                      onChange={handleChange}
                      placeholder="Copyright Holder"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      id="ISRCcode"
                      value={values.ISRCcode}
                      onChange={handleChange}
                      aria-describedby=""
                      placeholder="ISRC Code"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12 mb-4">
                    <div className="form-group">
                      <label>Select Genre</label>
                      <select
                        id="genre"
                        className="form-control"
                        value={values.genre}
                        onChange={handleChange}
                      >
                        <option selected>Choose...</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12 mb-4">
                    <label>Enter Song Duration</label>
                    <input
                      type="time"
                      className="form-control"
                      id="songDuration"
                      value={values.songDuration}
                      onChange={handleChange}
                      placeholder="Song Duration"
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-3">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: "90%" }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Uploads;
