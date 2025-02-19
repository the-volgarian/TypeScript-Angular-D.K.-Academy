import {Component} from "@angular/core";
import {Model} from "./model";

@Component({
  selector: "my-app",
  templateUrl: "app.component.html"
})

export class AppComponent {
  model = new Model();
  getName() {
    return this.model.user;
  }
}

