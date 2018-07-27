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
    resultsPerPage: 9
  };

  componentDidMount() {
    const baseurl = "https://api.github.com/repositories?since=";
    const url = baseurl + this.state.currentRepo;

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  next = () => {
    const { currentRepo, resultsPerPage } = this.state;
    const nextRepo = currentRepo + resultsPerPage;
    this.setState({ currentRepo: nextRepo });
  };

  back = () => {
    const { currentRepo, resultsPerPage } = this.state;
    const prevRepo = currentRepo - resultsPerPage;
    this.setState({ currentRepo: prevRepo });
  };

  render() {
    const { data, isLoading, error, currentRepo, resultsPerPage } = this.state;
    const results = data.length;
    return (
      <div className="App">
        <h1>Github Public Repositories</h1>
        <Table
          data={data}
          currentRepo={currentRepo}
          resultsPerPage={resultsPerPage}
        />
        {currentRepo == 0 ? (
          ""
        ) : (
          <button className="button" onClick={this.back}>
            Back
          </button>
        )}
        {currentRepo + resultsPerPage < results ? (
          <button className="button" onClick={this.next}>
            Next
          </button>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
