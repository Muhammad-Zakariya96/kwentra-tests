const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

const loginPage = require('../pages/loginPage');

Given('I open the login page', () => {
  loginPage.visit();
});

When('I enter username {string}', (username) => {
  loginPage.enterUsername(username);
});

When('I enter password {string}', (password) => {
  loginPage.enterPassword(password);
});

When('I click the login button', () => {
  loginPage.clickLogin();
});

Then('I should be redirected to the profiles listing page', () => {
  cy.url().should('include', '/frontoffice/#/profileslist?tenant_id=59');
});
