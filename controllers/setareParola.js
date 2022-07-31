const handleSetareParola = (db, bcrypt) => (req, res) => {
    const { newpassword, numeschimbare } = req.body;
    if (!newpassword) {
      return res.status(200).json("Nu ati introdus corect datele");
    }
    const newPass = bcrypt.hashSync(newpassword);
    const numedb = "login";
  
 db.transaction((trx) => {
            trx
              .update({
                hash: newPass,
                entries: true
              })
              .into(numedb)
              .where("username", "=", `${numeschimbare}`)
              .then(trx.commit)
              .catch(trx.rollback);
  
            res.status(200).json("OK");
          });
        
   
        }
  
  module.exports = {
    handleSetareParola: handleSetareParola,
  };
  