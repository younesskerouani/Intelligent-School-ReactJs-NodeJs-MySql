const db = require("../models");
const Bulletin = db.bulletin;


// Create Bulletin

exports.createBulletin = (req, res) => {

     

  Bulletin.create({
    id_student: req.body.id_student,
    
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


// Get Bulletin By id
exports.getBulletinById = (req, res) => {
  const id = req.params.id;

  Bulletin.findByPk(id)
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
          message: `Cannot find Bulletin with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Bulletin with id=" + id
      });
    });
};

// update Bulletin
exports.updateBulletin = (req, res) => {
  const paramID = req.params.id;
   Bulletin.update(req.body, {
    where: { id: paramID }
  })
  .then(num => {
    console.log(num[0]);
    if (num[0] === 1) {
      res.send({
        message: "Bulletin successfully updated."
      });
    } else {
      res.send({
        message: `Cannot update Bulletin with id=${paramID}!`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || `Error while updating Bulletin with id=${paramID}!`
    });
  });
};

// Delete Bulletin
exports.deleteBulletin = (req, res) => {
  const id = req.params.id;

  Bulletin.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Bulletin was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Bulletin with id=${id}. Maybe Bulletin was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Bulletin with id=" + id
      });
    });
};

// Find all Bulletin 
exports.getAllBulletin = (req, res) => {
  Bulletin.findAll()
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving data."
      });
    });
};


