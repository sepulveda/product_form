CREATE SCHEMA osj_schema;
CREATE TABLE osj_schema.warehouse
(
    id numeric UNIQUE NOT NULL,
    name varchar UNIQUE NOT NULL ,
    PRIMARY KEY (id)
);
CREATE TABLE osj_schema.branch
(
    id numeric UNIQUE NOT NULL,
    name character varying UNIQUE NOT NULL,
    id_warehouse numeric NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id_warehouse)
        REFERENCES osj_schema.warehouse (id) MATCH SIMPLE
      
);

CREATE TABLE osj_schema.currency
(
    id numeric UNIQUE NOT NULL,
    name varchar,
    PRIMARY KEY (id)
);

CREATE TABLE osj_schema.product
(
    code varchar NOT NULL,
    name varchar NOT NULL,
    price numeric NOT NULL,
    materials varchar[] NOT NULL,
    description varchar NOT NULL,
    id_branch numeric NOT NULL,
    id_currency numeric NOT NULL,
    PRIMARY KEY (code),
    FOREIGN KEY (id_branch)
        REFERENCES osj_schema.branch (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    FOREIGN KEY (id_currency)
        REFERENCES osj_schema.currency (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);
