const handleAfisareActivitati = (db) => (req, res) => {
      
  const nrsector=req.body.sector;
  const numedb='activitatidirectie';
  

    db.select('*').from(numedb).where('sector','=',`${nrsector}`).orderBy('id', 'desc').then(results => res.send(results));
    


       
  
}
  
  
  module.exports = {
    handleAfisareActivitati: handleAfisareActivitati,
  };