# Automation - Scenario 2

This testing framework is built using [Cypress](https://www.cypress.io).

## ⚠️ - Prerequisites
- Make sure you have the **latest** [Node.js](https://nodejs.org/en/download/) installed
- Make sure you have the **latest** [yarn](https://classic.yarnpkg.com/en/docs/install) installed (Type in your terminal: `yarn install`)

## ⚡ - Running Tests
Type the following in your terminal:
* `yarn test` : Runs entire Test Suite in your terminal.
* `yarn test -s {Path to file}` : Runs an individual test.  _i.e. `yarn test -s cypress/integration/secondScenario.js`_ 
* `yarn ui` : Opens Cypress GUI for User to select test(s) to run.

## ✍🏽 - Writing Tests

To add new tests, simply add test cases under cypress/integrations. See existing tests or Cypress documentation for more information.

## ⚠️ - Notes
User can add cypress/Fixture folder in future to add json files