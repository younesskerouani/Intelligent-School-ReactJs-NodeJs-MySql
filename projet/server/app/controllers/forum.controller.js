const db = require("../models");
const Forum = db.forum;


// Create and Save a new FORUM
exports.createForum = (req, res) => {

      if (!req.body.titre) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }

      Forum.create({
        titre: req.body.titre,
        description: req.body.description,
        photo: req.body.photo
      })
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Forum."
          });
        });
};


// Get Forum By id
exports.getForumById = (req, res) => {
  const id = req.params.id;

  Forum.findByPk(id)
    .then(data => {
      if (data) {
        
        res.status(200).send({
          id: data.id,
          titre: data.titre,
          description: data.description,
          photo: data.photo
          
        });
      } else {
        res.status(404).send({
          message: `Cannot find Forum with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Forum with id=" + id
      });
    });
};

// update Forum
exports.updateForum = (req, res) => {
  const paramID = req.params.id;
   Forum.update(req.body, {
    where: { id: paramID }
  })
  .then(num => {
    console.log(num[0]);
    if (num[0] === 1) {
      res.send({
        message: "Forum successfully updated."
      });
    } else {
      res.send({
        message: `Cannot update Forum with id=${paramID}!`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || `Error while updating Forum with id=${paramID}!`
    });
  });
};

// Delete Forum
exports.deleteForum = (req, res) => {
  const id = req.params.id;

  Forum.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Forum was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Forum with id=${id}. Maybe Forum was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Forum with id=" + id
      });
    });
};

// Find all Forums 
exports.getAllForums = (req, res) => {
  Forum.findAll()
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving data."
      });
    });
};
