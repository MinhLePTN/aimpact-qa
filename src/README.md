# SauceDemo Test Automation Project

## Overview
This project contains automated tests for the SauceDemo web application, focusing on end-to-end testing of the user login functionality. The tests are implemented using Playwright with a BDD (Behavior-Driven Development) approach, ensuring comprehensive test coverage and maintainable test code.

## Folder Structure
```
src/
├── docs/                    # Documentation files
│   ├── test-plan/          # Test planning documents
│   ├── test-suite/         # Test suite specifications
│   └── requirements/       # Requirement documents
├── features/               # BDD feature files
│   ├── steps/             # Step definitions
│   └── *.feature          # Gherkin feature files
├── pages/                 # Page Object Models
├── config/               # Configuration files
├── playwright/           # Playwright configuration
└── cucumber-report/      # Test execution reports
```

## Tech Stack and Frameworks
- **Testing Framework**: Playwright
- **BDD Framework**: Playwright-BDD
- **Programming Language**: TypeScript
- **Test Runner**: Node.js
- **Reporting**: Cucumber HTML Reporter

## Installation Instructions
1. Clone the repository
2. Install Node.js (v16 or higher)
3. Navigate to the project directory
4. Install dependencies:
   ```bash
   npm install
   ```

## How to Run Tests
1. Set up environment variables (optional):
   ```bash
   export VALID_USERNAME=your_username
   export VALID_PASSWORD=your_password
   ```

2. Run all tests:
   ```bash
   npm test
   ```

3. Run specific feature:
   ```bash
   npx playwright test --grep @login
   ```

4. View test reports:
   - HTML reports are generated in `cucumber-report/report.html`
   - Open the report in your browser after test execution

## How to Contribute
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Write or update tests as needed
5. Submit a pull request

## Best Practices
- Follow the existing BDD structure for new features
- Use Page Object Model pattern for UI interactions
- Keep test data separate from test logic
- Add appropriate test tags for selective test execution
- Update documentation when adding new features