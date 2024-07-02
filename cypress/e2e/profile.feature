Feature: Profile Listing

  Scenario: Search for an existing profile
    Given I am logged in
    And I navigate to the profile listing page
    When I search for "zakaria"
    Then I should see "zakaria" in the results

  Scenario: Reset search field
    Given I am logged in
    And I navigate to the profile listing page
    When I search for "zakaria"
    And I reset the search
    Then the search results should be empty

  Scenario: Search for a non-existent profile
    Given I am logged in
    And I navigate to the profile listing page
    When I search for "rctrtrtyjtrfiyj"
    Then I should see no results
