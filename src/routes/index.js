import express from 'express';
import config from '../config';
import middleware from '../middleware';
import initializeDb from '../db';
import college from '../controller/college';

let router = express();


//connect to database
initializeDb (db => {

  //internal middleware
  router.use(middleware({ config, db }));

  //api routes
  router.use('/college', college({ config, db}));

});

export default router;
