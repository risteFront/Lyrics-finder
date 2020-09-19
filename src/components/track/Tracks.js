import React, { Component } from "react";
import { Consumer } from "../../Context";
import Spinner from "../layouts/Spinter";
import Track from "./Track";
export default class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { track_list, heading } = value;
          if (track_list.length == 0 || typeof track_list == "undefined") {
            return <Spinner></Spinner>;
          } else
            return (
              <React.Fragment>
                <div className="text-center md-4">
                  <h1>{heading}</h1>
                  <div className="row">
                    {track_list.map((track, i) => (
                      <Track value={track.track} key={track.track.album_id} />
                    ))}
                  </div>
                </div>
              </React.Fragment>
            );
        }}
      </Consumer>
    );
  }
}
