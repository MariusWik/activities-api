const handleArhivareActivitate = (db) => (req, res) => {
    const { idarhivat} = req.body;
    
   
    const numedb="activitatidirectie";
    const numedb2="activitatidirectievechi";
    
    db.transaction((trx) => {
      trx
        .insert(db.select('*').from(numedb).where('id','=',`${idarhivat}`))
        .into(numedb2)
        .then(trx.commit)
        .catch(trx.rollback);
    }).catch((err) => res.status(400).json(err));
   
    
    db.transaction((trx) => {
      trx
        .delete()
        .from(numedb)
        .where('id', '=', `${idarhivat}`)
        .then(trx.commit)
        .catch(trx.rollback);
    }).catch((err) => res.status(400).json(err));

    res.status(200).json('Activitate arhivata');
  };

  
  
  module.exports = {
    handleArhivareActivitate: handleArhivareActivitate,
  };