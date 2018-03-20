import mongoose from 'mongoose';
import College from './college';
let Schema =  mongoose.Schema;

let reviewSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  text: String,
  teacherID: {
    type: Schema.Types.ObjectId,
    ref: 'Teachers',
    required: true
  }
});

module.exports = mongoose.model('Review', reviewSchema);
