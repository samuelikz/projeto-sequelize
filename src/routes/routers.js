module.exports = function(app){
  const User = require('../controllers/controller')

    app.get('/', (req, res) => {
        res.render('pages/index');
      })

    app.route('/auth/register')
      .post(User.register)
}