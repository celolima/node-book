import supertest from 'supertest';
import setupApp from '../../src/app.js';
import assert from 'assert';
import { ObjectId } from 'mongodb';

const defaultID = new ObjectId('507f1f77bcf86cd799439011');

global.setupApp = setupApp;
global.supertest = supertest;
global.assert = assert;
global.defaultID = defaultID;