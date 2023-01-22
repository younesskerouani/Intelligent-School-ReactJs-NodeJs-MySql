const db = require("../models");
const Article = db.article;


// Create and Save a new article
exports.createArticle = (req, res) => {

      Article.create({
        photo: req.body.photo,
        titre: req.body.titre,
        description: req.body.description,
        status: req.body.status,
        id_user:req.body.id_user,
        user_fullname: req.body.user_fullname,
        user_photo: req.body.user_photo

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

// Get article By id
exports.getArticleById = (req, res) => {
  const id = req.params.id;

  Article.findByPk(id)
    .then(data => {
      if (data) {
        
        res.status(200).send({
          id: data.id,
          titre: data.titre,
          photo: data.photo,
          description: data.description,
          status: data.status,
          id_user: data.id_user
          
        });
      } else {
        res.status(404).send({
          message: `Cannot find Article with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Article with id=" + id
      });
    });
};

// update article
exports.updateArticle = (req, res) => {
  const paramID = req.params.id;
   Article.update(req.body, {
    where: { id: paramID }
  })
  .then(num => {
    console.log(num[0]);
    if (num[0] === 1) {
      res.send({
        message: "Article successfully updated."
      });
    } else {
      res.send({
        message: `Cannot update Article with id=${paramID}!`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || `Error while updating Article with id=${paramID}!`
    });
  });
};

// Delete article
exports.deleteArticle = (req, res) => {
  const id = req.params.id;

  Article.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Article was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Article with id=${id}. Maybe Article was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Article with id=" + id
      });
    });
};

// Find all articles 
exports.getAllArticles = (req, res) => {
  Article.findAll()
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving data."
      });
    });
};
