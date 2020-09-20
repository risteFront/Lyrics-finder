import React, { useState, useEffect, useContext } from "react";
import { Context, Consumer } from "../../Context";

export default class Search extends React.Component {
  state = {
    title: "",
  };
  handleTitle = (e) => {
    console.log(e.target.value);
    this.setState({
      title: e.target.value,
    });
  };
  submitForm = (dispatch, e) => {
    e.preventDefault();
    console.log(dispatch);
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.title}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
    )
      .then((result) => result.json())
      .then((result) => {
        console.log(result);
        dispatch({
          type: "SEARCH_TRACK",
          payload: result.message.body.track_list,
        });
        this.setState({
          title: "",
        });
        //   this.setState({
        //     track_list: result.message.body.track_list,
        //   });
      });
  };
  render() {
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="display-4 text-center">
                <i className="fas fa-music" /> Search For A Song
              </h1>
              <p className="lead text-center">Get the lyrics for any song</p>
              <form onSubmit={this.submitForm.bind(this, dispatch)}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Song title..."
                    name="userInput"
                    value={this.state.title}
                    onChange={(e) => this.handleTitle(e)}
                  />
                </div>
                <button
                  className="btn btn-success btn-lg btn-block mb-5"
                  type="submit"
                >
                  Get Track Lyrics
                </button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
