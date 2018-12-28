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

This CRUD application is focused on frontend, so use React to build the application. The programming languages include JS, JSX, and HTML. Also used JSON to store configuration variables. For the chart, the data resource is CryptoCompare, and used chart.js.
The application is hosted on heroku:
https://contract-management-system.herokuapp.com/

For the backend, use json-server as the mockup API for development, and also deploy the json-server on heroku.
I created about 20+ contract records in the json-server, but if you get a blank contract table, just try to refresh the page.

*****************************************************************

Functionalities:

The NavBar on dashboard provides two routes to:
1. Contracts Dashboard (default);
2. Cryptocurrency Rate (ETH).

For the "Contracts Dashboard", user can CREAT(click the "New Contract" button), READ(default), UPDATE(click the user's name in the table), and DELETE(click the "Delete" button).

For the "Cryptocurrency Rate", there are two charts. The first one shows the exchange rate during the last 30 days for ETH/USD, and the second one shows the current exchange rate for ETH to USD/CHF/EUR.

When admin clicks the "New Contract" button, the app will direct the admin to the new contract creat page. I added input validation funtion for input fields, and the "Save" button won't be enabled until the admin fills out all fields.

Below the "New Contract" button, there is a text message field showing the admin how many contracts the system has now. The number changes dynamically when admin adds/deletes contract.

I created search function for this application. The search box is located between the NavBar and contracts table. Admin can use it to search users' first name OR last name. It's NOT case-sensitive so it could be easier for admin to do the search.

In the table, I added a "Star" sign to provide the admin the functionality to mark contract as important for any future use.

At the bottom of the page, there is a pagination bar so the application won't feed all contracts in one page to make it too messy.

*****************************************************************
New feature added 12/27/2018:
Add SELECT component for Currency field, but the currencies are from a fake service which is hardcoded.
TODO: Use real API to provide all currencies and the admin can decide which currencies should be supported in the system.
