const index = require('../controllers/index');

module.exports = function(app) {
    app.get('/', index.home);

    app.get('/home', index.home);
    app.get('/about', index.about);
    app.get('/contact', index.contact);
};