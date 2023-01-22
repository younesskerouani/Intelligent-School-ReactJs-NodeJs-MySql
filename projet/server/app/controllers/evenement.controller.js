const db = require("../models");
const Evenement = db.evenement;


// Create and Save  new Evenement
exports.createEvenement = (req, res) => {

    if (!req.body.titre) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }

    Evenement.create({
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
            err.message || "Some error occurred while creating the Evenement."
        });
      });
};


// Get Evenement By id
exports.getEvenementById = (req, res) => {
    const id = req.params.id;
  
    Evenement.findByPk(id)
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
            message: `Cannot find Evenement with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Evenement with id=" + id
        });
      });
  };

  // update Evenement
exports.updateEvenement = (req, res) => {
    const paramID = req.params.id;
    Evenement.update(req.body, {
      where: { id: paramID }
    })
    .then(num => {
      console.log(num[0]);
      if (num[0] === 1) {
        res.send({
          message: "Evenement successfully updated."
        });
      } else {
        res.send({
          message: `Cannot update Evenement with id=${paramID}!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Error while updating Evenement with id=${paramID}!`
      });
    });
  };

  // Delete Evenement
exports.deleteEvenement = (req, res) => {
    const id = req.params.id;
  
    Evenement.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Evenement was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Evenement with id=${id}. Maybe Evenement was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Evenement with id=" + id
        });
      });
  };

 // Find all Forums 
exports.getAllEvenements = (req, res) => {
    Evenement.findAll()
      .then(data => {
        res.send(data);
      }).catch(err => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving data."
        });
      });
  };