import React from "react";

export default function Search() {
  return (
    <form id="search-form">
      <div className="row">
        <div className="col">
          <div className="loc">
            <button id="location-btn" className="btn btn-secondary">
              <i className="fa-solid fa-location-dot"></i>
            </button>
          </div>
        </div>
        <div className="col-8">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a city name"
              id="enterCity"
              autoFocus="on"
            />
          </div>
        </div>
        <div className="col">
          <input type="submit" className="btn btn-secondary" value="search" />
        </div>
      </div>
    </form>
  );
}
