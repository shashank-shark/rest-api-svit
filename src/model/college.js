import mongoose from 'mongoose';
import Review from './review';
let Schema = mongoose.Schema;

let collegeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  teacherType: {
    type: String,
    required: true
  },
  avgrating: String,
  bestSubject: {
    type: { type: String, default:'Subject' },
  },
  reviews: [{type: Schema.Types.ObjectId, ref:'Review'}]
});

module.exports = mongoose.model('College', collegeSchema);
