INSERT INTO consumers (consumer_id, name) VALUES ($1, $2) RETURNING consumer_id, name;
SELECT * FROM consumers;