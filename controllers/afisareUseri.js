const handleAfisareUseri = (db) => (req,res) => {
  
  const numedb = "login";
  
  db.select('id','username', 'sector').from(numedb).orderBy('sector', 'asc').then(results => res.jeson(results));
}

module.exports = {
  handleAfisareUseri: handleAfisareUseri,
};
