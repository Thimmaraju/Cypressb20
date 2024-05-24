Feature: Verify Add employee functionality

Background: Navigate to PIM 
        Given Launch the Application
        When  User enter username "Admin" and password "admin123"
        #When User enter valid username and valid password 
        And   User clicks on the login button
        And   User should be navigated to dashboard page
        And   User clicks on PIM

    Scenario: Verify add employee with mandotory details


        And   User clicks on Add employee submenu
        # And   User enter firstname "Ramesh" and lastname "S"
        # And   User  clicks on Save button
        # Then  User should get the successfully saved confirmation message

        Then User should be able to add employee

    Scenario: Verify mandotory fields in Add employee 

        And   User clicks on Add employee submenu
        And   User clicks on save button
        Then  User should get error messages for firstname and lastname 