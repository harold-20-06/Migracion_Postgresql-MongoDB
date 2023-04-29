//=================================================================
//     GESTION DE VENTAS
//create data base

db = db.getSiblingDB('ventas')

// create collections

db.createCollection("cliente");
db.createCollection("comercial");
db.createCollection("pedido");

// inserts

db.cliente.insertMany([
   { _id: 1, nombre: "Aarón", apellido1: "Rivero", apellido2: "Gómez", ciudad: "Almería", categoría: 100 },
   { _id: 2, nombre: "Adela", apellido1: "Salas", apellido2: "Díaz", ciudad: "Granada", categoría: 200 },
   { _id: 3, nombre: "Adolfo", apellido1: "Rubio", apellido2: "Flores", ciudad: "Sevilla" },
   { _id: 4, nombre: "Adrián", apellido1: "Suárez", ciudad: "Jaén", categoría: 300 },
   { _id: 5, nombre: "Marcos", apellido1: "Loyola", apellido2: "Méndez", ciudad: "Almería", categoría: 200 },
   { _id: 6, nombre: "María", apellido1: "Santana", apellido2: "Moreno", ciudad: "Cádiz", categoría: 100 },
   { _id: 7, nombre: "Pilar", apellido1: "Ruiz", ciudad: "Sevilla", categoría: 300 },
   { _id: 8, nombre: "Pepe", apellido1: "Ruiz", apellido2: "Santana", ciudad: "Huelva", categoría: 200 },
   { _id: 9, nombre: "Guillermo", apellido1: "López", apellido2: "Gómez", ciudad: "Granada", categoría: 225 },
   { _id: 10, nombre: "Daniel", apellido1: "Santana", apellido2: "Loyola", ciudad: "Sevilla", categoría: 125 }
]);

// Insertar documentos en la colección "comercial"
db.comercial.insertOne({_id: 1, nombre: 'Daniel', apellido1: 'Sáez', apellido2: 'Vega', comision: 0.15})
db.comercial.insertOne({_id: 2, nombre: 'Juan', apellido1: 'Gómez', apellido2: 'López', comision: 0.13})
db.comercial.insertOne({_id: 3, nombre: 'Diego', apellido1: 'Flores', apellido2: 'Salas', comision: 0.11})
db.comercial.insertOne({_id: 4, nombre: 'Marta', apellido1: 'Herrera', apellido2: 'Gil', comision: 0.14})
db.comercial.insertOne({_id: 5, nombre: 'Antonio', apellido1: 'Carretero', apellido2: 'Ortega', comision: 0.12})
db.comercial.insertOne({_id: 6, nombre: 'Manuel', apellido1: 'Domínguez', apellido2: 'Hernández', comision: 0.13})
db.comercial.insertOne({_id: 7, nombre: 'Antonio', apellido1: 'Vega', apellido2: 'Hernández', comision: 0.11})
db.comercial.insertOne({_id: 8, nombre: 'Alfredo', apellido1: 'Ruiz', apellido2: 'Flores', comision: 0.05})

// INsertar documentos en la coleccion "pedido"
db.pedido.insertMany([
  { id: 1, total: 150.5, fecha: new Date('2017-10-05'), id_cliente: 5, id_comercial: 2 },
  { id: 2, total: 270.65, fecha: new Date('2016-09-10'), id_cliente: 1, id_comercial: 5 },
  { id: 3, total: 65.26, fecha: new Date('2017-10-05'), id_cliente: 2, id_comercial: 1 },
  { id: 4, total: 110.5, fecha: new Date('2016-08-17'), id_cliente: 8, id_comercial: 3 },
  { id: 5, total: 948.5, fecha: new Date('2017-09-10'), id_cliente: 5, id_comercial: 2 },
  { id: 6, total: 2400.6, fecha: new Date('2016-07-27'), id_cliente: 7, id_comercial: 1 },
  { id: 7, total: 5760, fecha: new Date('2015-09-10'), id_cliente: 2, id_comercial: 1 },
  { id: 8, total: 1983.43, fecha: new Date('2017-10-10'), id_cliente: 4, id_comercial: 6 },
  { id: 9, total: 2480.4, fecha: new Date('2016-10-10'), id_cliente: 8, id_comercial: 3 },
  { id: 10, total: 250.45, fecha: new Date('2015-06-27'), id_cliente: 8, id_comercial: 2 },
  { id: 11, total: 75.29, fecha: new Date('2016-08-17'), id_cliente: 3, id_comercial: 7 },
  { id: 12, total: 3045.6, fecha: new Date('2017-04-25'), id_cliente: 2, id_comercial: 1 },
  { id: 13, total: 545.75, fecha: new Date('2019-01-25'), id_cliente: 6, id_comercial: 1 },
  { id: 14, total: 145.82, fecha: new Date('2017-02-02'), id_cliente: 6, id_comercial: 1 },
  { id: 15, total: 370.85, fecha: new Date('2019-03-11'), id_cliente: 1, id_comercial: 5 },
  { id: 16, total: 2389.23, fecha: new Date('2019-03-11'), id_cliente: 1, id_comercial: 5 }
]);



