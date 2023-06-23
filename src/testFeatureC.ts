import { describe, afterEach, afterAll, beforeAll, beforeEach, test } from "vitest";

const name = `FeatureC`;

export async function testFeatureC() {
    
    describe(`${name} tests`, async () => {
        beforeAll( async () => {
            console.log(`Before All test ${name}`);
        });

        afterAll( async () => {
            console.log(`After All test ${name}`);
        });
        
        beforeEach( async () => {
            console.log(`Before Each test ${name}`);
        });

        afterEach( async () => {
            console.log(`After Each test ${name}`);
        });

        
        test(`test number 1`, async () => {
            console.log(`test number 1`);
        });
        test(`test number 2`, async () => {
            console.log(`test number 2`);
        });
    });
}