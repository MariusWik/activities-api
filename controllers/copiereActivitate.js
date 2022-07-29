const handleCopiereActivitate = (db) => (req, res) => {
    const { sector, idCopiat} = req.body;
    
   
    const numedb="activitatidirectie";
    const numedb2="activitatidirectievechi";
    
    db.transaction((trx) => {
      trx
        .insert(db.select( `${sector}`,'activitate', 'datastart','datastop','observatii').from(numedb2).where('id','=',`${idCopiat}`))
        .into(numedb( `${sector}`,'activitate', 'datastart', 'datastop','observatii'))
        .then(trx.commit)
        .catch(trx.rollback);
    })
   
  

    res.status(200).json('Activitate copiata');
  };

  
  
  module.exports = {
    handleCopiereActivitate: handleCopiereActivitate,
  };