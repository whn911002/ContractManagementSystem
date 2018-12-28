import React, { Component } from "react";
import {
  getContracts,
  deleteContract,
  saveContract
} from "../services/contractService";
import Pagination from "./common/pagination";
import paginate from "../utilities/paginate";
import ContractsTable from "./contractsTable";
import _ from "lodash";
import { Link } from "react-router-dom";
import SearchBox from "./common/searchBox";

export default class Contracts extends Component {
  state = {
    contracts: [],
    pageSize: 5,
    currentPage: 1,
    searchQuery: "",
    sortColumn: { path: "username", order: "asc" }
  };

  async componentDidMount() {
    const { data: contracts } = await getContracts();
    this.setState({ contracts });
  }

  handleDelete = async contract => {
    const originalContracts = this.state.contracts;
    const contracts = originalContracts.filter(c => c.id !== contract.id);
    this.setState({ contracts });
    try {
      await deleteContract(contract.id);
    } catch (ex) {
      if (ex.response) {
        this.setState({ contracts: originalContracts });
      }
    }
  };

  handleMark = contract => {
    const contracts = this.state.contracts.filter(c => {
      if (c.id === contract.id) {
        c.marked = !c.marked;
        saveContract(c);
      }
      return c;
    });
    this.setState({ contracts });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, currentPage: 1 });
  };

  getPagedData = () => {
    const {
      pageSize: size,
      currentPage,
      contracts: allContracts,
      searchQuery,
      sortColumn
    } = this.state;

    let filtered = allContracts;
    if (searchQuery)
      filtered = allContracts.filter(
        m =>
          m.user.name &&
          m.user.surname &&
          (m.user.surname.toLowerCase().includes(searchQuery.toLowerCase()) ||
            m.user.name.toLowerCase().includes(searchQuery.toLowerCase()))
      );

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const contracts = paginate(sorted, currentPage, size);
    return { totalCount: filtered.length, data: contracts };
  };

  render() {
    const { pageSize: size, currentPage, searchQuery, sortColumn } = this.state;
    const { totalCount, data } = this.getPagedData();

    return (
      <div className="row">
        <div className="col">
          <Link
            to="/contracts/new"
            className="btn btn-primary"
            style={{ marginBottom: 20 }}
          >
            New Contract
          </Link>
          <p>There are {totalCount} contracts in system</p>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <ContractsTable
            contracts={data}
            sortColumn={sortColumn}
            onMark={this.handleMark}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            size={size}
            currentPage={currentPage}
            onPageChange={page => this.handlePageChange(page)}
          />
        </div>
      </div>
    );
  }
}
