// module.exports = {
//     add: (req, res, next) => {
//       if (req.session.cart) {
//         if (req.session.cart.product.indexOf(req.body.product) === -1) {
//           req.session.cart.product.push(req.body.product);
//           req.session.cart.total += 10;
//           res.status(200).send(req.session.cart);
//         } else {
//           res.status(500).json("Item Already In Cart");
//         }
//       } else {
//         req.session.cart = {
//           product: [req.body.product],
//           total: 10.0
//         };
//         res.status(200).send(req.session.cart);
//       }
//     },
//     get: (req, res, next) => {
//       if (req.session.cart) {
//         res.status(200).json(req.session.cart);
//       }
//     },
//     delete: (req, res, next) => {
//       if (req.session.cart.product.indexOf(req.params.product) !== -1) {
//         req.session.cart.product.splice(
//           req.session.cart.product.indexOf(req.params.product),
//           1
//         );
//         res.status(200).json(req.session.cart);
//       } else {
//         res.status(500).json("nothing to delete");
//       }
//     }
//   };