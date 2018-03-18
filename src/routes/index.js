import express from 'express';
import config from '../config';
import middleware from '../middleware';
import initializeDb from '../db';

let router = express();


//connect to database
initializeDb (db => {

  //initialize middleware
  router.use(middleware({ config, db }));
  //api routes
});

export default router;
