const handleRegister = (db, bcrypt) => (req, res) => {
  const { username, password, sector } = req.body;
  if (!username || !password || !sector) {
    return res.status(200).json("Nu ati introdus corect datele");
  }

  const hash = bcrypt.hashSync(password);
  const numedb='login';
  const exista = db.select('*').from(numedb).where('sector','=',`${nrsector}`).orderBy('id', 'desc').then(results => res.send(results));


if (exista===0) {db.transaction((trx) => {
  trx
    .insert({
      hash: hash,
      username: username,
      sector: sector,
    })
    .into(numedb)
    .then(trx.commit)
    .catch(trx.rollback);
    res.status(200).json('utilizator introdus');
} ) } else {
   res.status(200).json('utilizatorul exista')
}
  

  


  
  
};

module.exports = {
  handleRegister: handleRegister,
};
