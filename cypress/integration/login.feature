@loginuser

Feature: Login User

Scenario: Login User
    Given user go to demo site
    When user fill username with "jessicatest"
    And user fill password with "jessica1"
    And user click login button
    Then user should be able to see message login success