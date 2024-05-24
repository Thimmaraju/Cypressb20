Feature: Verify Add employee functionality


    Scenario Outline: Verify add employee with mandotory details
        Given Launch the Application
        When  User enter username "Admin" and password "admin123"
        And   User clicks on the login button
        And   User should be navigated to dashboard page
        And   User clicks on PIM
        And   User clicks on Add employee submenu
        And   User enter firstname "<firstname>" and lastname "<lastname>"
        And   User  clicks on Save button
        Then  User should get the successfully saved confirmation message

        Examples:
            | firstname | lastname |
            | Raju      | G        |
            | Naveen    | S        |
            | Mahesh    | M        |