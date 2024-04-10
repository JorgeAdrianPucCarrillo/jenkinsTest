import supertest from 'supertest';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import app from '../index.js';

chai.use(sinonChai);
export const { expect } = chai;
export const server = supertest.agent(app);