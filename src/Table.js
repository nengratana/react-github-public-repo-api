import React from "react";

const Table = props => {
  const { data, start, resultsPerPage } = props;
  return (
    <div>
      {data.slice(start, start + resultsPerPage).map(repo => {
        return <p key={repo.id}>{repo.name}</p>;
      })}
    </div>
  );
};

export default Table;
