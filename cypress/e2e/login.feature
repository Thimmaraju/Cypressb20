Feature: Verify login funcationality

    Scenario: Verify login with valid credentials

        Given Launch the Application
        When  User enter username "Admin" and password "admin123"
        And   User clicks on the login button
        Then   User should be navigated to dashboard page

    Scenario: Verify login with valid username and invalid password
        Given Launch the Application
        When  User enter username "Admin" and password "rogtrtyu"
        And   User clicks on the login button
        Then   User Should get login error message
    Scenario: Verify login with invalid username and valid password
        Given Launch the Application
        When  User enter username "ihgjer" and password "admin123"
        And   User clicks on the login button
        Then   User Should get login error message

    Scenario: Verify login with invalid username and invalid password
        Given Launch the Application
        When  User enter username "ihgjer" and password "rghirehguihiu"
        And   User clicks on the login button
        Then   User Should get login error message