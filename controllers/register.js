const handleRegister = (db, bcrypt) => (req, res) => {
  const { username, password, sector } = req.body;
  if (!username || !password || !sector) {
    return res.status(200).json("Nu ati introdus corect datele");
  }

  const hash = bcrypt.hashSync(password);
  const numedb = "login";
  

  db.transaction((trx) => {
    var mesaj ='User introdus';
    trx
      .insert({
        hash: hash,
        username: username,
        sector: sector,
      })
      .into(numedb)

      .catch((mesaj) => mesaj ='User exista')
      .then(trx.commit);
  } ) 
  res.status(200).json(mesaj);
};

module.exports = {
  handleRegister: handleRegister,
};

