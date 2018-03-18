import mongoose from 'mongoose';
import { Router } from 'express';
import College from '../model/college';

export default({ config, db }) => {
  let api = Router();

  // '/v1/college/add'
  api.post('/add', (req, res) => {
    let newTeacher = new College();
    newTeacher.name = req.body.name;

    newTeacher.save(err => {
      if(err) {
        res.send(err);
      }
      res.json({ messge: 'Teacher database saved successfully'});
    });
  });
  return api;
}
