class ProfilePage {
    visit() {
      cy.visit('/frontoffice/#/profileslist?tenant_id=59');
    }
  
    enterName(name) {
      cy.xpath('//*[@id="name-field"]').type(name);
    }
  
    clickSearch() {
      cy.xpath('//*[@id="search-button"]').click();
    }
  
    clickReset() {
      cy.xpath('//*[@id="reset-button"]').click();
    }
  
    getNameCell() {
      return cy.xpath('//*[@id="cell-2"]');
    }
  }
  
  module.exports = new ProfilePage();
  