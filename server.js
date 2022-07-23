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


const db = knex({
  client: "pg",
  connection: {
    connectionString : process.env.DATABASE_URL,
    ssl: true
  }, 
});

const app = express();

app.use(cors());
app.use(bodyParser.json());

//app.get('/', (req, res)=>res.send('merge'));
app.post('/signin',  signin.handleSignin(db, bcrypt));
app.post('/register', register.handleRegister(db, bcrypt));
app.put("/stergereactivitate", stergereActivitate.handleStergereActivitate(db));
app.post("/modificareactivitate", modificareActivitate.handleModificareActivitate(db));
app.post("/adaugareativitate", adaugareActivitate.handleAdaugareActivitate(db));
app.post("/afisareactivitati", afisareActivitati.handleAfisareActivitati(db));
app.get("/afisaretoate", afisareToate.handleAfisareToate(db));
app.use(cors());
app.get('/afisareuseri', afisareUseri.handleAfisareUseri(db));
app.put("/stergereuser", stergereUser.handleStergereUser(db));
app.post("/schimbareparola", schimbareParola.handleSchimbareParola(db, bcrypt));
app.post("/arhivareactivitate", arhivareActivitate.handleArhivareActivitate(db));
app.post("/afisareactivitativechi", afisareActivitatiVechi.handleAfisareActivitatiVechi(db));
app.put("/stergereactivitateveche", stergereActivitateVeche.handleStergereActivitateVeche(db));

app.listen(process.env.PORT || 3000, () => {
    console.log(`app is runnign on port ${process.env.PORT}`);
  });