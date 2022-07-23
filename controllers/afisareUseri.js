const handleAfisareUseri = (db) => (req,res) => {
  
  const numedb = "login";
  res.setHeader('Access-Control-Allow-Origin', 'https://activitatidirectie.herokuapp.com');
  db.select('id','username', 'sector').from(numedb).orderBy('sector', 'asc').then(results => res.send(results));
}

module.exports = {
  handleAfisareUseri: handleAfisareUseri,
};
