//=========================================================================================
//Consultas sobre una tabla

//Lista el primer apellido de todos los empleados.
select * from empleado
select apellido1 from empleado

db.empleado.find({},{apellido1:1})
//Lista el primer apellido de los empleados eliminando los apellidos que estén repetidos.
select distinct apellido1 from empleado

db.empleado.distinct("apellido1")
//Lista todas las columnas de la tabla empleado.
select * from empleado

db.empleado.find().pretty()
//Lista el nombre y los apellidos de todos los empleados.
select nombre, apellido1, apellido2 from empleado

db.empleado.find({},{nombre:1,apellido1:1,apellido2:1,_id:0})
//Lista el identificador de los departamentos de los empleados que aparecen en la tabla empleado.
select id_departamento from empleado

db.empleado.find({},{id_departamento:1})
//Lista el identificador de los departamentos de los empleados que aparecen en la tabla empleado, eliminando los identificadores que aparecen repetidos.
select distinct id_departamento from empleado

db.empleado.distinct("id_departamento")
//Lista el nombre y apellidos de los empleados en una única columna.
select (nombre, apellido1) as nombre from empleado

db.empleado.aggregate([
  {
    $project: {
    	_id:0,
      nombre: {
        $concat: ["$nombre"," ", "$apellido1"," ", "$apellido2"]
      }
    }
  }
]);
//Lista el nombre y apellidos de los empleados en una única columna, convirtiendo todos los caracteres en mayúscula.
select (upper(nombre), upper(apellido1)) as nombre from empleado

db.empleado.aggregate([ {$project :{nombre: {$concat:[{$toUpper:"$nombre"}," ",{$toUpper:"$apellido1"}]}}}])

//Lista el nombre y apellidos de los empleados en una única columna, convirtiendo todos los caracteres en minúscula.
select (lower(nombre), lower(apellido1)) as nombre from empleado

db.empleado.aggregate([ {$project :{nombre: {$concat:[{$toLower:"$nombre"}," ",{$toLower:"$apellido1"}]}}}])
//Lista el identificador de los empleados junto al nif, pero el nif deberá aparecer en dos columnas, una mostrará únicamente los dígitos del nif y la otra la letra.
select id, substr(nif,1,8) as nif,substr(nif,9,9) as letra from empleado

db.empleado.aggregate([{$project:{_id:0,id:1, nifs:{$substr:["$nif",0,8]}, letra:{$substr:["$nif",8,9]}}}])
//Lista el nombre de cada departamento y el valor del presupuesto actual del que dispone. 
//Para calcular este dato tendrá que restar al valor del presupuesto inicial (columna presupuesto) 
//los gastos que se han generado (columna gastos). Tenga en cuenta que en algunos casos pueden existir valores 
//negativos. Utilice un alias apropiado para la nueva columna que está calculando.
select nombre, (presupuesto - gastos) as presupuesto_actual from departamento 

db.departamento.aggregate([{$project:{_id:0,nombre:1,presupuesto_actual:{$subtract:["$presupuesto","$gastos"]}}}]) 
//Lista el nombre de los departamentos y el valor del presupuesto actual ordenado de forma ascendente.
select nombre, (presupuesto - gastos) as presupuesto_actual from departamento order by presupuesto_actual asc 

db.departamento.aggregate([{$project:{_id:0,nombre:1,presupuesto_actual:{$subtract:["$presupuesto","$gastos"]}}},{$sort:{"presupuesto_actual":1}}])   
//Lista el nombre de todos los departamentos ordenados de forma ascendente.
select nombre from departamento order by nombre asc

db.departamento.find({},{nombre:1,_id:0}).sort({"nombre":1})
//Lista el nombre de todos los departamentos ordenados de forma desscendente.
select nombre from departamento order by nombre desc

db.departamento.find({},{nombre:1,_id:0}).sort({"nombre":-1})
//Lista los apellidos y el nombre de todos los empleados, ordenados de forma alfabética tendiendo en cuenta en primer lugar sus apellidos y luego su nombre.
select apellido1, apellido2,nombre from empleado order by apellido1,apellido2,nombre

db.empleado.find({},{_id:0,apellido1:1,apellido2:1,nombre:1}).sort({"apellido1":1,"apellido2":1,"nombre":1})
//Devuelve una lista con el nombre y el presupuesto, de los 3 departamentos que tienen mayor presupuesto.
select nombre, presupuesto from departamento order by presupuesto desc limit 3

db.departamento.find({},{_id:0,nombre:1,presupuesto:1}).sort({"presupuesto":-1}).limit(3)
//Devuelve una lista con el nombre y el presupuesto, de los 3 departamentos que tienen menor presupuesto.
select nombre, presupuesto from departamento order by presupuesto asc limit 3

db.departamento.find({},{_id:0,nombre:1,presupuesto:1}).sort({"presupuesto":1}).limit(3)
//Devuelve una lista con el nombre y el gasto, de los 2 departamentos que tienen mayor gasto.
select nombre,gastos from departamento order by gastos desc limit 2

db.departamento.find({},{nombre:1,gastos:1,_id:0}).sort({"gastos":-1}).limit(2)
//Devuelve una lista con el nombre y el gasto, de los 2 departamentos que tienen menor gasto.
select nombre,gastos from departamento order by gastos asc limit 2

db.departamento.find({},{nombre:1,gastos:1}).sort({"gastos":1}).limit(2)
//Devuelve una lista con 5 filas a partir de la tercera fila de la tabla empleado. La tercera fila se debe incluir en la respuesta. La respuesta debe incluir todas las columnas de la tabla empleado.
select * from empleado limit 5 offset 2

db.empleado.find().limit(5).skip(2)
//Devuelve una lista con el nombre de los departamentos y el presupuesto, de aquellos que tienen un presupuesto mayor o igual a 150000 euros.
select nombre, presupuesto from departamento where presupuesto >= 150000

db.departamento.find({presupuesto:{$gte:150000}},{nombre:1,presupuesto:1,_id:0})
//Devuelve una lista con el nombre de los departamentos y el gasto, de aquellos que tienen menos de 5000 euros de gastos.
select nombre, gastos from departamento where gastos <5000

db.departamento.find({gastos:{$lt:5000}},{nombre:1,gastos:1})
//Devuelve una lista con el nombre de los departamentos y el presupesto, de aquellos que tienen un presupuesto entre 100000 y 200000 euros. Sin utilizar el operador BETWEEN.
select nombre, presupuesto from departamento where presupuesto >=100000 and presupuesto <= 200000

db.departamento.find({presupuesto:{$gte:100000,$lte:200000}},{nombre:1,presupuesto:1})
//Devuelve una lista con el nombre de los departamentos que no tienen un presupuesto entre 100000 y 200000 euros. Sin utilizar el operador BETWEEN.
select nombre, presupuesto from departamento where presupuesto < 100000 or presupuesto > 200000

db.departamento.find({$or:[{presupuesto:{$lt:100000}},{presupuesto:{$gt:200000}}]},{nombre:1,presupuesto:1})
//Devuelve una lista con el nombre de los departamentos que tienen un presupuesto entre 100000 y 200000 euros. Utilizando el operador BETWEEN.
select nombre from departamento where presupuesto between 100000 and 200000

db.departamento.find({presupuesto:{$gt:100000,$lt:200000}},{nombre:1})
//Devuelve una lista con el nombre de los departamentos que no tienen un presupuesto entre 100000 y 200000 euros. Utilizando el operador BETWEEN.
select nombre from departamento where presupuesto not between 100000 and 200000

db.departamento.find({presupuesto:{$not:{$gt:100000,$lt:200000}}},{nombre:1})
//Devuelve una lista con el nombre de los departamentos, gastos y presupuesto, de quellos departamentos donde los gastos sean mayores que el presupuesto del que disponen.
select nombre, gastos, presupuesto from departamento where gastos > presupuesto

db.departamento.find({$expr:{$gt:["$gastos","$presupuesto"]}},{nombre:1,gastos:1,presupuesto:1})
//Devuelve una lista con el nombre de los departamentos, gastos y presupuesto, de aquellos departamentos donde los gastos sean menores que el presupuesto del que disponen.
select nombre, gastos, presupuesto from departamento where gastos < presupuesto

db.departamento.find({$expr:{$lt:["$gastos","$presupuesto"]}},{nombre:1,gastos:1,presupuesto:1})
//Devuelve una lista con el nombre de los departamentos, gastos y presupuesto, de aquellos departamentos donde los gastos sean iguales al presupuesto del que disponen.
select nombre, gastos, presupuesto from departamento where gastos = presupuesto

db.departamento.find({$expr:{$eq:["$gastos","$presupuesto"]}},{nombre:1,gastos:1,presupuesto:1})
//Lista todos los datos de los empleados cuyo segundo apellido sea NULL.
select * from empleado where apellido2 is null

db.empleado.find({apellido2:null},{})
//Lista todos los datos de los empleados cuyo segundo apellido no sea NULL.
select * from empleado where apellido2 is not null

db.empleado.find({apellido2:{$ne:null}},{})
//Lista todos los datos de los empleados cuyo segundo apellido sea López.
select * from empleado where apellido2 = 'López'

db.empleado.find({apellido2:"López"},{})
//Lista todos los datos de los empleados cuyo segundo apellido sea Díaz o Moreno. Sin utilizar el operador IN.
select * from empleado where apellido2 = 'López' or apellido2 = 'Moreno'

db.empleado.find({$or:[{apellido2:"López"},{apellido2:"Moreno"}]},{})
//Lista todos los datos de los empleados cuyo segundo apellido sea Díaz o Moreno. Utilizando el operador IN.
select * from empleado where apellido2 in ('Díaz','Moreno')

db.empleado.find({apellido2:{$in:['Díaz','Moreno']}},{})
//Lista los nombres, apellidos y nif de los empleados que trabajan en el departamento 3.
select nombre, apellido1, apellido2, nif from empleado where e.id_departamento = 3

db.empleado.find({id_departamento:3},{nombre:1,apellido1:1,apellido2:1,nif:1,_id:0})
//Lista los nombres, apellidos y nif de los empleados que trabajan en los departamentos 2, 4 o 5.
select nombre, apellido1, apellido2, nif from empleado where id_departamento in (2,4,5)

db.empleado.find({id_departamento:{$in:[2,4,5]}},{nombre:1,apellido1:1,apellido2:1,nif:1,_id:0})
