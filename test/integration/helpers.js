import supertest from 'supertest';
import app from '../../src/app.js';
import assert from 'assert';

global.request = supertest(app);
global.app = app;
global.assert = assert;