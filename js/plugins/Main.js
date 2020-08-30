Window_SkillList.prototype.maxCols = function() {
    return 2;
};

Window_SkillList.prototype.makeItemList = function() {
    if (this._actor) {
        var skills = this._actor.skills().filter(function(item) {
          return this.includes(item);
        }, this);
        this._data = skills;
    } else {
        this._data = [];
    }
};
