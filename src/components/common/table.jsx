import React from "react";
import TableHeader from "./tableHeader";
import Tablebody from "./tableBody";

const Table = ({ columns, sortColumn, onSort, data }) => {
  return (
    <table className="table">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <Tablebody data={data} columns={columns} />
    </table>
  );
};

export default Table;
