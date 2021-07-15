@addUser
Feature: Demo Add User

Scenario: Success add User
    Given I go to demo site
    When I fill username with "jessicatest"
    And I fill password with "jessica1"
    And I click add button
    Then I should be able to see my username and password