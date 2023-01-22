const db = require("../models");
const Cours = db.cours;


// Create cours
exports.createCours = (req, res) => {


  Cours.create({
        titre: req.body.titre,
        id_prof: req.body.id_prof,
        prof_fullname: req.body.prof_fullname,
        prof_photo: req.body.prof_photo,
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



// Get Cours By id
exports.getCoursById = (req, res) => {
  const id = req.params.id;

  Cours.findByPk(id)
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
          message: `Cannot find Cours with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Cours with id=" + id
      });
    });
};

// update Cours
exports.updateCours = (req, res) => {
  const paramID = req.params.id;
   Cours.update(req.body, {
    where: { id: paramID }
  })
  .then(num => {
    console.log(num[0]);
    if (num[0] === 1) {
      res.send({
        message: "Cours successfully updated."
      });
    } else {
      res.send({
        message: `Cannot update Cours with id=${paramID}!`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || `Error while updating Cours with id=${paramID}!`
    });
  });
};

// Delete Cours
exports.deleteCours = (req, res) => {
  const id = req.params.id;

  Cours.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Cours was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Cours with id=${id}. Maybe Cours was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Cours with id=" + id
      });
    });
};

// Find all Cours 
exports.getAllCours = (req, res) => {
  Cours.findAll()
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving data."
      });
    });
};


