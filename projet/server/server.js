const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

var corsOptions = {
    origin: "*"
};

//to serve images to public
const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'images')))


app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// database
const db = require("./app/models");
const Role = db.role;

db.sequelize.sync();
// force: true will drop the table if it already exists
db.sequelize.sync({force: false}).then(() => {
//   console.log('Drop and Resync Database with { force: true }');
  initial();
});


// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/forum.routes')(app);
require('./app/routes/evenement.routes')(app);
require('./app/routes/conversation.routes')(app);
require('./app/routes/message.routes')(app);
require('./app/routes/cours.routes')(app);
require('./app/routes/article.routes')(app);
require('./app/routes/bulletin.routes')(app);
require('./app/routes/emploi.routes')(app);

// set port, listen for requests
const PORT = 8088;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

app.get("/downloadEmplois/:filename",(req, res) =>{
    const nameofFile = req.params.filename;
    res.download("./images/emplois/"+nameofFile);
      } )

app.get("/downloadCours/:filename",(req, res) =>{
        const nameofFile = req.params.filename;
        res.download("./images/cours/"+nameofFile);
          } )

function initial() {
    Role.create({
        id: 1,
        name: "admin"
    });

    Role.create({
        id: 2,
        name: "user"
    });

    Role.create({
        id: 3,
        name: "directeur"
    });

    Role.create({
        id: 4,
        name: "secretaire"
    });

    Role.create({
        id: 5,
        name: "surveillant"
    });

    Role.create({
        id: 6,
        name: "infirmier"
    });

    Role.create({
        id: 7,
        name: "enseignant"
    });

    Role.create({
        id: 8,
        name: "etudiant"
    });

    Role.create({
        id: 9,
        name: "parent"
    });

}