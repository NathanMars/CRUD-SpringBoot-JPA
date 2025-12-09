CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    admission_date DATE NOT NULL,
    salary NUMERIC(19, 2) NOT NULL,
    status CHAR(1) NOT NULL -- "A" (Ativo), "I" (Inativo), ultilizando CHAR(1) ao invés de BOOL pensando num futuro hipotético onde mais opções de estado são adicionadas, mas sem precisar usar ENUM do postgres, mantendo a simplicidade do projeto
);
