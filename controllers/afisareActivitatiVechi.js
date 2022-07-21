const handleAfisareActivitatiVechi = (db) => (req, res) => {
      
    const nrsector=req.body.sector;
    const numedb='activitatidirectievechi';
    
  
      db.select('*').from(numedb).where('sector','=',`${nrsector}`).orderBy('id', 'desc').then(results => res.send(results));
      
  
  
         
    
  }
    
    
    module.exports = {
        handleAfisareActivitatiVechi: handleAfisareActivitatiVechi,
    };