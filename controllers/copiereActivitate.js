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
    })
   
  

    res.status(200).json('Activitate copiata');
  };

  
  
  module.exports = {
    handleCopiereActivitate: handleCopiereActivitate,
  };