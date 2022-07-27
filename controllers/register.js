const handleRegister = (db, bcrypt) => (req, res) => {
  const { username, password, sector } = req.body;
  if (!username || !password || !sector) {
    return res.status(200).json("Nu ati introdus corect datele");
  }

  const hash = bcrypt.hashSync(password);
  const numedb = "login";

  db.transaction((trx) => {
    trx
      .insert({
        hash: hash,
        username: username,
        sector: sector,
      })
      .into(numedb)
      .then(trx.commit)
      .catch(trx.rollback);
      
      
  }).catch((err)=>res.status(400).json(err));

  res.sendStatus(200)
 
};

module.exports = {
  handleRegister: handleRegister,
};
