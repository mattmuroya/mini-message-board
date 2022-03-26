var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello, World!",
    user: "Charles",
    added: new Date(),
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
