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
    newTeacher.teacherType = req.body.teacherType;
    newTeacher.avgrating = req.body.avgrating;
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

  // add a review or a suggestion
  // 'v1/college/reviews/add/:id'
  api.post('/reviews/add/:id', (req, res) => {
    College.findById(req.params.id, (err, teacher) => {
      if (err) {
        res.send(err);
      }
      let newReview = new Review();

      newReview.title = req.body.title;
      newReview.text = req.body.text;
      newReview.teacher = teacher._id;
      newReview.save((err, review) => {
        if(err) {
          res.send(err);
        }
        // can have serveral reviews
        teacher.reviews.push(newReview);
        teacher.save(err => {
          if (err) {
            res.send(err);
          }
          res.json({message: 'Teacher review saved'});
        });
      });
    });
  });

  return api;
}
