DELETE
FROM cart
WHERE order_id = $1 AND consumer_id = $2 AND product_id = $3;

SELECT *

FROM cart

JOIN products ON cart.product_id = products.product_id

WHERE order_id= $1;
this should returns new information 