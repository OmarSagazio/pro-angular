"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todoitem_1 = require("./todoitem");
var Model = (function () {
    function Model() {
        this.user = "Adam";
        this.items = [
            new todoitem_1.TodoItem("Buy Flowers", false),
            new todoitem_1.TodoItem("Get Shoes", false),
            new todoitem_1.TodoItem("Collect Tickets", false),
            new todoitem_1.TodoItem("Call Joe", false)
        ];
    }
    return Model;
}());
exports.Model = Model;
//# sourceMappingURL=model.js.map