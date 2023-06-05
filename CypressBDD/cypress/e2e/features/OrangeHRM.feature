Feature: Update the previous steps to be in BDD

  Scenario: Change user personal data
    Given The user logs in
    When The user navigates to MyInfo screen
    And Changes his nickname
    And Changes his order ID
    Then The changes are implemented