import React from "react";

const Table = props => {
  const { data, resultCount, resultsPerPage } = props;
  return (
    <div>
      {data.slice(resultCount, resultCount + resultsPerPage).map(repo => {
        return <p key={repo.id}>{repo.name}</p>;
      })}
    </div>
  );
};

export default Table;
