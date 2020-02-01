CREATE TABLE cards (
    SerialNumber UUID UNIQUE NOT NULL PRIMARY KEY,
    Name VARCHAR (50) NOT NULL,
    Type VARCHAR (7) NOT NULL DEFAULT 'Monster' CHECK (Type in ('Monster', 'Trap', 'Spell')),
    Attribute VARCHAR (6) NOT NULL DEFAULT 'DARK' CHECK (Attribute in ('DARK', 'DIVINE', 'EARTH', 'FIRE', 'LIGHT', 'WATER', 'WIND')),
    Level INT DEFAULT 1 NOT NULL CHECK (Level >= 1 AND Level <= 12),
    ImageUrl VARCHAR (1000),
    AbilityType VARCHAR (150) NOT NULL DEFAULT '-',
    Description VARCHAR (150) NOT NULL DEFAULT '-',
    Atk INT DEFAULT 99 NOT NULL,
    Def INT DEFAULT 99 NOT NULL,
    Creator UUID NOT NULL,
    CreationDate DATE NOT NULL
);
