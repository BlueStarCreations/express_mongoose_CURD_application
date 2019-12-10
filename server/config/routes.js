const tasks = require("../controllers/tasks");
// CRUD
module.exports = app => {
  app.post("/tasks/create", (req, res) => {
    tasks.create(req, res);
  });

  app.get("/tasks/readAll", (req, res) => {
    tasks.readAll(req, res);
  });

  app.get("/tasks/readOne/:id", (req, res) => {
    console.log("I am from routes.js getOneId", req.body);
    tasks.readOne(req, res);
  });

  app.put("/tasks/update/:id", (req, res) => {
    console.log("I am from routes.js from put", req.body);
    tasks.update(req, res);
  });

  app.delete("/tasks/delete/:id", (req, res) => {
    tasks.delete(req, res);
  });
};
