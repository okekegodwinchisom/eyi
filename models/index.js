const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const EyeHealthSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  vision: {
    leftEye: {
      type: Number,
      required: true
    },
    rightEye: {
      type: Number,
      required: true
    }
  },
  colorBlindness: {
    type: Boolean,
    default: false
  },
  astigmatism: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const ExamSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  date: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  notes: {
    type: String
  }
});

const User = mongoose.model('users', UserSchema);
const EyeHealth = mongoose.model('eyeHealth', EyeHealthSchema);
const Exam = mongoose.model('exams', ExamSchema);

module.exports = {
  User,
  EyeHealth,
  Exam
};