import { Component } from "@angular/core";
import { Model } from "./model";
import { TodoItem } from "./todoitem";

@Component({
    selector: "todo-app",
    templateUrl: "app/app.component.html"
})

export class AppComponent {
    model = new Model();

    getName() {
        return this.model.user;
    }

    getTodoItems() {
        return this.model.items.filter(item => !item.done);
    }

    addItem(newItem) {
        if(newItem != "") {
            this.model.items.push(new TodoItem(newItem, false));
        }
    }
}
