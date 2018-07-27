import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Table from "./Table";

class App extends Component {
  state = {
    data: [],
    isLoading: false,
    error: false,
    start: 0
  };

  componentDidMount() {
    const baseurl = "https://api.github.com/repositories?since=";
    const url = baseurl + this.state.start;

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    const { data, isLoading, error, start } = this.state;

    return (
      <div className="App">
        <h1>Github Public Repositories</h1>
        <Table />
        {data.map(repo => {
          return <p key={repo.id}>{repo.name}</p>;
        })}
      </div>
    );
  }
}

export default App;
