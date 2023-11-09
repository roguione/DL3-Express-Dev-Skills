// routes/skills.js
const express = require('express');
const router = express.Router();
const skillscontroller = require('../controllers/skillscontroller');

// Index page: List all skills
router.get('/', skillscontroller.getAllSkills);

// Show page: Show details of a specific skill
router.get('/:id', skillscontroller.getSkillById);

module.exports = router;
