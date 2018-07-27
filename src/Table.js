import React from "react";

const Table = props => {
  const { data, resultCount, resultsPerPage } = props;
  return (
    <table className="table repo">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Owner</th>
        </tr>
      </thead>
      <tbody>
        {data.slice(resultCount, resultCount + resultsPerPage).map(repo => {
          return (
            <tr key={repo.id}>
              <th>{repo.id}</th>
              <td>
                <a href={repo.html_url} title={repo.name}>
                  {repo.name}
                </a>
              </td>
              <td>{repo.description}</td>
              <td>
                <a href={repo.owner.html_url} title={repo.owner.login}>
                  {repo.owner.login}
                </a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
