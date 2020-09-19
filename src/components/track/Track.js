import React from "react";
import { Link } from "react-router-dom";
export default function Track({ value }) {
  return (
    <div className="col-md-6">
      <div className="card mb-6 sandow-sm">
        <div className="card-body">
          <h5>{value.artist_name}</h5>
          <strong>
            <i className="fas fa-play">Track</i>
          </strong>
          : {value.track_name}
          <br />
          <strong>
            <i className="fas fa-compact-disc">Album</i>
          </strong>
          : {value.album_name}
          <Link
            to={`lyrics/track/${value.track_id}`}
            className="btn btn-dark btn-block"
          >
            <i className="fas fa chevron-right"></i> View Lyrics
          </Link>
        </div>
      </div>
    </div>
  );
}
