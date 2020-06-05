module.exports = app => {
  const controller = require("../controller/controller.js");

  var router = require("express").Router();

  // Routes
  router.post("/createUser", controller.createUser);
  router.post("/createTask", controller.createTask);
  router.post("/createProject", controller.createProject);
  router.get("/findUsers", controller.findUsers);
  router.get("/findTasks", controller.findTasks);
  router.get("/findProjects", controller.findProjects);



  app.use('/api/controller', router);
};