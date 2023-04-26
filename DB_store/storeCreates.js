//MONGODB

//Crear una nueva base de datos en MongoDB y seleccionarla:

db = db.getSiblingDB('tienda')

//Crear las colecciones "fabricante" y "producto" en MongoDB:

db.createCollection("fabricante")
db.createCollection("producto")

//Insertar los datos en las colecciones correspondientes utilizando el siguiente comando:

db.fabricante.insertMany([
   { _id: 1, nombre: "Asus" },
   { _id: 2, nombre: "Lenovo" },
   { _id: 3, nombre: "Hewlett-Packard" },
   { _id: 4, nombre: "Samsung" },
   { _id: 5, nombre: "Seagate" },
   { _id: 6, nombre: "Crucial" },
   { _id: 7, nombre: "Gigabyte" },
   { _id: 8, nombre: "Huawei" },
   { _id: 9, nombre: "Xiaomi" }
])

db.producto.insertMany([
   { _id: 1, nombre: "Disco duro SATA3 1TB", precio: 86.99, id_fabricante: 5 },
   { _id: 2, nombre: "Memoria RAM DDR4 8GB", precio: 120, id_fabricante: 6 },
   { _id: 3, nombre: "Disco SSD 1 TB", precio: 150.99, id_fabricante: 4 },
   { _id: 4, nombre: "GeForce GTX 1050Ti", precio: 185, id_fabricante: 7 },
   { _id: 5, nombre: "GeForce GTX 1080 Xtreme", precio: 755, id_fabricante: 6 },
   { _id: 6, nombre: "Monitor 24 LED Full HD", precio: 202, id_fabricante: 1 },
   { _id: 7, nombre: "Monitor 27 LED Full HD", precio: 245.99, id_fabricante: 1 },
   { _id: 8, nombre: "Portátil Yoga 520", precio: 559, id_fabricante: 2 },
   { _id: 9, nombre: "Portátil Ideapd 320", precio: 444, id_fabricante: 2 },
   { _id: 10, nombre: "Impresora HP Deskjet 3720", precio: 59.99, id_fabricante: 3 },
   { _id: 11, nombre: "Impresora HP Laserjet Pro M26nw", precio: 180, id_fabricante: 3 }
])

