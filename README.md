# Contract Management System

Code challenge:

Create React application with simple CRUD functionality for contracts. Contract data structure:
{
   user: {
      name:string,
      surname: string
   },
   amountInUsd: string,
   currency: string,
   date: string  
}

Extra Requirement:
Display created contracts list in a table view.
Add chart(s) using currency exchange rates.

*****************************************************************

Solutions:

This CRUD application is focused on frontend, so use React to build the application. The application is hosted on heroku:
https://contract-management-system.herokuapp.com/contracts

For the backend, use json-server as the mockup API for development, and also deploy the json-server on heroku.

*****************************************************************

Functionalities:

The NavBar on dashboard provides two routes to:
1. Contracts Dashboard (default);
2. Cryptocurrency Rate (ETH).

For the "Contracts Dashboard", user can CREAT(click the "New Contract" button), READ(default), UPDATE(click the user's name in the table), and DELETE(click the "Delete" button).
User can also mark the contract with the "star" sign in the table to make it "important" for future use.

For the "Cryptocurrency Rate", there are two charts. The first one shows the exchange rate during the last 30 days for ETH/USD, and the second one shows the current exchange rate for ETH to USD/CHF/EUR.
