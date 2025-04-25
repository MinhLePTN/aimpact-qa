# User Login Feature for SauceDemo

## 1. Objective
Allow users to securely log in to the SauceDemo application using valid credentials.

## 2. Functional Requirements
- The system shall display a login form with:
  - Username field
  - Password field
  - Login button
- The system shall allow login with the following valid credentials:
  - Username: `standard_user`
  - Password: `secret_sauce`
- The system shall redirect the user to the inventory page after a successful login.
- The system shall show an error message when:
  - Username or password is incorrect.
  - Fields are left blank.

## 3. Non-Functional Requirements
- Login should complete within 2 seconds.
- Error messages must be user-friendly and easily visible.
- The login form must be responsive on desktop and mobile devices.

## 4. Acceptance Criteria
- Login succeeds with correct credentials and redirects to the inventory page.
- Login fails with incorrect credentials and shows an error message.
- Login form is accessible and responsive.

## 5.Others