const supertest = require('supertest');
const app = require('../../src/app.js');
const assert = require('assert');

global.request = supertest(app);
global.app = app;
global.assert = assert;