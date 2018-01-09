INSERT INTO consumers (consumer_id, name) VALUES ($1, $2);
SELECT * FROM consumers where consumer_id = $1;