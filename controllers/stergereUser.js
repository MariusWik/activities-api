const handleStergereUser = (db) => (req, res) => {
    const { username} = req.body;
    if ( username==='admin') {
      return  res.status(400).json('nu, nu se poate sterge :)')
   }
   
    const numedb=`login`;
    const usersters=`${username}`;
    
    db.transaction((trx) => {
      trx
        .delete()
        .from(numedb)
        .where('username', '=', `${usersters}`)
        .then(trx.commit)
        .catch(trx.rollback);
    }).catch((err) => res.status(400).json(err));

    res.status(200).json('user sters');
   
  };

  
  
  module.exports = {
    handleStergereUser: handleStergereUser,
  };