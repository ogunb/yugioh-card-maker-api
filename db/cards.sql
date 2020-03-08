CREATE TABLE cards (
    serial_number UUID UNIQUE NOT NULL PRIMARY KEY,
    name VARCHAR (50) NOT NULL,
    type_id INT NOT NULL DEFAULT 1,
    attribute_id INT NOT NULL DEFAULT 1,
    level INT DEFAULT 1 NOT NULL CHECK (Level >= 1 AND Level <= 12),
    image_url VARCHAR (1000),
    ability_type VARCHAR (150) NOT NULL DEFAULT '-',
    description VARCHAR (150) NOT NULL DEFAULT '-',
    atk INT DEFAULT 99 NOT NULL,
    def INT DEFAULT 99 NOT NULL,
    creator UUID NOT NULL,
    creation_date TIMESTAMP WITH TIME ZONE NOT NULL
);
