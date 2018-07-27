import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Table from "./Table";

class App extends Component {
  state = {
    data: [],
    isLoading: false,
    error: false,
    currentRepo: 1000, //142583100,
    resultCount: 0,
    resultsPerPage: 10
  };

  componentDidMount() {
    const baseurl = "https://api.github.com/repositories?since=";
    const url = baseurl + this.state.currentRepo;
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  next = () => {
    const { resultCount, resultsPerPage } = this.state;
    const nextRepo = resultCount + resultsPerPage;
    this.setState({ resultCount: nextRepo });
  };

  back = () => {
    const { resultCount, resultsPerPage } = this.state;
    const prevRepo = resultCount - resultsPerPage;
    this.setState({ resultCount: prevRepo });
  };

  render() {
    const { data, isLoading, error, resultCount, resultsPerPage } = this.state;
    const results = data.length;
    return (
      <div className="App">
        <h1>Github Public Repositories</h1>
        <Table
          data={data}
          resultCount={resultCount}
          resultsPerPage={resultsPerPage}
        />
        {resultCount === 0 ? (
          ""
        ) : (
          <button className="button" onClick={this.back}>
            Back
          </button>
        )}
        {resultCount + resultsPerPage < results ? (
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
