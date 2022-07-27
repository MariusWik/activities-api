const handleRegister = (db, bcrypt) =>  (req, res) => {
  const { username, password, sector } = req.body;
  if (!username || !password || !sector) {
    return res.status(200).json("Nu ati introdus corect datele");
  }

  const hash = bcrypt.hashSync(password);
  const numedb = "login";


  try {
  db.transaction((trx) => {
   trx
    .insert({
      hash: hash,
      username: username,
      sector: sector,
    })
    .into(numedb)
    
    .then(trx.commit)
  });} catch(err){
   if (err) {return res.status(200).json('Utilizatorul exista')} 
  } 
   
      res.status(200).json('Utilizator introdus')
  



/*   db.transaction((trx) => {
    trx
      .insert({
        hash: hash,
        username: username,
        sector: sector,
      })
      .into(numedb)

      .catch((err) => res.status(400).json("Utilizatorul exista"))
      .then(trx.commit);
  } ) 
  res.status(200).json('Utilizator introdus'); */
};

module.exports = {
  handleRegister: handleRegister,
};
