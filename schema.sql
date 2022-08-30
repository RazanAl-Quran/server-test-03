-- drop the table if we already have one
DROP TABLE IF EXISTS people;


CREATE TABLE IF NOT EXISTS people (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255)
);

-- The PRIMARY KEY constraint uniquely identifies each record in a table.
-- Primary keys must contain unique values
-- A table can have only one primary key

-- THIS is exactly the same way we did in the terminal
INSERT INTO people (first_name, last_name) VALUES ('Razan','Quran');
INSERT INTO people (first_name, last_name) VALUES ('Dima','Rawashdeh');

-- I'm going to write a command that's going to allow my POSTGRES to run this
-- the way we did previously

-- back to terminal and \q
-- go to our projects path
-- then run -> psql -f schema.sql -d demo
-- I want from you to take this schema file then run it on my demo DB
-- bcz I'm in the root that's why I typed shcema.sql but if I'm not I should typein the directory


-- OK NOW
-- how we test our database
-- RUN in terminal -> psql demo 
-- THEN -> SELECT * FROM people;

-- OR you can add the SELECT from here directly
SELECT * from people;

-- BREAK 10 min
