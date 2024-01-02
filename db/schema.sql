--schema for account holder and recipe--
DROP DATABASE IF EXISTS foodtree;
CREATE DATABASE foodtree;

\c foodtree

CREATE TABLE account (
    id SERIAL PRIMARY KEY,
    email TEXT NOT NULL,
    username VARCHAR(50) NOT NULL,
    password VARCHAR NOT NULL,
    thumbnail bytea, 
    bio VARCHAR(100),
    instagram_link TEXT,
    facebook_link TEXT,
    tiktok_link TEXT,
    x_link TEXT
);


CREATE TABLE recipe (
    id SERIAL PRIMARY KEY,
    thumbnail BYTEA,
    recipe_name VARCHAR(50),
    recipe_description TEXT,
    body TEXT,
    ingredients TEXT,
    tools TEXT,
    link TEXT,
    account_id int,
    FOREIGN KEY (account_id) references account(id)
);
