const UserModel = require('../model/user');

const UserController = function (_user_idx, _name) {
    this.user_model = new UserModel(_user_idx, _name);
};

UserController.prototype.info = function () {
    this.user_model.get_info();
};

UserController.prototype.update = function (_name) {
    this.user_model.update(_name);
};

module.exports = UserController;