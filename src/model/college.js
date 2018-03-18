import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let teacherSchema = new Schema({
  name: String
});

module.exports = mongoose.model('Teacher', teacherSchema);
