
INSERT INTO osj_schema.warehouse(
	id, name)
	VALUES (1, 'Arica'), (2, 'La Serena'), (3, 'Concepción'), (4, 'Santiago Centro'), (5, 'Puerto Montt');

INSERT INTO osj_schema.branch(
	id, name, id_warehouse) 
	VALUES (1, 'Arica', 1), (2, 'Iquique', 1), (3, 'Antofagasta', 1), (4, 'La Serena', 2), (5, 'Copiapó', 2), (6, 'Ovalle', 2), (7, 'Concepción', 3),(8, 'Talcahuano', 3),(9, 'Chillán', 3),(10, 'Santiago Centro', 4),(11, 'Valparaiso', 4),(12, 'Pichilemu', 4),(13, 'Talca', 4),(14, 'Puerto Montt', 5),(15, 'Valdivia', 5),(16, 'Castro', 5);


INSERT INTO osj_schema.currency(
	id, name)
	VALUES (1, 'Peso Chileno'), (2,'Sol Peruano'), (3,'Dolar Estadounidense'), (4,'Euro'), (5,'Yuan');