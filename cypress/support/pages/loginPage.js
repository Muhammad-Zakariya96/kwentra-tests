class LoginPage {
    visit() {
      cy.visit('/account/login/?next=/');
    }
  
    enterUsername(username) {
      cy.xpath('//*[@id="id_auth-username"]').type(username);
    }
  
    enterPassword(password) {
      cy.xpath('//*[@id="id_auth-password"]').type(password);
    }
  
    clickLogin() {
      cy.get('button[type="submit"]').click();
    }
  }
  
  module.exports = new LoginPage();
  