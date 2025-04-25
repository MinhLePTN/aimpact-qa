Feature: User Login
  As a user
  I want to log in to the application
  So that I can access my account

  @login
  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter valid username and password
    Then I should be redirected to the dashboard

  @login @negative
  Scenario: Failed login with invalid credentials
    Given I am on the login page
    When I enter invalid username and password
    Then I should see an error message 