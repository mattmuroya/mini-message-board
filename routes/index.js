var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "howzit",
    user: "the cooler matt",
    added: new Date('2019-02-21T12:12:12'),
  },
  {
    text: "hello world!",
    user: "matt",
    added: new Date('1994-03-13T12:12:12'),
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', messages });
});

// get NEW MESSAGE page 
router.get('/new', (req, res, next) => {
  res.render('form', { title: 'New Message' });
});

// post NEW MESSAGE
router.post('/new', (req, res, next) => {
  messages.unshift({
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  })
  res.redirect('/')
});

module.exports = router;
