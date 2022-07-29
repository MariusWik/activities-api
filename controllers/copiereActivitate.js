const handleCopiereActivitate = (db) => (req, res) => {
  const { sector, idCopiat } = req.body;

  const numedb = "activitatidirectie";
  const numedb2 = "activitatidirectievechi";
  const sectorcopiat= sector;
  const activitatecopiata = db
    .select("activitate")
    .from(numedb2)
    .where("id", "=", `${idCopiat}`);
  const datastartcopiata = db
    .select("datastart")
    .from(numedb2)
    .where("id", "=", `${idCopiat}`);
  const datastopcopiata = db
    .select("datastop")
    .from(numedb2)
    .where("id", "=", `${idCopiat}`);
  const procentcopiat = db
    .select("procent")
    .from(numedb2)
    .where("id", "=", `${idCopiat}`);
  const observatiicopiate = db
    .select("observatii")
    .from(numedb2)
    .where("id", "=", `${idCopiat}`);

  db.transaction((trx) => {
    trx
      .insert({
        sector: sectorcopiat,
        activitate: activitatecopiata,
        datastart: datastartcopiata,
        datastop: datastopcopiata,
        procent: procentcopiat,
        observatii: observatiicopiate,
      })
      .into(numedb)
      .then(trx.commit)
      .catch(trx.rollback);
  });

  res.status(200).json("Activitate copiata");
};

module.exports = {
  handleCopiereActivitate: handleCopiereActivitate,
};
