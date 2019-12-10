import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  addTask(newtask) {
    return this._http.post("/tasks/create", newtask);
  }

  getTask() {
    return this._http.get("/tasks/readAll");
  }

  edTask(data) {
    console.log(data);
    return this._http.put(`/tasks/update/${data._id}`, data);
  }

  getTaskById(id) {
    console.log("from Service", id);
    return this._http.get(`/tasks/readOne/${id}`);
  }

  delTsk(id) {
    return this._http.delete(`/tasks/delete/${id}`)
  }
}
