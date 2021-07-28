const user_idx;
const name;

const User = function (_user_idx, _name) {
    this.user_idx = _user_idx;
    this.name = _name;
};

User.prototype.get_info = function() {
    return {
        user_idx : this.user_idx,
        name : this.name
    }
};

User.prototype.update_info = function(_name) {
    this.name = _name;
    return {
        user_idx : this.user_idx,
        name : this.name
    };
};

module.exports = User;
