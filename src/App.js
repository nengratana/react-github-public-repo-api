import React, { Component } from "react";
import "./App.css";

import Table from "./Table";

class App extends Component {
  state = {
    data: [],
    isLoading: false,
    error: false,
    currentRepo: 0,
    resultCount: 0,
    resultsPerPage: 10
  };

  componentDidMount() {
    // Show loading while fetching data from Github API
    this.setState({ isLoading: true });
    const baseurl = "https://api.github.com/repositories?since=";
    const url = baseurl + this.state.currentRepo;
    fetch(url)
      .then(response => {
        // Hide loading
        this.setState({ isLoading: false });
        // Check for error
        if (!response.ok) {
          throw Error("Request Failed");
        }
        return response;
      })
      .then(response => response.json())
      .then(
        data => {
          this.setState({ data });
        },
        // If error then change error state to True
        () => {
          this.setState({ error: true });
        }
      );
  }

  next = () => {
    const { resultCount, resultsPerPage } = this.state;
    // Set mark for .Slice (Pagination)
    const nextRepo = resultCount + resultsPerPage;
    this.setState({ resultCount: nextRepo });
  };

  back = () => {
    const { resultCount, resultsPerPage } = this.state;
    // Set mark for .Slice (Pagination)
    const prevRepo = resultCount - resultsPerPage;
    this.setState({ resultCount: prevRepo });
  };

  render() {
    const { data, isLoading, error, resultCount, resultsPerPage } = this.state;
    // Find total no. of data
    const results = data.length;
    return (
      <div className="App">
        <h1>Github Public Repositories</h1>
        <div className="repo">
          <Table
            data={data}
            resultCount={resultCount}
            resultsPerPage={resultsPerPage}
            isLoading={isLoading}
            error={error}
          />
          <div className="pagination">
            {resultCount === 0 ? ( // If this is the first page, hide Back button
              ""
            ) : (
              <button className="button" onClick={this.back}>
                Back
              </button>
            )}

            {resultCount + resultsPerPage < results ? ( // If this is the last page, hide Next button
              <button className="button" onClick={this.next}>
                Next
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
