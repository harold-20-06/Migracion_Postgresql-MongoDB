//Consultas sobre una tabla

//Lista el nombre de todos los productos que hay en la tabla producto.
select nombre from producto

db.producto.find({},{nombre:1,_id:0})

//Lista los nombres y los precios de todos los productos de la tabla producto.
select nombre,precio from producto

db.producto.find({},{nombre:1,precio:1,_id:0})

//Lista todas las columnas de la tabla producto.
select * from producto

db.producto.find()

//Lista el nombre de los productos, el precio en euros y el precio en dólares estadounidenses (USD).
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

//Lista el nombre de los productos, el precio en euros y el precio en dólares estadounidenses (USD). Utiliza los siguientes alias para las columnas: nombre de producto, euros, dólares.
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

//Lista los nombres y los precios de todos los productos de la tabla producto, convirtiendo los nombres a mayúscula.
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

//Lista los nombres y los precios de todos los productos de la tabla producto, convirtiendo los nombres a minúscula.
select lower (nombre),precio from producto

db.producto.aggregate([{
     $project: {
       nombre: {$toLower:"$nombre"},
       precio:1,
       _id:0
     }
}])

//Lista el nombre de todos los fabricantes en una columna, y en otra columna obtenga en mayúsculas los dos primeros caracteres del nombre del fabricante.
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

//Lista los nombres y los precios de todos los productos de la tabla producto, redondeando el valor del precio.
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

//Lista los nombres y los precios de todos los productos de la tabla producto, truncando el valor del precio para mostrarlo sin ninguna cifra decimal.
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

//Lista el identificador de los fabricantes que tienen productos en la tabla producto.
select id_fabricante from producto

db.producto.find({},{id_fabricante:1,_id:0})

//Lista los nombres de los fabricantes ordenados de forma ascendente.
select nombre from fabricante
order by nombre asc

db.fabricante.find({},{nombre:1,_id:0}).sort({"nombre":1})

//Lista los nombres de los fabricantes ordenados de forma descendente.
select nombre from fabricante
order by nombre desc

db.fabricante.find({},{nombre:1,_id:0}).sort({"nombre":-1})

//Lista los nombres de los productos ordenados en primer lugar por el nombre de forma ascendente y en segundo lugar por el precio de forma descendente.
select nombre, precio from producto
order by nombre asc, precio desc 

db.producto.find({},{nombre:1,precio:1,_id:0}).sort({"nombre":1,"precio":-1})

//Devuelve una lista con las 5 primeras filas de la tabla fabricante.
select * from fabricante limit 5

db.fabricante.find().limit(5)
//Devuelve una lista con 2 filas a partir de la cuarta fila de la tabla fabricante. La cuarta fila también se debe incluir en la respuesta.
select * from fabricante limit 2 offset 3

db.fabricante.find().limit(2).skip(3)
//Lista el nombre y el precio del producto más barato. (Utilice solamente las cláusulas ORDER BY y LIMIT)
select nombre,precio from producto 
order by precio asc limit 1

db.producto.aggregate([ {$sort:{precio:1}},{$project:{nombre:1,precio:1}},{$limit:1}  ])

//Lista el nombre y el precio del producto más caro. (Utilice solamente las cláusulas ORDER BY y LIMIT)
select nombre,precio from producto 
order by precio desc limit 1

db.producto.aggregate([{$project:{_id:0,nombre:1,precio:1}},{$sort:{precio:-1}},{$limit:1}])

//Lista el nombre de todos los productos del fabricante cuyo identificador de fabricante es igual a 2.
select id_fabricante, nombre from producto where id_fabricante = 2

db.producto.find({id_fabricante:2},{id_fabricante:1,nombre:1})

//Lista el nombre de los productos que tienen un precio menor o igual a 120€.
select nombre, precio from producto where precio <= 120

db.producto.find({precio:{$lte:120}},{precio:1,nombre:1})

//Lista el nombre de los productos que tienen un precio mayor o igual a 400€.
select nombre,precio from producto where precio >=400

db.producto.find({precio:{$gte:400}},{precio:1,nombre:1})

//Lista el nombre de los productos que no tienen un precio mayor o igual a 400€.
select nombre,precio from producto where precio < 400

db.producto.find({precio:{$lte:400}},{precio:1,nombre:1})

//Lista todos los productos que tengan un precio entre 80€ y 300€. Sin utilizar el operador BETWEEN.
select * from producto where precio > 80 and precio < 300 

db.producto.find({ precio: { $gt: 80, $lt: 300 } })

//Lista todos los productos que tengan un precio entre 60€ y 200€. Utilizando el operador BETWEEN.
select * from producto where precio between 60 and 300 

db.producto.find({precio:{$gt:60,$lt:300}})
//Lista todos los productos que tengan un precio mayor que 200€ y que el identificador de fabricante sea igual a 6.
select * from producto where precio > 200 and id_fabricante = 6

db.producto.find({precio:{$gt:200},id_fabricante:6})

//Lista todos los productos donde el identificador de fabricante sea 1, 3 o 5. Sin utilizar el operador IN.
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
//Lista todos los productos donde el identificador de fabricante sea 1, 3 o 5. Utilizando el operador IN.
select * from producto where id_fabricante in (1,3,5)  

db.producto.find({ id_fabricante: { $in: [1, 3, 5] } })

//Lista el nombre y el precio de los productos en céntimos (Habrá que multiplicar
//por 100 el valor del precio). Cree un alias para la columna que contiene el precio que se
//llame céntimos.
select nombre,(precio*100) as centimos from producto

db.producto.aggregate([{$project:{_id:0,nombre:1,centimos:{$multiply:["$precio",100]}}}]) 

//Lista los nombres de los fabricantes cuyo nombre empiece por la letra S.
select nombre from fabricante where nombre like 'S%'

db.fabricante.find({ nombre: { $regex: /^S/i } } , { nombre: 1, _id: 0 })

//Lista los nombres de los fabricantes cuyo nombre termine por la vocal e.
select nombre from fabricante where nombre like '%e'

db.fabricante.find({ nombre: { $regex: /e$/i } } , { nombre: 1, _id: 0 })

//Lista los nombres de los fabricantes cuyo nombre contenga el carácter w.
select nombre from fabricante where nombre like '%w%'

db.fabricante.find({ nombre: { $regex: /w/i } } , { nombre: 1, _id: 0 })

//Lista los nombres de los fabricantes cuyo nombre sea de 4 caracteres.
select nombre from fabricante where length(nombre) = 4 

db.fabricante.find({ $expr: { $eq: [{ $strLenCP: "$nombre" }, 4] } }, { nombre: 1, _id: 0 })

//Devuelve una lista con el nombre de todos los productos que contienen la cadena Portátil en el nombre.
select nombre from producto where nombre like '%Portátil%' 

db.producto.find({ nombre: { $regex: ".*Portátil.*" } } , { nombre: 1, _id: 0 })

//Devuelve una lista con el nombre de todos los productos que contienen la cadena Monitor en el nombre y tienen un precio inferior a 215 €.
select nombre,precio from producto where nombre like '%Monitor%' and precio <215 

db.producto.find(
  { 
    nombre: { $regex: ".*Monitor.*" },
    precio: { $lt: 215 }
  },
  { nombre: 1, precio: 1, _id: 0 }
)

//Lista el nombre y el precio de todos los productos que tengan un precio mayor o igual a 180€. 
//Ordene el resultado en primer lugar por el precio (en orden descendente) y en segundo lugar por el
//nombre (en orden ascendente).
select nombre, precio from producto where precio >=180 order by precio desc, nombre asc

db.producto.find({ precio: { $gte: 180 } }, { nombre: 1, precio: 1, _id: 0 }).sort({ precio: -1, nombre: 1 })

//Fin Consultas sobre una tabla

//Consultas multitabla (Composición interna)
//Utilizando sintaxis SQL1 y SQL2.


//Devuelve una lista con el nombre del producto, precio y nombre de fabricante de todos los productos de la base de datos.
select p.nombre, p.precio, f.nombre from producto p, fabricante f where p.id_fabricante = f.id;

select p.nombre, p.precio, f.nombre from producto p inner join fabricante f on p.id_fabricante = f.id;

db.producto.aggregate([
  {
    $lookup: {
      from: "fabricante",
      localField: "id_fabricante",
      foreignField: "_id",
      as: "fabricante"
    }
  },
  {
    $unwind: "$fabricante"
  },
  {
    $project: {
      nombre: "$nombre",
      precio: "$precio",
      "fabricante.nombre": 1
    }
  }
])

  //Devuelve una lista con el nombre del producto, precio y nombre de fabricante de todos los productos de la base de datos. 
//Ordene el resultado por el nombre del fabricante, por orden alfabético.
select p.nombre as nombre_producto, p.precio, f.nombre as nombre_fabricante from producto p,fabricante f 
where p.id_fabricante = f.id order by f.nombre asc;

select p.nombre as nombre_producto, p.precio, f.nombre as nombre_fabricante from producto p inner join fabricante f 
on p.id_fabricante = f.id order by f.nombre asc


db.producto.aggregate([
{
$lookup:{
   from: "fabricante",
   localField:"id_fabricante",
   foreignField:"_id", 
   as: "fabricante"
  }
},
{
$unwind:  "$fabricante"
},
{
$project:{
    _id:0,
    nombre_fabricante:"$fabricante.nombre",
    precio:"$precio",
    nombre_producto:"$nombre"
  }
},
{
$sort:{"fabricante.nombre":1}
}
])

//Devuelve una lista con el identificador del producto, nombre del producto, identificador del 
//fabricante y nombre del fabricante, de todos los productos de la base de datos.
select p.id, p.nombre, f.id, f.nombre from producto p, fabricante f where f.id = p.id_fabricante

select p.id, p.nombre, f.id, f.nombre from producto p inner join fabricante f on f.id = p.id_fabricante

db.producto.aggregate([
{
$lookup:{
   from: "fabricante",
   localField:"id_fabricante",
   foreignField:"_id", 
   as: "fabricante"
  }
},
{
$unwind: "$fabricante"
},
{
$project:{
    nombre:1,
    "fabricante._id":1,
    "fabricante.nombre":1    
  }
}
])

//Devuelve el nombre del producto, su precio y el nombre de su fabricante, del producto más barato.
select p.nombre, p.precio, f.nombre from producto p, fabricante f where p.id_fabricante = f.id
and p.precio = (select min(precio) from producto)

select p.nombre, p.precio, f.nombre from producto p inner join fabricante f on p.id_fabricante = f.id
and p.precio = (select min(precio) from producto)   

db.producto.aggregate([
{
$lookup:{
   from: "fabricante",
   localField:"id_fabricante",
   foreignField:"_id", 
   as: "fabricante"
  }
},
{
$unwind: "$fabricante"
},
{
$project:{
    nombre:1,
    "fabricante._id":1,
    "fabricante.nombre":1    
  }
}
])

//Devuelve el nombre del producto, su precio y el nombre de su fabricante, del producto más caro.
select p.nombre, p.precio, f.nombre from producto p, fabricante f where p.id_fabricante = f.id
and p.precio = (select max(precio) from producto)

select p.nombre, p.precio, f.nombre from producto p inner join fabricante f on p.id_fabricante = f.id 
and p.precio = (select max(precio) from producto);   


var maxPrecio = db.producto.aggregate([
  {
    $group: {
      _id: null,
      maxPrecio: { $max: "$precio" }
    }
  }
]).toArray()[0].maxPrecio;

db.producto.aggregate([
  {
    $match: { precio: maxPrecio }
  },
  {
    $lookup: {
      from: "fabricante",
      localField: "id_fabricante",
      foreignField: "_id",
      as: "fabricante"
    }
  },
  {
    $unwind: "$fabricante"
  },
  {
    $project: {
      nombre: 1,
      precio: 1,
      "fabricante.nombre": 1
    }
  }
])


//Devuelve una lista de todos los productos del fabricante Lenovo.
select p.nombre,p.precio, f.nombre from producto p, fabricante f where p.id_fabricante = f.id
and f.nombre = 'Lenovo'

select p.nombre,p.precio, f.nombre from producto p inner join fabricante f on p.id_fabricante = f.id
and f.nombre = 'Lenovo'

db.producto.aggregate([
   {$lookup:{ 
              from:"fabricante",
              localField:"id_fabricante",
              foreignField:"_id",
              as: "fabricante"

            }
    },
    { $unwind:"$fabricante" },
    { $match:{ "fabricante.nombre":"Lenovo"}
    },
   
    { $project:{
               nombre:1,
               precio:1,
               "fabricante.nombre":1
              }
    }

  ])


//Devuelve una lista de todos los productos del fabricante Crucial que tengan un precio mayor que 200€.
select * from producto p, fabricante f where p.id_fabricante = f.id and f.nombre ='Crucial' and p.precio >200

select * from producto p inner join fabricante f on p.id_fabricante = f.id 
and f.nombre ='Crucial' and p.precio >200

db.producto.aggregate([
   {$lookup:{ 
              from:"fabricante",
              localField:"id_fabricante",
              foreignField:"_id",
              as: "fabricante"

            }
    },
    { $unwind:"$fabricante" },
    { $match:{ "fabricante.nombre":"Crucial", precio: {$gt:200}}
    },
   
    { $project:{
               nombre:1,
               precio:1,
               "fabricante.nombre":1
              }
    }

  ])

//Devuelve un listado con todos los productos de los fabricantes Asus, Hewlett-Packard y Seagate. Sin utilizar el operador IN.
select * from producto p, fabricante f where p.id_fabricante = f.id and (f.nombre ='Asus' or f.nombre ='Hewlett-Packard' or f.nombre ='Seagate')

select * from producto p inner join fabricante f on p.id_fabricante = f.id 
and (f.nombre ='Asus' or f.nombre ='Hewlett-Packard' or f.nombre ='Seagate')

db.producto.aggregate([
  {
    $lookup: {
      from: "fabricante",
      localField: "id_fabricante",
      foreignField: "_id",
      as: "fabricante"
    }
  },
  {
    $unwind: "$fabricante"
  },
  {
    $match: {
        $or:[{"fabricante.nombre": "Asus"},{"fabricante.nombre": "Hewlett-Packard"},{"fabricante.nombre": "Seagate"}]
      
      
    }
  },
  {
    $project: {
      //_id: 1,
      nombre: 1,
      precio: 1,
      //id_fabricante:1,
      "fabricante._id": 1,
      "fabricante.nombre": 1
    }
  }
])

//Devuelve un listado con todos los productos de los fabricantes Asus, Hewlett-Packardy Seagate. Utilizando el operador IN.
select * from producto p, fabricante f where p.id_fabricante = f.id and f.nombre in ('Asus','Hewlett-Packard','Seagate')

select * from producto p inner join fabricante f on p.id_fabricante = f.id 
and f.nombre in ('Asus','Hewlett-Packard','Seagate')

db.producto.aggregate([
  {
    $lookup: {
      from: "fabricante",
      localField: "id_fabricante",
      foreignField: "_id",
      as: "fabricante"
    }
  },
  {
    $unwind: "$fabricante"
  },
  {
    $match: {
        "fabricante.nombre": {$in:["Asus","Hewlett-Packard","Seagate"] }
    }
  },
  {
    $project: {
      //_id: 1,
      nombre: 1,
      precio: 1,
      //id_fabricante:1,
      "fabricante._id": 1,
      "fabricante.nombre": 1
    }
  }
])



//Devuelve un listado con el nombre y el precio de todos los productos de los fabricantes cuyo nombre termine por la vocal e.
select p.nombre,p.precio,f.nombre from producto p, fabricante f where p.id_fabricante = f.id and f.nombre like '%e'

select p.nombre,p.precio,f.nombre from producto p inner join fabricante f on p.id_fabricante = f.id 
and f.nombre like '%e'

db.producto.aggregate([
  {
    $lookup: {
      from: "fabricante",
      localField: "id_fabricante",
      foreignField: "_id",
      as: "fabricante"
    }
  },
  {
    $unwind: "$fabricante"
  },
  {
    $match: {
        "fabricante.nombre": {$regex: /e$/i}
    }
  },
  {
    $project: {
      //_id: 1,
      nombre: 1,
      precio: 1,
      //id_fabricante:1,
      //"fabricante._id": 1,
      "fabricante.nombre": 1
    }
  }
])


//Devuelve un listado con el nombre y el precio de todos los productos cuyo nombre de fabricante contenga el carácter w en su nombre.
select p.nombre,p.precio,f.nombre from producto p, fabricante f where p.id_fabricante = f.id and f.nombre like '%w%'

select p.nombre,p.precio,f.nombre from producto p inner join fabricante f on p.id_fabricante = f.id 
and f.nombre like '%w%'

db.producto.aggregate([
  {
    $lookup: {
      from: "fabricante",
      localField: "id_fabricante",
      foreignField: "_id",
      as: "fabricante"
    }
  },
  {
    $unwind: "$fabricante"
  },
  {
    $match: {
        "fabricante.nombre": {$regex: /w/i}
    }
  },
  {
    $project: {
      //_id: 1,
      nombre: 1,
      precio: 1,
      //id_fabricante:1,
      //"fabricante._id": 1,
      "fabricante.nombre": 1
    }
  }
])

//Devuelve un listado con el nombre de producto, precio y nombre de fabricante, de todos los productos que tengan un precio mayor o igual a 180€. 
//Ordene el resultado en primer lugar por el precio (en orden descendente) y en segundo lugar por el nombre (en orden ascendente)
select p.nombre,p.precio,f.nombre from producto p, fabricante f where p.id_fabricante = f.id and p.precio >= 180 order by p.precio desc, p.nombre asc

select p.nombre,p.precio,f.nombre from producto p inner join fabricante f on p.id_fabricante = f.id 
and p.precio >= 180
order by p.precio desc, p.nombre asc

db.producto.aggregate([
  {
    $lookup: {
      from: "fabricante",
      localField: "id_fabricante",
      foreignField: "_id",
      as: "fabricante"
    }
  },
  {
    $unwind: "$fabricante"
  },
  {
    $match: {
        "precio": {$gte:180}
    }
  },
  {
    $project: {
      //_id: 1,
      nombre: 1,
      precio: 1,
      //id_fabricante:1,
      //"fabricante._id": 1,
      "fabricante.nombre": 1
    }
  },
  {
    $sort:{ "precio":-1,"nombre":1}
  }
])


//Devuelve un listado con el identificador y el nombre de fabricante, solamente de aquellos fabricantes que tienen productos asociados en la base de datos.
select f.id,f.nombre from producto p, fabricante f where p.id_fabricante = f.id group by f.id; 

select f.id,f.nombre from producto p inner join fabricante f on p.id_fabricante = f.id group by f.id 

db.producto.aggregate([
  {
    $lookup: {
      from: "fabricante",
      localField: "id_fabricante",
      foreignField: "_id",
      as: "fabricante"
    }
  },
  {
    $unwind: "$fabricante"
  },
  {
     $group: {
     _id: "$fabricante._id",
     "fabricanteNombre": { $first: "$fabricante.nombre" }
     }
  },
  {
    $project: {
      //_id: 1,
      //nombre: 1,
      //precio: 1,
      //id_fabricante:1,
      "fabricante._id": 1,
      "fabricante.nombre": "$fabricanteNombre"
    }
  }
])

//Fin Consultas Multitabla (Composición interna)

//Consultas resumen
//Calcula el número total de productos que hay en la tabla productos.

select count(id) from producto;

db.producto.countDocuments()

//Calcula el número total de fabricantes que hay en la tabla fabricante.

select count(*) from fabricante

db.fabricante.countDocuments()

//Calcula el número de valores distintos de identificador de fabricante aparecen en la tabla productos.

select count(distinct (id_fabricante)) from producto

db.producto.distinct("id_fabricante").length

//Calcula la media del precio de todos los productos.

select avg(precio) from producto

db.producto.aggregate([
  {
    $group:{ 
        _id:"null",
        promedio:{ $avg:"$precio" }
       }
  }
])

//Calcula el precio más barato de todos los productos.

select min(precio) from producto

db.producto.aggregate([
  {
    $group:{ 
        _id:"null",
        minimo:{ $min:"$precio" }
       }
  }
])

//Calcula el precio más caro de todos los productos.

select max(precio) from producto

db.producto.aggregate([
  {
    $group:{ 
        _id:"null",
        maximo:{ $max:"$precio" }
       }
  }
])

//Lista el nombre y el precio del producto más barato.

select nombre, precio from producto where precio = (select min(precio) from producto)

var min = db.producto.aggregate([
  {
    $group:{ 
        _id:"null",
        minimo:{ $min:"$precio" }
       }
  }
]).toArray()[0].minimo;

db.producto.find({precio:min},{nombre:1,precio:1,_id:0})

//Lista el nombre y el precio del producto más caro.

select nombre, precio from producto where precio = (select max(precio) from producto)

var max = db.producto.aggregate([
  {
    $group:{ 
        _id:"null",
        maximo:{ $max:"$precio" }
       }
  }
]).toArray()[0].maximo;

db.producto.find({precio:max},{nombre:1,precio:1,_id:0});

//Calcula la suma de los precios de todos los productos.

select sum(precio) from producto

db.producto.aggregate([
  {
    $group:{ 
        _id:"null",
        suma:{ $sum:"$precio" }
       }
  }
])

//Calcula el número de productos que tiene el fabricante Asus.

select count(p.id) from producto p, fabricante f where p.id_fabricante = f.id and f.nombre = 'Asus'

db.producto.aggregate([
   {$lookup:{
      from:"fabricante",
      localField:"id_fabricante",
      foreignField:"_id",
      as: "fabricante"
   }},
   {$unwind:"$fabricante"},
   {$match:{ "fabricante.nombre":"Asus" }},
   {$project:{
    _id: 1,
    //"fabricante.nombre":1
   }}
]).toArray().length;

//Calcula la media del precio de todos los productos del fabricante Asus.

select avg(precio) from producto p, fabricante f where p.id_fabricante = f.id and f.nombre = 'Asus'

db.producto.aggregate([
   {$lookup:{
      from:"fabricante",
      localField:"id_fabricante",
      foreignField:"_id",
      as: "fabricante"
    }
 },
   {$unwind:"$fabricante"},
   {$match:{ 
    "fabricante.nombre":"Asus" 
    }
  },
   {$group:{
    _id:"null",
    media_precio:{$avg:"$precio"}
    }
  }
])

//Calcula el precio más barato de todos los productos del fabricante Asus.

select min(precio) from producto p, fabricante f where p.id_fabricante = f.id and f.nombre = 'Asus'

db.producto.aggregate([
   {$lookup:{
      from:"fabricante",
      localField:"id_fabricante",
      foreignField:"_id",
      as: "fabricante"
    }
 },
   {
    $unwind:"$fabricante"
 },
   {$match:{ 
    "fabricante.nombre":"Asus" 
    }
  },
   {$group:{
    _id:"null",
    minimo_precio:{$min:"$precio"}
    }
  }
])

//Calcula el precio más caro de todos los productos del fabricante Asus.

select max(precio) from producto p, fabricante f where p.id_fabricante = f.id and f.nombre = 'Asus'

db.producto.aggregate([
   {$lookup:{
      from:"fabricante",
      localField:"id_fabricante",
      foreignField:"_id",
      as: "fabricante"
    }
 },
   {
    $unwind:"$fabricante"
 },
   {$match:{ 
    "fabricante.nombre":"Asus" 
    }
  },
   {$group:{
    _id:"null",
    maximo_precio:{$max:"$precio"}
    }
  }
])

//Calcula la suma de todos los productos del fabricante Asus.

select sum(precio) from producto p, fabricante f where p.id_fabricante = f.id and f.nombre = 'Asus'

db.producto.aggregate([
   {$lookup:{
      from:"fabricante",
      localField:"id_fabricante",
      foreignField:"_id",
      as: "fabricante"
    }
 },
   {
    $unwind:"$fabricante"
 },
   {$match:{ 
    "fabricante.nombre":"Asus" 
    }
  },
   {$group:{
    _id:"null",
    suma_precio:{$sum:"$precio"}
    }
  }
])

//Muestra el precio máximo, precio mínimo, precio medio y el número total de productos que tiene el fabricante Crucial.

select max(precio),min(precio),avg(precio), count(p.id) from producto p, fabricante f where p.id_fabricante = f.id and f.nombre = 'Crucial'

db.producto.aggregate([
   {$lookup:{
      from:"fabricante",
      localField:"id_fabricante",
      foreignField:"_id",
      as: "fabricante"
    }
 },
   {
    $unwind:"$fabricante"
 },
   {$match:{ 
    "fabricante.nombre":"Crucial" 
    }
  },
   {$group:{
    _id:"null",
    precioMaximo:{$max:"$precio"},
    precioMinimo:{$min:"$precio"},
    precioPromedio:{$avg:"$precio"},
    contar: { $sum: 1 }
    }
  }
])

//Muestra el precio máximo, precio mínimo y precio medio de los productos de cada uno de los fabricantes. 
//El resultado mostrará el nombre del fabricante junto con los datos que se solicitan.

select max(p.precio), min(p.precio), avg(p.precio),f.nombre from producto p inner join fabricante f on p.id_fabricante = f.id group by f.nombre 

db.producto.aggregate([
   {$lookup:{
      from:"fabricante",
      localField:"id_fabricante",
      foreignField:"_id",
      as: "fabricante"
    }
 },
   {
    $unwind:"$fabricante"
 },
   {$group:{
    _id:"$fabricante.nombre",
    precioMaximo:{$max:"$precio"},
    precioMinimo:{$min:"$precio"},
    precioPromedio:{$avg:"$precio"}
    }
  }
])
//Muestra el precio máximo, precio mínimo, precio medio y el número total de productos de los fabricantes que
//tienen un precio medio superior a 200€. No es necesario mostrar el nombre del fabricante, 
//con el identificador del fabricante es suficiente.

select max(p.precio), min(p.precio), avg(p.precio),f.id from producto p inner join fabricante f on p.id_fabricante = f.id group by f.id having avg(p.precio) > 200;

db.producto.aggregate([
   {$lookup:{
      from:"fabricante",
      localField:"id_fabricante",
      foreignField:"_id",
      as: "fabricante"
    }
 },
   {
    $unwind:"$fabricante"
 },
   {$group:{
    _id:"$fabricante._id",
    precioMaximo:{$max:"$precio"},
    precioMinimo:{$min:"$precio"},
    precioPromedio:{$avg:"$precio"}
    }
  },
  {
    $match:{"precioPromedio":{$gt:200}}
  }
])
//Muestra el nombre de cada fabricante, junto con el precio máximo, precio mínimo, precio medio y 
//el número total de productos de los fabricantes que tienen un precio medio superior a 200€. 
//Es necesario mostrar el nombre del fabricante.

select max(p.precio), min(p.precio), avg(p.precio),f.id,f.nombre from producto p inner join fabricante f on p.id_fabricante = f.id group by f.id having avg(p.precio) > 200

db.producto.aggregate([
   {$lookup:{
      from:"fabricante",
      localField:"id_fabricante",
      foreignField:"_id",
      as: "fabricante"
    }
 },
   {
    $unwind:"$fabricante"
 },
   {$group:{
    _id:"$fabricante._id",
    precioMaximo:{$max:"$precio"},
    precioMinimo:{$min:"$precio"},
    precioPromedio:{$avg:"$precio"},
    nombre: { $first: "$fabricante.nombre" }
    }
  },
  {
    $match:{"precioPromedio":{$gt:200}}
  }
])
//Calcula el número de productos que tienen un precio mayor o igual a 180€.
select count(precio) from producto where precio >= 180

db.producto.countDocuments({ precio: { $gte: 180 } });

//Calcula el número de productos que tiene cada fabricante con un precio mayor o igual a 180€.

select f.nombre,f.id, p.precio from producto p inner join fabricante f on f.id = p.id_fabricante where precio >= 180

db.producto.aggregate([
   {$lookup:{
      from:"fabricante",
      localField:"id_fabricante",
      foreignField:"_id",
      as: "fabricante"
    }
 },
   {
    $unwind:"$fabricante"
 },
  {
    $match:{"precio":{$gte:180}}
 },
 {$project:{
     "fabricante.nombre":1,
     "fabricante,_id":1,
     precio:1
   }
 }
])

//Lista el precio medio los productos de cada fabricante, mostrando solamente el identificador del fabricante.

select avg(precio),id_fabricante from producto group by id_fabricante

db.producto.aggregate([
   {$group:{
    _id:"$id_fabricante",
    promedio:{$avg:"$precio"}
   }}
])
//Lista el precio medio los productos de cada fabricante, mostrando solamente el nombre del fabricante.

select avg(precio),f.nombre
from producto p inner join fabricante f
on p.id_fabricante = f.id
group by f.nombre

db.producto.aggregate([
   {$lookup:{
      from:"fabricante",
      localField:"id_fabricante",
      foreignField:"_id",
      as: "fabricante"
    }
 },
   {
    $unwind:"$fabricante"
 },
 {$group:{
    _id:"$fabricante.nombre",
    promedio:{$avg:"$precio"}
   }
 }
])

//Lista los nombres de los fabricantes cuyos productos tienen un precio medio mayor o igual a 150€.
select avg(precio),f.nombre
from producto p inner join fabricante f
on p.id_fabricante = f.id
group by f.nombre
having avg(precio)>=150

db.producto.aggregate([
   {$lookup:{
      from:"fabricante",
      localField:"id_fabricante",
      foreignField:"_id",
      as: "fabricante"
    }
 },
   {
    $unwind:"$fabricante"
 },
 {$group:{
    _id:"$fabricante.nombre",
    promedio:{$avg:"$precio"}
   }
 },
 {$match:{
   promedio:{$gte:150}
 }
}
])


//Devuelve un listado con los nombres de los fabricantes que tienen 2 o más productos.

select f.nombre, count(p.nombre) 
from producto p inner join fabricante f
on p.id_fabricante = f.id
group by f.nombre
having count(p.nombre)>=2

db.producto.aggregate([
   {$lookup:{
      from:"fabricante",
      localField:"id_fabricante",
      foreignField:"_id",
      as: "fabricante"
    }
 },
   {
    $unwind:"$fabricante"
 },
 {$group:{
    _id:"$fabricante.nombre",
    contar:{$sum:1}
   }
 },
 {$match:{
   contar:{$gte:2}
 }
}
])
//Devuelve un listado con los nombres de los fabricantes y el número de productos que tiene cada uno con un precio 
//superior o igual a 220 €. No es necesario mostrar el nombre de los fabricantes que no tienen productos que cumplan la condición.

select f.nombre, count(p.nombre)
from producto p inner join fabricante f
on p.id_fabricante = f.id
where precio >= 220
group by f.nombre

db.producto.aggregate([
   {$lookup:{
      from:"fabricante",
      localField:"id_fabricante",
      foreignField:"_id",
      as: "fabricante"
    }
 },
   {
    $unwind:"$fabricante"
 },
 {$match:{
   precio:{$gte:220}
  }
 },
 {$group:{
    _id:"$fabricante.nombre",
    contar:{$sum:1}
   }
 }
])

//Devuelve un listado con los nombres de los fabricantes donde la suma del precio de todos sus productos es 
//superior a 1000 €.

select f.nombre, sum(p.precio) as cantidad
from producto p inner join fabricante f
on p.id_fabricante = f.id
group by f.nombre 
having sum(p.precio) > 1000 

db.producto.aggregate([
  {
    $lookup: {
      from: "fabricante",
      localField: "id_fabricante",
      foreignField: "_id",
      as: "fabricante"
    }
  },
  {
    $unwind: "$fabricante"
  },
  {
    $group: {
      _id: "$fabricante.nombre",
      cantidad: { $sum: "$precio" }
    }
  },
  {
    $match: {
      cantidad: { $gt: 1000 }
    }
  }
]);


//Devuelve un listado con el nombre del producto más caro que tiene cada fabricante. El resultado debe tener 
//tres columnas: nombre del producto, precio y nombre del fabricante. El resultado tiene que estar ordenado 
//alfabéticamente de menor a mayor por el nombre del fabricante.

select f.nombre,max(p.precio) as maximo
from producto p inner join fabricante f
on p.id_fabricante = f.id
group by f.nombre
order by f.nombre asc

db.producto.aggregate([
  {
    $lookup: {
      from: "fabricante",
      localField: "id_fabricante",
      foreignField: "_id",
      as: "fabricante"
    }
  },
  {
    $unwind: "$fabricante"
  },
  {
    $group: {
      _id: "$fabricante.nombre",
      maximo: { $max: "$precio" }
    }
  },
  {
    $sort: { _id: 1 }
  }
]);

