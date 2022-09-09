import 'reflect-metadata';
import Application from './app/application';
import dotenv from 'dotenv';

dotenv.config();

const application: Application = new Application();
application.startServer();
