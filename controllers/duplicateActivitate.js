const handleDuplicateActivitate = (db) => (req, res) => {
    const { sector, idMultiplicat } = req.body;
  
    const numedb = "activitatidirectie";
    const sectorcopiat= sector;
    const activitatecopiata = db
      .select("activitate")
      .from(numedb)
      .where("id", "=", `${idMultiplicat}`);
    const datastartcopiata = db
      .select("datastart")
      .from(numedb)
      .where("id", "=", `${idMultiplicat}`);
    const datastopcopiata = db
      .select("datastop")
      .from(numedb)
      .where("id", "=", `${idMultiplicat}`);
    const procentcopiat = db
      .select("procent")
      .from(numedb)
      .where("id", "=", `${idMultiplicat}`);
    const observatiicopiate = db
      .select("observatii")
      .from(numedb)
      .where("id", "=", `${idMultiplicat}`);
  
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
  
    res.status(200).json("Activitate multiplicata");
  };
  
  module.exports = {
    handleDuplicateActivitate: handleDuplicateActivitate,
  };
  