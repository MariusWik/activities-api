const handleRegister = (db, bcrypt) => (req, res) => {
  const { username, password, sector } = req.body;
  if (!username || !password || !sector) {
    return res.status(400).json("Nu ati introdus corect datele");
  }
  const hash = bcrypt.hashSync(password);
  const numedb='login';
  db.transaction((trx) => {
    trx
      .insert({
        hash: hash,
        username: username,
        sector: sector,
      })
      .into(numedb)

      .catch((err) => res.status(400).json("Utilizatorul exista"))
      .then(trx.commit)
      .then (res.status(200).json("Utilizatorul introdus"));
  } ) 
  
};

module.exports = {
  handleRegister: handleRegister,
};
