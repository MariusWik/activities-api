const handleAfisareToate = (db) => (res) => {
  const numedb = "activitatidirectie";

  db.select('*')
    .from(numedb)
    .orderBy('sector', 'asc')
    .then(results =>  res.json(results));
};

module.exports = {
  handleAfisareToate: handleAfisareToate,
};
