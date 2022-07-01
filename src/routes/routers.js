module.exports = function(app){
  const User = require('../controllers/register')

    app.get('/', (req, res) => {
        res.render('pages/index');
    })

    app.get('/register', (req, res) => {
      res.render('pages/register');
    })

    app.route('/auth/register')
      .post(User.register)
}