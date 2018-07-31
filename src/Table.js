import React from "react";

const Table = props => {
  const { data, resultCount, resultsPerPage, isLoading, error } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Repo Name</th>
          <th>Description</th>
          <th>Owner</th>
        </tr>
      </thead>
      {isLoading ? (
        <tbody>
          <tr>
            <td colspan="4" className="loading message">
              LOADING...
            </td>
          </tr>
        </tbody>
      ) : (
        <tbody />
      )}
      {error ? (
        <tbody>
          <tr>
            <td colspan="4" className="error message">
              Fetching data failed!
            </td>
          </tr>
        </tbody>
      ) : (
        <tbody>
          {data.slice(resultCount, resultCount + resultsPerPage).map(repo => {
            return (
              <tr key={repo.id}>
                <td className="id">{repo.id}</td>
                <td className="name">
                  <a href={repo.html_url} title={repo.name}>
                    {repo.name}
                  </a>
                </td>
                <td className="desc">{repo.description}</td>
                <td className="owner">
                  <a href={repo.owner.html_url} title={repo.owner.login}>
                    {repo.owner.login}
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      )}
    </table>
  );
};

export default Table;
