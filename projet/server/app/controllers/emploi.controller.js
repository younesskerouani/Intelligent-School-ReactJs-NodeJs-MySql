const db = require("../models");
const Emploi = db.emploi;


// Create Emploi
exports.createEmploi = (req, res) => {

  Emploi.create({
    role: req.body.profil,
    file: req.body.file
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Artilce."
      });
    });
};

// Get Emploi By id
exports.getEmploiById = (req, res) => {
  const id = req.params.id;

  Emploi.findByPk(id)
    .then(data => {
      if (data) {
        
        res.status(200).send({
          id: data.id,
          role: data.role,
          file: data.file
        });
      } else {
        res.status(404).send({
          message: `Cannot find Emploi with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Emploi with id=" + id
      });
    });
};

// update Emploi
exports.updateEmploi = (req, res) => {
  const paramID = req.params.id;
   Emploi.update(req.body, {
    where: { id: paramID }
  })
  .then(num => {
    console.log(num[0]);
    if (num[0] === 1) {
      res.send({
        message: "Emploi successfully updated."
      });
    } else {
      res.send({
        message: `Cannot update Emploi with id=${paramID}!`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || `Error while updating Emploi with id=${paramID}!`
    });
  });
};

// Delete Emploi
exports.deleteEmploi = (req, res) => {
  const id = req.params.id;

  Emploi.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Emploi was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Emploi with id=${id}. Maybe Emploi was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Emploi with id=" + id
      });
    });
};

// Find all Emploi 
exports.getAllEmplois = (req, res) => {
  Emploi.findAll()
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving data."
      });
    });
};


