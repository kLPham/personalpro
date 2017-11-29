module.exports= {
    getProductById: (req, res, next)=> {
      const dbInstance= req.app.get('db');
      dbInstance.get_product_by_id([req.params.id])
        .then(product=> res.status(200).json(product))
        .catch( ()=> res.status(500).json());
    },
    getProductsByPrice: (req, res, next)=> {
      const dbInstance= req.app.get('db');
      dbInstance.get_products_by_price()
        .then(products=> res.status(200).json(products))
        .catch( ()=> res.status(500).json());
    },
    getProductsByPriceDesc: (req, res, next)=> {
      const dbInstance= req.app.get('db');
      dbInstance.get_products_by_price_desc()
        .then(products=> res.status(200).json(products))
        .catch( ()=> res.status(500).json());
    },
    getProductsBySearch: (req, res, next)=> {
      const dbInstance= req.app.get('db');
      dbInstance.get_products_by_search([req.params.search])
        .then(products=> res.status(200).json(products))
        .catch( ()=> res.status(500).json());
    },
    //CART TOTAL
    getCartTotal: (req, res, next)=> {
      const dbInstance= req.app.get('db');
      dbInstance.get_cart_total([req.params.id])
        .then(total=> res.status(200).json(total))
        .catch( ()=> res.status(500).json());
    },
  }
  