SELECT SUM(products.price * cart.quantity)

FROM cart

JOIN products ON cart.product_id = products.product_id

WHERE order_id=$1 ;

--get the total price of order 




-- SELECT SUM(product.price)
-- FROM cart
-- WHERE user_id= $1;
