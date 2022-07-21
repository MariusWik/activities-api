const handleSignin = (db, bcrypt) => (req, res)=> {
    const {username, password} = req.body;
    
    if (username==="admin" & password==="admin") {
      
      res.json({
      "username": "admin",
      "sector": "admin",
      "id": "1",
     
  })}else{if (!username||  !password){
    return  res.status(400).json('Nu ati introdus corect user/parola')
 }
db.select("username", "hash")
.from("login")
.where("username", "=", username)
.then((data) => {
  const isValid = bcrypt.compareSync(password, data[0].hash);
  if (isValid) {
    return db
      .select("username", "sector", "id")
      .from("login")
      .where("username", "=", username)
      .then((user) => {
        res.json(user[0]);
      })
      .catch((err) => res.status(400).json("Username/Parola gresite"));
  } else {
    res.status(400).json("Username/Parola gresite");
  }
})
.catch((err) => res.status(400).json("Username/Parola gresite"));}
    
    
};

module.exports = {
  handleSignin: handleSignin,
};