//=====================================================================================================

//create DB
db = db.getSiblingDB('empleados')

//create tables

db.createCollection("departamento")
db.createCollection("empleado")

//inserts

db.departamento.insertMany([
   { _id: 1, nombre: 'Desarrollo', presupuesto: 120000, gastos: 6000 },
   { _id: 2, nombre: 'Sistemas', presupuesto: 150000, gastos: 21000 },
   { _id: 3, nombre: 'Recursos Humanos', presupuesto: 280000, gastos: 25000 },
   { _id: 4, nombre: 'Contabilidad', presupuesto: 110000, gastos: 3000 },
   { _id: 5, nombre: 'I+D', presupuesto: 375000, gastos: 380000 },
   { _id: 6, nombre: 'Proyectos', presupuesto: 0, gastos: 0 },
   { _id: 7, nombre: 'Publicidad', presupuesto: 0, gastos: 1000 }
])

db.empleado.insertMany([
  { id: 1, nif: '32481596F', nombre: 'Aarón', apellido1: 'Rivero', apellido2: 'Gómez', id_departamento: 1 },
  { id: 2, nif: 'Y5575632D', nombre: 'Adela', apellido1: 'Salas', apellido2: 'Díaz', id_departamento: 2 },
  { id: 3, nif: 'R6970642B', nombre: 'Adolfo', apellido1: 'Rubio', apellido2: 'Flores', id_departamento: 3 },
  { id: 4, nif: '77705545E', nombre: 'Adrián', apellido1: 'Suárez', apellido2: null, id_departamento: 4 },
  { id: 5, nif: '17087203C', nombre: 'Marcos', apellido1: 'Loyola', apellido2: 'Méndez', id_departamento: 5 },
  { id: 6, nif: '38382980M', nombre: 'María', apellido1: 'Santana', apellido2: 'Moreno', id_departamento: 1 },
  { id: 7, nif: '80576669X', nombre: 'Pilar', apellido1: 'Ruiz', apellido2: null, id_departamento: 2 },
  { id: 8, nif: '71651431Z', nombre: 'Pepe', apellido1: 'Ruiz', apellido2: 'Santana', id_departamento: 3 },
  { id: 9, nif: '56399183D', nombre: 'Juan', apellido1: 'Gómez', apellido2: 'López', id_departamento: 2 },
  { id: 10, nif: '46384486H', nombre: 'Diego', apellido1: 'Flores', apellido2: 'Salas', id_departamento: 5 },
  { id: 11, nif: '67389283A', nombre: 'Marta', apellido1: 'Herrera', apellido2: 'Gil', id_departamento: 1 },
  { id: 12, nif: '41234836R', nombre: 'Irene', apellido1: 'Salas', apellido2: 'Flores', id_departamento: null },
  { id: 13, nif: '82635162B', nombre: 'Juan Antonio', apellido1: 'Sáez', apellido2: 'Guerrero', id_departamento: null }
])
