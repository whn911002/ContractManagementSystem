import React, { Component } from "react";
import Mark from "./common/mark";
import Table from "./common/table";
import { Link } from "react-router-dom";

class ContractsTable extends Component {
  columns = [
    {
      path: "username",
      label: "User Name",
      content: contract => (
        <Link to={`/contracts/${contract.id}`}>
          {contract.user.surname + ", " + contract.user.name}
        </Link>
      )
    },
    { path: "amountInUsd", label: "Amount" },
    { path: "currency", label: "Currency" },
    { path: "date", label: "Date" },
    {
      key: "mark",
      content: contract => (
        <Mark
          onClick={() => this.props.onMark(contract)}
          marked={contract.marked}
        />
      )
    },
    {
      key: "delete",
      content: contract => (
        <button
          onClick={() => this.props.onDelete(contract)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      )
    }
  ];

  render() {
    const { contracts, sortColumn, onSort } = this.props;
    return (
      <Table
        columns={this.columns}
        data={contracts}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default ContractsTable;
