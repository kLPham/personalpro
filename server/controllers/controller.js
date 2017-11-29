module.exports= {
    getCartTotal: (req, res, next)=> {
      const dbInstance= req.app.get('db');
      dbInstance.getCartTotal([req.params.id])
        .then(total=> res.status(200).json(total))
        .catch( ()=> res.status(500).json());
    }
  }
  