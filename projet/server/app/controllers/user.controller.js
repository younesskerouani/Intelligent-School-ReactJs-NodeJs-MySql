const db = require("../models");
const User = db.user;
const Role = db.role;
const Op = db.Sequelize.Op;

// Get User By id
exports.getUserById = (req, res) => {
  const id = req.params.id;

  User.findByPk(id,{include: Role})
    .then(data => {
      if (data) {
        // const { password, ...others } = data;
        res.status(200).send({
          id: data.id,
          username: data.username,
          fullname: data.fullname,
          email: data.email,
          phone: data.phone,
          adresse: data.adresse,
          roles: data.roles[0].name,
          photo: data.photo
        });
      } else {
        res.status(404).send({
          message: `Cannot find User with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id
      });
    });
};

// update user
exports.updateUser = (req, res) => {
  const paramID = req.params.id;
   User.update(req.body, {
    where: { id: paramID }
  }).then(num => {
    console.log(num[0]);
    if (num[0] === 1) {
      res.send({
        message: "User successfully updated."
      });
    } else {
      res.send({
        message: `Cannot update User with id=${paramID}!`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || `Error while updating User with id=${paramID}!`
    });
  });
};

// Delete user
exports.deleteUser = (req, res) => {
  const id = req.params.id;

  User.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
};

// get all Users 
exports.getAllUsers = (req, res) => {
  User.findAll({include: Role})
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving data."
      });
    });
};

