import { TodoItem } from "./todoitem";

export class Model {
    user;
    items;

    constructor() {
        this.user = "Adam";
        this.items = [
            new TodoItem("Buy Flowers", false),
            new TodoItem("Get Shoes", false),
            new TodoItem("Collect Tickets", false),
            new TodoItem("Call Joe", false)
        ]
    }
}
