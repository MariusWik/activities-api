const handleSchimbareParola = (db, bcrypt) => (req, res) => {
  const { oldpassword, newpassword, numeschimbare } = req.body;
  if (!oldpassword || !newpassword || !numeschimbare) {
    return res.status(200).json("Nu ati introdus corect datele");
  }
  const newPass = bcrypt.hashSync(newpassword);
  const numedb = "login";

  db.select("username", "hash")
    .from("login")
    .where("username", "=", numeschimbare)
    .then((data) => {
      const isValid = bcrypt.compareSync(oldpassword, data[0].hash);
      if (isValid) {
        return db.transaction((trx) => {
          trx
            .update({
              hash: newPass,
              entries: true
            })
            .into(numedb)
            .where("username", "=", `${numeschimbare}`)
            .then(trx.commit)
            .catch(trx.rollback);

          res.status(200).json("Parola modificata cu succes");
        });
      } else {
        res.status(200).json("Parola veche gresita");
      }
    });
};

module.exports = {
  handleSchimbareParola: handleSchimbareParola,
};
