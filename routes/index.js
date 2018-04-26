let express = require('express');
let router = express.Router();
const Sequelize = require('sequelize');
const sequelize = require("../models/index");

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Quiz' });
});

/* GET Credits page */
router.get('/credits', (req, res, next) => {
  res.render('credits');
});

/* GET Quizzes page */
router.get('/quizzes', function(req, res, next) {

    sequelize.models.quiz.findAll().
    then( quizzes => {
        res.render('quizzes', {quizzes});
    })
        .catch(error => {
        });
});

module.exports = router;
