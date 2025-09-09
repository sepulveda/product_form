CREATE SCHEMA osj_schema;
CREATE TABLE osj_schema.warehouse
(
    id integer UNIQUE NOT NULL,
    name character varying UNIQUE NOT NULL ,
    PRIMARY KEY (id)
);
CREATE TABLE osj_schema.branch
(
    id integer UNIQUE NOT NULL,
    name character varying UNIQUE NOT NULL,
    id_warehouse integer NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id_warehouse)
        REFERENCES public.warehouse (id) MATCH SIMPLE
      
);

CREATE TABLE osj_schema.currency
(
    id integer UNIQUE NOT NULL,
    name character varying,
    PRIMARY KEY (id)
);

CREATE TABLE osj_schema.product
(
    code character varying NOT NULL,
    name character varying NOT NULL,
    price integer NOT NULL,
    materials character varying[] NOT NULL,
    description character varying NOT NULL,
    id_branch integer NOT NULL,
    id_currency integer NOT NULL,
    PRIMARY KEY (code),
    FOREIGN KEY (id_branch)
        REFERENCES public.branch (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    FOREIGN KEY (id_currency)
        REFERENCES public.currency (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);
