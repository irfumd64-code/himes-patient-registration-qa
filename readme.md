
# HIMES Patient Registration QA Demo

![Project](https://img.shields.io/badge/Project-Healthcare_QA-blue)
![Testing](https://img.shields.io/badge/Playwright-8_Tests_Passed-green)
![Language](https://img.shields.io/badge/JavaScript-Learning-yellow)

## About the Project

This is a beginner-friendly healthcare software QA project.

It demonstrates a sample patient registration page with JavaScript validation and automated testing using Playwright.

## Features

- Patient registration form
- Patient name validation
- Email validation
- Required field validation
- Maximum name length validation
- Automatic form reset after registration
- Automated browser testing

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Playwright

## Project Structure

```text
himes-patient-registration-qa/
│
├── index.html
├── README.md
├── package.json
├── playwright.config.js
└── tests/
    └── registration.spec.js
```

## How to Run the Project

1. Clone this repository.
2. Open the project folder in VS Code.
3. Install dependencies:

```bash
npm install
```

4. Install Playwright browsers:

```bash
npx playwright install
```

5. Run automated tests:

```bash
npx playwright test
```

## Testing Results

The project currently contains 8 automated Playwright tests.

All 8 tests passed in the latest local test run.

## Security Checks

An npm audit was performed.

Result at the time of checking: 0 known dependency vulnerabilities found.

This does not guarantee that the application itself is completely secure.

## Future Improvements

- Add more patient registration test cases.
- Improve application security testing.
- Add additional healthcare workflows.
- Expand automated test coverage.

## Disclaimer

This is an educational demonstration project only.

It is not a real hospital management system and must not be used to store real patient information.
