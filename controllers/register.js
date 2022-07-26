const handleRegister = (db, bcrypt) => (req, res) => {
  const { username, password, sector } = req.body;
  if (!username || !password || !sector) {
    return res.status(200).json("Nu ati introdus corect datele");
  }

  const hash = bcrypt.hashSync(password);
  const numedb='login';
  const exista = db.select('*').from(numedb).where('username','=',`${username}`);


if (exista.length===0) {db.transaction((trx) => {
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
  console.log(exista.length)
   res.status(200).json('utilizator introdus')

}
  

  


  
  
};

module.exports = {
  handleRegister: handleRegister,
};
