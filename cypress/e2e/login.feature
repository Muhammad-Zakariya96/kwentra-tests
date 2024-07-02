Feature: Login

  Scenario: Successful login
    Given I open the login page
    When I enter username "testuser"
    And I enter password "Test_user1234"
    And I click the login button
    Then I should be redirected to the profiles listing page
