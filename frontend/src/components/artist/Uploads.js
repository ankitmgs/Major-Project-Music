import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

const Uploads = () => {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="card mt-5 p-4">
          <h1 style ={{textAlign:"center"}}>Upload Music</h1>
          <hr className="m-0" />
          <div className="row">
            <div className="col-md-12 py-5">
              <div
                className="d-flex justify-content-center"
                style={{ width: "100%" }}
              >
                <FileUploader
                  handleChange={handleChange}
                  name="file"
                  types={fileTypes}
                />
              </div>
              <div className="d-flex justify-content-center">
                <p>
                  {file
                    ? `File name: ${file[0].name}`
                    : "no files uploaded yet"}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <textarea
                class="form-control mb-4"
                id=""
                rows="2"
                placeholder="Song Title"
              ></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-4">
              <div class="custom-file">
                <input
                  type="file"
                  class="custom-file-input"
                  id="inputGroupFile01"
                />
                <label class="custom-file-label" for="inputGroupFile01">
                  Choose file
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12 mb-4">
              <input
                type="text"
                class="form-control"
                id=""
                aria-describedby=""
                placeholder="Artist Name"
              />
            </div>
            <div className="col-md-6 col-sm-12 mb-4">
              <input
                type="text"
                class="form-control"
                id=""
                aria-describedby=""
                placeholder="Composer Name"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12 mb-4">
              <input
                type="text"
                class="form-control"
                id=""
                aria-describedby=""
                placeholder="Producer Name"
              />
            </div>
            <div className="col-md-6 col-sm-12 mb-4">
              <input
                type="text"
                class="form-control"
                id=""
                aria-describedby=""
                placeholder="Writer Name"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <textarea
                class="form-control mb-4"
                id=""
                rows="2"
                placeholder="Description"
              ></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12 mb-4">
              <input
                type="text"
                class="form-control"
                id=""
                aria-describedby=""
                placeholder="Contributor Name"
              />
            </div>
            <div className="col-md-6 col-sm-12 mb-4">
              <input
                type="text"
                class="form-control"
                id=""
                aria-describedby=""
                placeholder="Language"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12 mb-4">
              <input
                type="text"
                class="form-control"
                id=""
                aria-describedby=""
                placeholder="Copyright Year"
              />
            </div>
            <div className="col-md-6 col-sm-12 mb-4">
              <input
                type="text"
                class="form-control"
                id=""
                aria-describedby=""
                placeholder="Copyright Holder"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12 mb-4">
              <input
                type="text"
                class="form-control"
                id=""
                aria-describedby=""
                placeholder="ISRC Code"
              />
            </div>
            {/* <div className="col-md-6 col-sm-12 mb-4">
              <input
                type="text"
                class="form-control"
                id=""
                aria-describedby=""
                placeholder="Song Duration"
              />
            </div> */}
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12 mb-4">
              <div class="form-group">
                <label>Select Genre</label>
                <select id="inputState" class="form-control">
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
                class="form-control"
                id=""
                aria-describedby=""
                placeholder="Song Duration"
              />
            </div>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <button className="btn btn-primary" style={{ width: "90%" }}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uploads;
