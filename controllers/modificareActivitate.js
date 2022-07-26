const handleModificareActivitate = (db) => (req, res) => {
    const { id, activitate, datastart, datastop, procent, observatii} = req.body;
    if ( !activitate|| !datastart||  !procent || !observatii) {
       return  res.status(400).json('Nu ati introdus corect datele')
    }
    const nrsector=req.body.sector;
    const numedb='activitatidirectie';
  
    db.transaction((trx) => {
      trx
        .update({
          activitate: activitate,
          datastart: datastart,
          datastop: datastop,
         procent: procent,
        observatii: observatii
        })
        .into(numedb)
        .where('id', '=', `${id}`)
        .then(trx.commit)
        .catch(trx.rollback);
    }).catch((err) => res.status(400).json(err));

    res.json('Activitate modificata cu succes');
   
  };

  
  
  module.exports = {
    handleModificareActivitate: handleModificareActivitate,
  };