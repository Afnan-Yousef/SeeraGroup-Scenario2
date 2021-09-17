export const flightSelectors = {

    languageButton: '[data-testid="Header__LanguageSwitch"]',
    origin_input: '[placeholder="Origin"]',
    destination_input:'[placeholder="Destination"]',
    startDateLabel:'[data-testid="FlightSearchBox__FromDateButton"]',
    nextArrow: '[data-testid="FlightSearchCalendar__NextMonthButton"]',
    availableDates: '[class="DayPicker-Day"]',
    endDateLabel: '[data-testid="FlightSearchBox__ToDateButton"]',
    cabinClassLabel: '[data-testid="FlightSearchBox__CabinTypeDropdown"]',
    economyOption: '[data-testid="FlightSearchCabinSelection__EconomyOption"]',
    passengersLabel: '[data-testid="FlightSearchBox__PaxDropdown"]',
    countOfAdults: '[data-testid="FlightSearchPAXSelection__AdultsCountLabel"]',
    searchFlightsButton: '[class="sc-bwzfXH uTxCW sc-jMMfwr fMmpqa row"] [data-testid="FlightSearchBox__SearchButton"]',
    bestValueLabel: 'button[data-testid="Best__SortBy__selected"] span',
    selectFlightButton: '[data-testid="Group0__SelectFlightButton"]',
    quicklyFilterlabel: '[class="TogglePill--off sc-bnXvFD hhxnZq sc-jhAzac diQHkK sc-VigVT gRQNqZ btn btn-glow"]:nth-child(1)',
    priceFilterArrow: '[data-testid="Collapsed_PriceFilter"]',
    actualMinPrice: '[data-testid="FlightSearchResult__PriceFilter__Min"]',
    expectedMinPrice: '[data-testid="Group0__PriceLabel"]',

  };
  //Object.freeze(flightSelectors);
  