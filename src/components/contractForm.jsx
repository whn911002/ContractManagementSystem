import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getContract, saveContract } from "../services/contractService";
import { getCurrencies } from "../services/fakeCurrencyService";

class ContractForm extends Form {
  state = {
    data: {
      name: "",
      surname: "",
      amountInUsd: "",
      currency: "",
      date: ""
    },
    currencies: [],
    errors: {}
  };

  schema = {
    id: Joi.string(),
    name: Joi.string()
      .required()
      .min(3)
      .max(15)
      .label("Name"),
    surname: Joi.string()
      .required()
      .min(2)
      .max(15)
      .label("Surname"),
    amountInUsd: Joi.number()
      .required()
      .min(0)
      .label("Amount in USD"),
    currency: Joi.string()
      .required()
      .min(3)
      .max(3)
      .label("Currency"),
    date: Joi.string()
      .required()
      .min(10)
      .max(10)
      .label("Date")
  };

  async componentDidMount() {
    const currencies = getCurrencies();
    this.setState({ currencies });
    
    const contractId = this.props.match.params.id;
    if (contractId === "new") return;

    const { data: contract } = await getContract(contractId);

    this.setState({ data: this.mapToViewModel(contract) });
  }

  mapToViewModel(contract) {
    return {
      id: contract.id,
      name: contract.user.name,
      surname: contract.user.surname,
      amountInUsd: contract.amountInUsd,
      currency: contract.currency,
      date: contract.date
    };
  }

  doSubmit = async () => {
    await saveContract(this.state.data);
    this.props.history.push("/contracts");
  };

  render() {
    return (
      <div>
        <h1>Contract</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("surname", "Surname")}
          {this.renderInput("amountInUsd", "Amount In USD", "number")}
          {this.renderSelect("currency", "Currency", this.state.currencies)}
          {this.renderInput("date", "Date", "date")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default ContractForm;
