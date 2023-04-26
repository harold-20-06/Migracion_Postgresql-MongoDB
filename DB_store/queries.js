--Consultas sobre una tabla

--Lista el nombre de todos los productos que hay en la tabla producto.
select nombre from producto

db.producto.find({},{nombre:1,_id:0})

--Lista los nombres y los precios de todos los productos de la tabla producto.
select nombre,precio from producto

db.producto.find({},{nombre:1,precio:1,_id:0})

--Lista todas las columnas de la tabla producto.
select * from producto

db.producto.find()

--Lista el nombre de los productos, el precio en euros y el precio en dólares estadounidenses (USD).
select nombre, (precio/6,97), (precio/8) from producto

db.producto.aggregate([
  {
    $project: {
      _id: 0,
      nombre: 1,
      precio: 1,
      precio_dolar: { $divide: [ "$precio", 6.97 ] },
      precio_euros: { $divide: [ "$precio", 8 ] },
    }
  }
])

--Lista el nombre de los productos, el precio en euros y el precio en dólares estadounidenses (USD). Utiliza los siguientes alias para las columnas: nombre de producto, euros, dólares.
select nombre as Nombre, (precio/6,97) as precio_Dolares, (precio/8) as precio_Euros from producto

db.producto.aggregate([
  {
    $project: {
      _id: 0,
      nombre_de_producto: "$nombre",
      precio: 1,
      dolares: { $divide: [ "$precio", 6.97 ] },
      euros: { $divide: [ "$precio", 8 ] },
    }
  }
])

--Lista los nombres y los precios de todos los productos de la tabla producto, convirtiendo los nombres a mayúscula.
select upper(nombre),precio from producto

db.producto.aggregate([
  {
    $project: {
      _id: 0,
      nombre: { $toUpper: "$nombre" },
      precio: 1
    }
  }
])

--Lista los nombres y los precios de todos los productos de la tabla producto, convirtiendo los nombres a minúscula.
select lower (nombre),precio from producto

db.producto.aggregate([{
     $project: {
       nombre: {$toLower:"$nombre"},
       precio:1,
       _id:0
     }
}])

--Lista el nombre de todos los fabricantes en una columna, y en otra columna obtenga en mayúsculas los dos primeros caracteres del nombre del fabricante.
select nombre, upper(substring(nombre,1,2)) from producto

db.producto.aggregate([
  {
    $project: {
      _id: 0,
      nombre: 1,
      dosCaracteres: { $toUpper: { $substr: [ "$nombre", 0, 2 ] } }
    }
  }
])

--Lista los nombres y los precios de todos los productos de la tabla producto, redondeando el valor del precio.
select nombre, ceiling(precio) from producto

db.producto.aggregate([
  {
    $project: {
      _id: 0,
      nombre: 1,
      precio:1,
      precioRedondeado: { $ceil: "$precio" }
    }
  }
])

--Lista los nombres y los precios de todos los productos de la tabla producto, truncando el valor del precio para mostrarlo sin ninguna cifra decimal.
select nombre, trunc(precio) from producto

db.producto.aggregate([
  {
    $project: {
      _id: 0,
      nombre: 1,
      precioTruncado: { $trunc: "$precio" }
    }
  }
])

--Lista el identificador de los fabricantes que tienen productos en la tabla producto.
select id_fabricante from producto

db.producto.find({},{id_fabricante:1,_id:0})

--Lista los nombres de los fabricantes ordenados de forma ascendente.
select nombre from fabricante
order by nombre asc

db.fabricante.find({},{nombre:1,_id:0}).sort({"nombre":1})

--Lista los nombres de los fabricantes ordenados de forma descendente.
select nombre from fabricante
order by nombre desc

db.fabricante.find({},{nombre:1,_id:0}).sort({"nombre":-1})

--Lista los nombres de los productos ordenados en primer lugar por el nombre de forma ascendente y en segundo lugar por el precio de forma descendente.
select nombre, precio from producto
order by nombre asc, precio desc 

db.producto.find({},{nombre:1,precio:1,_id:0}).sort({"nombre":1,"precio":-1})

--Devuelve una lista con las 5 primeras filas de la tabla fabricante.
select * from fabricante limit 5

db.fabricante.find().limit(5)
--Devuelve una lista con 2 filas a partir de la cuarta fila de la tabla fabricante. La cuarta fila también se debe incluir en la respuesta.
select * from fabricante limit 2 offset 3

db.fabricante.find().limit(2).skip(3)
--Lista el nombre y el precio del producto más barato. (Utilice solamente las cláusulas ORDER BY y LIMIT)
select nombre,precio from producto 
order by precio asc limit 1

db.producto.aggregate([ {$sort:{precio:1}},{$project:{nombre:1,precio:1}},{$limit:1}  ])

--Lista el nombre y el precio del producto más caro. (Utilice solamente las cláusulas ORDER BY y LIMIT)
select nombre,precio from producto 
order by precio desc limit 1

db.producto.aggregate([{$project:{_id:0,nombre:1,precio:1}},{$sort:{precio:-1}},{$limit:1}])

--Lista el nombre de todos los productos del fabricante cuyo identificador de fabricante es igual a 2.
select id_fabricante, nombre from producto where id_fabricante = 2

db.producto.find({id_fabricante:2},{id_fabricante:1,nombre:1})

--Lista el nombre de los productos que tienen un precio menor o igual a 120€.
select nombre, precio from producto where precio <= 120

db.producto.find({precio:{$lte:120}},{precio:1,nombre:1})

--Lista el nombre de los productos que tienen un precio mayor o igual a 400€.
select nombre,precio from producto where precio >=400

db.producto.find({precio:{$gte:400}},{precio:1,nombre:1})

--Lista el nombre de los productos que no tienen un precio mayor o igual a 400€.
select nombre,precio from producto where precio < 400

db.producto.find({precio:{$lte:400}},{precio:1,nombre:1})

--Lista todos los productos que tengan un precio entre 80€ y 300€. Sin utilizar el operador BETWEEN.
select * from producto where precio > 80 and precio < 300 

db.producto.find({ precio: { $gt: 80, $lt: 300 } })

--Lista todos los productos que tengan un precio entre 60€ y 200€. Utilizando el operador BETWEEN.
select * from producto where precio between 60 and 300 

db.producto.find({precio:{$gt:60,$lt:300}})
--Lista todos los productos que tengan un precio mayor que 200€ y que el identificador de fabricante sea igual a 6.
select * from producto where precio > 200 and id_fabricante = 6

db.producto.find({precio:{$gt:200},id_fabricante:6})

--Lista todos los productos donde el identificador de fabricante sea 1, 3 o 5. Sin utilizar el operador IN.
select * from producto where id_fabricante = 1 or id_fabricante = 3 or id_fabricante = 5 

db.producto.find({
   "$or":[
      {
         "id_fabricante":1
      },
      {
         "id_fabricante":3
      },
      {
         "id_fabricante":5
      }
   ]
})
--Lista todos los productos donde el identificador de fabricante sea 1, 3 o 5. Utilizando el operador IN.
select * from producto where id_fabricante in (1,3,5)  

db.producto.find({ id_fabricante: { $in: [1, 3, 5] } })

--Lista el nombre y el precio de los productos en céntimos (Habrá que multiplicar
--por 100 el valor del precio). Cree un alias para la columna que contiene el precio que se
--llame céntimos.
select nombre,(precio*100) as centimos from producto

db.producto.aggregate([{$project:{_id:0,nombre:1,centimos:{$multiply:["$precio",100]}}}]) 

--Lista los nombres de los fabricantes cuyo nombre empiece por la letra S.
select nombre from fabricante where nombre like 'S%'

db.fabricante.find({ nombre: { $regex: /^S/i } } , { nombre: 1, _id: 0 })

--Lista los nombres de los fabricantes cuyo nombre termine por la vocal e.
select nombre from fabricante where nombre like '%e'

db.fabricante.find({ nombre: { $regex: /e$/i } } , { nombre: 1, _id: 0 })

--Lista los nombres de los fabricantes cuyo nombre contenga el carácter w.
select nombre from fabricante where nombre like '%w%'

db.fabricante.find({ nombre: { $regex: /w/i } } , { nombre: 1, _id: 0 })

--Lista los nombres de los fabricantes cuyo nombre sea de 4 caracteres.
select nombre from fabricante where length(nombre) = 4 

db.fabricante.find({ $expr: { $eq: [{ $strLenCP: "$nombre" }, 4] } }, { nombre: 1, _id: 0 })

--Devuelve una lista con el nombre de todos los productos que contienen la cadena Portátil en el nombre.
select nombre from producto where nombre like '%Portátil%' 

db.producto.find({ nombre: { $regex: ".*Portátil.*" } } , { nombre: 1, _id: 0 })

--Devuelve una lista con el nombre de todos los productos que contienen la cadena Monitor en el nombre y tienen un precio inferior a 215 €.
select nombre,precio from producto where nombre like '%Monitor%' and precio <215 

db.producto.find(
  { 
    nombre: { $regex: ".*Monitor.*" },
    precio: { $lt: 215 }
  },
  { nombre: 1, precio: 1, _id: 0 }
)

--Lista el nombre y el precio de todos los productos que tengan un precio mayor o igual a 180€. 
--Ordene el resultado en primer lugar por el precio (en orden descendente) y en segundo lugar por el
--nombre (en orden ascendente).
select nombre, precio from producto where precio >=180 order by precio desc, nombre asc

db.producto.find({ precio: { $gte: 180 } }, { nombre: 1, precio: 1, _id: 0 }).sort({ precio: -1, nombre: 1 })

--Fin Consultas sobre una tabla
