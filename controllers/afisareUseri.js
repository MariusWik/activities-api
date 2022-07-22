const handleAfisareUseri = (db) => (res) => {
  
  const numedb = "login";

  db.select("id", "username", "sector")
    .from(numedb)
    .orderBy("sector", "asc")
    .then((results) => res.send(results)).catch((err) => res.status(400).json(err));;
}

module.exports = {
  handleAfisareUseri: handleAfisareUseri,
};
