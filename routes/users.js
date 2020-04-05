var express = require('express');
var router = express.Router();

const users = [];

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(users.sort((user1, user2) => {
    if (user1.score < user2.score) return -1;
    if (user1.score > user2.score) return 1;
    return 0;
  }).slice(0, 10));


  //user1.score <= user2.score).slice(0, 10));
});

router.post('/srore', function (req, res, next) {

  const { score, userName } = req.body;
  users.push({ score: Number(score), userName });

  res.send('respond with a resource');
});

module.exports = router;
