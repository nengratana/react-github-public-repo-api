import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Table from "./Table";

class App extends Component {
  state = {
    data: [],
    isLoading: false,
    error: false,
    currentRepo: 0,
    resultsPerPage: 10
  };

  componentDidMount() {
    const baseurl = "https://api.github.com/repositories?since=";
    const url = baseurl + this.state.currentRepo;

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  next = event => {
    const { currentRepo, resultsPerPage } = this.state;
    const nextRepo = currentRepo + resultsPerPage;
    this.setState({ currentRepo: nextRepo });
  };

  render() {
    const { data, isLoading, error, currentRepo, resultsPerPage } = this.state;

    return (
      <div className="App">
        <h1>Github Public Repositories</h1>
        <Table
          data={data}
          currentRepo={currentRepo}
          resultsPerPage={resultsPerPage}
        />
        <button className="button">Back</button>
        <button className="button" onClick={this.next}>
          Next
        </button>
      </div>
    );
  }
}

export default App;
