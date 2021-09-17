import { flightPage } from "../../lib/pageObjects/flightPage.js";

context('Tajawal-Search flights -UI', () => {
  describe('Search flights', () => {

    before(() => {
      cy.visit('');
    });

    it('Navigate to Tajwal and verify the default selected language id English', () => {
      cy.location().then((currentLocation) => {
        const urlPathName = currentLocation.pathname;
        let lang = urlPathName.split('/').pop(); // Grabbing language value
        console.log('val', lang)
        if (!lang.includes('en')) {
          flightPage.getLanguageButton().click();
        }

      });
    });

    it('Filling search flight form', () => {
      flightPage.enterARandomOrigin();
      flightPage.enterARandomDestination();
      flightPage.selectRandomStartDate();
      flightPage.selectRandomEndDate()
      flightPage.selectEconomy();
      flightPage.assert1AdultsIsSelectedByDefault();
      flightPage.clickOnSearchFlightsButton();
    });

    it('Verify user is navigated to flight listing page and flights are sorted by cheapest', () => {
      cy.url().should('include', '/Economy/1Adult', { timeout: 10000 })
        .then(() => {
          flightPage.verifyBestValueIsSelected();
          flightPage.assertMinimumPriceEqualFirstFlight();
        });
    });
  });
});
