import { afterAll, beforeAll, describe } from 'vitest';
import { testFeatureC } from './testFeatureC';

import { testFeatureA } from './testFeatureA';
import { testFeatureB } from './testFeatureB';


describe('Smoke test suite', async () => {
    beforeAll(async () => {
      // remove all videos/screenshots
      console.log('Before All smoke suite');
    });
    
    afterAll(async () => {
      console.log('After All smoke suite');
    });
    await testFeatureA();
    await testFeatureB();
    await testFeatureC();
})