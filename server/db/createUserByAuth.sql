INSERT INTO consumers (authId, name) VALUES ($1, $2) RETURNING authId, name;
SELECT * FROM consumers;