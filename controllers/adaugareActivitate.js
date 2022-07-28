const handleAdaugareActivitate = (db) => (req, res) => {
    const {  activitate, datastart, datastop, procent, observatii} = req.body;
    if ( !activitate|| !datastart||  !procent || !observatii) {
       return  res.status(200).json('Nu ati introdus corect datele')
    }
    
    const numedb='activitatidirectie';
    const nrsector=req.body.sector;
    db.transaction((trx) => {
      trx
        .insert({
          sector: nrsector,
          activitate: activitate,
          datastart: datastart,
          datastop: datastop,
         procent: procent,
        observatii: observatii
        })
        .into(numedb)
        .then(trx.commit)
        .catch(trx.rollback);
    }).catch((err) => res.status(400).json(err));

   res.status(200).json('ok');
   
  };

  
  
  module.exports = {
    handleAdaugareActivitate: handleAdaugareActivitate,
  };