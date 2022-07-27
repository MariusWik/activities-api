const handleRegister = (db, bcrypt) => async (req, res) => {
  const { username, password, sector } = req.body;
  if (!username || !password || !sector) {
    return res.status(200).json("Nu ati introdus corect datele");
  }

  const hash = bcrypt.hashSync(password);
  const numedb = "login";


  try {
  const merge = await db.transaction((trx) => {
   trx
    .insert({
      hash: hash,
      username: username,
      sector: sector,
    })
    .into(numedb)
    
    .then(trx.commit)
  });
    if (merge){
      res.status(200).json('Utilizator introdus')
  }
}catch(err){
  res.status(200).json('Utilizatorul exista')
}  


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
