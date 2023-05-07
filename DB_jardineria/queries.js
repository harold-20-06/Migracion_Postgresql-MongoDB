//Consultas sobre una tabla

//1. Devuelve un listado con el código de oficina y la ciudad donde hay oficinas.

select codigo_oficina, ciudad from oficina

db.oficina.find({},{codigo_oficina:1,-id:0})

//2. Devuelve un listado con la ciudad y el teléfono de las oficinas de España.

select ciudad, telefono from oficina where pais = 'España'

db.oficina.find({pais:"España"},{ciudad:1,telefono:1,_id:0})
//3. Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe tiene un código de jefe igual a 7.

select nombre,apellido1, apellido2,email from empleado where codigo_jefe = 7

db.empleado.find({codigo_jefe:7},{nombre:1,apellido1:1,apellido2:1,email:1,_id:0})

//4. Devuelve el nombre del puesto, nombre, apellidos y email del jefe de la empresa.

select puesto,nombre,apellido1,apellido2,email from empleado where codigo_jefe is null

db.empleado.find({codigo_jefe:{$eq:null}},{puesto:1,nombre:1,apellido1:1,apellido2:1,email:1,_id:0})

//5. Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados que no sean representantes de ventas.

select nombre,apellido1, apellido2,puesto from empleado where puesto != 'Representante Ventas'

db.empleado.find({puesto:{$ne:"REpresentante Ventas"}},{nombre:1,apellido1:1,apellido2:1,email:1,_id:0})

//6. Devuelve un listado con el nombre de los todos los clientes españoles.

select * from cliente where pais = 'Spain'

db.cliente.find({pais:"Spain"},{});

//7. Devuelve un listado con los distintos estados por los que puede pasar un pedido.

select distinct estado from pedido 

db.pedido.distinct(estado)

//8. Devuelve un listado con el código de cliente de aquellos clientes que realizaron algún pago en 2008. 
//Tenga en cuenta que deberá eliminar aquellos códigos de cliente que aparezcan repetidos. 
//Resuelva la consulta:
//Utilizando la función YEAR.

select distinct codigo_cliente from pago where extract(year from fecha_pago) = 2008

db.pago.distinct("codigo_cliente")
//9. Devuelve un listado con el código de pedido, código de cliente, 
//fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo.
select codigo_pedido,codigo_cliente,fecha_esperada,fecha_entrega from pedido
where fecha_entrega is not null
and fecha_entrega > fecha_esperada
//10. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de 
//los pedidos cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada.
//Utilizando la función ADDDATE de MySQL en postgreSQL interval 'x day'.
select codigo_pedido,codigo_cliente,fecha_esperada,fecha_entrega from pedido
where fecha_entrega is not null
and fecha_entrega = fecha_esperada - INTERVAL '2 day'
//Utilizando la función DATEDIFF de MySQL, en postgresql date_part.
select codigo_pedido,codigo_cliente,fecha_esperada,fecha_entrega from pedido
where fecha_entrega is not null
and DATE_PART('day', fecha_esperada::timestamp - fecha_entrega::timestamp) = 2
//11. Devuelve un listado de todos los pedidos que fueron rechazados en 2009.
select * from pedido where estado = 'Rechazado' and extract(year from fecha_pedido) = 2009
//12. Devuelve un listado de todos los pedidos que han sido entregados en el mes de enero de cualquier año.
select * from pedido where estado = 'Entregado' and extract (month from fecha_pedido) = 01

//13. Devuelve un listado con todos los pagos que se realizaron en el año 2008 mediante Paypal. 
//Ordene el resultado de mayor a menor.

select * from pago where extract(year from fecha_pago) = 2008 and forma_pago = 'PayPal' order by total desc;

db.pago.find({
  $expr: {
    $eq: [{ $year: "$fecha_pago" }, 2008]
  },
  forma_pago: "PayPal"
}).sort({ total: -1 })

//14. Devuelve un listado con todas las formas de pago que aparecen en la tabla pago. Tenga en cuenta que no deben aparecer formas de pago repetidas.

select distinct forma_pago from pago  

db.pago.distinct('forma_pago');
//15. Devuelve un listado con todos los productos que pertenecen a la gama Ornamentales y que tienen más de 
//100 unidades en stock. El listado deberá estar ordenado por su precio de venta, mostrando en primer lugar 
//los de mayor precio.

select * from producto where gama = 'Ornamentales' and cantidad_en_stock >100
order by precio_venta desc

db.producto.find({gama:"Ornamentales",cantidad_en_stock:{$gt:100}},{})
//16. Devuelve un listado con todos los clientes que sean de la ciudad de Madrid y 
//cuyo representante de ventas tenga el código de empleado 11 o 30.

select * from cliente where ciudad = 'Madrid' and codigo_empleado_rep_ventas in (11,30) 

db.cliente.find({ciudad:"Madrid",codigo_empleado_rep_ventas:{$in:[11,30]}},{})

//======================================== end ============================================