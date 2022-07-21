const handleRegister = (db, bcrypt) => (req, res) => {
    const { username, password, sector} = req.body;
    if (!username || !password || !sector){
       return  res.status(400).json('incorrect form subbmision')
    }
    const hash = bcrypt.hashSync(password);
  
    db.transaction((trx) => {
      trx
        .insert({
          hash: hash,
          username: username,
          sector: sector
        })
        .into("login")
        
        .catch((err) => res.status(400).json("Utilizatorul exista"))
        .then(trx.commit)
    })

    
  };

  
  
  module.exports = {
    handleRegister: handleRegister,
  };
  