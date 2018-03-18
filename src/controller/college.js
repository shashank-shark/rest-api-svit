import mongoose from 'mongoose';
import { Router } from 'express';
import College from '../model/college';

export default({ config, db }) => {
  let api = Router();

  //CRUD - Create Read Update Delete


  // '/v1/college/add' - Create
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

  //'v1'/college' - Read
  api.get('/',(req, res) => {
    College.find({}, (err, college) => {
      if (err) {
        res.send(err);
      }
      res.json(college);
    });
  });

  //'v1/college/:id' - read particular id
  api.get('/:id', (req, res) => {
    College.findById(req.params.id, (err, teacher) => {
      if (err) {
        res.send(err);
      }
      res.json(teacher);
    });
  });

  // 'v1/college/:id' - Update
  api.put('/:id', (req, res) => {
    College.findById(req.params.id, (err, teacher) => {
      if(err) {
        res.send(err);
      }
      teacher.name = req.body.name;
      teacher.save(err => {
        if(err) {
          res.send(err);
        }
        res.json({message: "Teachers INFO Updated"});
      });
    });
  });

  return api;
}
