import React from "react";

const Table = props => {
  const { data, currentRepo, resultsPerPage } = props;
  return (
    <div>
      {data.slice(currentRepo, currentRepo + resultsPerPage).map(repo => {
        return <p key={repo.id}>{repo.name}</p>;
      })}
    </div>
  );
};

export default Table;
