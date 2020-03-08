CREATE TABLE users (
    id UUID NOT NULL PRIMARY KEY,
    cards UUID [] DEFAULT '{}'
);
