// controllers/skillsController.js
const Skill = require('../models/skill');

const skills = [
  new Skill(1, 'JavaScript'),
  new Skill(2, 'Node.js'),
  new Skill(3, 'React'),
  
];

module.exports = {
  getAllSkills: (req, res) => {
    res.render('skills/index', { skills });
  },
  getSkillById: (req, res) => {
    const skillId = parseInt(req.params.id);
    const skill = skills.find((s) => s.id === skillId);
    if (!skill) {
      res.status(404).send('Skill not found');
    } else {
      res.render('skills/show', { skill });
    }
  },
};
