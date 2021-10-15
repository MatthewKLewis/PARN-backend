CREATE DATABASE parnsos;

CREATE TABLE sos(
    sos_id SERIAL PRIMARY KEY,
    sos_pos_x INT,
    sos_pos_y INT,
    sos_pos_zip INT,
    description VARCHAR(255)
);