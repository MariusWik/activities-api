const handleCopiereActivitate = (db) => (req, res) => {
    const { sector, idCopiat} = req.body;
    
   
    const numedb="activitatidirectie";
    const numedb2="activitatidirectievechi";
    
    db.transaction((trx) => {
      trx
        .insert({
          sector: numedb2.select(`${sector}`). from(numedb2).where('id','=',`${idCopiat}`),
          activitate: numedb2.select(`activitate`). from(numedb2).where('id','=',`${idCopiat}`),
          datastart: numedb2.select(`datastart`). from(numedb2).where('id','=',`${idCopiat}`),
          datastop: numedb2.select(`datastop`). from(numedb2).where('id','=',`${idCopiat}`),
          procent: numedb2.select(`procent`). from(numedb2).where('id','=',`${idCopiat}`),
          observatii:  numedb2.select(`observatii`). from(numedb2).where('id','=',`${idCopiat}`),
        })
        .into(numedb)
        .then(trx.commit)
        .catch(trx.rollback)
    })
   
  

    res.status(200).json('Activitate copiata');
  };

  
  
  module.exports = {
    handleCopiereActivitate: handleCopiereActivitate,
  };