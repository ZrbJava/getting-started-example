'use strict';

const pay = require('..');
const assert = require('assert').strict;

assert.strictEqual(pay(), 'Hello from pay');
console.info("pay tests passed");
