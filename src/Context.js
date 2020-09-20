import React, { Component } from "react";

export const Context = React.createContext();

const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "SEARCH_TRACK":
      return {
        ...state,
        track_list: action.payload,
        heading: "Search Result",
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    track_list: [],
    heading: "Top 10 Track",
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };
  componentDidMount() {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`
    )
      .then((result) => result.json())
      .then((result) => {
        console.log(result);
        this.setState({
          track_list: result.message.body.track_list,
        });
      });
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
