const handleAfisareUseri = (db) => (res) => {
  
  const numedb = "login";

  db.select("id", "username", "sector")
    .from(numedb)
    .orderBy("sector", "asc")
    .then((results) => res.send(results));
};

module.exports = {
  handleAfisareUseri: handleAfisareUseri,
};
