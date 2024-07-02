import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am logged in', () => {
  cy.visit('https://testingtasks.kwentra.com/account/login/?next=/');
  cy.xpath('//*[@id="id_auth-username"]').type('testuser');
  cy.xpath('//*[@id="id_auth-password"]').type('Test_user1234');
  cy.get('button[type="submit"]').click();
});

Given('I navigate to the profile listing page', () => {
  cy.visit('https://testingtasks.kwentra.com/frontoffice/#/profileslist?tenant_id=59');
  cy.url({ timeout: 10000 }).should('include', '/frontoffice/#/profileslist?tenant_id=59');
});

When('I search for {string}', (name) => {
  cy.xpath('//*[@id="name-field"]').clear().type(name);
  cy.xpath('//*[@id="search-button"]').click();
});

When('I reset the search', () => {
  cy.xpath('//*[@id="reset-button"]').click();
});

Then('I should see {string} in the results', (name) => {
  cy.xpath('//*[@id="cell-2"]').should('include.text', name);
});

Then('the search results should be empty', () => {
  cy.xpath('//*[@id="cell-2"]').should('be.empty');
});

Then('I should see no results', () => {
  cy.xpath('//*[@id="cell-2"]').should('not.exist');
});
