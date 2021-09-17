import { flightSelectors } from "./flightSelectors.js";

class FlightPage {

  visit() {
    cy.visit('');
  }

  getLanguageButton() {
    return cy.get(flightSelectors.languageButton);
  }

  enterARandomOrigin() {
    let randomIndex = 0;
    randomIndex = Math.floor((Math.random() * 5));
    let originValues = ['DXB', 'AUH', 'SHJ', 'JED', 'RUH']; // origin array

    const originField = cy.get(flightSelectors.origin_input);
    originField.type(originValues[randomIndex]).type('{enter}'); // fill random origin value in origin field then enter
    cy.wait(500);
    return this;
  }

  enterARandomDestination() {
    let randomIndex = 0;
    randomIndex = Math.floor((Math.random() * 5));
    let destinationValues = ['AMM', 'CAI', 'DEL', 'KHI', 'PAR'];// destination array

    const destinationField = cy.get(flightSelectors.destination_input);
    destinationField.type(destinationValues[randomIndex]).type('{enter}');// fill random destination value in destination field then enter
    cy.wait(500);
    return this;
  }

  selectRandomStartDate() {
    cy.wait(1000)
    cy.get(flightSelectors.startDateLabel).click();
    cy.wait(1000)
    cy.get(flightSelectors.nextArrow).click();
    cy.wait(1000)
    cy.get(flightSelectors.availableDates).any().click(); // will click on random day
  }

  selectRandomEndDate() {
    cy.wait(1000)
    cy.get(flightSelectors.endDateLabel).click();
    cy.wait(1000)
    cy.get(flightSelectors.nextArrow).click();
    cy.wait(1000)
    cy.get(flightSelectors.availableDates).any().click(); // will click on random day
  }

  selectEconomy() {
    cy.get(flightSelectors.cabinClassLabel).click();
    cy.wait(1000)
    cy.get(flightSelectors.economyOption).click();
  }

  assert1AdultsIsSelectedByDefault() {
    cy.get(flightSelectors.passengersLabel).click();
    cy.get(flightSelectors.countOfAdults).should('contain', '1');
  }

  clickOnSearchFlightsButton() {
    cy.get(flightSelectors.searchFlightsButton).click();
  }

  verifyBestValueIsSelected() {
    cy.get(flightSelectors.bestValueLabel, { timeout: 10000 }).should('be.visible'); // to make sure data are loaded 
    cy.get(flightSelectors.bestValueLabel).should('be.visible')
  }

  assertMinimumPriceEqualFirstFlight() {
    cy.get(flightSelectors.priceFilterArrow).click(); // expand price filter

    cy.get(flightSelectors.bestValueLabel).then(($minVal) => {
      let actualMinPrice = $minVal.text().split(' ')[1]; // // Grabbing value of the minimum price
      cy.get(flightSelectors.expectedMinPrice).then(($el) => {
        const expectedMinPriceVal = $el.text(); // get price value beside first flight

        assert.equal(actualMinPrice, expectedMinPriceVal, 'Compare actual and expected minimum price ');
      });
    });
  }

  selectFlight() {
    cy.get(flightSelectors.selectFlightButton).click();
  }
}

export const flightPage = new FlightPage();
