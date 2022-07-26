const express = require("express");
const bodyParser = require("body-parser");

const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
const knex = require("knex");

const register = require("./controllers/register.js");
const signin = require("./controllers/signin.js");
const adaugareActivitate = require("./controllers/adaugareActivitate.js");
const afisareActivitati = require("./controllers/afisareActivitati.js");
const stergereActivitate = require("./controllers/stergereActivitate.js");
const modificareActivitate = require("./controllers/modificareActivitate.js");
const afisareToate = require("./controllers/afisareToate.js");
const afisareUseri = require("./controllers/afisareUseri");
const stergereUser = require("./controllers/stergereUser")
const schimbareParola = require("./controllers/schimbareParola");
const arhivareActivitate=require("./controllers/arhivareActivitate")
const afisareActivitatiVechi = require("./controllers/afisareActivitatiVechi.js");
const stergereActivitateVeche = require("./controllers/stergereActivitateVeche.js");
const copiereActivitateVeche = require("./controllers/copiereActivitate");
const setareParola = require("./controllers/setareParola");
const duplicateActivitate= require("./controllers/duplicateActivitate");
const db = knex({
  client: "pg",
  connection: {
    connectionString : process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  }, 
});

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.post('/afisareuseri', afisareUseri.handleAfisareUseri(db));

//app.get('/', (req, res)=>res.send('merge'));
app.post('/signin',  signin.handleSignin(db, bcrypt));
app.post('/register', register.handleRegister(db, bcrypt));
app.post("/stergereactivitate", stergereActivitate.handleStergereActivitate(db));
app.post("/modificareactivitate", modificareActivitate.handleModificareActivitate(db));
app.post("/adaugareativitate", adaugareActivitate.handleAdaugareActivitate(db));
app.post("/afisareactivitati", afisareActivitati.handleAfisareActivitati(db));
app.post("/afisaretoate", afisareToate.handleAfisareToate(db));
app.post("/stergereuser", stergereUser.handleStergereUser(db));
app.post("/schimbareparola", schimbareParola.handleSchimbareParola(db, bcrypt));
app.post("/arhivareactivitate", arhivareActivitate.handleArhivareActivitate(db));
app.post("/afisareactivitativechi", afisareActivitatiVechi.handleAfisareActivitatiVechi(db));
app.post("/stergereactivitateveche", stergereActivitateVeche.handleStergereActivitateVeche(db));
app.post("/copiereactivitate", copiereActivitateVeche.handleCopiereActivitate(db));
app.post("/duplicateactivitate", duplicateActivitate.handleDuplicateActivitate(db));
app.post("/setareparola", setareParola.handleSetareParola(db, bcrypt));
app.listen(process.env.PORT, () => {
    console.log(`app is runnign on port ${process.env.PORT}`);
  });