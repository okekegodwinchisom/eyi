const express = require('express');
const router = express.Router();
const { authenticate } = require('../middleware/auth');
const { User, EyeHealth, EyeExam, EyeCareTip } = require('../models');

// Home route
router.get('/', (req, res) => {
  res.send('Welcome to eyi - Your Eye Health Companion');
});

// User routes
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/logout', authenticate, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send(error);
  }
});

// Eye health tracking routes
router.post('/eye-health', authenticate, async (req, res) => {
  try {
    const { vision, eyeStrain, dryness, redness, sensitivity } = req.body;
    const eyeHealth = new EyeHealth({
      user: req.user._id,
      vision,
      eyeStrain,
      dryness,
      redness,
      sensitivity
    });
    await eyeHealth.save();
    res.status(201).send(eyeHealth);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/eye-health', authenticate, async (req, res) => {
  try {
    const eyeHealth = await EyeHealth.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.send(eyeHealth);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Eye exam routes
router.post('/eye-exams', authenticate, async (req, res) => {
  try {
    const { date, type, notes } = req.body;
    const eyeExam = new EyeExam({
      user: req.user._id,
      date,
      type,
      notes
    });
    await eyeExam.save();
    res.status(201).send(eyeExam);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/eye-exams', authenticate, async (req, res) => {
  try {
    const eyeExams = await EyeExam.find({ user: req.user._id }).sort({ date: -1 });
    res.send(eyeExams);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Eye care tips routes
router.get('/eye-care-tips', authenticate, async (req, res) => {
  try {
    const eyeCareTips = await EyeCareTip.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.send(eyeCareTips);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;