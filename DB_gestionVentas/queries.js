//1. Devuelve un listado con todos los pedidos que se han realizado. Los pedidos deben estar ordenados por la fecha de realización, mostrando en primer lugar los pedidos más recientes.
select * from pedido order by fecha

db.pedido.find().sort({fecha:1})
//2. Devuelve todos los datos de los dos pedidos de mayor valor.
select * from pedido order by total desc limit 2

db.pedido.find().sort({total:-1}).limit(2)
//3. Devuelve un listado con los identificadores de los clientes que han realizado algún pedido. Tenga en cuenta que no debe mostrar identificadores que estén repetidos.
select distinct id_cliente from pedido

db.pedido.distinct("id_cliente")
//4. Devuelve un listado de todos los pedidos que se realizaron durante el año 2017, cuya cantidad total sea superior a 500€.
select * from pedido where EXTRACT(YEAR FROM fecha) = '2017' and total > 500

db.pedido.find({})     ([{ $project:{year:{$year:"$fecha"}} },{$eq[{$year:"$fecha"},2017]}]) 
//5. Devuelve un listado con el nombre y los apellidos de los comerciales que tienen una comisión entre 0.05 y 0.11.
select * from comercial where comisión between 0.05 and 0.11

db.comercial.find({comision:{$gte:0.05,$lte:0.11}})

//6. Devuelve el valor de la comisión de mayor valor que existe en la tabla comercial.
select max(comisión) from comercial

db.comercial.aggregate([ {$group:{_id:null,maximo:{$max:"$comision"}}} ])

//7. Devuelve el identificador, nombre y primer apellido de aquellos clientes cuyo segundo apellido no es NULL. El listado deberá estar ordenado alfabéticamente por apellidos y nombre.
select id, nombre, apellido1 from cliente where apellido2 is not null order by apellido1, apellido2, nombre

db.cliente.find({apellido2:{$ne:null}},{id:1,nombre:1,apellido1:1}).sort({apellido1:1,apellido2:1,nombre:1})

//8. Devuelve un listado de los nombres de los clientes que empiezan por A y terminan por n y también los nombres que empiezan por P. El listado deberá estar ordenado alfabéticamente.
select nombre from cliente where nombre like 'A%n' or nombre like 'P%' order by nombre asc

db.cliente.find({$or:[{nombre: /^A.*n$/i}, {nombre: /^P/i}]}, {nombre: 1})

//9. Devuelve un listado de los nombres de los clientes que no empiezan por A. El listado deberá estar ordenado alfabéticamente.
select nombre from cliente where nombre not like 'A%' order by nombre asc

db.cliente.find({nombre: {$not: /^A/i}}, {nombre: 1, _id: 0}).sort({nombre: 1})
//10. Devuelve un listado con los nombres de los comerciales que terminan en o. Tenga en cuenta que se deberán eliminar los nombres repetidos.
select distinct nombre from comercial where nombre like '%o'

db.comercial.aggregate([
  {$match: {nombre: /o$/i}},
  {$group: {_id: "$nombre"}},
  {$project: {nombre: "$_id", _id: 0}}
])

//Consultas multitabla (Composición interna)

//Resuelva todas las consultas utilizando la sintaxis de SQL1 y SQL2.

//1. Devuelve un listado con el identificador, nombre y los apellidos de todos los clientes que han realizado algún pedido. El listado debe estar ordenado alfabéticamente y se deben eliminar los elementos repetidos.
select distinct c.id,c.nombre,c.apellido1, c.apellido2 from pedido p inner join cliente c on p.id_cliente = c.id 
order by c.id 

db.pedido.aggregate([
  { $lookup:{
    from: "cliente",
    localField:"id_cliente",
    foreignField:"_id",
    as : "cliente" 
  }},
  { $unwind: "$cliente"},
  { $group:{
     _id:{
      "_id":"$cliente._id",
      "nombre":"$cliente.nombre",
      "apellido1":"$cliente.apellido1",
      "apellido2":"$cliente.apellido2"
     },
  }},
  {
    $sort:{
    _id:1
    }
  }
])

//2. Devuelve un listado que muestre todos los pedidos que ha realizado cada cliente. El resultado debe mostrar todos los datos de los pedidos y del cliente. El listado debe mostrar los datos de los clientes ordenados alfabéticamente.
select c.*,p.* from pedido p inner join cliente c on p.id_cliente = c.id order by c.id, p.id;

db.pedido.aggregate([
  { $lookup:{
    from: "cliente",
    localField:"id_cliente",
    foreignField:"_id",
    as : "cliente" 
  }},
  { $unwind: "$cliente"},
  {
    $project: {
      total:1,
      fecha:1,
      id_comercial:1,
      "cliente._id": 1,
      "cliente.nombre": 1,
      "cliente.apellido1": 1,
      "cliente.apellido2": 1,
      "cliente.ciudad": 1,
      "cliente.categoría": 1
       
    }
  },
  {$sort:{
    "cliente._id":1,
    id:1
  }}
])

//3. Devuelve un listado que muestre todos los pedidos en los que ha participado un comercial. El resultado debe mostrar todos los datos de los pedidos y de los comerciales. El listado debe mostrar los datos de los comerciales ordenados alfabéticamente.

select * from pedido p inner join comercial c on p.id_comercial = c.id order by c.id; 

db.pedido.aggregate([
  { $lookup: {
    from: "comercial",
    localField: "id_comercial",
    foreignField: "_id",
    as: "comercial"
  }},
  { $unwind: "$comercial" },
  { $match: {
    // Agrega las condiciones de filtrado aquí
  }},
  { $project: {
    _id: 0,
    id:1,
    total:1,
    fecha:1,
    id_cliente:1,
    "comercial._id":1,
    "comercial.nombre": 1,
    "comercial.apellido1": 1,
    "comercial.apellido2": 1,
    "comercial.comision": 1
  }},
  { $sort: {
    "comercial.id":1  
  }}
])

//4. Devuelve un listado que muestre todos los clientes, con todos los pedidos que han realizado y con los datos de los comerciales asociados a cada pedido.
select * from cliente c inner join pedido p on c.id = p.id_cliente inner join comercial co on p.id_comercial = co.id ;      

db.cliente.aggregate([
  {
    $lookup: {
      from: "pedido",
      localField: "_id",
      foreignField: "id_cliente",
      as: "pedido"
    }
  },
  { $unwind: "$pedido" },
   {
     $lookup: {
       from: "comercial",
       localField: "pedido.id_comercial",
       foreignField: "_id",
       as: "comercial"
     }
   },
   { $unwind: "$comercial" },
  {
    $project: {
      _id: 1,
      nombre: 1,
      apellido1: 1,
      apellido2: 1,
      ciudad:1,
      categoría:1,
      "pedido.id": 1,
      "pedido.total":1,
      "pedido.fecha": 1,
      "comercial._id": 1,
      "comercial.nombre": 1,
      "comercial.apellido1": 1,
      "comercial.apellido2": 1,
      "comercial.comision":1
    }
  }
])

//5. Devuelve un listado de todos los clientes que realizaron un pedido durante el año 2017, cuya cantidad esté entre 300 € y 1000 €.

select * from cliente c inner join pedido p on c.id = p.id_cliente 
where extract(year from fecha) = 2017
and p.total between 300 and 1000  

db.cliente.aggregate([
  { $lookup: {
    from: "pedido",
    localField: "_id",
    foreignField: "id_cliente",
    as: "pedido"
  }},
  { $unwind: "$pedido" },
  { $match: { 
    "pedidos.fecha": {
        $gte: ISODate("2017-01-01T00:00:00Z"),
        $lt: ISODate("2018-01-01T00:00:00Z")
      },
      "pedidos.total": { $gte: 300, $lte: 1000 }
   }},
  { $project: {
      _id: 1,
      nombre: 1,
      apellido1: 1,
      apellido2: 1,
      ciudad:1,
      categoría:1,
      "pedido.id": 1,
      "pedido.total":1,
      "pedido.fecha": 1
  }}
])

//6. Devuelve el nombre y los apellidos de todos los comerciales que ha participado en algún pedido realizado por María Santana Moreno.
select distinct co.nombre, co.apellido1, co.apellido2  from cliente c inner join pedido p on c.id = p.id_cliente 
inner join comercial co on p.id_comercial = co.id       
where c.nombre = 'María' and c.apellido1 = 'Santana' and c.apellido2 = 'Moreno'

db.cliente.aggregate([
  { 
    $lookup:{
    from: "pedido",
    localField: "_id",
    foreignField:"id_cliente",
    as: "pedidos"  
    }
  },
  {
    $unwind: "$pedidos"
  },
  {
    $lookup:{
    from: "comercial",
    localField: "pedidos.id_comercial",
    foreignField:"_id",
    as: "comercial"   
    }
  },
   {
    $unwind: "$comercial" 
  },
  {
    $match:{
    nombre:"María",
    apellido1:"Santana",
    apellido2:"Moreno"}
  },
  {
    $group:{
      _id:{
        comercial.nombre: "$nombre",
        comercial.apellido1: "$apellido1",
        comercial.apellido2: "$apellido2"
      }      
    }
  }
])

//7. Devuelve el nombre de todos los clientes que han realizado algún pedido con el comercial Daniel Sáez Vega.
select distinct c.nombre,c.apellido1, c.apellido2 from cliente c inner join pedido p on c.id = p.id_cliente 
                        inner join comercial co on p.id_comercial = co.id       
where co.nombre = 'Daniel' and co.apellido1 = 'Sáez' and co.apellido2 = 'Vega'

db.cliente.aggregate([
  { 
    $lookup:{
    from: "pedido",
    localField: "_id",
    foreignField:"id_cliente",
    as: "pedidos"  
    }
  },
  {
    $unwind: "$pedidos" 
  },
  {
    $lookup:{
    from: "comercial",
    localField: "pedidos.id_comercial",
    foreignField:"_id",
    as: "comercial"   
    }
  },
   {
    $unwind: "$comercial" 
  },
  {
    $match:{
    "comercial.nombre":"Daniel",
    "comercial.apellido1":"Sáez",
    "comrcial.apellido2":"Vega"
    }
  },
  {
    $group:{
      _id:{
        nombre: "$nombre",
        apellido1: "$apellido1",
        apellido2: "$apellido2"
      }      
    }
  }
])

//Consultas resumen

//1. Calcula la cantidad total que suman todos los pedidos que aparecen en la tabla pedido.
select sum(total) from pedido

db.pedido.aggregate([
{
  $group:{ 
  _id:null,
  total:{$sum:"$total"} 
  }
}
])

//2. Calcula la cantidad media de todos los pedidos que aparecen en la tabla pedido.
select avg(total) from pedido

db.pedido.aggregate([
{
  $group:{ 
  _id:null,
  total:{$avg:"$total"} 
  }
}
])

//3. Calcula el número total de comerciales distintos que aparecen en la tabla pedido.
select count(distinct id_comercial) from pedido

db.pedido.aggregate([
  {
    $group: {
      _id: "$id_comercial"
    }
  },
  {
    $group: {
      _id: null,
      count: { $sum: 1 }
    }
  }
])
//4. Calcula el número total de clientes que aparecen en la tabla cliente.
select count (id) from cliente

db.cliente.countDocuments;

db.cliente.aggregate([
{
  $group:{
  _id:"$id",
  cantidad:{$sum:1}
  }
}
])
//5. Calcula cuál es la mayor cantidad que aparece en la tabla pedido.
select max(total) from pedido

db.pedido.aggregate([
{
  $group:{
  _id:null,
  totalMaximo:{$max:"$total"} 
  }

}
])

//6. Calcula cuál es la menor cantidad que aparece en la tabla pedido.
select min(total) from pedido

db.pedido.aggregate([
{
  $group:{
  _id:null,
  totalMinimo:{$min:"$total"} 
  }

}
])

//7. Calcula cuál es el valor máximo de categoría para cada una de las ciudades que aparece en la tabla cliente.
select ciudad, max(categoría) from cliente
group by ciudad
order by ciudad


db.cliente.aggregate([
{
  $group:{
  _id:"$ciudad",
  categoriaMaximo:{$max:"$categoría"} 
  }
}
])

//8. Calcula cuál es el máximo valor de los pedidos realizados durante el mismo día para cada uno de los clientes. 
//Es decir, el mismo cliente puede haber realizado varios pedidos de diferentes cantidades el mismo día. 
//Se pide que se calcule cuál es el pedido de máximo valor para cada uno de los días en los que un cliente ha realizado un pedido. 
//Muestra el identificador del cliente, nombre, apellidos, la fecha y el valor de la cantidad.
select c.id, c. nombre, c.apellido1, c.apellido2, p.fecha, max(p.total) from cliente c 
inner join pedido p on p.id_cliente = c.id
group by c.id,fecha
order by c.id, fecha 

db.cliente.aggregate([
  {
    $lookup: {
      from: "pedido",
      localField: "_id",
      foreignField: "id_cliente",
      as: "pedido"
    }
  },
  { $unwind: "$pedido" },
  {
    $group: {
      _id:{
        id:"$_id",
        fecha:"$pedido.fecha"
    },
      nombre: {$first:"$nombre"},      
      apellido1: { $first: "$apellido1" },
      apellido2: { $first: "$apellido2" },
      maxTotal: { $max: "$pedido.total" }
    }
  },
  { 
    $sort: { 
      _id: 1,
      "pedido.fecha":1 
    } 
  },
]);

//9. Calcula cuál es el máximo valor de los pedidos realizados durante el mismo día para cada uno de los clientes, 
//teniendo en cuenta que sólo queremos mostrar aquellos pedidos que superen la cantidad de 2000 €.
select c.id, c. nombre, c.apellido1, c.apellido2, p.fecha, max(p.total) from cliente c 
inner join pedido p on p.id_cliente = c.id
where p.total > 2000
group by c.id,fecha
order by c.id, fecha 

db.cliente.aggregate([
  {
    $lookup: {
      from: "pedido",
      localField: "_id",
      foreignField: "id_cliente",
      as: "pedido"
    }
  },
  { 
    $unwind: "$pedido" 
  },
  {
    $match:{
      "pedido.total":{ $gt:2000 }
    }
  },
  {
    $group: {
      _id:{
        id:"$_id",
        fecha:"$pedido.fecha"
          },
      nombre: {$first:"$nombre"},      
      apellido1: { $first: "$apellido1" },
      apellido2: { $first: "$apellido2" },
      maxTotal: { $max: "$pedido.total" }
    }
  },
  { 
    $sort: { 
      _id: 1,
      "pedido.fecha":1 
    } 
  },
]);

//10. Calcula el máximo valor de los pedidos realizados para cada uno de los comerciales durante la fecha 2016-08-17. 
//Muestra el identificador del comercial, nombre, apellidos y total.
select co.id, co.nombre, co.apellido1,co.apellido2, max(p.total), p.fecha  from comercial co inner join pedido p on co.id = p.id_comercial
where date(p.fecha) = '2016-08-17'
group by co.id,fecha
order by p.fecha

db.cliente.aggregate([
  {
    $lookup: {
      from: "pedido",
      localField: "_id",
      foreignField: "id_cliente",
      as: "pedido"
    }
  },
  { 
    $unwind: "$pedido" 
  },
  {
    $match:{
      "pedido.total":{ $gt:2000 }
    }
  },
  {
    $group: {
      _id:{
        id:"$_id",
        fecha:"$pedido.fecha"
          },
      nombre: {$first:"$nombre"},      
      apellido1: { $first: "$apellido1" },
      apellido2: { $first: "$apellido2" },
      maxTotal: { $max: "$pedido.total" }
    }
  },
  { 
    $sort: { 
      _id: 1,
      "pedido.fecha":1 
    } 
  },
]);

//11. Devuelve un listado con el identificador de cliente, nombre y apellidos y 
//el número total de pedidos que ha realizado cada uno de clientes. 
//Tenga en cuenta que pueden existir clientes que no han realizado ningún pedido. 
//Estos clientes también deben aparecer en el listado indicando que el número de pedidos realizados es 0.
select c.id, c. nombre, c.apellido1, c.apellido2, count(p.id_cliente) from cliente c left join pedido p on p.id_cliente = c.id
group by c.id
order by c.id 
//12. Devuelve un listado con el identificador de cliente, nombre y apellidos y el número total de pedidos que 
//ha realizado cada uno de clientes durante el año 2017.
select c.id, c. nombre, c.apellido1, c.apellido2, count(p.id_cliente) from cliente c inner join pedido p on p.id_cliente = c.id
where extract(year from fecha) = 2017
group by c.id
order by c.id 
//13. Devuelve un listado que muestre el identificador de cliente, nombre, primer apellido y 
//el valor de la máxima cantidad del pedido realizado por cada uno de los clientes. 
//El resultado debe mostrar aquellos clientes que no han realizado ningún pedido indicando que 
//la máxima cantidad de sus pedidos realizados es 0. Puede hacer uso de la función IFNULL.
select c.id, c. nombre, c.apellido1, c.apellido2, max(COALESCE(p.total,0))  from cliente c left join pedido p on p.id_cliente = c.id
group by c.id
order by c.id
//14. Devuelve cuál ha sido el pedido de máximo valor que se ha realizado cada año.
select max(total), extract (year from fecha) from pedido
group by extract (year from fecha)
order by extract (year from fecha) 
//15. Devuelve el número total de pedidos que se han realizado cada año.
select count(id), extract (year from fecha) from pedido
group by extract (year from fecha)
//Subconsultas
//Con operadores básicos de comparación

//1. Devuelve un listado con todos los pedidos que ha realizado Adela Salas Díaz. (Sin utilizar INNER JOIN).
Select * from pedido 
where id_cliente = (select id from cliente where nombre = 'Adela' and apellido1 ='Salas' and apellido2 = 'Díaz');
//2. Devuelve el número de pedidos en los que ha participado el comercial Daniel Sáez Vega. (Sin utilizar INNER JOIN)
select count(*) from pedido
where id_comercial = (select id from comercial where nombre = 'Daniel' and apellido1 ='Sáez' and apellido2 = 'Vega');
//3. Devuelve los datos del cliente que realizó el pedido más caro en el año 2019. (Sin utilizar INNER JOIN)
select * from cliente
where id = (select id_cliente from pedido
where total = (select max(total) from pedido where extract(year from fecha) = 2019))
//4. Devuelve la fecha y la cantidad del pedido de menor valor realizado por el cliente Pepe Ruiz Santana.
Select fecha, total from cliente inner join pedido on cliente.id = pedido.id_cliente 
where cliente.nombre = 'Pepe' and apellido1 = 'Ruiz' and apellido2 = 'Santana' and pedido.total = (select MIN(total) from cliente inner join pedido on cliente.id = pedido.id_cliente 
where cliente.nombre = 'Pepe' and apellido1= 'Ruiz' and apellido2 = 'Santana');
//5. Devuelve un listado con los datos de los clientes y los pedidos, de todos los clientes que han 
//realizado un pedido durante el año 2017 con un valor mayor o igual al valor medio de los pedidos realizados durante ese mismo año.
Select * from cliente inner join pedido on cliente.id = pedido.id_cliente 
where year(pedido.fecha) =2017 and pedido.total >= (select avg(total) from pedido where year(fecha)=2017);
