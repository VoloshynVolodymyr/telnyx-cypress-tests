# Telnyx Cypress Tests

Cypress smoke tests for [telnyx.com](https://telnyx.com) – 10 test cases for non-authenticated user.

## 📋 Test Coverage

| TC    | Test Case                                 | Status |
| ----- | ----------------------------------------- | ------ |
| TC-01 | Homepage loads correctly                  | ✅     |
| TC-02 | Products dropdown navigation              | ✅     |
| TC-03 | Text to Speech functionality              | ✅     |
| TC-04 | Pricing page displays product cards       | ✅     |
| TC-05 | Voice AI page – accordion works correctly | ✅     |
| TC-06 | Resource center search – relevant query   | ✅     |
| TC-07 | Resource center search – irrelevant query | ✅     |
| TC-08 | Contact form validation                   | ✅     |
| TC-09 | Footer social links                       | ✅     |
| TC-10 | Responsive design – mobile menu           | ✅     |

## 🚀 Installation

```bash
# Clone repository
git clone https://github.com/VoloshynVolodymyr/telnyx-cypress-tests.git
cd telnyx-cypress-tests

# Install dependencies
npm install

# Open Cypress Test Runner (interactive mode)
npm run cy:open

# Run all tests in headless mode (Chrome)
npm run cy:run:headless

# Run tests in specific browser
npm run cy:run:chrome

CYPRESS_BASE_URL=https://telnyx.com
CYPRESS_RECORD_KEY=your-record-key
```
