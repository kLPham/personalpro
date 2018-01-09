-- SELECT * FROM products
-- WHERE name LIKE '%' + $1 + '%';


 SELECT * FROM products WHERE type LIKE '%$1%';