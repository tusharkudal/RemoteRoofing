const db = require("../models");
const users = db.users;
const tasks = db.task;
const projects = db.project;
const Op = db.Sequelize.Op;

exports.createUser = async (req, res) => {
   console.log(req.body.email)
  // Validate request
  if (!req.body.email) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a user
  const Users = {
    email: req.body.email,
    name: req.body.name,
    surname: req.body.surname
  };

  // Save users in the database
  await users.create(Users)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          "Some error occurred while creating the user."
      });
    });
};


exports.createTask = async (req, res) => {
   //console.log(req.body.email)
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a user
  const task = {
	name: req.body.name,
    description: req.body.description,
    score: req.body.score,
    status: req.body.status,
    project_id: req.body.project_id,
    assigner_id : req.body.assigner_id
  };

  // Save users in the database
  await tasks.create(task)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          "Some error occurred while creating the task."
      });
    });
};


exports.createProject = async (req, res) => {
   //console.log(req.body.email)
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a user
  const project = {
	name: req.body.name,
    body: req.body.body,
    status: req.body.status,
    assigner_id : req.body.assigner_id
  };

  // Save users in the database
  await projects.create(project)
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message:
          "Some error occurred while creating the project."
      });
    });
};


exports.findUsers = async (req, res) => {
  var whereStatement = {};
  const name = req.query.name;
  const surname = req.query.surname;
  if(name)
    whereStatement.name = name;
  if(surname)
    whereStatement.surname = surname;

  users.findAll({ where: whereStatement })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving."
      });
    });
};


exports.findTasks = async (req, res) => {
  var whereStatement = {};
  const name = req.query.name;
  const description = req.query.description;
  const status = req.query.status;
  const score = req.query.score;
  const assigner_id = req.query.assigner_id;


  tasks.findAll(
  	{ 
  		where : {
  			[Op.or]: [
  				{ name : name },
  				{ description : description },
  				{ status : {[Op.in]: [status]} },
  				{ score : score},
  				{ assigner_id : assigner_id}
  			]
  		}
  	}).then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving."
      });
    });
};


exports.findProjects = async (req, res) => {
  var whereStatement = {};
  const name = req.query.name;
  const description = req.query.description;
  const status = req.query.status;
  const assigner_id = req.query.assigner_id;


  projects.findAll(
  	{ 
  		where : {
  			[Op.or]: [
  				{ name : name },
  				{ body : description },
  				{ status : {[Op.in]: [status]} },
  				{ assigner_id : assigner_id}
  			]
  		}
  	}).then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving."
      });
    });
};



