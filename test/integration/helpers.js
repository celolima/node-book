import supertest from 'supertest';
import setupApp from '../../src/app.js';
import assert from 'assert';

global.setupApp = setupApp;
global.supertest = supertest;
global.assert = assert;