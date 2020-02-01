CREATE TABLE cards (
    Id BIGSERIAL NOT NULL PRIMARY KEY,
    Name VARCHAR (50) NOT NULL,
    Type VARCHAR (6) NOT NULL DEFAULT 'DARK' CHECK (Type in ('Monster', 'Trap', 'Spell')),
    Attribute VARCHAR (6) NOT NULL DEFAULT 'DARK' CHECK (Attribute in ('DARK', 'DIVINE', 'EARTH', 'FIRE', 'LIGHT', 'WATER', 'WIND')),
    Level INT DEFAULT 1 NOT NULL CHECK (Level >= 1 AND Level <= 12),
    ImageUrl VARCHAR (1000),
    AbilityType VARCHAR (150) NOT NULL DEFAULT '-',
    Description VARCHAR (150) NOT NULL DEFAULT '-',
    Atk INT DEFAULT 99 NOT NULL,
    Def INT DEFAULT 99 NOT NULL,
    Creator VARCHAR (32) NOT NULL,
    CreationDate VARCHAR (32) NOT NULL,
    SerialNumber VARCHAR (32) NOT NULL
);
