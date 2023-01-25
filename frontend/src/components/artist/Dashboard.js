import React from "react";

const ArtistDashboard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="card mt-4 p-4">Total Likes</div>
        </div>
        <div className="col-md-3">
          <div className="card mt-4 p-4">Total Views</div>
        </div>
        <div className="col-md-3">
          <div className="card mt-4 p-4">Total Play</div>
        </div>
        <div className="col-md-3">
          <div className="card mt-4 p-4">Total Music Uploaded</div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card mt-4 p-4">Manage Music</div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="card mt-4 p-4">Graph 1</div>
        </div>
        <div className="col-md-6">
          <div className="card mt-4 p-4">Graph 2</div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card mt-4 p-4">Garph 3</div>
        </div>
      </div>
    </div>
  );
};

export default ArtistDashboard;
