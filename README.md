# e2e-test

## Requirement on Local
 - Install Node.js
 - Install yarn

## Installation Step

clone this repository into your local

```bash
git clone https://github.com/jessicatheodora17/e2e-test.git
```
install using this command :
```bash
yarn install
```

## How to Run
run test without UI
```bash
yarn run test
```

run test with UI
```bash
yarn run test-ui
```
after UI Cypress appeared, on the top right click `Run all Specs`


## REPORTING
how to access report from test without UI (make sure folder report exist (generated after run test))
```bash
yarn run posttest
```
to see Screenshot go to ` cypress/reports/videos `
## NOTES
The test may have failed because of this following reasons : 
  - Slow Internet Connection

If these Problems Occur, please re run the test command