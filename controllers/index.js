
const index = function(req, res, next) {
    var render_file = 'index.ejs';
    var result = {
        page    : 'Index',
        menu  : 'Index'
    };
    res.render(render_file, result);
};

const home = function(req, res, next) {
    var render_file = 'home.ejs';
    var result = {
        page    : 'Home',
        menu  : 'Home'
    };
    res.render(render_file, result);
};

const about = function(req, res, next) {
    var render_file = 'about.ejs';
    var result = {
        page    : 'About',
        menu  : 'About'
    };
    res.render(render_file, result);
};

const contact = function(req, res, next) {
    var render_file = 'contact.ejs';
    var result = {
        page    : 'Contact',
        menu  : 'Contact'
    };
    res.render(render_file, result);
};

module.exports = {
    'index' : index,
    'home' : home,
    'about' : about,
    'contact' : contact
};