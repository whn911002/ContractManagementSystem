# ContractManagementSystem

A simple CRUD application for contracts management.
Data structure:

contract: [
"user": {
"name": string,
"surname": string
},
"amountInUsd": number,
"currency": string,
"date": date,
"marked": boolean
]

The NavBar on dashboard provides two routes to:

1. Show all contracts (default);
2. Cryptocurrency exchange rate (ETH).

---

Functionalities:

On the "Show all contract", user can VIEW(default), EDIT(click the user's name in the table), DELETE(click the delete button), and create(click the new contract button).
User can also mark the contract with the "star" sign in the table to make it "important" for future use.

On the "cryptocurrency exchange rate", there are two charts. The first one shows the exchange rate during the last 30 days for ETH/USD.
And the second one shows the current exchange rate for ETH to USD/CHF/EUR.
