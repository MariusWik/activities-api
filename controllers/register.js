const handleRegister = (db, bcrypt) => (req, res) => {
  const { username, password, sector } = req.body;
  if (!username || !password || !sector) {
    return res.status(400).json("Nu ati introdus corect datele");
  }
  const hash = bcrypt.hashSync(password);

  db.transaction((trx) => {
    trx
      .insert({
        hash: hash,
        username: username,
        sector: sector,
      })
      .into("login")

      .catch((err) => res.status(400).json("Utilizatorul exista"))
      .then(trx.commit);
  } ) 
  return res.status(200)
};

module.exports = {
  handleRegister: handleRegister,
};
