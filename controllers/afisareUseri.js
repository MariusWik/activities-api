const handleAfisareUseri = (db) => (res) => {
  const numedb = "login";

  db.select("id", "username", "sector")
    .from(numedb)
    .orderBy("sector", "asc")
    .then((results) => {res.setHeader('Access-Control-Allow-Origin','https://activitatidirectie.herokuapp.com');res.send(results)});
};

module.exports = {
  handleAfisareUseri: handleAfisareUseri,
};
