import { Component, OnInit } from "@angular/core";
import { HttpService } from "./http.service";
// import { analyzeAndValidateNgModules } from "@angular/compiler";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  proj = "Restful Task API";
  name = "Viji";

  tasks: any;
  tsks: any;
  newTask: any;
  editTask: any;
  showTask: any;
  dlTask: any;

  constructor(private _httpService: HttpService) { }

  // ngOnInit will run when the component is initialized, after the constructor method
  ngOnInit() {
    this.newTask = { title: "", description: "" };
  }

  onSubmit() {
    // Code to send off the form data (this.newTask) to the Servicecopy
    let newItem = this._httpService.addTask(this.newTask);
    newItem.subscribe((postItem: any) => {
      console.log("this is data from component", postItem);
      this.newTask = postItem;
      // Reset this.newTask to a new, clean object.
      this.newTask = { title: "", description: "" };
      this.getTasksFromService();
    });
  }

  onButtonClickGetAll() {
    this.getTasksFromService();
  }

  getTasksFromService() {
    let obs = this._httpService.getTask();
    obs.subscribe((data: any) => {
      console.log("Got our data!", data);
      this.tasks = data;
      console.log(this.tasks);
    });
  }

  onButtonClickShow(index) {
    console.log(index);
    this.showTask = this.tasks[index];
  }

  // show the clicked item to edit using index location
  onButtonClickEdit(index) {
    console.log("from onBtnClickEdit function", index);
    this.editTask = this.tasks[index];
  }

  // show the clicked item to edit using id
  // onButtonClickEdit(id:Number) {
  //   console.log("from onBtnClickEdit function", id);
  //   this.editTask = this.tasks._id;
  // }

  onEdit(editTask) {
    console.log("from edit function", editTask);
    let editItem = this._httpService.edTask(editTask);
    editItem.subscribe((updatedItem: any) => {
      console.log("this is data from component", updatedItem);
      this.editTask = updatedItem;
      console.log(updatedItem);
      // // Reset this.newTask to a new, clean object.
      // this.editTask = { title: "", description: "" };
    });
  }
  // onButtonClickEdit(id: Number) {}

  onButtonClickDelete(id: Number) {
    let deleteItem = this._httpService.delTsk(id);
    deleteItem.subscribe((itemDel: any) => {
      console.log("this is data from component", itemDel);
      this.dlTask = itemDel;
      this.getTasksFromService();
    });
  }
}