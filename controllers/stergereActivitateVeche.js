const handleStergereActivitateVeche = (db) => (req, res) => {
    const { idstergere} = req.body;
    
   
    const numedb=`activitatidirectievechi`;
    const idsters=`${idstergere}`;
    
    db.transaction((trx) => {
      trx
        .delete()
        .from(numedb)
        .where('id', '=', `${idsters}`)
        .then(trx.commit)
        .catch(trx.rollback);
    }).catch((err) => res.status(400).json(err));

    res.json('Activitate stearsa');
   
  };

  
  
  module.exports = {
    handleStergereActivitateVeche: handleStergereActivitateVeche}