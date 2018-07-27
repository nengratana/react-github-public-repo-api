import React from "react";

const Table = props => {
  const { data } = props;
  return (
    <div>
      {data.map(repo => {
        return <p key={repo.id}>{repo.name}</p>;
      })}
    </div>
  );
};

export default Table;
