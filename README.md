# Demonstration repo for a test hierarchy hooks resolution

## Install and run
```
npm install
npm run test
```

## Actual result of the test run:
```
Before All smoke suite
Before All test FeatureA

stdout | src/suite.spec.ts > Smoke test suite > FeatureA tests > test number 1
Before Each test FeatureA
test number 1
After Each test FeatureA

stdout | src/suite.spec.ts > Smoke test suite > FeatureA tests > test number 2
Before Each test FeatureA
test number 2
After Each test FeatureA

stdout | src/suite.spec.ts > Smoke test suite > FeatureB tests > test number 1
Before Each test FeatureB
test number 1
After Each test FeatureB

stdout | src/suite.spec.ts > Smoke test suite > FeatureB tests > test number 2
Before Each test FeatureB
test number 2
After Each test FeatureB

stdout | src/suite.spec.ts > Smoke test suite > FeatureC tests > test number 1
Before Each test FeatureC
test number 1
After Each test FeatureC

stdout | src/suite.spec.ts > Smoke test suite > FeatureC tests > test number 2
Before Each test FeatureC
test number 2
After Each test FeatureC

stdout | unknown test
After All test FeatureA
Before All test FeatureB
After All test FeatureB
Before All test FeatureC
After All test FeatureC
After All smoke suite

```

## Expected Result (changes marked in `##`)
```
Before All smoke suite
Before All test FeatureA

stdout | src/suite.spec.ts > Smoke test suite > FeatureA tests > test number 1
Before Each test FeatureA
test number 1
After Each test FeatureA

stdout | src/suite.spec.ts > Smoke test suite > FeatureA tests > test number 2
Before Each test FeatureA
test number 2
After Each test FeatureA
## After All test FeatureA ##

## Before All test FeatureB ##
stdout | src/suite.spec.ts > Smoke test suite > FeatureB tests > test number 1
Before Each test FeatureB
test number 1
After Each test FeatureB

stdout | src/suite.spec.ts > Smoke test suite > FeatureB tests > test number 2
Before Each test FeatureB
test number 2
After Each test FeatureB
## After All test FeatureB ##

## Before All test FeatureC ##
stdout | src/suite.spec.ts > Smoke test suite > FeatureC tests > test number 1
Before Each test FeatureC
test number 1
After Each test FeatureC

stdout | src/suite.spec.ts > Smoke test suite > FeatureC tests > test number 2
Before Each test FeatureC
test number 2
After Each test FeatureC
## After All test FeatureC ##

stdout | unknown test
After All smoke suite
```
