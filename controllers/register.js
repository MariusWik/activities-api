const handleRegister = (db, bcrypt) => (req, res) => {
  const { username, password, sector } = req.body;
  if (!username || !password || !sector) {
    return res.status(200).json("Nu ati introdus corect datele");
  }

  const hash = bcrypt.hashSync(password);
  const numedb = "login";
var mesaj ='User introdus';
  db.transaction((trx) => {
    trx
      .insert({
        hash: hash,
        username: username,
        sector: sector,
      })
      .into(numedb)

      .catch((err) => mesaj ='User exista')
      .then(trx.commit);
  } ) 
  res.status(200).json(mesaj);
};

module.exports = {
  handleRegister: handleRegister,
};

