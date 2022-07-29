const handleCopiereActivitate = (db) => (req, res) => {
    const { idCopiat} = req.body;
    
   
    const numedb="activitatidirectie";
    const numedb2="activitatidirectievechi";
    
    db.transaction((trx) => {
      trx
        .insert(db.select('*').from(numedb2).where('id','=',`${idCopiat}`))
        .into(numedb)
        .then(trx.commit)
        .catch(trx.rollback);
    }).catch((err) => res.status(400).json(err));
   
  

    res.status(200).json('Activitate arhivata');
  };

  
  
  module.exports = {
    handleCopiereActivitate: handleCopiereActivitate,
  };