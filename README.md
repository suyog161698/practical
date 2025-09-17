# Sauce Demo Playwright Project

This is a Playwright automation project for testing the Sauce Demo application.

## Prerequisites

- Node.js (version 16 or higher)
- npm (comes with Node.js)

## Installation Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Install Playwright Browsers
```bash
npx playwright install
```

### 3. Verify Installation
```bash
npx playwright --version
```

## Project Structure

```
saucedemo/
├── tests/                    # Test files
│   └── login.spec.js        # Login tests
├── playwright.config.js      # Playwright configuration
├── package.json             # Project dependencies
└── README.md               # This file
```

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in headed mode (visible browser)
```bash
npm run test:headed
```

### Run tests with UI mode
```bash
npm run test:ui
```

### Run tests in debug mode
```bash
npm run test:debug
```

### View test report
```bash
npm run report
```

## Test Configuration

The project is configured to:
- Test against Chrome, Firefox, and Safari
- Take screenshots on test failures
- Record videos on test failures
- Generate HTML reports
- Use Sauce Demo as the base URL

## Available Test Users

- `standard_user` - Normal user with full access
- `locked_out_user` - User account that is locked
- `problem_user` - User with problematic behavior
- `performance_glitch_user` - User with performance issues

All users use the password: `secret_sauce`

## Browser Support

- Chromium (Chrome/Edge)
- Firefox
- WebKit (Safari)

## Additional Commands

- `npm run install-browsers` - Reinstall browser binaries
- `npx playwright codegen` - Generate tests by recording actions
- `npx playwright show-trace` - View trace files




