INSERT INTO orders ( order_id, consumer_id, product_id, name, email, phone_number, shipping_address, billing_address )
VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
RETURNING *;