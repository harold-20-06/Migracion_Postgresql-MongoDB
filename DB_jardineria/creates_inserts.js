//=====================================================================================================

//create DB

db = db.getSiblingDB('jardineria')

//create tables

db.createCollection('oficina');
db.createCollection('empleado');
db.createCollection('gama_producto');
db.createCollection('cliente');
db.createCollection('pedido');
db.createCollection('producto');
db.createCollection('detalle_pedido');
db.createCollection('pago');


//inserts

db.oficina.insertMany([{
  "codigo_oficina": "BCN-ES",
  "ciudad": "Barcelona",
  "pais": "España",
  "region": "Barcelona",
  "codigo_postal": 8019,
  "telefono": "+34 93 3561182",
  "linea_direccion1": "Avenida Diagonal, 38",
  "linea_direccion2": "3A escalera Derecha"
},{
  "codigo_oficina": "BOS-USA",
  "ciudad": "Boston",
  "pais": "EEUU",
  "region": "MA",
  "codigo_postal": 2108,
  "telefono": "+1 215 837 0825",
  "linea_direccion1": "1550 Court Place",
  "linea_direccion2": "Suite 102"
},{
  "codigo_oficina": "LON-UK",
  "ciudad": "Londres",
  "pais": "Inglaterra",
  "region": "EMEA",
  "codigo_postal": "EC2N 1HN",
  "telefono": "+44 20 78772041",
  "linea_direccion1": "52 Old Broad Street",
  "linea_direccion2": "Ground Floor"
},{
  "codigo_oficina": "MAD-ES",
  "ciudad": "Madrid",
  "pais": "España",
  "region": "Madrid",
  "codigo_postal": 28032,
  "telefono": "+34 91 7514487",
  "linea_direccion1": "Bulevar Indalecio Prieto, 32"
},{
  "codigo_oficina": "PAR-FR",
  "ciudad": "Paris",
  "pais": "Francia",
  "region": "EMEA",
  "codigo_postal": 75017,
  "telefono": "+33 14 723 4404",
  "linea_direccion1": "29 Rue Jouffroy d'abbans"
},{
  "codigo_oficina": "SFC-USA",
  "ciudad": "San Francisco",
  "pais": "EEUU",
  "region": "CA",
  "codigo_postal": 94080,
  "telefono": "+1 650 219 4782",
  "linea_direccion1": "100 Market Street",
  "linea_direccion2": "Suite 300"
},{
  "codigo_oficina": "SYD-AU",
  "ciudad": "Sydney",
  "pais": "Australia",
  "region": "APAC",
  "codigo_postal": "NSW 2010",
  "telefono": "+61 2 9264 2451",
  "linea_direccion1": "5-11 Wentworth Avenue",
  "linea_direccion2": "Floor #2"
},{
  "codigo_oficina": "TAL-ES",
  "ciudad": "Talavera de la Reina",
  "pais": "España",
  "region": "Castilla-LaMancha",
  "codigo_postal": 45632,
  "telefono": "+34 925 867231",
  "linea_direccion1": "Francisco Aguirre, 32",
  "linea_direccion2": "5º piso (exterior)"
},{
  "codigo_oficina": "TOK-JP",
  "ciudad": "Tokyo",
  "pais": "Japón",
  "region": "Chiyoda-Ku",
  "codigo_postal": "102-8578",
  "telefono": "+81 33 224 5000",
  "linea_direccion1": "4-1 Kioicho"
}]);


db.cliente.insertMany([{
  "codigo_cliente": 1,
  "nombre_cliente": "GoldFish Garden",
  "nombre_contacto": "Daniel G",
  "apellido_contacto": "GoldFish",
  "telefono": "5556901745",
  "fax": "5556901746",
  "linea_direccion1": "False Street 52 2 A",
  "linea_direccion2": "NULL",
  "ciudad": "San Francisco",
  "region": "NULL",
  "pais": "USA",
  "codigo_postal": "24006",
  "codigo_empleado_rep_ventas": 19,
  "limite_credito": 3000
},{
  "codigo_cliente": 3,
  "nombre_cliente": "Gardening Associates",
  "nombre_contacto": "Anne",
  "apellido_contacto": "Wright",
  "telefono": "5557410345",
  "fax": "5557410346",
  "linea_direccion1": "Wall-e Avenue",
  "linea_direccion2": "NULL",
  "ciudad": "Miami",
  "region": "Miami",
  "pais": "USA",
  "codigo_postal": "24010",
  "codigo_empleado_rep_ventas": 19,
  "limite_credito": 6000
},{
  "codigo_cliente": 4,
  "nombre_cliente": "Gerudo Valley",
  "nombre_contacto": "Link",
  "apellido_contacto": "Flaute",
  "telefono": "5552323129",
  "fax": "5552323128",
  "linea_direccion1": "Oaks Avenue nº22",
  "linea_direccion2": "NULL",
  "ciudad": "New York",
  "region": "NULL",
  "pais": "USA",
  "codigo_postal": "85495",
  "codigo_empleado_rep_ventas": 22,
  "limite_credito": 12000
},{
  "codigo_cliente": 5,
  "nombre_cliente": "Tendo Garden",
  "nombre_contacto": "Akane",
  "apellido_contacto": "Tendo",
  "telefono": "55591233210",
  "fax": "55591233211",
  "linea_direccion1": "Null Street nº69",
  "linea_direccion2": "NULL",
  "ciudad": "Miami",
  "region": "NULL",
  "pais": "USA",
  "codigo_postal": "696969",
  "codigo_empleado_rep_ventas": 22,
  "limite_credito": 600000
},{
  "codigo_cliente": 6,
  "nombre_cliente": "Lasas S.A.",
  "nombre_contacto": "Antonio",
  "apellido_contacto": "Lasas",
  "telefono": "34916540145",
  "fax": "34914851312",
  "linea_direccion1": "C/Leganes 15",
  "linea_direccion2": "NULL",
  "ciudad": "Fuenlabrada",
  "region": "Madrid",
  "pais": "Spain",
  "codigo_postal": "28945",
  "codigo_empleado_rep_ventas": 8,
  "limite_credito": 154310
},{
  "codigo_cliente": 7,
  "nombre_cliente": "Beragua",
  "nombre_contacto": "Jose",
  "apellido_contacto": "Bermejo",
  "telefono": "654987321",
  "fax": "916549872",
  "linea_direccion1": "C/pintor segundo",
  "linea_direccion2": "Getafe",
  "ciudad": "Madrid",
  "region": "Madrid",
  "pais": "Spain",
  "codigo_postal": "28942",
  "codigo_empleado_rep_ventas": 11,
  "limite_credito": 20000
},{
  "codigo_cliente": 8,
  "nombre_cliente": "Club Golf Puerta del hierro",
  "nombre_contacto": "Paco",
  "apellido_contacto": "Lopez",
  "telefono": "62456810",
  "fax": "919535678",
  "linea_direccion1": "C/sinesio delgado",
  "linea_direccion2": "Madrid",
  "ciudad": "Madrid",
  "region": "Madrid",
  "pais": "Spain",
  "codigo_postal": "28930",
  "codigo_empleado_rep_ventas": 11,
  "limite_credito": 40000
},{
  "codigo_cliente": 9,
  "nombre_cliente": "Naturagua",
  "nombre_contacto": "Guillermo",
  "apellido_contacto": "Rengifo",
  "telefono": "689234750",
  "fax": "916428956",
  "linea_direccion1": "C/majadahonda",
  "linea_direccion2": "Boadilla",
  "ciudad": "Madrid",
  "region": "Madrid",
  "pais": "Spain",
  "codigo_postal": "28947",
  "codigo_empleado_rep_ventas": 11,
  "limite_credito": 32000
},{
  "codigo_cliente": 10,
  "nombre_cliente": "DaraDistribuciones",
  "nombre_contacto": "David",
  "apellido_contacto": "Serrano",
  "telefono": "675598001",
  "fax": "916421756",
  "linea_direccion1": "C/azores",
  "linea_direccion2": "Fuenlabrada",
  "ciudad": "Madrid",
  "region": "Madrid",
  "pais": "Spain",
  "codigo_postal": "28946",
  "codigo_empleado_rep_ventas": 11,
  "limite_credito": 50000
},{
  "codigo_cliente": 11,
  "nombre_cliente": "Madrileña de riegos",
  "nombre_contacto": "Jose",
  "apellido_contacto": "Tacaño",
  "telefono": "655983045",
  "fax": "916689215",
  "linea_direccion1": "C/Lagañas",
  "linea_direccion2": "Fuenlabrada",
  "ciudad": "Madrid",
  "region": "Madrid",
  "pais": "Spain",
  "codigo_postal": "28943",
  "codigo_empleado_rep_ventas": 11,
  "limite_credito": 20000
},{
  "codigo_cliente": 12,
  "nombre_cliente": "Lasas S.A.",
  "nombre_contacto": "Antonio",
  "apellido_contacto": "Lasas",
  "telefono": "34916540145",
  "fax": "34914851312",
  "linea_direccion1": "C/Leganes 15",
  "linea_direccion2": "NULL",
  "ciudad": "Fuenlabrada",
  "region": "Madrid",
  "pais": "Spain",
  "codigo_postal": "28945",
  "codigo_empleado_rep_ventas": 8,
  "limite_credito": 154310
},{
  "codigo_cliente": 13,
  "nombre_cliente": "Camunas Jardines S.L.",
  "nombre_contacto": "Pedro",
  "apellido_contacto": "Camunas",
  "telefono": "34914873241",
  "fax": "34914871541",
  "linea_direccion1": "C/Virgenes 45",
  "linea_direccion2": "C/Princesas 2 1ºB",
  "ciudad": "San Lorenzo del Escorial",
  "region": "Madrid",
  "pais": "Spain",
  "codigo_postal": "28145",
  "codigo_empleado_rep_ventas": 8,
  "limite_credito": 16481
},{
  "codigo_cliente": 14,
  "nombre_cliente": "Dardena S.A.",
  "nombre_contacto": "Juan",
  "apellido_contacto": "Rodriguez",
  "telefono": "34912453217",
  "fax": "34912484764",
  "linea_direccion1": "C/Nueva York 74",
  "linea_direccion2": "NULL",
  "ciudad": "Madrid",
  "region": "Madrid",
  "pais": "Spain",
  "codigo_postal": "28003",
  "codigo_empleado_rep_ventas": 8,
  "limite_credito": 321000
},{
  "codigo_cliente": 15,
  "nombre_cliente": "Jardin de Flores",
  "nombre_contacto": "Javier",
  "apellido_contacto": "Villar",
  "telefono": "654865643",
  "fax": "914538776",
  "linea_direccion1": "C/ Oña 34",
  "linea_direccion2": "NULL",
  "ciudad": "Madrid",
  "region": "Madrid",
  "pais": "Spain",
  "codigo_postal": "28950",
  "codigo_empleado_rep_ventas": 30,
  "limite_credito": 40000
},{
  "codigo_cliente": 16,
  "nombre_cliente": "Flores Marivi",
  "nombre_contacto": "Maria",
  "apellido_contacto": "Rodriguez",
  "telefono": "666555444",
  "fax": "912458657",
  "linea_direccion1": "C/Leganes24",
  "linea_direccion2": "NULL",
  "ciudad": "Fuenlabrada",
  "region": "Madrid",
  "pais": "Spain",
  "codigo_postal": "28945",
  "codigo_empleado_rep_ventas": 5,
  "limite_credito": 1500
},{
  "codigo_cliente": 17,
  "nombre_cliente": "Flowers, S.A",
  "nombre_contacto": "Beatriz",
  "apellido_contacto": "Fernandez",
  "telefono": "698754159",
  "fax": "978453216",
  "linea_direccion1": "C/Luis Salquillo4",
  "linea_direccion2": "NULL",
  "ciudad": "Montornes del valles",
  "region": "Barcelona",
  "pais": "Spain",
  "codigo_postal": "24586",
  "codigo_empleado_rep_ventas": 5,
  "limite_credito": 3500
},{
  "codigo_cliente": 18,
  "nombre_cliente": "Naturajardin",
  "nombre_contacto": "Victoria",
  "apellido_contacto": "Cruz",
  "telefono": "612343529",
  "fax": "916548735",
  "linea_direccion1": "Plaza Magallón 15",
  "linea_direccion2": "NULL",
  "ciudad": "Madrid",
  "region": "Madrid",
  "pais": "Spain",
  "codigo_postal": "28011",
  "codigo_empleado_rep_ventas": 30,
  "limite_credito": 5050
},{
  "codigo_cliente": 19,
  "nombre_cliente": "Golf S.A.",
  "nombre_contacto": "Luis",
  "apellido_contacto": "Martinez",
  "telefono": "916458762",
  "fax": "912354475",
  "linea_direccion1": "C/Estancado",
  "linea_direccion2": "NULL",
  "ciudad": "Santa cruz de Tenerife",
  "region": "Islas Canarias",
  "pais": "Spain",
  "codigo_postal": "38297",
  "codigo_empleado_rep_ventas": 12,
  "limite_credito": 30000
},{
  "codigo_cliente": 20,
  "nombre_cliente": "Americh Golf Management SL",
  "nombre_contacto": "Mario",
  "apellido_contacto": "Suarez",
  "telefono": "964493072",
  "fax": "964493063",
  "linea_direccion1": "C/Letardo",
  "linea_direccion2": "NULL",
  "ciudad": "Barcelona",
  "region": "Cataluña",
  "pais": "Spain",
  "codigo_postal": "12320",
  "codigo_empleado_rep_ventas": 12,
  "limite_credito": 20000
},{
  "codigo_cliente": 21,
  "nombre_cliente": "Aloha",
  "nombre_contacto": "Cristian",
  "apellido_contacto": "Rodrigez",
  "telefono": "916485852",
  "fax": "914489898",
  "linea_direccion1": "C/Roman 3",
  "linea_direccion2": "NULL",
  "ciudad": "Canarias",
  "region": "Canarias",
  "pais": "Spain",
  "codigo_postal": "35488",
  "codigo_empleado_rep_ventas": 12,
  "limite_credito": 50000
},{
  "codigo_cliente": 22,
  "nombre_cliente": "El Prat",
  "nombre_contacto": "Francisco",
  "apellido_contacto": "Camacho",
  "telefono": "916882323",
  "fax": "916493211",
  "linea_direccion1": "Avenida Tibidabo",
  "linea_direccion2": "NULL",
  "ciudad": "Barcelona",
  "region": "Cataluña",
  "pais": "Spain",
  "codigo_postal": "12320",
  "codigo_empleado_rep_ventas": 12,
  "limite_credito": 30000
},{
  "codigo_cliente": 23,
  "nombre_cliente": "Sotogrande",
  "nombre_contacto": "Maria",
  "apellido_contacto": "Santillana",
  "telefono": "915576622",
  "fax": "914825645",
  "linea_direccion1": "C/Paseo del Parque",
  "linea_direccion2": "NULL",
  "ciudad": "Sotogrande",
  "region": "Cadiz",
  "pais": "Spain",
  "codigo_postal": "11310",
  "codigo_empleado_rep_ventas": 12,
  "limite_credito": 60000
},{
  "codigo_cliente": 24,
  "nombre_cliente": "Vivero Humanes",
  "nombre_contacto": "Federico",
  "apellido_contacto": "Gomez",
  "telefono": "654987690",
  "fax": "916040875",
  "linea_direccion1": "C/Miguel Echegaray 54",
  "linea_direccion2": "NULL",
  "ciudad": "Humanes",
  "region": "Madrid",
  "pais": "Spain",
  "codigo_postal": "28970",
  "codigo_empleado_rep_ventas": 30,
  "limite_credito": 7430
},{
  "codigo_cliente": 25,
  "nombre_cliente": "Fuenla City",
  "nombre_contacto": "Tony",
  "apellido_contacto": "Muñoz Mena",
  "telefono": "675842139",
  "fax": "915483754",
  "linea_direccion1": "C/Callo 52",
  "linea_direccion2": "NULL",
  "ciudad": "Fuenlabrada",
  "region": "Madrid",
  "pais": "Spain",
  "codigo_postal": "28574",
  "codigo_empleado_rep_ventas": 5,
  "limite_credito": 4500
},{
  "codigo_cliente": 26,
  "nombre_cliente": "Jardines y Mansiones Cactus SL",
  "nombre_contacto": "Eva María",
  "apellido_contacto": "Sánchez",
  "telefono": "916877445",
  "fax": "914477777",
  "linea_direccion1": "Polígono Industrial Maspalomas, Nº52",
  "linea_direccion2": "Móstoles",
  "ciudad": "Madrid",
  "region": "Madrid",
  "pais": "Spain",
  "codigo_postal": "29874",
  "codigo_empleado_rep_ventas": 9,
  "limite_credito": 76000
},{
  "codigo_cliente": 27,
  "nombre_cliente": "Jardinerías Matías SL",
  "nombre_contacto": "Matías",
  "apellido_contacto": "San Martín",
  "telefono": "916544147",
  "fax": "917897474",
  "linea_direccion1": "C/Francisco Arce, Nº44",
  "linea_direccion2": "Bustarviejo",
  "ciudad": "Madrid",
  "region": "Madrid",
  "pais": "Spain",
  "codigo_postal": "37845",
  "codigo_empleado_rep_ventas": 9,
  "limite_credito": 100500
},{
  "codigo_cliente": 28,
  "nombre_cliente": "Agrojardin",
  "nombre_contacto": "Benito",
  "apellido_contacto": "Lopez",
  "telefono": "675432926",
  "fax": "916549264",
  "linea_direccion1": "C/Mar Caspio 43",
  "linea_direccion2": "NULL",
  "ciudad": "Getafe",
  "region": "Madrid",
  "pais": "Spain",
  "codigo_postal": "28904",
  "codigo_empleado_rep_ventas": 30,
  "limite_credito": 8040
},{
  "codigo_cliente": 29,
  "nombre_cliente": "Top Campo",
  "nombre_contacto": "Joseluis",
  "apellido_contacto": "Sanchez",
  "telefono": "685746512",
  "fax": "974315924",
  "linea_direccion1": "C/Ibiza 32",
  "linea_direccion2": "NULL",
  "ciudad": "Humanes",
  "region": "Madrid",
  "pais": "Spain",
  "codigo_postal": "28574",
  "codigo_empleado_rep_ventas": 5,
  "limite_credito": 5500
},{
  "codigo_cliente": 30,
  "nombre_cliente": "Jardineria Sara",
  "nombre_contacto": "Sara",
  "apellido_contacto": "Marquez",
  "telefono": "675124537",
  "fax": "912475843",
  "linea_direccion1": "C/Lima 1",
  "linea_direccion2": "NULL",
  "ciudad": "Fuenlabrada",
  "region": "Madrid",
  "pais": "Spain",
  "codigo_postal": "27584",
  "codigo_empleado_rep_ventas": 5,
  "limite_credito": 7500
},{
  "codigo_cliente": 31,
  "nombre_cliente": "Campohermoso",
  "nombre_contacto": "Luis",
  "apellido_contacto": "Jimenez",
  "telefono": "645925376",
  "fax": "916159116",
  "linea_direccion1": "C/Peru 78",
  "linea_direccion2": "NULL",
  "ciudad": "Fuenlabrada",
  "region": "Madrid",
  "pais": "Spain",
  "codigo_postal": "28945",
  "codigo_empleado_rep_ventas": 30,
  "limite_credito": 3250
},{
  "codigo_cliente": 32,
  "nombre_cliente": "france telecom",
  "nombre_contacto": "FraÃ§ois",
  "apellido_contacto": "Toulou",
  "telefono": "(33)5120578961",
  "fax": "(33)5120578961",
  "linea_direccion1": "6 place d Alleray 15Ã¨me",
  "linea_direccion2": "NULL",
  "ciudad": "Paris",
  "region": "NULL",
  "pais": "France",
  "codigo_postal": "75010",
  "codigo_empleado_rep_ventas": 16,
  "limite_credito": 10000
},{
  "codigo_cliente": 33,
  "nombre_cliente": "Musée du Louvre",
  "nombre_contacto": "Pierre",
  "apellido_contacto": "Delacroux",
  "telefono": "(33)0140205050",
  "fax": "(33)0140205442",
  "linea_direccion1": "Quai du Louvre",
  "linea_direccion2": "NULL",
  "ciudad": "Paris",
  "region": "NULL",
  "pais": "France",
  "codigo_postal": "75058",
  "codigo_empleado_rep_ventas": 16,
  "limite_credito": 30000
},{
  "codigo_cliente": 35,
  "nombre_cliente": "Tutifruti S.A",
  "nombre_contacto": "Jacob",
  "apellido_contacto": "Jones",
  "telefono": "2 9261-2433",
  "fax": "2 9283-1695",
  "linea_direccion1": "level 24, St. Martins Tower.-31 Market St.",
  "linea_direccion2": "NULL",
  "ciudad": "Sydney",
  "region": "Nueva Gales del Sur",
  "pais": "Australia",
  "codigo_postal": "2000",
  "codigo_empleado_rep_ventas": 31,
  "limite_credito": 10000
},{
  "codigo_cliente": 36,
  "nombre_cliente": "Flores S.L.",
  "nombre_contacto": "Antonio",
  "apellido_contacto": "Romero",
  "telefono": "654352981",
  "fax": "685249700",
  "linea_direccion1": "Avenida España",
  "linea_direccion2": "NULL",
  "ciudad": "Madrid",
  "region": "Fuenlabrada",
  "pais": "Spain",
  "codigo_postal": "29643",
  "codigo_empleado_rep_ventas": 18,
  "limite_credito": 6000
},{
  "codigo_cliente": 37,
  "nombre_cliente": "The Magic Garden",
  "nombre_contacto": "Richard",
  "apellido_contacto": "Mcain",
  "telefono": "926523468",
  "fax": "9364875882",
  "linea_direccion1": "Lihgting Park",
  "linea_direccion2": "NULL",
  "ciudad": "London",
  "region": "London",
  "pais": "United Kingdom",
  "codigo_postal": "65930",
  "codigo_empleado_rep_ventas": 18,
  "limite_credito": 10000
},{
  "codigo_cliente": 38,
  "nombre_cliente": "El Jardin Viviente S.L",
  "nombre_contacto": "Justin",
  "apellido_contacto": "Smith",
  "telefono": "2 8005-7161",
  "fax": "2 8005-7162",
  "linea_direccion1": "176 Cumberland Street The rocks",
  "linea_direccion2": "NULL",
  "ciudad": "Sydney",
  "region": "Nueva Gales del Sur",
  "pais": "Australia",
  "codigo_postal": "2003",
  "codigo_empleado_rep_ventas": 31,
  "limite_credito": 8000
}]);

db.detalle_pedido.insertMany([{
  "codigo_pedido": 1,
  "codigo_producto": "FR-67",
  "cantidad": 10,
  "precio_unidad": 70,
  "numero_linea": 3
},{
  "codigo_pedido": 1,
  "codigo_producto": "OR-127",
  "cantidad": 40,
  "precio_unidad": 4,
  "numero_linea": 1
},{
  "codigo_pedido": 1,
  "codigo_producto": "OR-141",
  "cantidad": 25,
  "precio_unidad": 4,
  "numero_linea": 2
},{
  "codigo_pedido": 1,
  "codigo_producto": "OR-241",
  "cantidad": 15,
  "precio_unidad": 19,
  "numero_linea": 4
},{
  "codigo_pedido": 1,
  "codigo_producto": "OR-99",
  "cantidad": 23,
  "precio_unidad": 14,
  "numero_linea": 5
},{
  "codigo_pedido": 2,
  "codigo_producto": "FR-4",
  "cantidad": 3,
  "precio_unidad": 29,
  "numero_linea": 6
},{
  "codigo_pedido": 2,
  "codigo_producto": "FR-40",
  "cantidad": 7,
  "precio_unidad": 8,
  "numero_linea": 7
},{
  "codigo_pedido": 2,
  "codigo_producto": "OR-140",
  "cantidad": 50,
  "precio_unidad": 4,
  "numero_linea": 3
},{
  "codigo_pedido": 2,
  "codigo_producto": "OR-141",
  "cantidad": 20,
  "precio_unidad": 5,
  "numero_linea": 2
},{
  "codigo_pedido": 2,
  "codigo_producto": "OR-159",
  "cantidad": 12,
  "precio_unidad": 6,
  "numero_linea": 5
},{
  "codigo_pedido": 2,
  "codigo_producto": "OR-227",
  "cantidad": 67,
  "precio_unidad": 64,
  "numero_linea": 1
},{
  "codigo_pedido": 2,
  "codigo_producto": "OR-247",
  "cantidad": 5,
  "precio_unidad": 462,
  "numero_linea": 4
},{
  "codigo_pedido": 3,
  "codigo_producto": "FR-48",
  "cantidad": 120,
  "precio_unidad": 9,
  "numero_linea": 6
},{
  "codigo_pedido": 3,
  "codigo_producto": "OR-122",
  "cantidad": 32,
  "precio_unidad": 5,
  "numero_linea": 4
},{
  "codigo_pedido": 3,
  "codigo_producto": "OR-123",
  "cantidad": 11,
  "precio_unidad": 5,
  "numero_linea": 5
},{
  "codigo_pedido": 3,
  "codigo_producto": "OR-213",
  "cantidad": 30,
  "precio_unidad": 266,
  "numero_linea": 1
},{
  "codigo_pedido": 3,
  "codigo_producto": "OR-217",
  "cantidad": 15,
  "precio_unidad": 65,
  "numero_linea": 2
},{
  "codigo_pedido": 3,
  "codigo_producto": "OR-218",
  "cantidad": 24,
  "precio_unidad": 25,
  "numero_linea": 3
},{
  "codigo_pedido": 4,
  "codigo_producto": "FR-31",
  "cantidad": 12,
  "precio_unidad": 8,
  "numero_linea": 7
},{
  "codigo_pedido": 4,
  "codigo_producto": "FR-34",
  "cantidad": 42,
  "precio_unidad": 8,
  "numero_linea": 6
},{
  "codigo_pedido": 4,
  "codigo_producto": "FR-40",
  "cantidad": 42,
  "precio_unidad": 9,
  "numero_linea": 8
},{
  "codigo_pedido": 4,
  "codigo_producto": "OR-152",
  "cantidad": 3,
  "precio_unidad": 6,
  "numero_linea": 5
},{
  "codigo_pedido": 4,
  "codigo_producto": "OR-155",
  "cantidad": 4,
  "precio_unidad": 6,
  "numero_linea": 3
},{
  "codigo_pedido": 4,
  "codigo_producto": "OR-156",
  "cantidad": 17,
  "precio_unidad": 9,
  "numero_linea": 4
},{
  "codigo_pedido": 4,
  "codigo_producto": "OR-157",
  "cantidad": 38,
  "precio_unidad": 10,
  "numero_linea": 2
},{
  "codigo_pedido": 4,
  "codigo_producto": "OR-222",
  "cantidad": 21,
  "precio_unidad": 59,
  "numero_linea": 1
},{
  "codigo_pedido": 8,
  "codigo_producto": "FR-106",
  "cantidad": 3,
  "precio_unidad": 11,
  "numero_linea": 1
},{
  "codigo_pedido": 8,
  "codigo_producto": "FR-108",
  "cantidad": 1,
  "precio_unidad": 32,
  "numero_linea": 2
},{
  "codigo_pedido": 8,
  "codigo_producto": "FR-11",
  "cantidad": 10,
  "precio_unidad": 100,
  "numero_linea": 3
},{
  "codigo_pedido": 9,
  "codigo_producto": "AR-001",
  "cantidad": 80,
  "precio_unidad": 1,
  "numero_linea": 3
},{
  "codigo_pedido": 9,
  "codigo_producto": "AR-008",
  "cantidad": 450,
  "precio_unidad": 1,
  "numero_linea": 2
},{
  "codigo_pedido": 9,
  "codigo_producto": "FR-106",
  "cantidad": 80,
  "precio_unidad": 8,
  "numero_linea": 1
},{
  "codigo_pedido": 9,
  "codigo_producto": "FR-69",
  "cantidad": 15,
  "precio_unidad": 91,
  "numero_linea": 2
},{
  "codigo_pedido": 10,
  "codigo_producto": "FR-82",
  "cantidad": 5,
  "precio_unidad": 70,
  "numero_linea": 2
},{
  "codigo_pedido": 10,
  "codigo_producto": "FR-91",
  "cantidad": 30,
  "precio_unidad": 75,
  "numero_linea": 1
},{
  "codigo_pedido": 10,
  "codigo_producto": "OR-234",
  "cantidad": 5,
  "precio_unidad": 64,
  "numero_linea": 3
},{
  "codigo_pedido": 11,
  "codigo_producto": "AR-006",
  "cantidad": 180,
  "precio_unidad": 1,
  "numero_linea": 3
},{
  "codigo_pedido": 11,
  "codigo_producto": "OR-247",
  "cantidad": 80,
  "precio_unidad": 8,
  "numero_linea": 1
},{
  "codigo_pedido": 12,
  "codigo_producto": "AR-009",
  "cantidad": 290,
  "precio_unidad": 1,
  "numero_linea": 1
},{
  "codigo_pedido": 13,
  "codigo_producto": "11679",
  "cantidad": 5,
  "precio_unidad": 14,
  "numero_linea": 1
},{
  "codigo_pedido": 13,
  "codigo_producto": "21636",
  "cantidad": 12,
  "precio_unidad": 14,
  "numero_linea": 2
},{
  "codigo_pedido": 13,
  "codigo_producto": "FR-11",
  "cantidad": 5,
  "precio_unidad": 100,
  "numero_linea": 3
},{
  "codigo_pedido": 14,
  "codigo_producto": "FR-100",
  "cantidad": 8,
  "precio_unidad": 11,
  "numero_linea": 2
},{
  "codigo_pedido": 14,
  "codigo_producto": "FR-13",
  "cantidad": 13,
  "precio_unidad": 57,
  "numero_linea": 1
},{
  "codigo_pedido": 15,
  "codigo_producto": "FR-84",
  "cantidad": 4,
  "precio_unidad": 13,
  "numero_linea": 3
},{
  "codigo_pedido": 15,
  "codigo_producto": "OR-101",
  "cantidad": 2,
  "precio_unidad": 6,
  "numero_linea": 2
},{
  "codigo_pedido": 15,
  "codigo_producto": "OR-156",
  "cantidad": 6,
  "precio_unidad": 10,
  "numero_linea": 1
},{
  "codigo_pedido": 15,
  "codigo_producto": "OR-203",
  "cantidad": 9,
  "precio_unidad": 10,
  "numero_linea": 4
},{
  "codigo_pedido": 16,
  "codigo_producto": "30310",
  "cantidad": 12,
  "precio_unidad": 12,
  "numero_linea": 1
},{
  "codigo_pedido": 16,
  "codigo_producto": "FR-36",
  "cantidad": 10,
  "precio_unidad": 9,
  "numero_linea": 2
},{
  "codigo_pedido": 17,
  "codigo_producto": "11679",
  "cantidad": 5,
  "precio_unidad": 14,
  "numero_linea": 1
},{
  "codigo_pedido": 17,
  "codigo_producto": "22225",
  "cantidad": 5,
  "precio_unidad": 12,
  "numero_linea": 3
},{
  "codigo_pedido": 17,
  "codigo_producto": "FR-37",
  "cantidad": 5,
  "precio_unidad": 9,
  "numero_linea": 2
},{
  "codigo_pedido": 17,
  "codigo_producto": "FR-64",
  "cantidad": 5,
  "precio_unidad": 22,
  "numero_linea": 4
},{
  "codigo_pedido": 17,
  "codigo_producto": "OR-136",
  "cantidad": 5,
  "precio_unidad": 18,
  "numero_linea": 5
},{
  "codigo_pedido": 18,
  "codigo_producto": "22225",
  "cantidad": 4,
  "precio_unidad": 12,
  "numero_linea": 2
},{
  "codigo_pedido": 18,
  "codigo_producto": "FR-22",
  "cantidad": 2,
  "precio_unidad": 4,
  "numero_linea": 1
},{
  "codigo_pedido": 18,
  "codigo_producto": "OR-159",
  "cantidad": 10,
  "precio_unidad": 6,
  "numero_linea": 3
},{
  "codigo_pedido": 19,
  "codigo_producto": "30310",
  "cantidad": 9,
  "precio_unidad": 12,
  "numero_linea": 5
},{
  "codigo_pedido": 19,
  "codigo_producto": "FR-23",
  "cantidad": 6,
  "precio_unidad": 8,
  "numero_linea": 4
},{
  "codigo_pedido": 19,
  "codigo_producto": "FR-75",
  "cantidad": 1,
  "precio_unidad": 32,
  "numero_linea": 2
},{
  "codigo_pedido": 19,
  "codigo_producto": "FR-84",
  "cantidad": 5,
  "precio_unidad": 13,
  "numero_linea": 1
},{
  "codigo_pedido": 19,
  "codigo_producto": "OR-208",
  "cantidad": 20,
  "precio_unidad": 4,
  "numero_linea": 3
},{
  "codigo_pedido": 20,
  "codigo_producto": "11679",
  "cantidad": 14,
  "precio_unidad": 14,
  "numero_linea": 1
},{
  "codigo_pedido": 20,
  "codigo_producto": "30310",
  "cantidad": 8,
  "precio_unidad": 12,
  "numero_linea": 2
},{
  "codigo_pedido": 21,
  "codigo_producto": "21636",
  "cantidad": 5,
  "precio_unidad": 14,
  "numero_linea": 3
},{
  "codigo_pedido": 21,
  "codigo_producto": "FR-18",
  "cantidad": 22,
  "precio_unidad": 4,
  "numero_linea": 1
},{
  "codigo_pedido": 21,
  "codigo_producto": "FR-53",
  "cantidad": 3,
  "precio_unidad": 8,
  "numero_linea": 2
},{
  "codigo_pedido": 22,
  "codigo_producto": "OR-240",
  "cantidad": 1,
  "precio_unidad": 6,
  "numero_linea": 1
},{
  "codigo_pedido": 23,
  "codigo_producto": "AR-002",
  "cantidad": 110,
  "precio_unidad": 1,
  "numero_linea": 4
},{
  "codigo_pedido": 23,
  "codigo_producto": "FR-107",
  "cantidad": 50,
  "precio_unidad": 22,
  "numero_linea": 3
},{
  "codigo_pedido": 23,
  "codigo_producto": "FR-85",
  "cantidad": 4,
  "precio_unidad": 70,
  "numero_linea": 2
},{
  "codigo_pedido": 23,
  "codigo_producto": "OR-249",
  "cantidad": 30,
  "precio_unidad": 5,
  "numero_linea": 1
},{
  "codigo_pedido": 24,
  "codigo_producto": "22225",
  "cantidad": 3,
  "precio_unidad": 15,
  "numero_linea": 1
},{
  "codigo_pedido": 24,
  "codigo_producto": "FR-1",
  "cantidad": 4,
  "precio_unidad": 7,
  "numero_linea": 4
},{
  "codigo_pedido": 24,
  "codigo_producto": "FR-23",
  "cantidad": 2,
  "precio_unidad": 7,
  "numero_linea": 2
},{
  "codigo_pedido": 24,
  "codigo_producto": "OR-241",
  "cantidad": 10,
  "precio_unidad": 20,
  "numero_linea": 3
},{
  "codigo_pedido": 25,
  "codigo_producto": "FR-77",
  "cantidad": 15,
  "precio_unidad": 69,
  "numero_linea": 1
},{
  "codigo_pedido": 25,
  "codigo_producto": "FR-9",
  "cantidad": 4,
  "precio_unidad": 30,
  "numero_linea": 3
},{
  "codigo_pedido": 25,
  "codigo_producto": "FR-94",
  "cantidad": 10,
  "precio_unidad": 30,
  "numero_linea": 2
},{
  "codigo_pedido": 26,
  "codigo_producto": "FR-15",
  "cantidad": 9,
  "precio_unidad": 25,
  "numero_linea": 3
},{
  "codigo_pedido": 26,
  "codigo_producto": "OR-188",
  "cantidad": 4,
  "precio_unidad": 25,
  "numero_linea": 1
},{
  "codigo_pedido": 26,
  "codigo_producto": "OR-218",
  "cantidad": 14,
  "precio_unidad": 25,
  "numero_linea": 2
},{
  "codigo_pedido": 27,
  "codigo_producto": "OR-101",
  "cantidad": 22,
  "precio_unidad": 6,
  "numero_linea": 2
},{
  "codigo_pedido": 27,
  "codigo_producto": "OR-102",
  "cantidad": 22,
  "precio_unidad": 6,
  "numero_linea": 3
},{
  "codigo_pedido": 27,
  "codigo_producto": "OR-186",
  "cantidad": 40,
  "precio_unidad": 6,
  "numero_linea": 1
},{
  "codigo_pedido": 28,
  "codigo_producto": "FR-11",
  "cantidad": 8,
  "precio_unidad": 99,
  "numero_linea": 3
},{
  "codigo_pedido": 28,
  "codigo_producto": "OR-213",
  "cantidad": 3,
  "precio_unidad": 266,
  "numero_linea": 2
},{
  "codigo_pedido": 28,
  "codigo_producto": "OR-247",
  "cantidad": 1,
  "precio_unidad": 462,
  "numero_linea": 1
},{
  "codigo_pedido": 29,
  "codigo_producto": "FR-82",
  "cantidad": 4,
  "precio_unidad": 70,
  "numero_linea": 4
},{
  "codigo_pedido": 29,
  "codigo_producto": "FR-9",
  "cantidad": 4,
  "precio_unidad": 28,
  "numero_linea": 1
},{
  "codigo_pedido": 29,
  "codigo_producto": "FR-94",
  "cantidad": 20,
  "precio_unidad": 31,
  "numero_linea": 5
},{
  "codigo_pedido": 29,
  "codigo_producto": "OR-129",
  "cantidad": 2,
  "precio_unidad": 111,
  "numero_linea": 2
},{
  "codigo_pedido": 29,
  "codigo_producto": "OR-160",
  "cantidad": 10,
  "precio_unidad": 9,
  "numero_linea": 3
},{
  "codigo_pedido": 30,
  "codigo_producto": "AR-004",
  "cantidad": 10,
  "precio_unidad": 1,
  "numero_linea": 6
},{
  "codigo_pedido": 30,
  "codigo_producto": "FR-108",
  "cantidad": 2,
  "precio_unidad": 32,
  "numero_linea": 2
},{
  "codigo_pedido": 30,
  "codigo_producto": "FR-12",
  "cantidad": 2,
  "precio_unidad": 19,
  "numero_linea": 3
},{
  "codigo_pedido": 30,
  "codigo_producto": "FR-72",
  "cantidad": 4,
  "precio_unidad": 31,
  "numero_linea": 5
},{
  "codigo_pedido": 30,
  "codigo_producto": "FR-89",
  "cantidad": 10,
  "precio_unidad": 45,
  "numero_linea": 1
},{
  "codigo_pedido": 30,
  "codigo_producto": "OR-120",
  "cantidad": 5,
  "precio_unidad": 5,
  "numero_linea": 4
},{
  "codigo_pedido": 31,
  "codigo_producto": "AR-009",
  "cantidad": 25,
  "precio_unidad": 2,
  "numero_linea": 3
},{
  "codigo_pedido": 31,
  "codigo_producto": "FR-102",
  "cantidad": 1,
  "precio_unidad": 20,
  "numero_linea": 1
},{
  "codigo_pedido": 31,
  "codigo_producto": "FR-4",
  "cantidad": 6,
  "precio_unidad": 29,
  "numero_linea": 2
},{
  "codigo_pedido": 32,
  "codigo_producto": "11679",
  "cantidad": 1,
  "precio_unidad": 14,
  "numero_linea": 4
},{
  "codigo_pedido": 32,
  "codigo_producto": "21636",
  "cantidad": 4,
  "precio_unidad": 15,
  "numero_linea": 5
},{
  "codigo_pedido": 32,
  "codigo_producto": "22225",
  "cantidad": 1,
  "precio_unidad": 15,
  "numero_linea": 3
},{
  "codigo_pedido": 32,
  "codigo_producto": "OR-128",
  "cantidad": 29,
  "precio_unidad": 100,
  "numero_linea": 2
},{
  "codigo_pedido": 32,
  "codigo_producto": "OR-193",
  "cantidad": 5,
  "precio_unidad": 20,
  "numero_linea": 1
},{
  "codigo_pedido": 33,
  "codigo_producto": "FR-17",
  "cantidad": 423,
  "precio_unidad": 2,
  "numero_linea": 4
},{
  "codigo_pedido": 33,
  "codigo_producto": "FR-29",
  "cantidad": 120,
  "precio_unidad": 8,
  "numero_linea": 3
},{
  "codigo_pedido": 33,
  "codigo_producto": "OR-214",
  "cantidad": 212,
  "precio_unidad": 10,
  "numero_linea": 2
},{
  "codigo_pedido": 33,
  "codigo_producto": "OR-247",
  "cantidad": 150,
  "precio_unidad": 462,
  "numero_linea": 1
},{
  "codigo_pedido": 34,
  "codigo_producto": "FR-3",
  "cantidad": 56,
  "precio_unidad": 7,
  "numero_linea": 4
},{
  "codigo_pedido": 34,
  "codigo_producto": "FR-7",
  "cantidad": 12,
  "precio_unidad": 29,
  "numero_linea": 3
},{
  "codigo_pedido": 34,
  "codigo_producto": "OR-172",
  "cantidad": 20,
  "precio_unidad": 18,
  "numero_linea": 1
},{
  "codigo_pedido": 34,
  "codigo_producto": "OR-174",
  "cantidad": 24,
  "precio_unidad": 18,
  "numero_linea": 2
},{
  "codigo_pedido": 35,
  "codigo_producto": "21636",
  "cantidad": 12,
  "precio_unidad": 14,
  "numero_linea": 4
},{
  "codigo_pedido": 35,
  "codigo_producto": "FR-47",
  "cantidad": 55,
  "precio_unidad": 8,
  "numero_linea": 3
},{
  "codigo_pedido": 35,
  "codigo_producto": "OR-165",
  "cantidad": 3,
  "precio_unidad": 10,
  "numero_linea": 2
},{
  "codigo_pedido": 35,
  "codigo_producto": "OR-181",
  "cantidad": 36,
  "precio_unidad": 10,
  "numero_linea": 1
},{
  "codigo_pedido": 35,
  "codigo_producto": "OR-225",
  "cantidad": 72,
  "precio_unidad": 10,
  "numero_linea": 5
},{
  "codigo_pedido": 36,
  "codigo_producto": "30310",
  "cantidad": 4,
  "precio_unidad": 12,
  "numero_linea": 2
},{
  "codigo_pedido": 36,
  "codigo_producto": "FR-1",
  "cantidad": 2,
  "precio_unidad": 7,
  "numero_linea": 3
},{
  "codigo_pedido": 36,
  "codigo_producto": "OR-147",
  "cantidad": 6,
  "precio_unidad": 7,
  "numero_linea": 4
},{
  "codigo_pedido": 36,
  "codigo_producto": "OR-203",
  "cantidad": 1,
  "precio_unidad": 12,
  "numero_linea": 5
},{
  "codigo_pedido": 36,
  "codigo_producto": "OR-99",
  "cantidad": 15,
  "precio_unidad": 13,
  "numero_linea": 1
},{
  "codigo_pedido": 37,
  "codigo_producto": "FR-105",
  "cantidad": 4,
  "precio_unidad": 70,
  "numero_linea": 1
},{
  "codigo_pedido": 37,
  "codigo_producto": "FR-57",
  "cantidad": 203,
  "precio_unidad": 8,
  "numero_linea": 2
},{
  "codigo_pedido": 37,
  "codigo_producto": "OR-176",
  "cantidad": 38,
  "precio_unidad": 10,
  "numero_linea": 3
},{
  "codigo_pedido": 38,
  "codigo_producto": "11679",
  "cantidad": 5,
  "precio_unidad": 14,
  "numero_linea": 1
},{
  "codigo_pedido": 38,
  "codigo_producto": "21636",
  "cantidad": 2,
  "precio_unidad": 14,
  "numero_linea": 2
},{
  "codigo_pedido": 39,
  "codigo_producto": "22225",
  "cantidad": 3,
  "precio_unidad": 12,
  "numero_linea": 1
},{
  "codigo_pedido": 39,
  "codigo_producto": "30310",
  "cantidad": 6,
  "precio_unidad": 12,
  "numero_linea": 2
},{
  "codigo_pedido": 40,
  "codigo_producto": "AR-001",
  "cantidad": 4,
  "precio_unidad": 1,
  "numero_linea": 1
},{
  "codigo_pedido": 40,
  "codigo_producto": "AR-002",
  "cantidad": 8,
  "precio_unidad": 1,
  "numero_linea": 2
},{
  "codigo_pedido": 41,
  "codigo_producto": "AR-003",
  "cantidad": 5,
  "precio_unidad": 1,
  "numero_linea": 1
},{
  "codigo_pedido": 41,
  "codigo_producto": "AR-004",
  "cantidad": 5,
  "precio_unidad": 1,
  "numero_linea": 2
},{
  "codigo_pedido": 42,
  "codigo_producto": "AR-005",
  "cantidad": 3,
  "precio_unidad": 1,
  "numero_linea": 1
},{
  "codigo_pedido": 42,
  "codigo_producto": "AR-006",
  "cantidad": 1,
  "precio_unidad": 1,
  "numero_linea": 2
},{
  "codigo_pedido": 43,
  "codigo_producto": "AR-007",
  "cantidad": 9,
  "precio_unidad": 1,
  "numero_linea": 1
},{
  "codigo_pedido": 44,
  "codigo_producto": "AR-008",
  "cantidad": 5,
  "precio_unidad": 1,
  "numero_linea": 1
},{
  "codigo_pedido": 45,
  "codigo_producto": "AR-009",
  "cantidad": 6,
  "precio_unidad": 1,
  "numero_linea": 1
},{
  "codigo_pedido": 45,
  "codigo_producto": "AR-010",
  "cantidad": 4,
  "precio_unidad": 1,
  "numero_linea": 2
},{
  "codigo_pedido": 46,
  "codigo_producto": "FR-1",
  "cantidad": 4,
  "precio_unidad": 7,
  "numero_linea": 1
},{
  "codigo_pedido": 46,
  "codigo_producto": "FR-10",
  "cantidad": 8,
  "precio_unidad": 7,
  "numero_linea": 2
},{
  "codigo_pedido": 47,
  "codigo_producto": "FR-100",
  "cantidad": 9,
  "precio_unidad": 11,
  "numero_linea": 1
},{
  "codigo_pedido": 47,
  "codigo_producto": "FR-101",
  "cantidad": 5,
  "precio_unidad": 13,
  "numero_linea": 2
},{
  "codigo_pedido": 48,
  "codigo_producto": "FR-102",
  "cantidad": 1,
  "precio_unidad": 18,
  "numero_linea": 1
},{
  "codigo_pedido": 48,
  "codigo_producto": "FR-103",
  "cantidad": 1,
  "precio_unidad": 25,
  "numero_linea": 2
},{
  "codigo_pedido": 48,
  "codigo_producto": "OR-234",
  "cantidad": 50,
  "precio_unidad": 64,
  "numero_linea": 1
},{
  "codigo_pedido": 48,
  "codigo_producto": "OR-236",
  "cantidad": 45,
  "precio_unidad": 49,
  "numero_linea": 2
},{
  "codigo_pedido": 48,
  "codigo_producto": "OR-237",
  "cantidad": 50,
  "precio_unidad": 19,
  "numero_linea": 3
},{
  "codigo_pedido": 49,
  "codigo_producto": "OR-204",
  "cantidad": 50,
  "precio_unidad": 10,
  "numero_linea": 1
},{
  "codigo_pedido": 49,
  "codigo_producto": "OR-205",
  "cantidad": 10,
  "precio_unidad": 10,
  "numero_linea": 2
},{
  "codigo_pedido": 49,
  "codigo_producto": "OR-206",
  "cantidad": 5,
  "precio_unidad": 5,
  "numero_linea": 3
},{
  "codigo_pedido": 50,
  "codigo_producto": "OR-225",
  "cantidad": 12,
  "precio_unidad": 10,
  "numero_linea": 1
},{
  "codigo_pedido": 50,
  "codigo_producto": "OR-226",
  "cantidad": 15,
  "precio_unidad": 38,
  "numero_linea": 2
},{
  "codigo_pedido": 50,
  "codigo_producto": "OR-227",
  "cantidad": 44,
  "precio_unidad": 64,
  "numero_linea": 3
},{
  "codigo_pedido": 51,
  "codigo_producto": "OR-209",
  "cantidad": 50,
  "precio_unidad": 10,
  "numero_linea": 1
},{
  "codigo_pedido": 51,
  "codigo_producto": "OR-210",
  "cantidad": 80,
  "precio_unidad": 39,
  "numero_linea": 2
},{
  "codigo_pedido": 51,
  "codigo_producto": "OR-211",
  "cantidad": 70,
  "precio_unidad": 59,
  "numero_linea": 3
},{
  "codigo_pedido": 53,
  "codigo_producto": "FR-2",
  "cantidad": 1,
  "precio_unidad": 7,
  "numero_linea": 1
},{
  "codigo_pedido": 53,
  "codigo_producto": "FR-85",
  "cantidad": 1,
  "precio_unidad": 70,
  "numero_linea": 3
},{
  "codigo_pedido": 53,
  "codigo_producto": "FR-86",
  "cantidad": 2,
  "precio_unidad": 11,
  "numero_linea": 2
},{
  "codigo_pedido": 53,
  "codigo_producto": "OR-116",
  "cantidad": 6,
  "precio_unidad": 7,
  "numero_linea": 4
},{
  "codigo_pedido": 54,
  "codigo_producto": "11679",
  "cantidad": 3,
  "precio_unidad": 14,
  "numero_linea": 3
},{
  "codigo_pedido": 54,
  "codigo_producto": "FR-100",
  "cantidad": 45,
  "precio_unidad": 10,
  "numero_linea": 2
},{
  "codigo_pedido": 54,
  "codigo_producto": "FR-18",
  "cantidad": 5,
  "precio_unidad": 4,
  "numero_linea": 1
},{
  "codigo_pedido": 54,
  "codigo_producto": "FR-79",
  "cantidad": 3,
  "precio_unidad": 22,
  "numero_linea": 4
},{
  "codigo_pedido": 54,
  "codigo_producto": "OR-116",
  "cantidad": 8,
  "precio_unidad": 7,
  "numero_linea": 6
},{
  "codigo_pedido": 54,
  "codigo_producto": "OR-123",
  "cantidad": 3,
  "precio_unidad": 5,
  "numero_linea": 5
},{
  "codigo_pedido": 54,
  "codigo_producto": "OR-168",
  "cantidad": 2,
  "precio_unidad": 10,
  "numero_linea": 7
},{
  "codigo_pedido": 55,
  "codigo_producto": "OR-115",
  "cantidad": 9,
  "precio_unidad": 7,
  "numero_linea": 1
},{
  "codigo_pedido": 55,
  "codigo_producto": "OR-213",
  "cantidad": 2,
  "precio_unidad": 266,
  "numero_linea": 2
},{
  "codigo_pedido": 55,
  "codigo_producto": "OR-227",
  "cantidad": 6,
  "precio_unidad": 64,
  "numero_linea": 5
},{
  "codigo_pedido": 55,
  "codigo_producto": "OR-243",
  "cantidad": 2,
  "precio_unidad": 64,
  "numero_linea": 4
},{
  "codigo_pedido": 55,
  "codigo_producto": "OR-247",
  "cantidad": 1,
  "precio_unidad": 462,
  "numero_linea": 3
},{
  "codigo_pedido": 56,
  "codigo_producto": "OR-129",
  "cantidad": 1,
  "precio_unidad": 115,
  "numero_linea": 5
},{
  "codigo_pedido": 56,
  "codigo_producto": "OR-130",
  "cantidad": 10,
  "precio_unidad": 18,
  "numero_linea": 6
},{
  "codigo_pedido": 56,
  "codigo_producto": "OR-179",
  "cantidad": 1,
  "precio_unidad": 6,
  "numero_linea": 3
},{
  "codigo_pedido": 56,
  "codigo_producto": "OR-196",
  "cantidad": 3,
  "precio_unidad": 10,
  "numero_linea": 4
},{
  "codigo_pedido": 56,
  "codigo_producto": "OR-207",
  "cantidad": 4,
  "precio_unidad": 4,
  "numero_linea": 2
},{
  "codigo_pedido": 56,
  "codigo_producto": "OR-250",
  "cantidad": 3,
  "precio_unidad": 10,
  "numero_linea": 1
},{
  "codigo_pedido": 57,
  "codigo_producto": "FR-69",
  "cantidad": 6,
  "precio_unidad": 91,
  "numero_linea": 4
},{
  "codigo_pedido": 57,
  "codigo_producto": "FR-81",
  "cantidad": 3,
  "precio_unidad": 49,
  "numero_linea": 3
},{
  "codigo_pedido": 57,
  "codigo_producto": "FR-84",
  "cantidad": 2,
  "precio_unidad": 13,
  "numero_linea": 1
},{
  "codigo_pedido": 57,
  "codigo_producto": "FR-94",
  "cantidad": 6,
  "precio_unidad": 9,
  "numero_linea": 2
},{
  "codigo_pedido": 58,
  "codigo_producto": "OR-102",
  "cantidad": 65,
  "precio_unidad": 18,
  "numero_linea": 3
},{
  "codigo_pedido": 58,
  "codigo_producto": "OR-139",
  "cantidad": 80,
  "precio_unidad": 4,
  "numero_linea": 1
},{
  "codigo_pedido": 58,
  "codigo_producto": "OR-172",
  "cantidad": 69,
  "precio_unidad": 15,
  "numero_linea": 2
},{
  "codigo_pedido": 58,
  "codigo_producto": "OR-177",
  "cantidad": 150,
  "precio_unidad": 15,
  "numero_linea": 4
},{
  "codigo_pedido": 74,
  "codigo_producto": "FR-67",
  "cantidad": 15,
  "precio_unidad": 70,
  "numero_linea": 1
},{
  "codigo_pedido": 74,
  "codigo_producto": "OR-227",
  "cantidad": 34,
  "precio_unidad": 64,
  "numero_linea": 2
},{
  "codigo_pedido": 74,
  "codigo_producto": "OR-247",
  "cantidad": 42,
  "precio_unidad": 8,
  "numero_linea": 3
},{
  "codigo_pedido": 75,
  "codigo_producto": "AR-006",
  "cantidad": 60,
  "precio_unidad": 1,
  "numero_linea": 2
},{
  "codigo_pedido": 75,
  "codigo_producto": "FR-87",
  "cantidad": 24,
  "precio_unidad": 22,
  "numero_linea": 3
},{
  "codigo_pedido": 75,
  "codigo_producto": "OR-157",
  "cantidad": 46,
  "precio_unidad": 10,
  "numero_linea": 1
},{
  "codigo_pedido": 76,
  "codigo_producto": "AR-009",
  "cantidad": 250,
  "precio_unidad": 1,
  "numero_linea": 5
},{
  "codigo_pedido": 76,
  "codigo_producto": "FR-79",
  "cantidad": 40,
  "precio_unidad": 22,
  "numero_linea": 3
},{
  "codigo_pedido": 76,
  "codigo_producto": "FR-87",
  "cantidad": 24,
  "precio_unidad": 22,
  "numero_linea": 4
},{
  "codigo_pedido": 76,
  "codigo_producto": "FR-94",
  "cantidad": 35,
  "precio_unidad": 9,
  "numero_linea": 1
},{
  "codigo_pedido": 76,
  "codigo_producto": "OR-196",
  "cantidad": 25,
  "precio_unidad": 10,
  "numero_linea": 2
},{
  "codigo_pedido": 77,
  "codigo_producto": "22225",
  "cantidad": 34,
  "precio_unidad": 12,
  "numero_linea": 2
},{
  "codigo_pedido": 77,
  "codigo_producto": "30310",
  "cantidad": 15,
  "precio_unidad": 12,
  "numero_linea": 1
},{
  "codigo_pedido": 78,
  "codigo_producto": "FR-53",
  "cantidad": 25,
  "precio_unidad": 8,
  "numero_linea": 2
},{
  "codigo_pedido": 78,
  "codigo_producto": "FR-85",
  "cantidad": 56,
  "precio_unidad": 70,
  "numero_linea": 3
},{
  "codigo_pedido": 78,
  "codigo_producto": "OR-157",
  "cantidad": 42,
  "precio_unidad": 10,
  "numero_linea": 4
},{
  "codigo_pedido": 78,
  "codigo_producto": "OR-208",
  "cantidad": 30,
  "precio_unidad": 4,
  "numero_linea": 1
},{
  "codigo_pedido": 79,
  "codigo_producto": "OR-240",
  "cantidad": 50,
  "precio_unidad": 6,
  "numero_linea": 1
},{
  "codigo_pedido": 80,
  "codigo_producto": "FR-11",
  "cantidad": 40,
  "precio_unidad": 100,
  "numero_linea": 3
},{
  "codigo_pedido": 80,
  "codigo_producto": "FR-36",
  "cantidad": 47,
  "precio_unidad": 9,
  "numero_linea": 2
},{
  "codigo_pedido": 80,
  "codigo_producto": "OR-136",
  "cantidad": 75,
  "precio_unidad": 18,
  "numero_linea": 1
},{
  "codigo_pedido": 81,
  "codigo_producto": "OR-208",
  "cantidad": 30,
  "precio_unidad": 4,
  "numero_linea": 1
},{
  "codigo_pedido": 82,
  "codigo_producto": "OR-227",
  "cantidad": 34,
  "precio_unidad": 64,
  "numero_linea": 1
},{
  "codigo_pedido": 83,
  "codigo_producto": "OR-208",
  "cantidad": 30,
  "precio_unidad": 4,
  "numero_linea": 1
},{
  "codigo_pedido": 89,
  "codigo_producto": "FR-108",
  "cantidad": 3,
  "precio_unidad": 32,
  "numero_linea": 2
},{
  "codigo_pedido": 89,
  "codigo_producto": "FR-3",
  "cantidad": 15,
  "precio_unidad": 7,
  "numero_linea": 6
},{
  "codigo_pedido": 89,
  "codigo_producto": "FR-42",
  "cantidad": 12,
  "precio_unidad": 8,
  "numero_linea": 4
},{
  "codigo_pedido": 89,
  "codigo_producto": "FR-66",
  "cantidad": 5,
  "precio_unidad": 49,
  "numero_linea": 1
},{
  "codigo_pedido": 89,
  "codigo_producto": "FR-87",
  "cantidad": 4,
  "precio_unidad": 22,
  "numero_linea": 3
},{
  "codigo_pedido": 89,
  "codigo_producto": "OR-157",
  "cantidad": 8,
  "precio_unidad": 10,
  "numero_linea": 5
},{
  "codigo_pedido": 90,
  "codigo_producto": "AR-001",
  "cantidad": 19,
  "precio_unidad": 1,
  "numero_linea": 1
},{
  "codigo_pedido": 90,
  "codigo_producto": "AR-002",
  "cantidad": 10,
  "precio_unidad": 1,
  "numero_linea": 2
},{
  "codigo_pedido": 90,
  "codigo_producto": "AR-003",
  "cantidad": 12,
  "precio_unidad": 1,
  "numero_linea": 3
},{
  "codigo_pedido": 91,
  "codigo_producto": "FR-100",
  "cantidad": 52,
  "precio_unidad": 11,
  "numero_linea": 1
},{
  "codigo_pedido": 91,
  "codigo_producto": "FR-101",
  "cantidad": 14,
  "precio_unidad": 13,
  "numero_linea": 2
},{
  "codigo_pedido": 91,
  "codigo_producto": "FR-102",
  "cantidad": 35,
  "precio_unidad": 18,
  "numero_linea": 3
},{
  "codigo_pedido": 92,
  "codigo_producto": "FR-108",
  "cantidad": 12,
  "precio_unidad": 23,
  "numero_linea": 1
},{
  "codigo_pedido": 92,
  "codigo_producto": "FR-11",
  "cantidad": 20,
  "precio_unidad": 100,
  "numero_linea": 2
},{
  "codigo_pedido": 92,
  "codigo_producto": "FR-12",
  "cantidad": 30,
  "precio_unidad": 21,
  "numero_linea": 3
},{
  "codigo_pedido": 93,
  "codigo_producto": "FR-54",
  "cantidad": 25,
  "precio_unidad": 9,
  "numero_linea": 1
},{
  "codigo_pedido": 93,
  "codigo_producto": "FR-58",
  "cantidad": 51,
  "precio_unidad": 11,
  "numero_linea": 2
},{
  "codigo_pedido": 93,
  "codigo_producto": "FR-60",
  "cantidad": 3,
  "precio_unidad": 32,
  "numero_linea": 3
},{
  "codigo_pedido": 94,
  "codigo_producto": "11679",
  "cantidad": 12,
  "precio_unidad": 14,
  "numero_linea": 1
},{
  "codigo_pedido": 94,
  "codigo_producto": "FR-11",
  "cantidad": 33,
  "precio_unidad": 100,
  "numero_linea": 3
},{
  "codigo_pedido": 94,
  "codigo_producto": "FR-4",
  "cantidad": 79,
  "precio_unidad": 29,
  "numero_linea": 2
},{
  "codigo_pedido": 95,
  "codigo_producto": "FR-10",
  "cantidad": 9,
  "precio_unidad": 7,
  "numero_linea": 2
},{
  "codigo_pedido": 95,
  "codigo_producto": "FR-75",
  "cantidad": 6,
  "precio_unidad": 32,
  "numero_linea": 1
},{
  "codigo_pedido": 95,
  "codigo_producto": "FR-82",
  "cantidad": 5,
  "precio_unidad": 70,
  "numero_linea": 3
},{
  "codigo_pedido": 96,
  "codigo_producto": "FR-43",
  "cantidad": 6,
  "precio_unidad": 8,
  "numero_linea": 1
},{
  "codigo_pedido": 96,
  "codigo_producto": "FR-6",
  "cantidad": 16,
  "precio_unidad": 7,
  "numero_linea": 4
},{
  "codigo_pedido": 96,
  "codigo_producto": "FR-71",
  "cantidad": 10,
  "precio_unidad": 22,
  "numero_linea": 3
},{
  "codigo_pedido": 96,
  "codigo_producto": "FR-90",
  "cantidad": 4,
  "precio_unidad": 70,
  "numero_linea": 2
},{
  "codigo_pedido": 97,
  "codigo_producto": "FR-41",
  "cantidad": 12,
  "precio_unidad": 8,
  "numero_linea": 1
},{
  "codigo_pedido": 97,
  "codigo_producto": "FR-54",
  "cantidad": 14,
  "precio_unidad": 9,
  "numero_linea": 2
},{
  "codigo_pedido": 97,
  "codigo_producto": "OR-156",
  "cantidad": 10,
  "precio_unidad": 10,
  "numero_linea": 3
},{
  "codigo_pedido": 98,
  "codigo_producto": "FR-33",
  "cantidad": 14,
  "precio_unidad": 8,
  "numero_linea": 4
},{
  "codigo_pedido": 98,
  "codigo_producto": "FR-56",
  "cantidad": 16,
  "precio_unidad": 8,
  "numero_linea": 3
},{
  "codigo_pedido": 98,
  "codigo_producto": "FR-60",
  "cantidad": 8,
  "precio_unidad": 32,
  "numero_linea": 1
},{
  "codigo_pedido": 98,
  "codigo_producto": "FR-8",
  "cantidad": 18,
  "precio_unidad": 6,
  "numero_linea": 5
},{
  "codigo_pedido": 98,
  "codigo_producto": "FR-85",
  "cantidad": 6,
  "precio_unidad": 70,
  "numero_linea": 2
},{
  "codigo_pedido": 99,
  "codigo_producto": "OR-157",
  "cantidad": 15,
  "precio_unidad": 10,
  "numero_linea": 2
},{
  "codigo_pedido": 99,
  "codigo_producto": "OR-227",
  "cantidad": 30,
  "precio_unidad": 64,
  "numero_linea": 1
},{
  "codigo_pedido": 100,
  "codigo_producto": "FR-87",
  "cantidad": 20,
  "precio_unidad": 22,
  "numero_linea": 1
},{
  "codigo_pedido": 100,
  "codigo_producto": "FR-94",
  "cantidad": 40,
  "precio_unidad": 9,
  "numero_linea": 2
},{
  "codigo_pedido": 101,
  "codigo_producto": "AR-006",
  "cantidad": 50,
  "precio_unidad": 1,
  "numero_linea": 1
},{
  "codigo_pedido": 101,
  "codigo_producto": "AR-009",
  "cantidad": 159,
  "precio_unidad": 1,
  "numero_linea": 2
},{
  "codigo_pedido": 102,
  "codigo_producto": "22225",
  "cantidad": 32,
  "precio_unidad": 12,
  "numero_linea": 2
},{
  "codigo_pedido": 102,
  "codigo_producto": "30310",
  "cantidad": 23,
  "precio_unidad": 12,
  "numero_linea": 1
},{
  "codigo_pedido": 103,
  "codigo_producto": "FR-53",
  "cantidad": 12,
  "precio_unidad": 8,
  "numero_linea": 2
},{
  "codigo_pedido": 103,
  "codigo_producto": "OR-208",
  "cantidad": 52,
  "precio_unidad": 4,
  "numero_linea": 1
},{
  "codigo_pedido": 104,
  "codigo_producto": "FR-85",
  "cantidad": 9,
  "precio_unidad": 70,
  "numero_linea": 1
},{
  "codigo_pedido": 104,
  "codigo_producto": "OR-157",
  "cantidad": 113,
  "precio_unidad": 10,
  "numero_linea": 2
},{
  "codigo_pedido": 105,
  "codigo_producto": "OR-227",
  "cantidad": 21,
  "precio_unidad": 64,
  "numero_linea": 2
},{
  "codigo_pedido": 105,
  "codigo_producto": "OR-240",
  "cantidad": 27,
  "precio_unidad": 6,
  "numero_linea": 1
},{
  "codigo_pedido": 106,
  "codigo_producto": "AR-009",
  "cantidad": 231,
  "precio_unidad": 1,
  "numero_linea": 1
},{
  "codigo_pedido": 106,
  "codigo_producto": "OR-136",
  "cantidad": 47,
  "precio_unidad": 18,
  "numero_linea": 2
},{
  "codigo_pedido": 107,
  "codigo_producto": "30310",
  "cantidad": 143,
  "precio_unidad": 12,
  "numero_linea": 2
},{
  "codigo_pedido": 107,
  "codigo_producto": "FR-11",
  "cantidad": 15,
  "precio_unidad": 100,
  "numero_linea": 1
},{
  "codigo_pedido": 108,
  "codigo_producto": "FR-53",
  "cantidad": 53,
  "precio_unidad": 8,
  "numero_linea": 1
},{
  "codigo_pedido": 108,
  "codigo_producto": "OR-208",
  "cantidad": 59,
  "precio_unidad": 4,
  "numero_linea": 2
},{
  "codigo_pedido": 109,
  "codigo_producto": "FR-22",
  "cantidad": 8,
  "precio_unidad": 4,
  "numero_linea": 5
},{
  "codigo_pedido": 109,
  "codigo_producto": "FR-36",
  "cantidad": 12,
  "precio_unidad": 9,
  "numero_linea": 3
},{
  "codigo_pedido": 109,
  "codigo_producto": "FR-45",
  "cantidad": 14,
  "precio_unidad": 8,
  "numero_linea": 4
},{
  "codigo_pedido": 109,
  "codigo_producto": "OR-104",
  "cantidad": 20,
  "precio_unidad": 10,
  "numero_linea": 1
},{
  "codigo_pedido": 109,
  "codigo_producto": "OR-119",
  "cantidad": 10,
  "precio_unidad": 5,
  "numero_linea": 2
},{
  "codigo_pedido": 109,
  "codigo_producto": "OR-125",
  "cantidad": 3,
  "precio_unidad": 5,
  "numero_linea": 6
},{
  "codigo_pedido": 109,
  "codigo_producto": "OR-130",
  "cantidad": 2,
  "precio_unidad": 18,
  "numero_linea": 7
},{
  "codigo_pedido": 110,
  "codigo_producto": "AR-010",
  "cantidad": 6,
  "precio_unidad": 1,
  "numero_linea": 3
},{
  "codigo_pedido": 110,
  "codigo_producto": "FR-1",
  "cantidad": 14,
  "precio_unidad": 7,
  "numero_linea": 1
},{
  "codigo_pedido": 110,
  "codigo_producto": "FR-16",
  "cantidad": 1,
  "precio_unidad": 45,
  "numero_linea": 2
},{
  "codigo_pedido": 116,
  "codigo_producto": "21636",
  "cantidad": 5,
  "precio_unidad": 14,
  "numero_linea": 1
},{
  "codigo_pedido": 116,
  "codigo_producto": "AR-001",
  "cantidad": 32,
  "precio_unidad": 1,
  "numero_linea": 2
},{
  "codigo_pedido": 116,
  "codigo_producto": "AR-005",
  "cantidad": 18,
  "precio_unidad": 1,
  "numero_linea": 5
},{
  "codigo_pedido": 116,
  "codigo_producto": "FR-33",
  "cantidad": 13,
  "precio_unidad": 8,
  "numero_linea": 3
},{
  "codigo_pedido": 116,
  "codigo_producto": "OR-200",
  "cantidad": 10,
  "precio_unidad": 4,
  "numero_linea": 4
},{
  "codigo_pedido": 117,
  "codigo_producto": "FR-78",
  "cantidad": 2,
  "precio_unidad": 15,
  "numero_linea": 1
},{
  "codigo_pedido": 117,
  "codigo_producto": "FR-80",
  "cantidad": 1,
  "precio_unidad": 32,
  "numero_linea": 3
},{
  "codigo_pedido": 117,
  "codigo_producto": "OR-146",
  "cantidad": 17,
  "precio_unidad": 4,
  "numero_linea": 2
},{
  "codigo_pedido": 117,
  "codigo_producto": "OR-179",
  "cantidad": 4,
  "precio_unidad": 6,
  "numero_linea": 4
},{
  "codigo_pedido": 128,
  "codigo_producto": "AR-004",
  "cantidad": 15,
  "precio_unidad": 1,
  "numero_linea": 1
},{
  "codigo_pedido": 128,
  "codigo_producto": "OR-150",
  "cantidad": 18,
  "precio_unidad": 2,
  "numero_linea": 2
},{
  "codigo_pedido": 52,
  "codigo_producto": "FR-67",
  "cantidad": 10,
  "precio_unidad": 70,
  "numero_linea": 1
},{
  "codigo_pedido": 59,
  "codigo_producto": "FR-67",
  "cantidad": 10,
  "precio_unidad": 70,
  "numero_linea": 1
},{
  "codigo_pedido": 60,
  "codigo_producto": "FR-67",
  "cantidad": 10,
  "precio_unidad": 70,
  "numero_linea": 1
},{
  "codigo_pedido": 61,
  "codigo_producto": "FR-67",
  "cantidad": 10,
  "precio_unidad": 70,
  "numero_linea": 1
},{
  "codigo_pedido": 62,
  "codigo_producto": "FR-67",
  "cantidad": 10,
  "precio_unidad": 70,
  "numero_linea": 1
},{
  "codigo_pedido": 63,
  "codigo_producto": "FR-67",
  "cantidad": 10,
  "precio_unidad": 70,
  "numero_linea": 1
},{
  "codigo_pedido": 64,
  "codigo_producto": "FR-67",
  "cantidad": 10,
  "precio_unidad": 70,
  "numero_linea": 1
},{
  "codigo_pedido": 65,
  "codigo_producto": "FR-67",
  "cantidad": 10,
  "precio_unidad": 70,
  "numero_linea": 1
},{
  "codigo_pedido": 66,
  "codigo_producto": "FR-67",
  "cantidad": 10,
  "precio_unidad": 70,
  "numero_linea": 1
},{
  "codigo_pedido": 67,
  "codigo_producto": "FR-67",
  "cantidad": 10,
  "precio_unidad": 70,
  "numero_linea": 1
},{
  "codigo_pedido": 68,
  "codigo_producto": "FR-67",
  "cantidad": 10,
  "precio_unidad": 70,
  "numero_linea": 1
},{
  "codigo_pedido": 111,
  "codigo_producto": "FR-67",
  "cantidad": 10,
  "precio_unidad": 70,
  "numero_linea": 1
},{
  "codigo_pedido": 112,
  "codigo_producto": "FR-67",
  "cantidad": 10,
  "precio_unidad": 70,
  "numero_linea": 1
},{
  "codigo_pedido": 113,
  "codigo_producto": "FR-67",
  "cantidad": 10,
  "precio_unidad": 70,
  "numero_linea": 1
},{
  "codigo_pedido": 114,
  "codigo_producto": "FR-67",
  "cantidad": 10,
  "precio_unidad": 70,
  "numero_linea": 1
},{
  "codigo_pedido": 115,
  "codigo_producto": "FR-67",
  "cantidad": 10,
  "precio_unidad": 70,
  "numero_linea": 1
},{
  "codigo_pedido": 118,
  "codigo_producto": "FR-67",
  "cantidad": 10,
  "precio_unidad": 70,
  "numero_linea": 1
},{
  "codigo_pedido": 119,
  "codigo_producto": "FR-67",
  "cantidad": 10,
  "precio_unidad": 70,
  "numero_linea": 1
},{
  "codigo_pedido": 120,
  "codigo_producto": "FR-67",
  "cantidad": 10,
  "precio_unidad": 70,
  "numero_linea": 1
},{
  "codigo_pedido": 121,
  "codigo_producto": "FR-67",
  "cantidad": 10,
  "precio_unidad": 70,
  "numero_linea": 1
},{
  "codigo_pedido": 122,
  "codigo_producto": "FR-67",
  "cantidad": 10,
  "precio_unidad": 70,
  "numero_linea": 1
},{
  "codigo_pedido": 123,
  "codigo_producto": "FR-67",
  "cantidad": 10,
  "precio_unidad": 70,
  "numero_linea": 1
},{
  "codigo_pedido": 124,
  "codigo_producto": "FR-67",
  "cantidad": 10,
  "precio_unidad": 70,
  "numero_linea": 1
},{
  "codigo_pedido": 125,
  "codigo_producto": "FR-67",
  "cantidad": 10,
  "precio_unidad": 70,
  "numero_linea": 1
},{
  "codigo_pedido": 126,
  "codigo_producto": "FR-67",
  "cantidad": 10,
  "precio_unidad": 70,
  "numero_linea": 1
},{
  "codigo_pedido": 127,
  "codigo_producto": "FR-67",
  "cantidad": 10,
  "precio_unidad": 70,
  "numero_linea": 1
}]):

db.empleado.insertMany([{
  "codigo_empleado": 2,
  "nombre": "Ruben",
  "apellido1": "López",
  "apellido2": "Martinez",
  "extension": "2899",
  "email": "rlopez@jardineria.es",
  "codigo_oficina": "TAL-ES",
  "codigo_jefe": 1,
  "puesto": "Subdirector Marketing"
},{
  "codigo_empleado": 3,
  "nombre": "Alberto",
  "apellido1": "Soria",
  "apellido2": "Carrasco",
  "extension": "2837",
  "email": "asoria@jardineria.es",
  "codigo_oficina": "TAL-ES",
  "codigo_jefe": 2,
  "puesto": "Subdirector Ventas"
},{
  "codigo_empleado": 4,
  "nombre": "Maria",
  "apellido1": "Solís",
  "apellido2": "Jerez",
  "extension": "2847",
  "email": "msolis@jardineria.es",
  "codigo_oficina": "TAL-ES",
  "codigo_jefe": 2,
  "puesto": "Secretaria"
},{
  "codigo_empleado": 5,
  "nombre": "Felipe",
  "apellido1": "Rosas",
  "apellido2": "Marquez",
  "extension": "2844",
  "email": "frosas@jardineria.es",
  "codigo_oficina": "TAL-ES",
  "codigo_jefe": 3,
  "puesto": "Representante Ventas"
},{
  "codigo_empleado": 6,
  "nombre": "Juan Carlos",
  "apellido1": "Ortiz",
  "apellido2": "Serrano",
  "extension": "2845",
  "email": "cortiz@jardineria.es",
  "codigo_oficina": "TAL-ES",
  "codigo_jefe": 3,
  "puesto": "Representante Ventas"
},{
  "codigo_empleado": 7,
  "nombre": "Carlos",
  "apellido1": "Soria",
  "apellido2": "Jimenez",
  "extension": "2444",
  "email": "csoria@jardineria.es",
  "codigo_oficina": "MAD-ES",
  "codigo_jefe": 3,
  "puesto": "Director Oficina"
},{
  "codigo_empleado": 8,
  "nombre": "Mariano",
  "apellido1": "López",
  "apellido2": "Murcia",
  "extension": "2442",
  "email": "mlopez@jardineria.es",
  "codigo_oficina": "MAD-ES",
  "codigo_jefe": 7,
  "puesto": "Representante Ventas"
},{
  "codigo_empleado": 9,
  "nombre": "Lucio",
  "apellido1": "Campoamor",
  "apellido2": "Martín",
  "extension": "2442",
  "email": "lcampoamor@jardineria.es",
  "codigo_oficina": "MAD-ES",
  "codigo_jefe": 7,
  "puesto": "Representante Ventas"
},{
  "codigo_empleado": 10,
  "nombre": "Hilario",
  "apellido1": "Rodriguez",
  "apellido2": "Huertas",
  "extension": "2444",
  "email": "hrodriguez@jardineria.es",
  "codigo_oficina": "MAD-ES",
  "codigo_jefe": 7,
  "puesto": "Representante Ventas"
},{
  "codigo_empleado": 11,
  "nombre": "Emmanuel",
  "apellido1": "Magaña",
  "apellido2": "Perez",
  "extension": "2518",
  "email": "manu@jardineria.es",
  "codigo_oficina": "BCN-ES",
  "codigo_jefe": 3,
  "puesto": "Director Oficina"
},{
  "codigo_empleado": 12,
  "nombre": "José Manuel",
  "apellido1": "Martinez",
  "apellido2": "De la Osa",
  "extension": "2519",
  "email": "jmmart@hotmail.es",
  "codigo_oficina": "BCN-ES",
  "codigo_jefe": 11,
  "puesto": "Representante Ventas"
},{
  "codigo_empleado": 13,
  "nombre": "David",
  "apellido1": "Palma",
  "apellido2": "Aceituno",
  "extension": "2519",
  "email": "dpalma@jardineria.es",
  "codigo_oficina": "BCN-ES",
  "codigo_jefe": 11,
  "puesto": "Representante Ventas"
},{
  "codigo_empleado": 14,
  "nombre": "Oscar",
  "apellido1": "Palma",
  "apellido2": "Aceituno",
  "extension": "2519",
  "email": "opalma@jardineria.es",
  "codigo_oficina": "BCN-ES",
  "codigo_jefe": 11,
  "puesto": "Representante Ventas"
},{
  "codigo_empleado": 15,
  "nombre": "Francois",
  "apellido1": "Fignon",
  "extension": "9981",
  "email": "ffignon@gardening.com",
  "codigo_oficina": "PAR-FR",
  "codigo_jefe": 3,
  "puesto": "Director Oficina"
},{
  "codigo_empleado": 16,
  "nombre": "Lionel",
  "apellido1": "Narvaez",
  "extension": "9982",
  "email": "lnarvaez@gardening.com",
  "codigo_oficina": "PAR-FR",
  "codigo_jefe": 15,
  "puesto": "Representante Ventas"
},{
  "codigo_empleado": 17,
  "nombre": "Laurent",
  "apellido1": "Serra",
  "extension": "9982",
  "email": "lserra@gardening.com",
  "codigo_oficina": "PAR-FR",
  "codigo_jefe": 15,
  "puesto": "Representante Ventas"
},{
  "codigo_empleado": 18,
  "nombre": "Michael",
  "apellido1": "Bolton",
  "extension": "7454",
  "email": "mbolton@gardening.com",
  "codigo_oficina": "SFC-USA",
  "codigo_jefe": 3,
  "puesto": "Director Oficina"
},{
  "codigo_empleado": 19,
  "nombre": "Walter Santiago",
  "apellido1": "Sanchez",
  "apellido2": "Lopez",
  "extension": "7454",
  "email": "wssanchez@gardening.com",
  "codigo_oficina": "SFC-USA",
  "codigo_jefe": 18,
  "puesto": "Representante Ventas"
},{
  "codigo_empleado": 20,
  "nombre": "Hilary",
  "apellido1": "Washington",
  "extension": "7565",
  "email": "hwashington@gardening.com",
  "codigo_oficina": "BOS-USA",
  "codigo_jefe": 3,
  "puesto": "Director Oficina"
},{
  "codigo_empleado": 21,
  "nombre": "Marcus",
  "apellido1": "Paxton",
  "extension": "7565",
  "email": "mpaxton@gardening.com",
  "codigo_oficina": "BOS-USA",
  "codigo_jefe": 20,
  "puesto": "Representante Ventas"
},{
  "codigo_empleado": 22,
  "nombre": "Lorena",
  "apellido1": "Paxton",
  "extension": "7665",
  "email": "lpaxton@gardening.com",
  "codigo_oficina": "BOS-USA",
  "codigo_jefe": 20,
  "puesto": "Representante Ventas"
},{
  "codigo_empleado": 23,
  "nombre": "Nei",
  "apellido1": "Nishikori",
  "extension": "8734",
  "email": "nnishikori@gardening.com",
  "codigo_oficina": "TOK-JP",
  "codigo_jefe": 3,
  "puesto": "Director Oficina"
},{
  "codigo_empleado": 24,
  "nombre": "Narumi",
  "apellido1": "Riko",
  "extension": "8734",
  "email": "nriko@gardening.com",
  "codigo_oficina": "TOK-JP",
  "codigo_jefe": 23,
  "puesto": "Representante Ventas"
},{
  "codigo_empleado": 25,
  "nombre": "Takuma",
  "apellido1": "Nomura",
  "extension": "8735",
  "email": "tnomura@gardening.com",
  "codigo_oficina": "TOK-JP",
  "codigo_jefe": 23,
  "puesto": "Representante Ventas"
},{
  "codigo_empleado": 26,
  "nombre": "Amy",
  "apellido1": "Johnson",
  "extension": "3321",
  "email": "ajohnson@gardening.com",
  "codigo_oficina": "LON-UK",
  "codigo_jefe": 3,
  "puesto": "Director Oficina"
},{
  "codigo_empleado": 27,
  "nombre": "Larry",
  "apellido1": "Westfalls",
  "extension": "3322",
  "email": "lwestfalls@gardening.com",
  "codigo_oficina": "LON-UK",
  "codigo_jefe": 26,
  "puesto": "Representante Ventas"
},{
  "codigo_empleado": 28,
  "nombre": "John",
  "apellido1": "Walton",
  "extension": "3322",
  "email": "jwalton@gardening.com",
  "codigo_oficina": "LON-UK",
  "codigo_jefe": 26,
  "puesto": "Representante Ventas"
},{
  "codigo_empleado": 29,
  "nombre": "Kevin",
  "apellido1": "Fallmer",
  "extension": "3210",
  "email": "kfalmer@gardening.com",
  "codigo_oficina": "SYD-AU",
  "codigo_jefe": 3,
  "puesto": "Director Oficina"
},{
  "codigo_empleado": 30,
  "nombre": "Julian",
  "apellido1": "Bellinelli",
  "extension": "3211",
  "email": "jbellinelli@gardening.com",
  "codigo_oficina": "SYD-AU",
  "codigo_jefe": 29,
  "puesto": "Representante Ventas"
},{
  "codigo_empleado": 31,
  "nombre": "Mariko",
  "apellido1": "Kishi",
  "extension": "3211",
  "email": "mkishi@gardening.com",
  "codigo_oficina": "SYD-AU",
  "codigo_jefe": 29,
  "puesto": "Representante Ventas"
}]);

db.gama_producto.insertMany([{
  "gama": "Herbaceas",
  "descripcion_texto": "Plantas para jardin decorativas",
  "descripcion_html": "NULL",
  "imagen": "NULL\r"
},{
  "gama": "Herramientas",
  "descripcion_texto": "Herramientas para todo tipo de acción",
  "descripcion_html": "NULL",
  "imagen": "NULL\r"
},{
  "gama": "Aromáticas",
  "descripcion_texto": "Plantas aromáticas",
  "descripcion_html": "NULL",
  "imagen": "NULL\r"
},{
  "gama": "Frutales",
  "descripcion_texto": "Árboles pequeños de producción frutal",
  "descripcion_html": "NULL",
  "imagen": "NULL\r"
},{
  "gama": "Ornamentales",
  "descripcion_texto": "Plantas vistosas para la decoración del jardín",
  "descripcion_html": "NULL",
  "imagen": "NULL\r"
}]);

db.pago.insertMany([{
  "codigo_cliente": 1,
  "forma_pago": "PayPal",
  "id_transaccion": "ak-std-000001",
  "fecha_pago": ISODate("2008-11-10"),
  "total": 2000
},{
  "codigo_cliente": 1,
  "forma_pago": "PayPal",
  "id_transaccion": "ak-std-000002",
  "fecha_pago": ISODate("2008-12-10"),
  "total": 2000
},{
  "codigo_cliente": 3,
  "forma_pago": "PayPal",
  "id_transaccion": "ak-std-000003",
  "fecha_pago": ISODate("2009-01-16"),
  "total": 5000
},{
  "codigo_cliente": 3,
  "forma_pago": "PayPal",
  "id_transaccion": "ak-std-000004",
  "fecha_pago": ISODate("2009-02-16"),
  "total": 5000
},{
  "codigo_cliente": 3,
  "forma_pago": "PayPal",
  "id_transaccion": "ak-std-000005",
  "fecha_pago": ISODate("2009-02-19"),
  "total": 926
},{
  "codigo_cliente": 4,
  "forma_pago": "PayPal",
  "id_transaccion": "ak-std-000006",
  "fecha_pago": ISODate("2007-01-08"),
  "total": 20000
},{
  "codigo_cliente": 4,
  "forma_pago": "PayPal",
  "id_transaccion": "ak-std-000007",
  "fecha_pago": ISODate("2007-01-08"),
  "total": 20000
},{
  "codigo_cliente": 4,
  "forma_pago": "PayPal",
  "id_transaccion": "ak-std-000008",
  "fecha_pago": ISODate("2007-01-08"),
  "total": 20000
},{
  "codigo_cliente": 4,
  "forma_pago": "PayPal",
  "id_transaccion": "ak-std-000009",
  "fecha_pago": ISODate("2007-01-08"),
  "total": 20000
},{
  "codigo_cliente": 4,
  "forma_pago": "PayPal",
  "id_transaccion": "ak-std-000010",
  "fecha_pago": ISODate("2007-01-08"),
  "total": 1849
}

,{
  "codigo_cliente": 5,
  "forma_pago": "Transferencia",
  "id_transaccion": "ak-std-000011",
  "fecha_pago": ISODate("2006-01-18T00:00:00Z"),
  "total": 23794
},{
  "codigo_cliente": 7,
  "forma_pago": "Cheque",
  "id_transaccion": "ak-std-000012",
  "fecha_pago": ISODate("2009-01-13T00:00:00Z"),
  "total": 2390
},{
  "codigo_cliente": 9,
  "forma_pago": "PayPal",
  "id_transaccion": "ak-std-000013",
  "fecha_pago": ISODate("2009-01-06T00:00:00Z"),
  "total": 929
},{
  "codigo_cliente": 13,
  "forma_pago": "PayPal",
  "id_transaccion": "ak-std-000014",
  "fecha_pago": ISODate("2008-08-04T00:00:00Z"),
  "total": 2246
},{
  "codigo_cliente": 14,
  "forma_pago": "PayPal",
  "id_transaccion": "ak-std-000015",
  "fecha_pago": ISODate("2008-07-15T00:00:00Z"),
  "total": 4160
},{
  "codigo_cliente": 15,
  "forma_pago": "PayPal",
  "id_transaccion": "ak-std-000016",
  "fecha_pago": ISODate("2009-01-15T00:00:00Z"),
  "total": 2081
},{
  "codigo_cliente": 15,
  "forma_pago": "PayPal",
  "id_transaccion": "ak-std-000035",
  "fecha_pago": ISODate("2009-02-15T00:00:00Z"),
  "total": 10000
},{
  "codigo_cliente": 16,
  "forma_pago": "PayPal",
  "id_transaccion": "ak-std-000017",
  "fecha_pago": ISODate("2009-02-16T00:00:00Z"),
  "total": 4399
},{
  "codigo_cliente": 19,
  "forma_pago": "PayPal",
  "id_transaccion": "ak-std-000018",
  "fecha_pago": ISODate("2009-03-06T00:00:00Z"),
  "total": 232
},{
  "codigo_cliente": 23,
  "forma_pago": "PayPal",
  "id_transaccion": "ak-std-000019",
  "fecha_pago": ISODate("2009-03-26T00:00:00Z"),
  "total": 272
}
,{
  "codigo_cliente": 26,
  "forma_pago": "PayPal",
  "id_transaccion": "ak-std-000020",
  "fecha_pago": ISODate("2008-03-18T00:00:00Z"),
  "total": 18846
},{
  "codigo_cliente": 27,
  "forma_pago": "PayPal",
  "id_transaccion": "ak-std-000021",
  "fecha_pago": ISODate("2009-02-08T00:00:00Z"),
  "total": 10972
},{
  "codigo_cliente": 28,
  "forma_pago": "PayPal",
  "id_transaccion": "ak-std-000022",
  "fecha_pago": ISODate("2009-01-13T00:00:00Z"),
  "total": 8489
},{
  "codigo_cliente": 30,
  "forma_pago": "PayPal",
  "id_transaccion": "ak-std-000024",
  "fecha_pago": ISODate("2009-01-16T00:00:00Z"),
  "total": 7863
},{
  "codigo_cliente": 35,
  "forma_pago": "PayPal",
  "id_transaccion": "ak-std-000025",
  "fecha_pago": ISODate("2007-10-06T00:00:00Z"),
  "total": 3321
},{
  "codigo_cliente": 38,
  "forma_pago": "PayPal",
  "id_transaccion": "ak-std-000026",
  "fecha_pago": ISODate("2006-05-26T00:00:00Z"),
  "total": 1171
}
]);

db.pedido.insertMany([{
  "codigo_pedido": 1,
  "fecha_pedido": "2006-01-17",
  "fecha_esperada": "2006-01-19",
  "fecha_entrega": {
    "$date": "2006-01-19T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "Pagado a plazos",
  "codigo_cliente": 5
},{
  "codigo_pedido": 2,
  "fecha_pedido": "2007-10-23",
  "fecha_esperada": "2007-10-28",
  "fecha_entrega": {
    "$date": "2007-10-26T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "La entrega llego antes de lo esperado",
  "codigo_cliente": 5
},{
  "codigo_pedido": 8,
  "fecha_pedido": "2008-11-09",
  "fecha_esperada": "2008-11-14",
  "fecha_entrega": {
    "$date": "2008-11-14T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "El cliente paga la mitad con tarjeta y la otra mitad con efectivo, se le realizan dos facturas",
  "codigo_cliente": 1
},{
  "codigo_pedido": 9,
  "fecha_pedido": "2008-12-22",
  "fecha_esperada": "2008-12-27",
  "fecha_entrega": {
    "$date": "2008-12-28T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "El cliente comprueba la integridad del paquete, todo correcto",
  "codigo_cliente": 1
},{
  "codigo_pedido": 13,
  "fecha_pedido": "2009-01-12",
  "fecha_esperada": "2009-01-14",
  "fecha_entrega": {
    "$date": "2009-01-15T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "NULL",
  "codigo_cliente": 7
},{
  "codigo_pedido": 15,
  "fecha_pedido": "2009-01-09",
  "fecha_esperada": "2009-01-12",
  "fecha_entrega": {
    "$date": "2009-01-11T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "NULL",
  "codigo_cliente": 7
},{
  "codigo_pedido": 16,
  "fecha_pedido": "2009-01-06",
  "fecha_esperada": "2009-01-07",
  "fecha_entrega": {
    "$date": "2009-01-15T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "NULL",
  "codigo_cliente": 7
},{
  "codigo_pedido": 17,
  "fecha_pedido": "2009-01-08",
  "fecha_esperada": "2009-01-09",
  "fecha_entrega": {
    "$date": "2009-01-11T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "mal estado",
  "codigo_cliente": 7
},{
  "codigo_pedido": 18,
  "fecha_pedido": "2009-01-05",
  "fecha_esperada": "2009-01-06",
  "fecha_entrega": {
    "$date": "2009-01-07T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "NULL",
  "codigo_cliente": 9
},{
  "codigo_pedido": 21,
  "fecha_pedido": "2009-01-09",
  "fecha_esperada": "2009-01-09",
  "fecha_entrega": {
    "$date": "2009-01-09T00:00:00.000Z"
  },
  "estado": "Rechazado",
  "comentarios": "mal pago",
  "codigo_cliente": 9
},{
  "codigo_pedido": 22,
  "fecha_pedido": "2009-01-11",
  "fecha_esperada": "2009-01-11",
  "fecha_entrega": {
    "$date": "2009-01-13T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "NULL",
  "codigo_cliente": 9
},{
  "codigo_pedido": 24,
  "fecha_pedido": "2008-07-14",
  "fecha_esperada": "2008-07-31",
  "fecha_entrega": {
    "$date": "2008-07-25T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "NULL",
  "codigo_cliente": 14
},{
  "codigo_pedido": 28,
  "fecha_pedido": "2009-02-10",
  "fecha_esperada": "2009-02-17",
  "fecha_entrega": {
    "$date": "2009-02-20T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "El cliente se queja bastante de la espera asociada al producto",
  "codigo_cliente": 3
},{
  "codigo_pedido": 29,
  "fecha_pedido": "2008-08-01",
  "fecha_esperada": "2008-09-01",
  "fecha_entrega": {
    "$date": "2008-09-01T00:00:00.000Z"
  },
  "estado": "Rechazado",
  "comentarios": "El cliente no está conforme con el pedido",
  "codigo_cliente": 14
},{
  "codigo_pedido": 30,
  "fecha_pedido": "2008-08-03",
  "fecha_esperada": "2008-09-03",
  "fecha_entrega": {
    "$date": "2008-08-31T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "NULL",
  "codigo_cliente": 13
},{
  "codigo_pedido": 31,
  "fecha_pedido": "2008-09-04",
  "fecha_esperada": "2008-09-30",
  "fecha_entrega": {
    "$date": "2008-10-04T00:00:00.000Z"
  },
  "estado": "Rechazado",
  "comentarios": "El cliente ha rechazado por llegar 5 dias tarde",
  "codigo_cliente": 13
},{
  "codigo_pedido": 32,
  "fecha_pedido": "2007-01-07",
  "fecha_esperada": "2007-01-19",
  "fecha_entrega": {
    "$date": "2007-01-27T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "Entrega tardia, el cliente puso reclamacion",
  "codigo_cliente": 4
},{
  "codigo_pedido": 34,
  "fecha_pedido": "2007-06-20",
  "fecha_esperada": "2008-06-28",
  "fecha_entrega": {
    "$date": "2008-06-28T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "Pagado a plazos",
  "codigo_cliente": 4
},{
  "codigo_pedido": 36,
  "fecha_pedido": "2008-10-15",
  "fecha_esperada": "2008-12-15",
  "fecha_entrega": {
    "$date": "2008-12-10T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "NULL",
  "codigo_cliente": 14
},{
  "codigo_pedido": 38,
  "fecha_pedido": "2009-03-05",
  "fecha_esperada": "2009-03-06",
  "fecha_entrega": {
    "$date": "2009-03-07T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "NULL",
  "codigo_cliente": 19
},{
  "codigo_pedido": 39,
  "fecha_pedido": "2009-03-06",
  "fecha_esperada": "2009-03-07",
  "fecha_entrega": {
    "$date": "2009-03-09T00:00:00.000Z"
  },
  "estado": "Pendiente",
  "comentarios": "NULL",
  "codigo_cliente": 19
},{
  "codigo_pedido": 40,
  "fecha_pedido": "2009-03-09",
  "fecha_esperada": "2009-03-10",
  "fecha_entrega": {
    "$date": "2009-03-13T00:00:00.000Z"
  },
  "estado": "Rechazado",
  "comentarios": "NULL",
  "codigo_cliente": 19
},{
  "codigo_pedido": 41,
  "fecha_pedido": "2009-03-12",
  "fecha_esperada": "2009-03-13",
  "fecha_entrega": {
    "$date": "2009-03-13T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "NULL",
  "codigo_cliente": 19
},{
  "codigo_pedido": 42,
  "fecha_pedido": "2009-03-22",
  "fecha_esperada": "2009-03-23",
  "fecha_entrega": {
    "$date": "2009-03-27T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "NULL",
  "codigo_cliente": 19
},{
  "codigo_pedido": 43,
  "fecha_pedido": "2009-03-25",
  "fecha_esperada": "2009-03-26",
  "fecha_entrega": {
    "$date": "2009-03-28T00:00:00.000Z"
  },
  "estado": "Pendiente",
  "comentarios": "NULL",
  "codigo_cliente": 23
},{
  "codigo_pedido": 44,
  "fecha_pedido": "2009-03-26",
  "fecha_esperada": "2009-03-27",
  "fecha_entrega": {
    "$date": "2009-03-30T00:00:00.000Z"
  },
  "estado": "Pendiente",
  "comentarios": "NULL",
  "codigo_cliente": 23
},{
  "codigo_pedido": 45,
  "fecha_pedido": "2009-04-01",
  "fecha_esperada": "2009-03-04",
  "fecha_entrega": {
    "$date": "2009-03-07T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "NULL",
  "codigo_cliente": 23
},{
  "codigo_pedido": 46,
  "fecha_pedido": "2009-04-03",
  "fecha_esperada": "2009-03-04",
  "fecha_entrega": {
    "$date": "2009-03-05T00:00:00.000Z"
  },
  "estado": "Rechazado",
  "comentarios": "NULL",
  "codigo_cliente": 23
},{
  "codigo_pedido": 47,
  "fecha_pedido": "2009-04-15",
  "fecha_esperada": "2009-03-17",
  "fecha_entrega": {
    "$date": "2009-03-17T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "NULL",
  "codigo_cliente": 23
},{
  "codigo_pedido": 48,
  "fecha_pedido": "2008-03-17",
  "fecha_esperada": "2008-03-30",
  "fecha_entrega": {
    "$date": "2008-03-29T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "Según el Cliente, el pedido llegó defectuoso",
  "codigo_cliente": 26
},{
  "codigo_pedido": 49,
  "fecha_pedido": "2008-07-12",
  "fecha_esperada": "2008-07-22",
  "fecha_entrega": {
    "$date": "2008-07-30T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "El pedido llegó 1 día tarde, pero no hubo queja por parte de la empresa compradora",
  "codigo_cliente": 26
},{
  "codigo_pedido": 51,
  "fecha_pedido": "2008-10-01",
  "fecha_esperada": "2008-10-14",
  "fecha_entrega": {
    "$date": "2008-10-14T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "Todo se entregó a tiempo y en perfecto estado, a pesar del pésimo estado de las carreteras.",
  "codigo_cliente": 26
},{
  "codigo_pedido": 53,
  "fecha_pedido": "2008-10-15",
  "fecha_esperada": "2008-11-15",
  "fecha_entrega": {
    "$date": "2008-11-09T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "El pedido llega 6 dias antes",
  "codigo_cliente": 13
},{
  "codigo_pedido": 55,
  "fecha_pedido": "2008-12-10",
  "fecha_esperada": "2009-01-10",
  "fecha_entrega": {
    "$date": "2009-01-11T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "Retrasado 1 dia por problemas de transporte",
  "codigo_cliente": 14
},{
  "codigo_pedido": 58,
  "fecha_pedido": "2009-01-24",
  "fecha_esperada": "2009-01-31",
  "fecha_entrega": {
    "$date": "2009-01-30T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "Todo correcto",
  "codigo_cliente": 3
},{
  "codigo_pedido": 59,
  "fecha_pedido": "2008-11-09",
  "fecha_esperada": "2008-11-14",
  "fecha_entrega": {
    "$date": "2008-11-14T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "El cliente paga la mitad con tarjeta y la otra mitad con efectivo, se le realizan dos facturas",
  "codigo_cliente": 1
},{
  "codigo_pedido": 60,
  "fecha_pedido": "2008-12-22",
  "fecha_esperada": "2008-12-27",
  "fecha_entrega": {
    "$date": "2008-12-28T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "El cliente comprueba la integridad del paquete, todo correcto",
  "codigo_cliente": 1
},{
  "codigo_pedido": 64,
  "fecha_pedido": "2009-01-24",
  "fecha_esperada": "2009-01-31",
  "fecha_entrega": {
    "$date": "2009-01-30T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "Todo correcto",
  "codigo_cliente": 1
},{
  "codigo_pedido": 68,
  "fecha_pedido": "2009-02-10",
  "fecha_esperada": "2009-02-17",
  "fecha_entrega": {
    "$date": "2009-02-20T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "El cliente se queja bastante de la espera asociada al producto",
  "codigo_cliente": 3
},{
  "codigo_pedido": 75,
  "fecha_pedido": "2009-01-11",
  "fecha_esperada": "2009-01-13",
  "fecha_entrega": {
    "$date": "2009-01-13T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "El pedido llego perfectamente",
  "codigo_cliente": 15
},{
  "codigo_pedido": 76,
  "fecha_pedido": "2008-11-15",
  "fecha_esperada": "2008-11-23",
  "fecha_entrega": {
    "$date": "2008-11-23T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "NULL",
  "codigo_cliente": 15
},{
  "codigo_pedido": 78,
  "fecha_pedido": "2008-12-15",
  "fecha_esperada": "2008-12-17",
  "fecha_entrega": {
    "$date": "2008-12-17T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "Fue entregado, pero faltaba mercancia que sera entregada otro dia",
  "codigo_cliente": 15
},{
  "codigo_pedido": 79,
  "fecha_pedido": "2009-01-12",
  "fecha_esperada": "2009-01-13",
  "fecha_entrega": {
    "$date": "2009-01-13T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "NULL",
  "codigo_cliente": 28
},{
  "codigo_pedido": 82,
  "fecha_pedido": "2009-01-20",
  "fecha_esperada": "2009-01-29",
  "fecha_entrega": {
    "$date": "2009-01-29T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "El pedido llego un poco mas tarde de la hora fijada",
  "codigo_cliente": 28
},{
  "codigo_pedido": 89,
  "fecha_pedido": "2007-10-05",
  "fecha_esperada": "2007-12-13",
  "fecha_entrega": {
    "$date": "2007-12-10T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "La entrega se realizo dias antes de la fecha esperada por lo que el cliente quedo satisfecho",
  "codigo_cliente": 35
},{
  "codigo_pedido": 91,
  "fecha_pedido": "2009-03-18",
  "fecha_esperada": "2009-03-29",
  "fecha_entrega": {
    "$date": "2009-03-27T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "Todo se entregó a su debido tiempo, incluso con un día de antelación",
  "codigo_cliente": 27
},{
  "codigo_pedido": 92,
  "fecha_pedido": "2009-04-19",
  "fecha_esperada": "2009-04-30",
  "fecha_entrega": {
    "$date": "2009-05-03T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "El pedido se entregó tarde debido a la festividad celebrada en España durante esas fechas",
  "codigo_cliente": 27
},{
  "codigo_pedido": 93,
  "fecha_pedido": "2009-05-03",
  "fecha_esperada": "2009-05-30",
  "fecha_entrega": {
    "$date": "2009-05-17T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "El pedido se entregó antes de lo esperado.",
  "codigo_cliente": 27
},{
  "codigo_pedido": 95,
  "fecha_pedido": "2008-01-04",
  "fecha_esperada": "2008-01-19",
  "fecha_entrega": {
    "$date": "2008-01-19T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "NULL",
  "codigo_cliente": 35
},{
  "codigo_pedido": 96,
  "fecha_pedido": "2008-03-20",
  "fecha_esperada": "2008-04-12",
  "fecha_entrega": {
    "$date": "2008-04-13T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "La entrega se retraso un dia",
  "codigo_cliente": 35
},{
  "codigo_pedido": 97,
  "fecha_pedido": "2008-10-08",
  "fecha_esperada": "2008-11-25",
  "fecha_entrega": {
    "$date": "2008-11-25T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "NULL",
  "codigo_cliente": 35
},{
  "codigo_pedido": 100,
  "fecha_pedido": "2009-01-10",
  "fecha_esperada": "2009-01-15",
  "fecha_entrega": {
    "$date": "2009-01-15T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "El pedido llego perfectamente",
  "codigo_cliente": 16
},{
  "codigo_pedido": 102,
  "fecha_pedido": "2008-12-28",
  "fecha_esperada": "2009-01-08",
  "fecha_entrega": {
    "$date": "2009-01-08T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "Pago pendiente",
  "codigo_cliente": 16
},{
  "codigo_pedido": 103,
  "fecha_pedido": "2009-01-15",
  "fecha_esperada": "2009-01-20",
  "fecha_entrega": {
    "$date": "2009-01-24T00:00:00.000Z"
  },
  "estado": "Pendiente",
  "comentarios": "NULL",
  "codigo_cliente": 30
},{
  "codigo_pedido": 104,
  "fecha_pedido": "2009-03-02",
  "fecha_esperada": "2009-03-06",
  "fecha_entrega": {
    "$date": "2009-03-06T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "NULL",
  "codigo_cliente": 30
},{
  "codigo_pedido": 106,
  "fecha_pedido": "2009-05-13",
  "fecha_esperada": "2009-05-15",
  "fecha_entrega": {
    "$date": "2009-05-20T00:00:00.000Z"
  },
  "estado": "Pendiente",
  "comentarios": "NULL",
  "codigo_cliente": 30
},{
  "codigo_pedido": 107,
  "fecha_pedido": "2009-04-06",
  "fecha_esperada": "2009-04-10",
  "fecha_entrega": {
    "$date": "2009-04-10T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "NULL",
  "codigo_cliente": 30
},{
  "codigo_pedido": 108,
  "fecha_pedido": "2009-04-09",
  "fecha_esperada": "2009-04-15",
  "fecha_entrega": {
    "$date": "2009-04-15T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "NULL",
  "codigo_cliente": 16
},{
  "codigo_pedido": 109,
  "fecha_pedido": "2006-05-25",
  "fecha_esperada": "2006-07-28",
  "fecha_entrega": {
    "$date": "2006-07-28T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "NULL",
  "codigo_cliente": 38
},{
  "codigo_pedido": 110,
  "fecha_pedido": "2007-03-19",
  "fecha_esperada": "2007-04-24",
  "fecha_entrega": {
    "$date": "2007-04-24T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "NULL",
  "codigo_cliente": 38
},{
  "codigo_pedido": 111,
  "fecha_pedido": "2008-03-05",
  "fecha_esperada": "2008-03-30",
  "fecha_entrega": {
    "$date": "2008-03-30T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "NULL",
  "codigo_cliente": 36
},{
  "codigo_pedido": 112,
  "fecha_pedido": "2009-03-05",
  "fecha_esperada": "2009-04-06",
  "fecha_entrega": {
    "$date": "2009-05-07T00:00:00.000Z"
  },
  "estado": "Pendiente",
  "comentarios": "NULL",
  "codigo_cliente": 36
},{
  "codigo_pedido": 113,
  "fecha_pedido": "2008-10-28",
  "fecha_esperada": "2008-11-09",
  "fecha_entrega": {
    "$date": "2009-01-09T00:00:00.000Z"
  },
  "estado": "Rechazado",
  "comentarios": "El producto ha sido rechazado por la tardanza de el envio",
  "codigo_cliente": 36
},{
  "codigo_pedido": 114,
  "fecha_pedido": "2009-01-15",
  "fecha_esperada": "2009-01-29",
  "fecha_entrega": {
    "$date": "2009-01-31T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "El envio llego dos dias más tarde debido al mal tiempo",
  "codigo_cliente": 36
},{
  "codigo_pedido": 115,
  "fecha_pedido": "2008-11-29",
  "fecha_esperada": "2009-01-26",
  "fecha_entrega": {
    "$date": "2009-02-27T00:00:00.000Z"
  },
  "estado": "Pendiente",
  "comentarios": "NULL",
  "codigo_cliente": 36
},{
  "codigo_pedido": 116,
  "fecha_pedido": "2008-06-28",
  "fecha_esperada": "2008-08-01",
  "fecha_entrega": {
    "$date": "2008-08-01T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "NULL",
  "codigo_cliente": 38
},{
  "codigo_pedido": 119,
  "fecha_pedido": "2009-01-10",
  "fecha_esperada": "2009-01-15",
  "fecha_entrega": {
    "$date": "2009-01-15T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "El pedido llego perfectamente",
  "codigo_cliente": 16
},{
  "codigo_pedido": 121,
  "fecha_pedido": "2008-12-28",
  "fecha_esperada": "2009-01-08",
  "fecha_entrega": {
    "$date": "2009-01-08T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "Pago pendiente",
  "codigo_cliente": 16
},{
  "codigo_pedido": 122,
  "fecha_pedido": "2009-04-09",
  "fecha_esperada": "2009-04-15",
  "fecha_entrega": {
    "$date": "2009-04-15T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "NULL",
  "codigo_cliente": 16
},{
  "codigo_pedido": 123,
  "fecha_pedido": "2009-01-15",
  "fecha_esperada": "2009-01-20",
  "fecha_entrega": {
    "$date": "2009-01-24T00:00:00.000Z"
  },
  "estado": "Pendiente",
  "comentarios": "NULL",
  "codigo_cliente": 30
},{
  "codigo_pedido": 124,
  "fecha_pedido": "2009-03-02",
  "fecha_esperada": "2009-03-06",
  "fecha_entrega": {
    "$date": "2009-03-06T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "NULL",
  "codigo_cliente": 30
},{
  "codigo_pedido": 126,
  "fecha_pedido": "2009-05-13",
  "fecha_esperada": "2009-05-15",
  "fecha_entrega": {
    "$date": "2009-05-20T00:00:00.000Z"
  },
  "estado": "Pendiente",
  "comentarios": "NULL",
  "codigo_cliente": 30
},{
  "codigo_pedido": 127,
  "fecha_pedido": "2009-04-06",
  "fecha_esperada": "2009-04-10",
  "fecha_entrega": {
    "$date": "2009-04-10T00:00:00.000Z"
  },
  "estado": "Entregado",
  "comentarios": "NULL",
  "codigo_cliente": 30
},{
  "codigo_pedido": 128,
  "fecha_pedido": "2008-11-10",
  "fecha_esperada": "2008-12-10",
  "fecha_entrega": {
    "$date": "2008-12-29T00:00:00.000Z"
  },
  "estado": "Rechazado",
  "comentarios": "El pedido ha sido rechazado por el cliente por el retraso en la entrega",
  "codigo_cliente": 38
}]);

db.producto.insertMany([{
  "codigo_producto": "11679",
  "nombre": "Sierra de Poda 400MM",
  "gama": "Herramientas",
  "dimensiones": "0,258",
  "proveedor": "HiperGarden Tools",
  "descripcion": "Gracias a la poda se consigue manipular un poco la naturaleza, dándole la forma que más nos guste. Este trabajo básico de jardinería también facilita que las plantas crezcan de un modo más equilibrado, y que las flores y los frutos vuelvan cada año con regularidad. Lo mejor es dar forma cuando los ejemplares son jóvenes, de modo que exijan pocos cuidados cuando sean adultos. Además de saber cuándo y cómo hay que podar, tener unas herramientas adecuadas para esta labor es también de vital importancia.",
  "cantidad_en_stock": 15,
  "precio_venta": 14,
  "precio_proveedor": 11
},{
  "codigo_producto": "21636",
  "nombre": "Pala",
  "gama": "Herramientas",
  "dimensiones": "0,156",
  "proveedor": "HiperGarden Tools",
  "descripcion": "Palas de acero con cresta de corte en la punta para cortar bien el terreno. Buena penetración en tierras muy compactas.",
  "cantidad_en_stock": 15,
  "precio_venta": 14,
  "precio_proveedor": 13
},{
  "codigo_producto": "22225",
  "nombre": "Rastrillo de Jardín",
  "gama": "Herramientas",
  "dimensiones": "1,064",
  "proveedor": "HiperGarden Tools",
  "descripcion": "Fabuloso rastillo que le ayudará a eliminar piedras, hojas, ramas y otros elementos incómodos en su jardín.",
  "cantidad_en_stock": 15,
  "precio_venta": 12,
  "precio_proveedor": 11
},{
  "codigo_producto": "30310",
  "nombre": "Azadón",
  "gama": "Herramientas",
  "dimensiones": "0,168",
  "proveedor": "HiperGarden Tools",
  "descripcion": "Longitud:24cm. Herramienta fabricada en acero y pintura epoxi,alargando su durabilidad y preveniendo la corrosión.Diseño pensado para el ahorro de trabajo.",
  "cantidad_en_stock": 15,
  "precio_venta": 12,
  "precio_proveedor": 11
},{
  "codigo_producto": "AR-001",
  "nombre": "Ajedrea",
  "gama": "Aromáticas",
  "dimensiones": "15-20",
  "proveedor": "Murcia Seasons",
  "descripcion": "Planta aromática que fresca se utiliza para condimentar carnes y ensaladas, y seca, para pastas, sopas y guisantes",
  "cantidad_en_stock": 140,
  "precio_venta": 1,
  "precio_proveedor": 0
},{
  "codigo_producto": "AR-002",
  "nombre": "Lavándula Dentata",
  "gama": "Aromáticas",
  "dimensiones": "15-20",
  "proveedor": "Murcia Seasons",
  "descripcion": "Espliego de jardín, Alhucema rizada, Alhucema dentada, Cantueso rizado. Familia: Lamiaceae.Origen: España y Portugal. Mata de unos 60 cm de alto. Las hojas son aromáticas, dentadas y de color verde grisáceas.  Produce compactas espigas de flores pequeñas, ligeramente aromáticas, tubulares,de color azulado y con brácteas púrpuras.  Frutos: nuececillas alargadas encerradas en el tubo del cáliz.  Se utiliza en jardineria y no en perfumeria como otros cantuesos, espliegos y lavandas.  Tiene propiedades aromatizantes y calmantes. Adecuadas para la formación de setos bajos. Se dice que su aroma ahuyenta pulgones y otros insectos perjudiciales para las plantas vecinas.",
  "cantidad_en_stock": 140,
  "precio_venta": 1,
  "precio_proveedor": 0
},{
  "codigo_producto": "AR-003",
  "nombre": "Mejorana",
  "gama": "Aromáticas",
  "dimensiones": "15-20",
  "proveedor": "Murcia Seasons",
  "descripcion": "Origanum majorana. No hay que confundirlo con el orégano. Su sabor se parece más al tomillo, pero es más dulce y aromático.Se usan las hojas frescas o secas, picadas, machacadas o en polvo, en sopas, rellenos, quiches y tartas, tortillas, platos con papas y, como aderezo, en ramilletes de hierbas.El sabor delicado de la mejorana se elimina durante la cocción, de manera que es mejor agregarla cuando el plato esté en su punto o en aquéllos que apenas necesitan cocción.",
  "cantidad_en_stock": 140,
  "precio_venta": 1,
  "precio_proveedor": 0
},{
  "codigo_producto": "AR-004",
  "nombre": "Melissa ",
  "gama": "Aromáticas",
  "dimensiones": "15-20",
  "proveedor": "Murcia Seasons",
  "descripcion": "Es una planta perenne (dura varios años) conocida por el agradable y característico olor a limón que desprenden en verano. Nunca debe faltar en la huerta o jardín por su agradable aroma y por los variados usos que tiene: planta olorosa, condimentaria y medicinal. Su cultivo es muy fácil. Le va bien un suelo ligero, con buen drenaje y riego sin exceso. A pleno sol o por lo menos 5 horas de sol por día. Cada año, su abonado mineral correspondiente.En otoño, la melisa pierde el agradable olor a limón que desprende en verano sus flores azules y blancas. En este momento se debe cortar a unos 20 cm. del suelo. Brotará de forma densa en primavera.",
  "cantidad_en_stock": 140,
  "precio_venta": 1,
  "precio_proveedor": 0
},{
  "codigo_producto": "AR-005",
  "nombre": "Mentha Sativa",
  "gama": "Aromáticas",
  "dimensiones": "15-20",
  "proveedor": "Murcia Seasons",
  "descripcion": "¿Quién no conoce la Hierbabuena? Se trata de una plantita muy aromática, agradable y cultivada extensamente por toda España. Es hierba perenne (por tanto vive varios años, no es anual). Puedes cultivarla en maceta o plantarla en la tierra del jardín o en un rincón del huerto. Lo más importante es que cuente con bastante agua. En primavera debes aportar fertilizantes minerales. Vive mejor en semisombra que a pleno sol.Si ves orugas o los agujeros en hojas consecuencia de su ataque, retíralas una a una a mano; no uses insecticidas químicos.",
  "cantidad_en_stock": 140,
  "precio_venta": 1,
  "precio_proveedor": 0
},{
  "codigo_producto": "AR-006",
  "nombre": "Petrosilium Hortense (Peregil)",
  "gama": "Aromáticas",
  "dimensiones": "15-20",
  "proveedor": "Murcia Seasons",
  "descripcion": "Nombre científico o latino: Petroselinum hortense, Petroselinum crispum. Nombre común o vulgar: Perejil, Perejil rizado Familia: Umbelliferae (Umbelíferas). Origen: el origen del perejil se encuentra en el Mediterraneo. Esta naturalizada en casi toda Europa. Se utiliza como condimento y para adorno, pero también en ensaladas. Se suele regalar en las fruterías y verdulerías.El perejil lo hay de 2 tipos: de hojas planas y de hojas rizadas.",
  "cantidad_en_stock": 140,
  "precio_venta": 1,
  "precio_proveedor": 0
},{
  "codigo_producto": "AR-007",
  "nombre": "Salvia Mix",
  "gama": "Aromáticas",
  "dimensiones": "15-20",
  "proveedor": "Murcia Seasons",
  "descripcion": "La Salvia es un pequeño arbusto que llega hasta el metro de alto.Tiene una vida breve, de unos pocos años.En el jardín, como otras aromáticas, queda muy bien en una rocalla o para hacer una bordura perfumada a cada lado de un camino de Salvia. Abona después de cada corte y recorta el arbusto una vez pase la floración.",
  "cantidad_en_stock": 140,
  "precio_venta": 1,
  "precio_proveedor": 0
},{
  "codigo_producto": "AR-008",
  "nombre": "Thymus Citriodra (Tomillo limón)",
  "gama": "Aromáticas",
  "dimensiones": "15-20",
  "proveedor": "Murcia Seasons",
  "descripcion": "Nombre común o vulgar: Tomillo, Tremoncillo Familia: Labiatae (Labiadas).Origen: Región mediterránea.Arbustillo bajo, de 15 a 40 cm de altura. Las hojas son muy pequeñas, de unos 6 mm de longitud; según la variedad pueden ser verdes, verdes grisáceas, amarillas, o jaspeadas. Las flores aparecen de mediados de primavera hasta bien entrada la época estival y se presentan en racimos terminales que habitualmente son de color violeta o púrpura aunque también pueden ser blancas. Esta planta despide un intenso y típico aroma, que se incrementa con el roce. El tomillo resulta de gran belleza cuando está en flor. El tomillo atrae a avispas y abejas. En jardinería se usa como manchas, para hacer borduras, para aromatizar el ambiente, llenar huecos, cubrir rocas, para jardines en miniatura, etc. Arranque las flores y hojas secas del tallo y añadálos a un popurri, introdúzcalos en saquitos de hierbas o en la almohada.También puede usar las ramas secas con flores para añadir aroma y textura a cestos abiertos.",
  "cantidad_en_stock": 140,
  "precio_venta": 1,
  "precio_proveedor": 0
},{
  "codigo_producto": "AR-009",
  "nombre": "Thymus Vulgaris",
  "gama": "Aromáticas",
  "dimensiones": "15-20",
  "proveedor": "Murcia Seasons",
  "descripcion": "Nombre común o vulgar: Tomillo, Tremoncillo Familia: Labiatae (Labiadas). Origen: Región mediterránea. Arbustillo bajo, de 15 a 40 cm de altura. Las hojas son muy pequeñas, de unos 6 mm de longitud; según la variedad pueden ser verdes, verdes grisáceas, amarillas, o jaspeadas. Las flores aparecen de mediados de primavera hasta bien entrada la época estival y se presentan en racimos terminales que habitualmente son de color violeta o púrpura aunque también pueden ser blancas. Esta planta despide un intenso y típico aroma, que se incrementa con el roce. El tomillo resulta de gran belleza cuando está en flor. El tomillo atrae a avispas y abejas.\\r\\n En jardinería se usa como manchas, para hacer borduras, para aromatizar el ambiente, llenar huecos, cubrir rocas, para jardines en miniatura, etc. Arranque las flores y hojas secas del tallo y añadálos a un popurri, introdúzcalos en saquitos de hierbas o en la almohada. También puede usar las ramas secas con flores para añadir aroma y textura a cestos abiertos.",
  "cantidad_en_stock": 140,
  "precio_venta": 1,
  "precio_proveedor": 0
},{
  "codigo_producto": "AR-010",
  "nombre": "Santolina Chamaecyparys",
  "gama": "Aromáticas",
  "dimensiones": "15-20",
  "proveedor": "Murcia Seasons",
  "cantidad_en_stock": 140,
  "precio_venta": 1,
  "precio_proveedor": 0
},{
  "codigo_producto": "FR-1",
  "nombre": "Expositor Cítricos Mix",
  "gama": "Frutales",
  "dimensiones": "100-120",
  "proveedor": "Frutales Talavera S.A",
  "cantidad_en_stock": 15,
  "precio_venta": 7,
  "precio_proveedor": 5
},{
  "codigo_producto": "FR-31",
  "nombre": "Ciruelo Santa Rosa",
  "gama": "Frutales",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "árbol de tamaño mediano que alcanza una altura máxima de 5-6 m. Tronco de corteza pardo-azulada, brillante, lisa o agrietada longitudinalmente. Produce ramas alternas, pequeñas, delgadas, unas veces lisas, glabras y otras pubescentes y vellosas",
  "cantidad_en_stock": 400,
  "precio_venta": 8,
  "precio_proveedor": 6
},{
  "codigo_producto": "FR-10",
  "nombre": "Limonero 2 años injerto",
  "gama": "Frutales",
  "proveedor": "NaranjasValencianas.com",
  "descripcion": "El limonero, pertenece al grupo de los cítricos, teniendo su origen hace unos 20 millones de años en el sudeste asiático. Fue introducido por los árabes en el área mediterránea entre los años 1.000 a 1.200, habiendo experimentando numerosas modificaciones debidas tanto a la selección natural mediante hibridaciones espontáneas como a las producidas por el hombre, en este caso buscando las necesidades del mercado.",
  "cantidad_en_stock": 15,
  "precio_venta": 7,
  "precio_proveedor": 5
},{
  "codigo_producto": "FR-100",
  "nombre": "Nectarina",
  "gama": "Frutales",
  "dimensiones": "8/10",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "Se trata de un árbol derivado por mutación de los melocotoneros comunes, y los únicos caracteres diferenciales son la ausencia de tomentosidad en la piel del fruto. La planta, si se deja crecer libremente, adopta un porte globoso con unas dimensiones medias de 4-6 metros",
  "cantidad_en_stock": 50,
  "precio_venta": 11,
  "precio_proveedor": 8
},{
  "codigo_producto": "FR-101",
  "nombre": "Nogal",
  "gama": "Frutales",
  "dimensiones": "8/10",
  "proveedor": "Frutales Talavera S.A",
  "cantidad_en_stock": 50,
  "precio_venta": 13,
  "precio_proveedor": 10
},{
  "codigo_producto": "FR-102",
  "nombre": "Olea-Olivos",
  "gama": "Frutales",
  "dimensiones": "8/10",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "Existen dos hipótesis sobre el origen del olivo, una que postula que proviene de las costas de Siria, Líbano e Israel y otra que considera que lo considera originario de Asia menor. La llegada a Europa probablemente tuvo lugar de mano de los Fenicios, en transito por Chipre, Creta, e Islas del Mar Egeo, pasando a Grecia y más tarde a Italia. Los primeros indicios de la presencia del olivo en las costas mediterráneas españolas coinciden con el dominio romano, aunque fueron posteriormente los árabes los que impulsaron su cultivo en Andalucía, convirtiendo a España en el primer país productor de aceite de oliva a nivel mundial.",
  "cantidad_en_stock": 50,
  "precio_venta": 18,
  "precio_proveedor": 14
},{
  "codigo_producto": "FR-103",
  "nombre": "Olea-Olivos",
  "gama": "Frutales",
  "dimensiones": "10/12",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "Existen dos hipótesis sobre el origen del olivo, una que postula que proviene de las costas de Siria, Líbano e Israel y otra que considera que lo considera originario de Asia menor. La llegada a Europa probablemente tuvo lugar de mano de los Fenicios, en transito por Chipre, Creta, e Islas del Mar Egeo, pasando a Grecia y más tarde a Italia. Los primeros indicios de la presencia del olivo en las costas mediterráneas españolas coinciden con el dominio romano, aunque fueron posteriormente los árabes los que impulsaron su cultivo en Andalucía, convirtiendo a España en el primer país productor de aceite de oliva a nivel mundial.",
  "cantidad_en_stock": 50,
  "precio_venta": 25,
  "precio_proveedor": 20
},{
  "codigo_producto": "FR-104",
  "nombre": "Olea-Olivos",
  "gama": "Frutales",
  "dimensiones": "12/4",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "Existen dos hipótesis sobre el origen del olivo, una que postula que proviene de las costas de Siria, Líbano e Israel y otra que considera que lo considera originario de Asia menor. La llegada a Europa probablemente tuvo lugar de mano de los Fenicios, en transito por Chipre, Creta, e Islas del Mar Egeo, pasando a Grecia y más tarde a Italia. Los primeros indicios de la presencia del olivo en las costas mediterráneas españolas coinciden con el dominio romano, aunque fueron posteriormente los árabes los que impulsaron su cultivo en Andalucía, convirtiendo a España en el primer país productor de aceite de oliva a nivel mundial.",
  "cantidad_en_stock": 50,
  "precio_venta": 49,
  "precio_proveedor": 39
},{
  "codigo_producto": "FR-105",
  "nombre": "Olea-Olivos",
  "gama": "Frutales",
  "dimensiones": "14/16",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "Existen dos hipótesis sobre el origen del olivo, una que postula que proviene de las costas de Siria, Líbano e Israel y otra que considera que lo considera originario de Asia menor. La llegada a Europa probablemente tuvo lugar de mano de los Fenicios, en transito por Chipre, Creta, e Islas del Mar Egeo, pasando a Grecia y más tarde a Italia. Los primeros indicios de la presencia del olivo en las costas mediterráneas españolas coinciden con el dominio romano, aunque fueron posteriormente los árabes los que impulsaron su cultivo en Andalucía, convirtiendo a España en el primer país productor de aceite de oliva a nivel mundial.",
  "cantidad_en_stock": 50,
  "precio_venta": 70,
  "precio_proveedor": 56
},{
  "codigo_producto": "FR-106",
  "nombre": "Peral",
  "gama": "Frutales",
  "dimensiones": "8/10",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "Árbol piramidal, redondeado en su juventud, luego oval, que llega hasta 20 metros de altura y por término medio vive 65 años.Tronco alto, grueso, de corteza agrietada, gris, de la cual se destacan con frecuencia placas lenticulares.Las ramas se insertan formando ángulo agudo con el tronco (45º), de corteza lisa, primero verde y luego gris-violácea, con numerosas lenticelas.",
  "cantidad_en_stock": 50,
  "precio_venta": 11,
  "precio_proveedor": 8
},{
  "codigo_producto": "FR-107",
  "nombre": "Peral",
  "gama": "Frutales",
  "dimensiones": "10/12",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "Árbol piramidal, redondeado en su juventud, luego oval, que llega hasta 20 metros de altura y por término medio vive 65 años.Tronco alto, grueso, de corteza agrietada, gris, de la cual se destacan con frecuencia placas lenticulares.Las ramas se insertan formando ángulo agudo con el tronco (45º), de corteza lisa, primero verde y luego gris-violácea, con numerosas lenticelas.",
  "cantidad_en_stock": 50,
  "precio_venta": 22,
  "precio_proveedor": 17
},{
  "codigo_producto": "FR-108",
  "nombre": "Peral",
  "gama": "Frutales",
  "dimensiones": "12/14",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "Árbol piramidal, redondeado en su juventud, luego oval, que llega hasta 20 metros de altura y por término medio vive 65 años.Tronco alto, grueso, de corteza agrietada, gris, de la cual se destacan con frecuencia placas lenticulares.Las ramas se insertan formando ángulo agudo con el tronco (45º), de corteza lisa, primero verde y luego gris-violácea, con numerosas lenticelas.",
  "cantidad_en_stock": 50,
  "precio_venta": 32,
  "precio_proveedor": 25
},{
  "codigo_producto": "FR-11",
  "nombre": "Limonero 30/40",
  "gama": "Frutales",
  "proveedor": "NaranjasValencianas.com",
  "descripcion": "El limonero, pertenece al grupo de los cítricos, teniendo su origen hace unos 20 millones de años en el sudeste asiático. Fue introducido por los árabes en el área mediterránea entre los años 1.000 a 1.200, habiendo experimentando numerosas modificaciones debidas tanto a la selección natural mediante hibridaciones espontáneas como a las producidas por el",
  "cantidad_en_stock": 15,
  "precio_venta": 100,
  "precio_proveedor": 80
},{
  "codigo_producto": "FR-12",
  "nombre": "Kunquat ",
  "gama": "Frutales",
  "proveedor": "NaranjasValencianas.com",
  "descripcion": "su nombre científico se origina en honor a un hoticultor escocés que recolectó especímenes en China, (\\\"Fortunella\\\"), Robert Fortune (1812-1880), y \\\"margarita\\\", del latín margaritus-a-um = perla, en alusión a sus pequeños y brillantes frutos. Se trata de un arbusto o árbol pequeño de 2-3 m de altura, inerme o con escasas espinas.Hojas lanceoladas de 4-8 (-15) cm de longitud, con el ápice redondeado y la base cuneada.Tienen el margen crenulado en su mitad superior, el haz verde brillante y el envés más pálido.Pecíolo ligeramente marginado.Flores perfumadas solitarias o agrupadas en inflorescencias axilares, blancas.El fruto es lo más característico, es el más pequeño de todos los cítricos y el único cuya cáscara se puede comer.Frutos pequeños, con semillas, de corteza fina, dulce, aromática y comestible, y de pulpa naranja amarillenta y ligeramente ácida.Sus frutos son muy pequeños y tienen un carácter principalmente ornamental.",
  "cantidad_en_stock": 15,
  "precio_venta": 21,
  "precio_proveedor": 16
},{
  "codigo_producto": "FR-13",
  "nombre": "Kunquat  EXTRA con FRUTA",
  "gama": "Frutales",
  "dimensiones": "150-170",
  "proveedor": "NaranjasValencianas.com",
  "descripcion": "su nombre científico se origina en honor a un hoticultor escocés que recolectó especímenes en China, (\\\"Fortunella\\\"), Robert Fortune (1812-1880), y \\\"margarita\\\", del latín margaritus-a-um = perla, en alusión a sus pequeños y brillantes frutos. Se trata de un arbusto o árbol pequeño de 2-3 m de altura, inerme o con escasas espinas.Hojas lanceoladas de 4-8 (-15) cm de longitud, con el ápice redondeado y la base cuneada.Tienen el margen crenulado en su mitad superior, el haz verde brillante y el envés más pálido.Pecíolo ligeramente marginado.Flores perfumadas solitarias o agrupadas en inflorescencias axilares, blancas.El fruto es lo más característico, es el más pequeño de todos los cítricos y el único cuya cáscara se puede comer.Frutos pequeños, con semillas, de corteza fina, dulce, aromática y comestible, y de pulpa naranja amarillenta y ligeramente ácida.Sus frutos son muy pequeños y tienen un carácter principalmente ornamental.",
  "cantidad_en_stock": 15,
  "precio_venta": 57,
  "precio_proveedor": 45
},{
  "codigo_producto": "FR-14",
  "nombre": "Calamondin Mini",
  "gama": "Frutales",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "Se trata de un pequeño arbolito de copa densa, con tendencia a la verticalidad, inerme o con cortas espinas. Sus hojas son pequeñas, elípticas de 5-10 cm de longitud, con los pecíolos estrechamente alados.Posee 1 o 2 flores en situación axilar, al final de las ramillas.Sus frutos son muy pequeños (3-3,5 cm de diámetro), con pocas semillas, esféricos u ovales, con la zona apical aplanada; corteza de color naranja-rojizo, muy fina y fácilmente separable de la pulpa, que es dulce, ácida y comestible..",
  "cantidad_en_stock": 15,
  "precio_venta": 10,
  "precio_proveedor": 8
},{
  "codigo_producto": "FR-15",
  "nombre": "Calamondin Copa ",
  "gama": "Frutales",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "Se trata de un pequeño arbolito de copa densa, con tendencia a la verticalidad, inerme o con cortas espinas. Sus hojas son pequeñas, elípticas de 5-10 cm de longitud, con los pecíolos estrechamente alados.Posee 1 o 2 flores en situación axilar, al final de las ramillas.Sus frutos son muy pequeños (3-3,5 cm de diámetro), con pocas semillas, esféricos u ovales, con la zona apical aplanada; corteza de color naranja-rojizo, muy fina y fácilmente separable de la pulpa, que es dulce, ácida y comestible..",
  "cantidad_en_stock": 15,
  "precio_venta": 25,
  "precio_proveedor": 20
},{
  "codigo_producto": "FR-16",
  "nombre": "Calamondin Copa EXTRA Con FRUTA",
  "gama": "Frutales",
  "dimensiones": "100-120",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "Se trata de un pequeño arbolito de copa densa, con tendencia a la verticalidad, inerme o con cortas espinas. Sus hojas son pequeñas, elípticas de 5-10 cm de longitud, con los pecíolos estrechamente alados.Posee 1 o 2 flores en situación axilar, al final de las ramillas.Sus frutos son muy pequeños (3-3,5 cm de diámetro), con pocas semillas, esféricos u ovales, con la zona apical aplanada; corteza de color naranja-rojizo, muy fina y fácilmente separable de la pulpa, que es dulce, ácida y comestible..",
  "cantidad_en_stock": 15,
  "precio_venta": 45,
  "precio_proveedor": 36
},{
  "codigo_producto": "FR-17",
  "nombre": "Rosal bajo 1Âª -En maceta-inicio brotación",
  "gama": "Frutales",
  "proveedor": "Frutales Talavera S.A",
  "cantidad_en_stock": 15,
  "precio_venta": 2,
  "precio_proveedor": 1
},{
  "codigo_producto": "FR-18",
  "nombre": "ROSAL TREPADOR",
  "gama": "Frutales",
  "proveedor": "Frutales Talavera S.A",
  "cantidad_en_stock": 350,
  "precio_venta": 4,
  "precio_proveedor": 3
},{
  "codigo_producto": "FR-19",
  "nombre": "Camelia Blanco, Chrysler Rojo, Soraya Naranja, ",
  "gama": "Frutales",
  "proveedor": "NaranjasValencianas.com",
  "cantidad_en_stock": 350,
  "precio_venta": 4,
  "precio_proveedor": 3
},{
  "codigo_producto": "FR-2",
  "nombre": "Naranjo -Plantón joven 1 año injerto",
  "gama": "Frutales",
  "proveedor": "NaranjasValencianas.com",
  "descripcion": "El naranjo es un árbol pequeño, que no supera los 3-5 metros de altura, con una copa compacta, cónica, transformada en esérica gracias a la poda. Su tronco es de color gris y liso, y las hojas son perennes, coriáceas, de un verde intenso y brillante, con forma oval o elíptico-lanceolada. Poseen, en el caso del naranjo amargo, un típico peciolo alado en forma de Â‘corazónÂ’, que en el naranjo dulce es más estrecho y menos patente.",
  "cantidad_en_stock": 15,
  "precio_venta": 6,
  "precio_proveedor": 4
},{
  "codigo_producto": "FR-20",
  "nombre": "Landora Amarillo, Rose Gaujard bicolor blanco-rojo",
  "gama": "Frutales",
  "proveedor": "Frutales Talavera S.A",
  "cantidad_en_stock": 350,
  "precio_venta": 4,
  "precio_proveedor": 3
},{
  "codigo_producto": "FR-21",
  "nombre": "Kordes Perfect bicolor rojo-amarillo, Roundelay rojo fuerte",
  "gama": "Frutales",
  "proveedor": "Frutales Talavera S.A",
  "cantidad_en_stock": 350,
  "precio_venta": 4,
  "precio_proveedor": 3
},{
  "codigo_producto": "FR-22",
  "nombre": "Pitimini rojo",
  "gama": "Frutales",
  "proveedor": "Frutales Talavera S.A",
  "cantidad_en_stock": 350,
  "precio_venta": 4,
  "precio_proveedor": 3
},{
  "codigo_producto": "FR-23",
  "nombre": "Rosal copa ",
  "gama": "Frutales",
  "proveedor": "Frutales Talavera S.A",
  "cantidad_en_stock": 400,
  "precio_venta": 8,
  "precio_proveedor": 6
},{
  "codigo_producto": "FR-24",
  "nombre": "Albaricoquero Corbato",
  "gama": "Frutales",
  "proveedor": "Melocotones de Cieza S.A.",
  "descripcion": "árbol que puede pasar de los 6 m de altura, en la región mediterránea con ramas formando una copa redondeada. La corteza del tronco es pardo-violácea, agrietada; las ramas son rojizas y extendidas cuando jóvenes y las ramas secundarias son cortas, divergentes y escasas. Las yemas latentes son frecuentes especialmente sobre las ramas viejas.",
  "cantidad_en_stock": 400,
  "precio_venta": 8,
  "precio_proveedor": 6
},{
  "codigo_producto": "FR-25",
  "nombre": "Albaricoquero Moniqui",
  "gama": "Frutales",
  "proveedor": "Melocotones de Cieza S.A.",
  "descripcion": "árbol que puede pasar de los 6 m de altura, en la región mediterránea con ramas formando una copa redondeada. La corteza del tronco es pardo-violácea, agrietada; las ramas son rojizas y extendidas cuando jóvenes y las ramas secundarias son cortas, divergentes y escasas. Las yemas latentes son frecuentes especialmente sobre las ramas viejas.",
  "cantidad_en_stock": 400,
  "precio_venta": 8,
  "precio_proveedor": 6
},{
  "codigo_producto": "FR-26",
  "nombre": "Albaricoquero Kurrot",
  "gama": "Frutales",
  "proveedor": "Melocotones de Cieza S.A.",
  "descripcion": "árbol que puede pasar de los 6 m de altura, en la región mediterránea con ramas formando una copa redondeada. La corteza del tronco es pardo-violácea, agrietada; las ramas son rojizas y extendidas cuando jóvenes y las ramas secundarias son cortas, divergentes y escasas. Las yemas latentes son frecuentes especialmente sobre las ramas viejas.",
  "cantidad_en_stock": 400,
  "precio_venta": 8,
  "precio_proveedor": 6
},{
  "codigo_producto": "FR-27",
  "nombre": "Cerezo Burlat",
  "gama": "Frutales",
  "proveedor": "Jerte Distribuciones S.L.",
  "descripcion": "Las principales especies de cerezo cultivadas en el mundo son el cerezo dulce (Prunus avium), el guindo (P. cerasus) y el cerezo \\\"Duke\\\", híbrido de los anteriores. Ambas especies son naturales del sureste de Europa y oeste de Asia. El cerezo dulce tuvo su origen probablemente en el mar Negro y en el mar Caspio, difundiéndose después hacia Europa y Asia, llevado por los pájaros y las migraciones humanas. Fue uno de los frutales más apreciados por los griegos y con el Imperio Romano se extendió a regiones muy diversas. En la actualidad, el cerezo se encuentra difundido por numerosas regiones y países del mundo con clima templado",
  "cantidad_en_stock": 400,
  "precio_venta": 8,
  "precio_proveedor": 6
},{
  "codigo_producto": "FR-28",
  "nombre": "Cerezo Picota",
  "gama": "Frutales",
  "proveedor": "Jerte Distribuciones S.L.",
  "descripcion": "Las principales especies de cerezo cultivadas en el mundo son el cerezo dulce (Prunus avium), el guindo (P. cerasus) y el cerezo \\\"Duke\\\", híbrido de los anteriores. Ambas especies son naturales del sureste de Europa y oeste de Asia. El cerezo dulce tuvo su origen probablemente en el mar Negro y en el mar Caspio, difundiéndose después hacia Europa y Asia, llevado por los pájaros y las migraciones humanas. Fue uno de los frutales más apreciados por los griegos y con el Imperio Romano se extendió a regiones muy diversas. En la actualidad, el cerezo se encuentra difundido por numerosas regiones y países del mundo con clima templado",
  "cantidad_en_stock": 400,
  "precio_venta": 8,
  "precio_proveedor": 6
},{
  "codigo_producto": "FR-29",
  "nombre": "Cerezo Napoleón",
  "gama": "Frutales",
  "proveedor": "Jerte Distribuciones S.L.",
  "descripcion": "Las principales especies de cerezo cultivadas en el mundo son el cerezo dulce (Prunus avium), el guindo (P. cerasus) y el cerezo \\\"Duke\\\", híbrido de los anteriores. Ambas especies son naturales del sureste de Europa y oeste de Asia. El cerezo dulce tuvo su origen probablemente en el mar Negro y en el mar Caspio, difundiéndose después hacia Europa y Asia, llevado por los pájaros y las migraciones humanas. Fue uno de los frutales más apreciados por los griegos y con el Imperio Romano se extendió a regiones muy diversas. En la actualidad, el cerezo se encuentra difundido por numerosas regiones y países del mundo con clima templado",
  "cantidad_en_stock": 400,
  "precio_venta": 8,
  "precio_proveedor": 6
},{
  "codigo_producto": "FR-3",
  "nombre": "Naranjo 2 años injerto",
  "gama": "Frutales",
  "proveedor": "NaranjasValencianas.com",
  "descripcion": "El naranjo es un árbol pequeño, que no supera los 3-5 metros de altura, con una copa compacta, cónica, transformada en esérica gracias a la poda. Su tronco es de color gris y liso, y las hojas son perennes, coriáceas, de un verde intenso y brillante, con forma oval o elíptico-lanceolada. Poseen, en el caso del naranjo amargo, un típico peciolo alado en forma de Â‘corazónÂ’, que en el naranjo dulce es más estrecho y menos patente.",
  "cantidad_en_stock": 15,
  "precio_venta": 7,
  "precio_proveedor": 5
},{
  "codigo_producto": "FR-30",
  "nombre": "Ciruelo R. Claudia Verde   ",
  "gama": "Frutales",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "árbol de tamaño mediano que alcanza una altura máxima de 5-6 m. Tronco de corteza pardo-azulada, brillante, lisa o agrietada longitudinalmente. Produce ramas alternas, pequeñas, delgadas, unas veces lisas, glabras y otras pubescentes y vellosas",
  "cantidad_en_stock": 400,
  "precio_venta": 8,
  "precio_proveedor": 6
},{
  "codigo_producto": "OR-120",
  "nombre": "Lonicera Nitida ",
  "gama": "Ornamentales",
  "dimensiones": "35-45",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 120,
  "precio_venta": 5,
  "precio_proveedor": 4
},{
  "codigo_producto": "OR-121",
  "nombre": "Lonicera Nitida \\\"Maigrum\\\"",
  "gama": "Ornamentales",
  "dimensiones": "35-45",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 120,
  "precio_venta": 5,
  "precio_proveedor": 4
},{
  "codigo_producto": "OR-122",
  "nombre": "Lonicera Pileata",
  "gama": "Ornamentales",
  "dimensiones": "35-45",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 120,
  "precio_venta": 5,
  "precio_proveedor": 4
},{
  "codigo_producto": "FR-32",
  "nombre": "Ciruelo Golden Japan",
  "gama": "Frutales",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "árbol de tamaño mediano que alcanza una altura máxima de 5-6 m. Tronco de corteza pardo-azulada, brillante, lisa o agrietada longitudinalmente. Produce ramas alternas, pequeñas, delgadas, unas veces lisas, glabras y otras pubescentes y vellosas",
  "cantidad_en_stock": 400,
  "precio_venta": 8,
  "precio_proveedor": 6
},{
  "codigo_producto": "FR-33",
  "nombre": "Ciruelo Friar",
  "gama": "Frutales",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "árbol de tamaño mediano que alcanza una altura máxima de 5-6 m. Tronco de corteza pardo-azulada, brillante, lisa o agrietada longitudinalmente. Produce ramas alternas, pequeñas, delgadas, unas veces lisas, glabras y otras pubescentes y vellosas",
  "cantidad_en_stock": 400,
  "precio_venta": 8,
  "precio_proveedor": 6
},{
  "codigo_producto": "FR-34",
  "nombre": "Ciruelo Reina C. De Ollins",
  "gama": "Frutales",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "árbol de tamaño mediano que alcanza una altura máxima de 5-6 m. Tronco de corteza pardo-azulada, brillante, lisa o agrietada longitudinalmente. Produce ramas alternas, pequeñas, delgadas, unas veces lisas, glabras y otras pubescentes y vellosas",
  "cantidad_en_stock": 400,
  "precio_venta": 8,
  "precio_proveedor": 6
},{
  "codigo_producto": "FR-35",
  "nombre": "Ciruelo Claudia Negra",
  "gama": "Frutales",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "árbol de tamaño mediano que alcanza una altura máxima de 5-6 m. Tronco de corteza pardo-azulada, brillante, lisa o agrietada longitudinalmente. Produce ramas alternas, pequeñas, delgadas, unas veces lisas, glabras y otras pubescentes y vellosas",
  "cantidad_en_stock": 400,
  "precio_venta": 8,
  "precio_proveedor": 6
},{
  "codigo_producto": "FR-36",
  "nombre": "Granado Mollar de Elche",
  "gama": "Frutales",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "pequeño árbol caducifolio, a veces con porte arbustivo, de 3 a 6 m de altura, con el tronco retorcido. Madera dura y corteza escamosa de color grisáceo. Las ramitas jóvenes son más o menos cuadrangulares o angostas y de cuatro alas, posteriormente se vuelven redondas con corteza de color café grisáceo, la mayoría de las ramas, pero especialmente las pequeñas ramitas axilares, son en forma de espina o terminan en una espina aguda; la copa es extendida.",
  "cantidad_en_stock": 400,
  "precio_venta": 9,
  "precio_proveedor": 7
},{
  "codigo_producto": "FR-37",
  "nombre": "Higuera Napolitana",
  "gama": "Frutales",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "La higuera (Ficus carica L.) es un árbol típico de secano en los países mediterráneos. Su rusticidad y su fácil multiplicación hacen de la higuera un frutal muy apropiado para el cultivo extensivo.. Siempre ha sido considerado como árbol que no requiere cuidado alguno una vez plantado y arraigado, limitándose el hombre a recoger de él los frutos cuando maduran, unos para consumo en fresco y otros para conserva. Las únicas higueras con cuidados culturales esmerados, en muchas comarcas, son las brevales, por el interés económico de su primera cosecha, la de brevas.",
  "cantidad_en_stock": 400,
  "precio_venta": 9,
  "precio_proveedor": 7
},{
  "codigo_producto": "FR-38",
  "nombre": "Higuera Verdal",
  "gama": "Frutales",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "La higuera (Ficus carica L.) es un árbol típico de secano en los países mediterráneos. Su rusticidad y su fácil multiplicación hacen de la higuera un frutal muy apropiado para el cultivo extensivo.. Siempre ha sido considerado como árbol que no requiere cuidado alguno una vez plantado y arraigado, limitándose el hombre a recoger de él los frutos cuando maduran, unos para consumo en fresco y otros para conserva. Las únicas higueras con cuidados culturales esmerados, en muchas comarcas, son las brevales, por el interés económico de su primera cosecha, la de brevas.",
  "cantidad_en_stock": 400,
  "precio_venta": 9,
  "precio_proveedor": 7
},{
  "codigo_producto": "FR-39",
  "nombre": "Higuera Breva",
  "gama": "Frutales",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "La higuera (Ficus carica L.) es un árbol típico de secano en los países mediterráneos. Su rusticidad y su fácil multiplicación hacen de la higuera un frutal muy apropiado para el cultivo extensivo.. Siempre ha sido considerado como árbol que no requiere cuidado alguno una vez plantado y arraigado, limitándose el hombre a recoger de él los frutos cuando maduran, unos para consumo en fresco y otros para conserva. Las únicas higueras con cuidados culturales esmerados, en muchas comarcas, son las brevales, por el interés económico de su primera cosecha, la de brevas.",
  "cantidad_en_stock": 400,
  "precio_venta": 9,
  "precio_proveedor": 7
},{
  "codigo_producto": "FR-4",
  "nombre": "Naranjo calibre 8/10",
  "gama": "Frutales",
  "proveedor": "NaranjasValencianas.com",
  "descripcion": "El naranjo es un árbol pequeño, que no supera los 3-5 metros de altura, con una copa compacta, cónica, transformada en esérica gracias a la poda. Su tronco es de color gris y liso, y las hojas son perennes, coriáceas, de un verde intenso y brillante, con forma oval o elíptico-lanceolada. Poseen, en el caso del naranjo amargo, un típico peciolo alado en forma de Â‘corazónÂ’, que en el naranjo dulce es más estrecho y menos patente.",
  "cantidad_en_stock": 15,
  "precio_venta": 29,
  "precio_proveedor": 23
},{
  "codigo_producto": "FR-40",
  "nombre": "Manzano Starking Delicious",
  "gama": "Frutales",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "alcanza como máximo 10 m. de altura y tiene una copa globosa. Tronco derecho que normalmente alcanza de 2 a 2,5 m. de altura, con corteza cubierta de lenticelas, lisa, adherida, de color ceniciento verdoso sobre los ramos y escamosa y gris parda sobre las partes viejas del árbol. Tiene una vida de unos 60-80 años. Las ramas se insertan en ángulo abierto sobre el tallo, de color verde oscuro, a veces tendiendo a negruzco o violáceo. Los brotes jóvenes terminan con frecuencia en una espina",
  "cantidad_en_stock": 400,
  "precio_venta": 8,
  "precio_proveedor": 6
},{
  "codigo_producto": "FR-41",
  "nombre": "Manzano Reineta",
  "gama": "Frutales",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "alcanza como máximo 10 m. de altura y tiene una copa globosa. Tronco derecho que normalmente alcanza de 2 a 2,5 m. de altura, con corteza cubierta de lenticelas, lisa, adherida, de color ceniciento verdoso sobre los ramos y escamosa y gris parda sobre las partes viejas del árbol. Tiene una vida de unos 60-80 años. Las ramas se insertan en ángulo abierto sobre el tallo, de color verde oscuro, a veces tendiendo a negruzco o violáceo. Los brotes jóvenes terminan con frecuencia en una espina",
  "cantidad_en_stock": 400,
  "precio_venta": 8,
  "precio_proveedor": 6
},{
  "codigo_producto": "FR-42",
  "nombre": "Manzano Golden Delicious",
  "gama": "Frutales",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "alcanza como máximo 10 m. de altura y tiene una copa globosa. Tronco derecho que normalmente alcanza de 2 a 2,5 m. de altura, con corteza cubierta de lenticelas, lisa, adherida, de color ceniciento verdoso sobre los ramos y escamosa y gris parda sobre las partes viejas del árbol. Tiene una vida de unos 60-80 años. Las ramas se insertan en ángulo abierto sobre el tallo, de color verde oscuro, a veces tendiendo a negruzco o violáceo. Los brotes jóvenes terminan con frecuencia en una espina",
  "cantidad_en_stock": 400,
  "precio_venta": 8,
  "precio_proveedor": 6
},{
  "codigo_producto": "FR-43",
  "nombre": "Membrillero Gigante de Wranja",
  "gama": "Frutales",
  "proveedor": "Frutales Talavera S.A",
  "cantidad_en_stock": 400,
  "precio_venta": 8,
  "precio_proveedor": 6
},{
  "codigo_producto": "FR-44",
  "nombre": "Melocotonero Spring Crest",
  "gama": "Frutales",
  "proveedor": "Melocotones de Cieza S.A.",
  "descripcion": "Árbol caducifolio de porte bajo con corteza lisa, de color ceniciento. Sus hojas son alargadas con el margen ligeramente aserrado, de color verde brillante, algo más claras por el envés. El melocotonero está muy arraigado en la cultura asiática.\\r\\nEn Japón, el noble heroe Momotaro, una especie de Cid japonés, nació del interior de un enorme melocotón que flotaba río abajo.\\r\\nEn China se piensa que comer melocotón confiere longevidad al ser humano, ya que formaba parte de la dieta de sus dioses inmortales.",
  "cantidad_en_stock": 400,
  "precio_venta": 8,
  "precio_proveedor": 6
},{
  "codigo_producto": "FR-45",
  "nombre": "Melocotonero Amarillo de Agosto",
  "gama": "Frutales",
  "proveedor": "Melocotones de Cieza S.A.",
  "descripcion": "Árbol caducifolio de porte bajo con corteza lisa, de color ceniciento. Sus hojas son alargadas con el margen ligeramente aserrado, de color verde brillante, algo más claras por el envés. El melocotonero está muy arraigado en la cultura asiática.\\r\\nEn Japón, el noble heroe Momotaro, una especie de Cid japonés, nació del interior de un enorme melocotón que flotaba río abajo.\\r\\nEn China se piensa que comer melocotón confiere longevidad al ser humano, ya que formaba parte de la dieta de sus dioses inmortales.",
  "cantidad_en_stock": 400,
  "precio_venta": 8,
  "precio_proveedor": 6
},{
  "codigo_producto": "OR-123",
  "nombre": "Philadelphus \\\"Virginal\\\"",
  "gama": "Ornamentales",
  "dimensiones": "35-45",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 120,
  "precio_venta": 5,
  "precio_proveedor": 4
},{
  "codigo_producto": "OR-124",
  "nombre": "Prunus pisardii  ",
  "gama": "Ornamentales",
  "dimensiones": "35-45",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 120,
  "precio_venta": 5,
  "precio_proveedor": 4
},{
  "codigo_producto": "FR-46",
  "nombre": "Melocotonero Federica",
  "gama": "Frutales",
  "proveedor": "Melocotones de Cieza S.A.",
  "descripcion": "Árbol caducifolio de porte bajo con corteza lisa, de color ceniciento. Sus hojas son alargadas con el margen ligeramente aserrado, de color verde brillante, algo más claras por el envés. El melocotonero está muy arraigado en la cultura asiática.\\r\\nEn Japón, el noble heroe Momotaro, una especie de Cid japonés, nació del interior de un enorme melocotón que flotaba río abajo.\\r\\nEn China se piensa que comer melocotón confiere longevidad al ser humano, ya que formaba parte de la dieta de sus dioses inmortales.",
  "cantidad_en_stock": 400,
  "precio_venta": 8,
  "precio_proveedor": 6
},{
  "codigo_producto": "FR-47",
  "nombre": "Melocotonero Paraguayo",
  "gama": "Frutales",
  "proveedor": "Melocotones de Cieza S.A.",
  "descripcion": "Árbol caducifolio de porte bajo con corteza lisa, de color ceniciento. Sus hojas son alargadas con el margen ligeramente aserrado, de color verde brillante, algo más claras por el envés. El melocotonero está muy arraigado en la cultura asiática.\\r\\nEn Japón, el noble heroe Momotaro, una especie de Cid japonés, nació del interior de un enorme melocotón que flotaba río abajo.\\r\\nEn China se piensa que comer melocotón confiere longevidad al ser humano, ya que formaba parte de la dieta de sus dioses inmortales.",
  "cantidad_en_stock": 400,
  "precio_venta": 8,
  "precio_proveedor": 6
},{
  "codigo_producto": "FR-48",
  "nombre": "Nogal Común",
  "gama": "Frutales",
  "proveedor": "Frutales Talavera S.A",
  "cantidad_en_stock": 400,
  "precio_venta": 9,
  "precio_proveedor": 7
},{
  "codigo_producto": "FR-49",
  "nombre": "Parra Uva de Mesa",
  "gama": "Frutales",
  "proveedor": "Frutales Talavera S.A",
  "cantidad_en_stock": 400,
  "precio_venta": 8,
  "precio_proveedor": 6
},{
  "codigo_producto": "FR-5",
  "nombre": "Mandarino -Plantón joven",
  "gama": "Frutales",
  "proveedor": "Frutales Talavera S.A",
  "cantidad_en_stock": 15,
  "precio_venta": 6,
  "precio_proveedor": 4
},{
  "codigo_producto": "FR-50",
  "nombre": "Peral Castell",
  "gama": "Frutales",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "Árbol piramidal, redondeado en su juventud, luego oval, que llega hasta 20 metros de altura y por término medio vive 65 años.Tronco alto, grueso, de corteza agrietada, gris, de la cual se destacan con frecuencia placas lenticulares.Las ramas se insertan formando ángulo agudo con el tronco (45º), de corteza lisa, primero verde y luego gris-violácea, con numerosas lenticelas.",
  "cantidad_en_stock": 400,
  "precio_venta": 8,
  "precio_proveedor": 6
},{
  "codigo_producto": "FR-51",
  "nombre": "Peral Williams",
  "gama": "Frutales",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "Árbol piramidal, redondeado en su juventud, luego oval, que llega hasta 20 metros de altura y por término medio vive 65 años.Tronco alto, grueso, de corteza agrietada, gris, de la cual se destacan con frecuencia placas lenticulares.Las ramas se insertan formando ángulo agudo con el tronco (45º), de corteza lisa, primero verde y luego gris-violácea, con numerosas lenticelas.",
  "cantidad_en_stock": 400,
  "precio_venta": 8,
  "precio_proveedor": 6
},{
  "codigo_producto": "FR-52",
  "nombre": "Peral Conference",
  "gama": "Frutales",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "Árbol piramidal, redondeado en su juventud, luego oval, que llega hasta 20 metros de altura y por término medio vive 65 años.Tronco alto, grueso, de corteza agrietada, gris, de la cual se destacan con frecuencia placas lenticulares.Las ramas se insertan formando ángulo agudo con el tronco (45º), de corteza lisa, primero verde y luego gris-violácea, con numerosas lenticelas.",
  "cantidad_en_stock": 400,
  "precio_venta": 8,
  "precio_proveedor": 6
},{
  "codigo_producto": "FR-53",
  "nombre": "Peral Blanq. de Aranjuez",
  "gama": "Frutales",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "Árbol piramidal, redondeado en su juventud, luego oval, que llega hasta 20 metros de altura y por término medio vive 65 años.Tronco alto, grueso, de corteza agrietada, gris, de la cual se destacan con frecuencia placas lenticulares.Las ramas se insertan formando ángulo agudo con el tronco (45º), de corteza lisa, primero verde y luego gris-violácea, con numerosas lenticelas.",
  "cantidad_en_stock": 400,
  "precio_venta": 8,
  "precio_proveedor": 6
},{
  "codigo_producto": "FR-54",
  "nombre": "Níspero Tanaca",
  "gama": "Frutales",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "Aunque originario del Sudeste de China, el níspero llegó a Europa procedente de Japón en el siglo XVIII como árbol ornamental. En el siglo XIX se inició el consumo de los frutos en toda el área mediterránea, donde se adaptó muy bien a las zonas de cultivo de los cítricos.El cultivo intensivo comenzó a desarrollarse a finales de los años 60 y principios de los 70, cuando comenzaron a implantarse las variedades y técnicas de cultivo actualmente utilizadas.",
  "cantidad_en_stock": 400,
  "precio_venta": 9,
  "precio_proveedor": 7
},{
  "codigo_producto": "FR-55",
  "nombre": "Olivo Cipresino",
  "gama": "Frutales",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "Existen dos hipótesis sobre el origen del olivo, una que postula que proviene de las costas de Siria, Líbano e Israel y otra que considera que lo considera originario de Asia menor. La llegada a Europa probablemente tuvo lugar de mano de los Fenicios, en transito por Chipre, Creta, e Islas del Mar Egeo, pasando a Grecia y más tarde a Italia. Los primeros indicios de la presencia del olivo en las costas mediterráneas españolas coinciden con el dominio romano, aunque fueron posteriormente los árabes los que impulsaron su cultivo en Andalucía, convirtiendo a España en el primer país productor de aceite de oliva a nivel mundial.",
  "cantidad_en_stock": 400,
  "precio_venta": 8,
  "precio_proveedor": 6
},{
  "codigo_producto": "FR-56",
  "nombre": "Nectarina",
  "gama": "Frutales",
  "proveedor": "Frutales Talavera S.A",
  "cantidad_en_stock": 400,
  "precio_venta": 8,
  "precio_proveedor": 6
},{
  "codigo_producto": "FR-57",
  "nombre": "Kaki Rojo Brillante",
  "gama": "Frutales",
  "proveedor": "NaranjasValencianas.com",
  "descripcion": "De crecimiento algo lento los primeros años, llega a alcanzar hasta doce metros de altura o más, aunque en cultivo se prefiere algo más bajo (5-6). Tronco corto y copa extendida. Ramifica muy poco debido a la dominancia apical. Porte más o menos piramidal, aunque con la edad se hace más globoso.",
  "cantidad_en_stock": 400,
  "precio_venta": 9,
  "precio_proveedor": 7
},{
  "codigo_producto": "FR-58",
  "nombre": "Albaricoquero",
  "gama": "Frutales",
  "dimensiones": "8/10",
  "proveedor": "Melocotones de Cieza S.A.",
  "descripcion": "árbol que puede pasar de los 6 m de altura, en la región mediterránea con ramas formando una copa redondeada. La corteza del tronco es pardo-violácea, agrietada; las ramas son rojizas y extendidas cuando jóvenes y las ramas secundarias son cortas, divergentes y escasas. Las yemas latentes son frecuentes especialmente sobre las ramas viejas.",
  "cantidad_en_stock": 200,
  "precio_venta": 11,
  "precio_proveedor": 8
},{
  "codigo_producto": "FR-59",
  "nombre": "Albaricoquero",
  "gama": "Frutales",
  "dimensiones": "10/12",
  "proveedor": "Melocotones de Cieza S.A.",
  "descripcion": "árbol que puede pasar de los 6 m de altura, en la región mediterránea con ramas formando una copa redondeada. La corteza del tronco es pardo-violácea, agrietada; las ramas son rojizas y extendidas cuando jóvenes y las ramas secundarias son cortas, divergentes y escasas. Las yemas latentes son frecuentes especialmente sobre las ramas viejas.",
  "cantidad_en_stock": 200,
  "precio_venta": 22,
  "precio_proveedor": 17
},{
  "codigo_producto": "FR-6",
  "nombre": "Mandarino 2 años injerto",
  "gama": "Frutales",
  "proveedor": "Frutales Talavera S.A",
  "cantidad_en_stock": 15,
  "precio_venta": 7,
  "precio_proveedor": 5
},{
  "codigo_producto": "FR-60",
  "nombre": "Albaricoquero",
  "gama": "Frutales",
  "dimensiones": "12/14",
  "proveedor": "Melocotones de Cieza S.A.",
  "descripcion": "árbol que puede pasar de los 6 m de altura, en la región mediterránea con ramas formando una copa redondeada. La corteza del tronco es pardo-violácea, agrietada; las ramas son rojizas y extendidas cuando jóvenes y las ramas secundarias son cortas, divergentes y escasas. Las yemas latentes son frecuentes especialmente sobre las ramas viejas.",
  "cantidad_en_stock": 200,
  "precio_venta": 32,
  "precio_proveedor": 25
},{
  "codigo_producto": "FR-61",
  "nombre": "Albaricoquero",
  "gama": "Frutales",
  "dimensiones": "14/16",
  "proveedor": "Melocotones de Cieza S.A.",
  "descripcion": "árbol que puede pasar de los 6 m de altura, en la región mediterránea con ramas formando una copa redondeada. La corteza del tronco es pardo-violácea, agrietada; las ramas son rojizas y extendidas cuando jóvenes y las ramas secundarias son cortas, divergentes y escasas. Las yemas latentes son frecuentes especialmente sobre las ramas viejas.",
  "cantidad_en_stock": 200,
  "precio_venta": 49,
  "precio_proveedor": 39
},{
  "codigo_producto": "FR-62",
  "nombre": "Albaricoquero",
  "gama": "Frutales",
  "dimensiones": "16/18",
  "proveedor": "Melocotones de Cieza S.A.",
  "descripcion": "árbol que puede pasar de los 6 m de altura, en la región mediterránea con ramas formando una copa redondeada. La corteza del tronco es pardo-violácea, agrietada; las ramas son rojizas y extendidas cuando jóvenes y las ramas secundarias son cortas, divergentes y escasas. Las yemas latentes son frecuentes especialmente sobre las ramas viejas.",
  "cantidad_en_stock": 200,
  "precio_venta": 70,
  "precio_proveedor": 56
},{
  "codigo_producto": "OR-125",
  "nombre": "Viburnum Tinus \\\"Eve Price\\\"",
  "gama": "Ornamentales",
  "dimensiones": "35-45",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 120,
  "precio_venta": 5,
  "precio_proveedor": 4
},{
  "codigo_producto": "OR-126",
  "nombre": "Weigelia \\\"Bristol Ruby\\\"",
  "gama": "Ornamentales",
  "dimensiones": "35-45",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 120,
  "precio_venta": 5,
  "precio_proveedor": 4
},{
  "codigo_producto": "OR-191",
  "nombre": "Phylostachys Bambusa Spectabilis",
  "gama": "Ornamentales",
  "dimensiones": "180-200",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 24,
  "precio_proveedor": 19
},{
  "codigo_producto": "FR-63",
  "nombre": "Cerezo",
  "gama": "Frutales",
  "dimensiones": "8/10",
  "proveedor": "Jerte Distribuciones S.L.",
  "descripcion": "Las principales especies de cerezo cultivadas en el mundo son el cerezo dulce (Prunus avium), el guindo (P. cerasus) y el cerezo \\\"Duke\\\", híbrido de los anteriores. Ambas especies son naturales del sureste de Europa y oeste de Asia. El cerezo dulce tuvo su origen probablemente en el mar Negro y en el mar Caspio, difundiéndose después hacia Europa y Asia, llevado por los pájaros y las migraciones humanas. Fue uno de los frutales más apreciados por los griegos y con el Imperio Romano se extendió a regiones muy diversas. En la actualidad, el cerezo se encuentra difundido por numerosas regiones y países del mundo con clima templado",
  "cantidad_en_stock": 300,
  "precio_venta": 11,
  "precio_proveedor": 8
},{
  "codigo_producto": "FR-64",
  "nombre": "Cerezo",
  "gama": "Frutales",
  "dimensiones": "10/12",
  "proveedor": "Jerte Distribuciones S.L.",
  "descripcion": "Las principales especies de cerezo cultivadas en el mundo son el cerezo dulce (Prunus avium), el guindo (P. cerasus) y el cerezo \\\"Duke\\\", híbrido de los anteriores. Ambas especies son naturales del sureste de Europa y oeste de Asia. El cerezo dulce tuvo su origen probablemente en el mar Negro y en el mar Caspio, difundiéndose después hacia Europa y Asia, llevado por los pájaros y las migraciones humanas. Fue uno de los frutales más apreciados por los griegos y con el Imperio Romano se extendió a regiones muy diversas. En la actualidad, el cerezo se encuentra difundido por numerosas regiones y países del mundo con clima templado",
  "cantidad_en_stock": 15,
  "precio_venta": 22,
  "precio_proveedor": 17
},{
  "codigo_producto": "FR-65",
  "nombre": "Cerezo",
  "gama": "Frutales",
  "dimensiones": "12/14",
  "proveedor": "Jerte Distribuciones S.L.",
  "descripcion": "Las principales especies de cerezo cultivadas en el mundo son el cerezo dulce (Prunus avium), el guindo (P. cerasus) y el cerezo \\\"Duke\\\", híbrido de los anteriores. Ambas especies son naturales del sureste de Europa y oeste de Asia. El cerezo dulce tuvo su origen probablemente en el mar Negro y en el mar Caspio, difundiéndose después hacia Europa y Asia, llevado por los pájaros y las migraciones humanas. Fue uno de los frutales más apreciados por los griegos y con el Imperio Romano se extendió a regiones muy diversas. En la actualidad, el cerezo se encuentra difundido por numerosas regiones y países del mundo con clima templado",
  "cantidad_en_stock": 200,
  "precio_venta": 32,
  "precio_proveedor": 25
},{
  "codigo_producto": "FR-66",
  "nombre": "Cerezo",
  "gama": "Frutales",
  "dimensiones": "14/16",
  "proveedor": "Jerte Distribuciones S.L.",
  "descripcion": "Las principales especies de cerezo cultivadas en el mundo son el cerezo dulce (Prunus avium), el guindo (P. cerasus) y el cerezo \\\"Duke\\\", híbrido de los anteriores. Ambas especies son naturales del sureste de Europa y oeste de Asia. El cerezo dulce tuvo su origen probablemente en el mar Negro y en el mar Caspio, difundiéndose después hacia Europa y Asia, llevado por los pájaros y las migraciones humanas. Fue uno de los frutales más apreciados por los griegos y con el Imperio Romano se extendió a regiones muy diversas. En la actualidad, el cerezo se encuentra difundido por numerosas regiones y países del mundo con clima templado",
  "cantidad_en_stock": 50,
  "precio_venta": 49,
  "precio_proveedor": 39
},{
  "codigo_producto": "FR-67",
  "nombre": "Cerezo",
  "gama": "Frutales",
  "dimensiones": "16/18",
  "proveedor": "Jerte Distribuciones S.L.",
  "descripcion": "Las principales especies de cerezo cultivadas en el mundo son el cerezo dulce (Prunus avium), el guindo (P. cerasus) y el cerezo \\\"Duke\\\", híbrido de los anteriores. Ambas especies son naturales del sureste de Europa y oeste de Asia. El cerezo dulce tuvo su origen probablemente en el mar Negro y en el mar Caspio, difundiéndose después hacia Europa y Asia, llevado por los pájaros y las migraciones humanas. Fue uno de los frutales más apreciados por los griegos y con el Imperio Romano se extendió a regiones muy diversas. En la actualidad, el cerezo se encuentra difundido por numerosas regiones y países del mundo con clima templado",
  "cantidad_en_stock": 50,
  "precio_venta": 70,
  "precio_proveedor": 56
},{
  "codigo_producto": "FR-68",
  "nombre": "Cerezo",
  "gama": "Frutales",
  "dimensiones": "18/20",
  "proveedor": "Jerte Distribuciones S.L.",
  "descripcion": "Las principales especies de cerezo cultivadas en el mundo son el cerezo dulce (Prunus avium), el guindo (P. cerasus) y el cerezo \\\"Duke\\\", híbrido de los anteriores. Ambas especies son naturales del sureste de Europa y oeste de Asia. El cerezo dulce tuvo su origen probablemente en el mar Negro y en el mar Caspio, difundiéndose después hacia Europa y Asia, llevado por los pájaros y las migraciones humanas. Fue uno de los frutales más apreciados por los griegos y con el Imperio Romano se extendió a regiones muy diversas. En la actualidad, el cerezo se encuentra difundido por numerosas regiones y países del mundo con clima templado",
  "cantidad_en_stock": 50,
  "precio_venta": 80,
  "precio_proveedor": 64
},{
  "codigo_producto": "FR-69",
  "nombre": "Cerezo",
  "gama": "Frutales",
  "dimensiones": "20/25",
  "proveedor": "Jerte Distribuciones S.L.",
  "descripcion": "Las principales especies de cerezo cultivadas en el mundo son el cerezo dulce (Prunus avium), el guindo (P. cerasus) y el cerezo \\\"Duke\\\", híbrido de los anteriores. Ambas especies son naturales del sureste de Europa y oeste de Asia. El cerezo dulce tuvo su origen probablemente en el mar Negro y en el mar Caspio, difundiéndose después hacia Europa y Asia, llevado por los pájaros y las migraciones humanas. Fue uno de los frutales más apreciados por los griegos y con el Imperio Romano se extendió a regiones muy diversas. En la actualidad, el cerezo se encuentra difundido por numerosas regiones y países del mundo con clima templado",
  "cantidad_en_stock": 50,
  "precio_venta": 91,
  "precio_proveedor": 72
},{
  "codigo_producto": "FR-7",
  "nombre": "Mandarino calibre 8/10",
  "gama": "Frutales",
  "proveedor": "Frutales Talavera S.A",
  "cantidad_en_stock": 15,
  "precio_venta": 29,
  "precio_proveedor": 23
},{
  "codigo_producto": "FR-70",
  "nombre": "Ciruelo",
  "gama": "Frutales",
  "dimensiones": "8/10",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "árbol de tamaño mediano que alcanza una altura máxima de 5-6 m. Tronco de corteza pardo-azulada, brillante, lisa o agrietada longitudinalmente. Produce ramas alternas, pequeñas, delgadas, unas veces lisas, glabras y otras pubescentes y vellosas",
  "cantidad_en_stock": 50,
  "precio_venta": 11,
  "precio_proveedor": 8
},{
  "codigo_producto": "FR-71",
  "nombre": "Ciruelo",
  "gama": "Frutales",
  "dimensiones": "10/12",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "árbol de tamaño mediano que alcanza una altura máxima de 5-6 m. Tronco de corteza pardo-azulada, brillante, lisa o agrietada longitudinalmente. Produce ramas alternas, pequeñas, delgadas, unas veces lisas, glabras y otras pubescentes y vellosas",
  "cantidad_en_stock": 50,
  "precio_venta": 22,
  "precio_proveedor": 17
},{
  "codigo_producto": "FR-72",
  "nombre": "Ciruelo",
  "gama": "Frutales",
  "dimensiones": "12/14",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "árbol de tamaño mediano que alcanza una altura máxima de 5-6 m. Tronco de corteza pardo-azulada, brillante, lisa o agrietada longitudinalmente. Produce ramas alternas, pequeñas, delgadas, unas veces lisas, glabras y otras pubescentes y vellosas",
  "cantidad_en_stock": 50,
  "precio_venta": 32,
  "precio_proveedor": 25
},{
  "codigo_producto": "FR-73",
  "nombre": "Granado",
  "gama": "Frutales",
  "dimensiones": "8/10",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "pequeño árbol caducifolio, a veces con porte arbustivo, de 3 a 6 m de altura, con el tronco retorcido. Madera dura y corteza escamosa de color grisáceo. Las ramitas jóvenes son más o menos cuadrangulares o angostas y de cuatro alas, posteriormente se vuelven redondas con corteza de color café grisáceo, la mayoría de las ramas, pero especialmente las pequeñas ramitas axilares, son en forma de espina o terminan en una espina aguda; la copa es extendida.",
  "cantidad_en_stock": 50,
  "precio_venta": 13,
  "precio_proveedor": 10
},{
  "codigo_producto": "FR-74",
  "nombre": "Granado",
  "gama": "Frutales",
  "dimensiones": "10/12",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "pequeño árbol caducifolio, a veces con porte arbustivo, de 3 a 6 m de altura, con el tronco retorcido. Madera dura y corteza escamosa de color grisáceo. Las ramitas jóvenes son más o menos cuadrangulares o angostas y de cuatro alas, posteriormente se vuelven redondas con corteza de color café grisáceo, la mayoría de las ramas, pero especialmente las pequeñas ramitas axilares, son en forma de espina o terminan en una espina aguda; la copa es extendida.",
  "cantidad_en_stock": 50,
  "precio_venta": 22,
  "precio_proveedor": 17
},{
  "codigo_producto": "FR-75",
  "nombre": "Granado",
  "gama": "Frutales",
  "dimensiones": "12/14",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "pequeño árbol caducifolio, a veces con porte arbustivo, de 3 a 6 m de altura, con el tronco retorcido. Madera dura y corteza escamosa de color grisáceo. Las ramitas jóvenes son más o menos cuadrangulares o angostas y de cuatro alas, posteriormente se vuelven redondas con corteza de color café grisáceo, la mayoría de las ramas, pero especialmente las pequeñas ramitas axilares, son en forma de espina o terminan en una espina aguda; la copa es extendida.",
  "cantidad_en_stock": 50,
  "precio_venta": 32,
  "precio_proveedor": 25
},{
  "codigo_producto": "FR-76",
  "nombre": "Granado",
  "gama": "Frutales",
  "dimensiones": "14/16",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "pequeño árbol caducifolio, a veces con porte arbustivo, de 3 a 6 m de altura, con el tronco retorcido. Madera dura y corteza escamosa de color grisáceo. Las ramitas jóvenes son más o menos cuadrangulares o angostas y de cuatro alas, posteriormente se vuelven redondas con corteza de color café grisáceo, la mayoría de las ramas, pero especialmente las pequeñas ramitas axilares, son en forma de espina o terminan en una espina aguda; la copa es extendida.",
  "cantidad_en_stock": 50,
  "precio_venta": 49,
  "precio_proveedor": 39
},{
  "codigo_producto": "FR-77",
  "nombre": "Granado",
  "gama": "Frutales",
  "dimensiones": "16/18",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "pequeño árbol caducifolio, a veces con porte arbustivo, de 3 a 6 m de altura, con el tronco retorcido. Madera dura y corteza escamosa de color grisáceo. Las ramitas jóvenes son más o menos cuadrangulares o angostas y de cuatro alas, posteriormente se vuelven redondas con corteza de color café grisáceo, la mayoría de las ramas, pero especialmente las pequeñas ramitas axilares, son en forma de espina o terminan en una espina aguda; la copa es extendida.",
  "cantidad_en_stock": 50,
  "precio_venta": 70,
  "precio_proveedor": 56
},{
  "codigo_producto": "FR-78",
  "nombre": "Higuera",
  "gama": "Frutales",
  "dimensiones": "8/10",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "La higuera (Ficus carica L.) es un árbol típico de secano en los países mediterráneos. Su rusticidad y su fácil multiplicación hacen de la higuera un frutal muy apropiado para el cultivo extensivo.. Siempre ha sido considerado como árbol que no requiere cuidado alguno una vez plantado y arraigado, limitándose el hombre a recoger de él los frutos cuando maduran, unos para consumo en fresco y otros para conserva. Las únicas higueras con cuidados culturales esmerados, en muchas comarcas, son las brevales, por el interés económico de su primera cosecha, la de brevas.",
  "cantidad_en_stock": 50,
  "precio_venta": 15,
  "precio_proveedor": 12
},{
  "codigo_producto": "FR-79",
  "nombre": "Higuera",
  "gama": "Frutales",
  "dimensiones": "10/12",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "La higuera (Ficus carica L.) es un árbol típico de secano en los países mediterráneos. Su rusticidad y su fácil multiplicación hacen de la higuera un frutal muy apropiado para el cultivo extensivo.. Siempre ha sido considerado como árbol que no requiere cuidado alguno una vez plantado y arraigado, limitándose el hombre a recoger de él los frutos cuando maduran, unos para consumo en fresco y otros para conserva. Las únicas higueras con cuidados culturales esmerados, en muchas comarcas, son las brevales, por el interés económico de su primera cosecha, la de brevas.",
  "cantidad_en_stock": 50,
  "precio_venta": 22,
  "precio_proveedor": 17
},{
  "codigo_producto": "FR-8",
  "nombre": "Limonero -Plantón joven",
  "gama": "Frutales",
  "proveedor": "NaranjasValencianas.com",
  "descripcion": "El limonero, pertenece al grupo de los cítricos, teniendo su origen hace unos 20 millones de años en el sudeste asiático. Fue introducido por los árabes en el área mediterránea entre los años 1.000 a 1.200, habiendo experimentando numerosas modificaciones debidas tanto a la selección natural mediante hibridaciones espontáneas como a las producidas por el",
  "cantidad_en_stock": 15,
  "precio_venta": 6,
  "precio_proveedor": 4
},{
  "codigo_producto": "FR-80",
  "nombre": "Higuera",
  "gama": "Frutales",
  "dimensiones": "12/14",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "La higuera (Ficus carica L.) es un árbol típico de secano en los países mediterráneos. Su rusticidad y su fácil multiplicación hacen de la higuera un frutal muy apropiado para el cultivo extensivo.. Siempre ha sido considerado como árbol que no requiere cuidado alguno una vez plantado y arraigado, limitándose el hombre a recoger de él los frutos cuando maduran, unos para consumo en fresco y otros para conserva. Las únicas higueras con cuidados culturales esmerados, en muchas comarcas, son las brevales, por el interés económico de su primera cosecha, la de brevas.",
  "cantidad_en_stock": 50,
  "precio_venta": 32,
  "precio_proveedor": 25
},{
  "codigo_producto": "FR-81",
  "nombre": "Higuera",
  "gama": "Frutales",
  "dimensiones": "14/16",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "La higuera (Ficus carica L.) es un árbol típico de secano en los países mediterráneos. Su rusticidad y su fácil multiplicación hacen de la higuera un frutal muy apropiado para el cultivo extensivo.. Siempre ha sido considerado como árbol que no requiere cuidado alguno una vez plantado y arraigado, limitándose el hombre a recoger de él los frutos cuando maduran, unos para consumo en fresco y otros para conserva. Las únicas higueras con cuidados culturales esmerados, en muchas comarcas, son las brevales, por el interés económico de su primera cosecha, la de brevas.",
  "cantidad_en_stock": 50,
  "precio_venta": 49,
  "precio_proveedor": 39
},{
  "codigo_producto": "FR-82",
  "nombre": "Higuera",
  "gama": "Frutales",
  "dimensiones": "16/18",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "La higuera (Ficus carica L.) es un árbol típico de secano en los países mediterráneos. Su rusticidad y su fácil multiplicación hacen de la higuera un frutal muy apropiado para el cultivo extensivo.. Siempre ha sido considerado como árbol que no requiere cuidado alguno una vez plantado y arraigado, limitándose el hombre a recoger de él los frutos cuando maduran, unos para consumo en fresco y otros para conserva. Las únicas higueras con cuidados culturales esmerados, en muchas comarcas, son las brevales, por el interés económico de su primera cosecha, la de brevas.",
  "cantidad_en_stock": 50,
  "precio_venta": 70,
  "precio_proveedor": 56
},{
  "codigo_producto": "FR-83",
  "nombre": "Higuera",
  "gama": "Frutales",
  "dimensiones": "18/20",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "La higuera (Ficus carica L.) es un árbol típico de secano en los países mediterráneos. Su rusticidad y su fácil multiplicación hacen de la higuera un frutal muy apropiado para el cultivo extensivo.. Siempre ha sido considerado como árbol que no requiere cuidado alguno una vez plantado y arraigado, limitándose el hombre a recoger de él los frutos cuando maduran, unos para consumo en fresco y otros para conserva. Las únicas higueras con cuidados culturales esmerados, en muchas comarcas, son las brevales, por el interés económico de su primera cosecha, la de brevas.",
  "cantidad_en_stock": 50,
  "precio_venta": 80,
  "precio_proveedor": 64
},{
  "codigo_producto": "FR-84",
  "nombre": "Kaki",
  "gama": "Frutales",
  "dimensiones": "8/10",
  "proveedor": "NaranjasValencianas.com",
  "descripcion": "De crecimiento algo lento los primeros años, llega a alcanzar hasta doce metros de altura o más, aunque en cultivo se prefiere algo más bajo (5-6). Tronco corto y copa extendida. Ramifica muy poco debido a la dominancia apical. Porte más o menos piramidal, aunque con la edad se hace más globoso.",
  "cantidad_en_stock": 50,
  "precio_venta": 13,
  "precio_proveedor": 10
},{
  "codigo_producto": "FR-85",
  "nombre": "Kaki",
  "gama": "Frutales",
  "dimensiones": "16/18",
  "proveedor": "NaranjasValencianas.com",
  "descripcion": "De crecimiento algo lento los primeros años, llega a alcanzar hasta doce metros de altura o más, aunque en cultivo se prefiere algo más bajo (5-6). Tronco corto y copa extendida. Ramifica muy poco debido a la dominancia apical. Porte más o menos piramidal, aunque con la edad se hace más globoso.",
  "cantidad_en_stock": 50,
  "precio_venta": 70,
  "precio_proveedor": 56
},{
  "codigo_producto": "FR-86",
  "nombre": "Manzano",
  "gama": "Frutales",
  "dimensiones": "8/10",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "alcanza como máximo 10 m. de altura y tiene una copa globosa. Tronco derecho que normalmente alcanza de 2 a 2,5 m. de altura, con corteza cubierta de lenticelas, lisa, adherida, de color ceniciento verdoso sobre los ramos y escamosa y gris parda sobre las partes viejas del árbol. Tiene una vida de unos 60-80 años. Las ramas se insertan en ángulo abierto sobre el tallo, de color verde oscuro, a veces tendiendo a negruzco o violáceo. Los brotes jóvenes terminan con frecuencia en una espina",
  "cantidad_en_stock": 50,
  "precio_venta": 11,
  "precio_proveedor": 8
},{
  "codigo_producto": "FR-87",
  "nombre": "Manzano",
  "gama": "Frutales",
  "dimensiones": "10/12",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "alcanza como máximo 10 m. de altura y tiene una copa globosa. Tronco derecho que normalmente alcanza de 2 a 2,5 m. de altura, con corteza cubierta de lenticelas, lisa, adherida, de color ceniciento verdoso sobre los ramos y escamosa y gris parda sobre las partes viejas del árbol. Tiene una vida de unos 60-80 años. Las ramas se insertan en ángulo abierto sobre el tallo, de color verde oscuro, a veces tendiendo a negruzco o violáceo. Los brotes jóvenes terminan con frecuencia en una espina",
  "cantidad_en_stock": 50,
  "precio_venta": 22,
  "precio_proveedor": 17
},{
  "codigo_producto": "OR-127",
  "nombre": "Camelia japonica",
  "gama": "Ornamentales",
  "dimensiones": "40-60",
  "proveedor": "Viveros EL OASIS",
  "descripcion": "Arbusto excepcional por su floración otoñal, invernal o primaveral. Flores: Las flores son solitarias, aparecen en el ápice de cada rama, y son con una corola simple o doble, y comprendiendo varios colores. Suelen medir unos 7-12 cm de diÃ metro y tienen 5 sépalos y 5 pétalos. Estambres numerosos unidos en la mitad o en 2/3 de su longitud.",
  "cantidad_en_stock": 50,
  "precio_venta": 7,
  "precio_proveedor": 5
},{
  "codigo_producto": "FR-88",
  "nombre": "Manzano",
  "gama": "Frutales",
  "dimensiones": "12/14",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "alcanza como máximo 10 m. de altura y tiene una copa globosa. Tronco derecho que normalmente alcanza de 2 a 2,5 m. de altura, con corteza cubierta de lenticelas, lisa, adherida, de color ceniciento verdoso sobre los ramos y escamosa y gris parda sobre las partes viejas del árbol. Tiene una vida de unos 60-80 años. Las ramas se insertan en ángulo abierto sobre el tallo, de color verde oscuro, a veces tendiendo a negruzco o violáceo. Los brotes jóvenes terminan con frecuencia en una espina",
  "cantidad_en_stock": 50,
  "precio_venta": 32,
  "precio_proveedor": 25
},{
  "codigo_producto": "FR-89",
  "nombre": "Manzano",
  "gama": "Frutales",
  "dimensiones": "14/16",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "alcanza como máximo 10 m. de altura y tiene una copa globosa. Tronco derecho que normalmente alcanza de 2 a 2,5 m. de altura, con corteza cubierta de lenticelas, lisa, adherida, de color ceniciento verdoso sobre los ramos y escamosa y gris parda sobre las partes viejas del árbol. Tiene una vida de unos 60-80 años. Las ramas se insertan en ángulo abierto sobre el tallo, de color verde oscuro, a veces tendiendo a negruzco o violáceo. Los brotes jóvenes terminan con frecuencia en una espina",
  "cantidad_en_stock": 50,
  "precio_venta": 49,
  "precio_proveedor": 39
},{
  "codigo_producto": "FR-9",
  "nombre": "Limonero calibre 8/10",
  "gama": "Frutales",
  "proveedor": "NaranjasValencianas.com",
  "descripcion": "El limonero, pertenece al grupo de los cítricos, teniendo su origen hace unos 20 millones de años en el sudeste asiático. Fue introducido por los árabes en el área mediterránea entre los años 1.000 a 1.200, habiendo experimentando numerosas modificaciones debidas tanto a la selección natural mediante hibridaciones espontáneas como a las producidas por el",
  "cantidad_en_stock": 15,
  "precio_venta": 29,
  "precio_proveedor": 23
},{
  "codigo_producto": "FR-90",
  "nombre": "Níspero",
  "gama": "Frutales",
  "dimensiones": "16/18",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "Aunque originario del Sudeste de China, el níspero llegó a Europa procedente de Japón en el siglo XVIII como árbol ornamental. En el siglo XIX se inició el consumo de los frutos en toda el área mediterránea, donde se adaptó muy bien a las zonas de cultivo de los cítricos.El cultivo intensivo comenzó a desarrollarse a finales de los años 60 y principios de los 70, cuando comenzaron a implantarse las variedades y técnicas de cultivo actualmente utilizadas.",
  "cantidad_en_stock": 50,
  "precio_venta": 70,
  "precio_proveedor": 56
},{
  "codigo_producto": "FR-91",
  "nombre": "Níspero",
  "gama": "Frutales",
  "dimensiones": "18/20",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "Aunque originario del Sudeste de China, el níspero llegó a Europa procedente de Japón en el siglo XVIII como árbol ornamental. En el siglo XIX se inició el consumo de los frutos en toda el área mediterránea, donde se adaptó muy bien a las zonas de cultivo de los cítricos.El cultivo intensivo comenzó a desarrollarse a finales de los años 60 y principios de los 70, cuando comenzaron a implantarse las variedades y técnicas de cultivo actualmente utilizadas.",
  "cantidad_en_stock": 50,
  "precio_venta": 80,
  "precio_proveedor": 64
},{
  "codigo_producto": "FR-92",
  "nombre": "Melocotonero",
  "gama": "Frutales",
  "dimensiones": "8/10",
  "proveedor": "Melocotones de Cieza S.A.",
  "descripcion": "Árbol caducifolio de porte bajo con corteza lisa, de color ceniciento. Sus hojas son alargadas con el margen ligeramente aserrado, de color verde brillante, algo más claras por el envés. El melocotonero está muy arraigado en la cultura asiática.\\r\\nEn Japón, el noble heroe Momotaro, una especie de Cid japonés, nació del interior de un enorme melocotón que flotaba río abajo.\\r\\nEn China se piensa que comer melocotón confiere longevidad al ser humano, ya que formaba parte de la dieta de sus dioses inmortales.",
  "cantidad_en_stock": 50,
  "precio_venta": 11,
  "precio_proveedor": 8
},{
  "codigo_producto": "FR-93",
  "nombre": "Melocotonero",
  "gama": "Frutales",
  "dimensiones": "10/12",
  "proveedor": "Melocotones de Cieza S.A.",
  "descripcion": "Árbol caducifolio de porte bajo con corteza lisa, de color ceniciento. Sus hojas son alargadas con el margen ligeramente aserrado, de color verde brillante, algo más claras por el envés. El melocotonero está muy arraigado en la cultura asiática.\\r\\nEn Japón, el noble heroe Momotaro, una especie de Cid japonés, nació del interior de un enorme melocotón que flotaba río abajo.\\r\\nEn China se piensa que comer melocotón confiere longevidad al ser humano, ya que formaba parte de la dieta de sus dioses inmortales.",
  "cantidad_en_stock": 50,
  "precio_venta": 22,
  "precio_proveedor": 17
},{
  "codigo_producto": "FR-94",
  "nombre": "Melocotonero",
  "gama": "Frutales",
  "dimensiones": "12/14",
  "proveedor": "Melocotones de Cieza S.A.",
  "descripcion": "Árbol caducifolio de porte bajo con corteza lisa, de color ceniciento. Sus hojas son alargadas con el margen ligeramente aserrado, de color verde brillante, algo más claras por el envés. El melocotonero está muy arraigado en la cultura asiática.\\r\\nEn Japón, el noble heroe Momotaro, una especie de Cid japonés, nació del interior de un enorme melocotón que flotaba río abajo.\\r\\nEn China se piensa que comer melocotón confiere longevidad al ser humano, ya que formaba parte de la dieta de sus dioses inmortales.",
  "cantidad_en_stock": 50,
  "precio_venta": 32,
  "precio_proveedor": 25
},{
  "codigo_producto": "FR-95",
  "nombre": "Melocotonero",
  "gama": "Frutales",
  "dimensiones": "14/16",
  "proveedor": "Melocotones de Cieza S.A.",
  "descripcion": "Árbol caducifolio de porte bajo con corteza lisa, de color ceniciento. Sus hojas son alargadas con el margen ligeramente aserrado, de color verde brillante, algo más claras por el envés. El melocotonero está muy arraigado en la cultura asiática.\\r\\nEn Japón, el noble heroe Momotaro, una especie de Cid japonés, nació del interior de un enorme melocotón que flotaba río abajo.\\r\\nEn China se piensa que comer melocotón confiere longevidad al ser humano, ya que formaba parte de la dieta de sus dioses inmortales.",
  "cantidad_en_stock": 50,
  "precio_venta": 49,
  "precio_proveedor": 39
},{
  "codigo_producto": "FR-96",
  "nombre": "Membrillero",
  "gama": "Frutales",
  "dimensiones": "8/10",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "arbolito caducifolio de 4-6 m de altura con el tronco tortuoso y la corteza lisa, grisácea, que se desprende en escamas con la edad. Copa irregular, con ramas inermes, flexuosas, parduzcas, punteadas. Ramillas jóvenes tomentosas",
  "cantidad_en_stock": 50,
  "precio_venta": 11,
  "precio_proveedor": 8
},{
  "codigo_producto": "FR-97",
  "nombre": "Membrillero",
  "gama": "Frutales",
  "dimensiones": "10/12",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "arbolito caducifolio de 4-6 m de altura con el tronco tortuoso y la corteza lisa, grisácea, que se desprende en escamas con la edad. Copa irregular, con ramas inermes, flexuosas, parduzcas, punteadas. Ramillas jóvenes tomentosas",
  "cantidad_en_stock": 50,
  "precio_venta": 22,
  "precio_proveedor": 17
},{
  "codigo_producto": "FR-98",
  "nombre": "Membrillero",
  "gama": "Frutales",
  "dimensiones": "12/14",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "arbolito caducifolio de 4-6 m de altura con el tronco tortuoso y la corteza lisa, grisácea, que se desprende en escamas con la edad. Copa irregular, con ramas inermes, flexuosas, parduzcas, punteadas. Ramillas jóvenes tomentosas",
  "cantidad_en_stock": 50,
  "precio_venta": 32,
  "precio_proveedor": 25
},{
  "codigo_producto": "FR-99",
  "nombre": "Membrillero",
  "gama": "Frutales",
  "dimensiones": "14/16",
  "proveedor": "Frutales Talavera S.A",
  "descripcion": "arbolito caducifolio de 4-6 m de altura con el tronco tortuoso y la corteza lisa, grisácea, que se desprende en escamas con la edad. Copa irregular, con ramas inermes, flexuosas, parduzcas, punteadas. Ramillas jóvenes tomentosas",
  "cantidad_en_stock": 50,
  "precio_venta": 49,
  "precio_proveedor": 39
},{
  "codigo_producto": "OR-001",
  "nombre": "Arbustos Mix Maceta",
  "gama": "Ornamentales",
  "dimensiones": "40-60",
  "proveedor": "Valencia Garden Service",
  "cantidad_en_stock": 25,
  "precio_venta": 5,
  "precio_proveedor": 4
},{
  "codigo_producto": "OR-100",
  "nombre": "Mimosa Injerto CLASICA Dealbata ",
  "gama": "Ornamentales",
  "dimensiones": "100-110",
  "proveedor": "Viveros EL OASIS",
  "descripcion": "Acacia dealbata. Nombre común o vulgar: Mimosa fina, Mimosa, Mimosa común, Mimosa plateada, Aromo francés. Familia: Mimosaceae. Origen: Australia, Sureste, (N. G. del Sur y Victoria). Arbol de follaje persistente muy usado en parques por su atractiva floración amarilla hacia fines del invierno. Altura: de 3 a 10 metros generalmente. Crecimiento rápido. Follaje perenne de tonos plateados, muy ornamental. Sus hojas son de textura fina, de color verde y sus flores amarillas que aparecen en racimos grandes. Florece de Enero a Marzo (Hemisferio Norte). Legumbre de 5-9 cm de longitud, recta o ligeramente curvada, con los bordes algo constreñidos entre las semillas, que se disponen en el fruto longitudinalmente...",
  "cantidad_en_stock": 100,
  "precio_venta": 12,
  "precio_proveedor": 9
},{
  "codigo_producto": "OR-118",
  "nombre": "Hibiscus Syriacus \\\"Pink Giant\\\" Rosa",
  "gama": "Ornamentales",
  "dimensiones": "35-45",
  "proveedor": "Viveros EL OASIS",
  "descripcion": "Por su capacidad de soportar podas, pueden ser fácilmente moldeadas como bonsái en el transcurso de pocos años. Flores de muchos colores según la variedad, desde el blanco puro al rojo intenso, del amarillo al anaranjado. La flor apenas dura 1 día, pero continuamente aparecen nuevas y la floración se prolonga durante todo el periodo de crecimiento vegetativo.",
  "cantidad_en_stock": 120,
  "precio_venta": 7,
  "precio_proveedor": 5
},{
  "codigo_producto": "OR-101",
  "nombre": "Expositor Mimosa Semilla Mix",
  "gama": "Ornamentales",
  "dimensiones": "170-200",
  "proveedor": "Viveros EL OASIS",
  "descripcion": "Acacia dealbata. Nombre común o vulgar: Mimosa fina, Mimosa, Mimosa común, Mimosa plateada, Aromo francés. Familia: Mimosaceae. Origen: Australia, Sureste, (N. G. del Sur y Victoria). Arbol de follaje persistente muy usado en parques por su atractiva floración amarilla hacia fines del invierno. Altura: de 3 a 10 metros generalmente. Crecimiento rápido. Follaje perenne de tonos plateados, muy ornamental. Sus hojas son de textura fina, de color verde y sus flores amarillas que aparecen en racimos grandes. Florece de Enero a Marzo (Hemisferio Norte). Legumbre de 5-9 cm de longitud, recta o ligeramente curvada, con los bordes algo constreñidos entre las semillas, que se disponen en el fruto longitudinalmente...",
  "cantidad_en_stock": 100,
  "precio_venta": 6,
  "precio_proveedor": 4
},{
  "codigo_producto": "OR-102",
  "nombre": "Mimosa Semilla Bayleyana  ",
  "gama": "Ornamentales",
  "dimensiones": "170-200",
  "proveedor": "Viveros EL OASIS",
  "descripcion": "Acacia dealbata. Nombre común o vulgar: Mimosa fina, Mimosa, Mimosa común, Mimosa plateada, Aromo francés. Familia: Mimosaceae. Origen: Australia, Sureste, (N. G. del Sur y Victoria). Arbol de follaje persistente muy usado en parques por su atractiva floración amarilla hacia fines del invierno. Altura: de 3 a 10 metros generalmente. Crecimiento rápido. Follaje perenne de tonos plateados, muy ornamental. Sus hojas son de textura fina, de color verde y sus flores amarillas que aparecen en racimos grandes. Florece de Enero a Marzo (Hemisferio Norte). Legumbre de 5-9 cm de longitud, recta o ligeramente curvada, con los bordes algo constreñidos entre las semillas, que se disponen en el fruto longitudinalmente...",
  "cantidad_en_stock": 100,
  "precio_venta": 6,
  "precio_proveedor": 4
},{
  "codigo_producto": "OR-103",
  "nombre": "Mimosa Semilla Bayleyana   ",
  "gama": "Ornamentales",
  "dimensiones": "200-225",
  "proveedor": "Viveros EL OASIS",
  "descripcion": "Acacia dealbata. Nombre común o vulgar: Mimosa fina, Mimosa, Mimosa común, Mimosa plateada, Aromo francés. Familia: Mimosaceae. Origen: Australia, Sureste, (N. G. del Sur y Victoria). Arbol de follaje persistente muy usado en parques por su atractiva floración amarilla hacia fines del invierno. Altura: de 3 a 10 metros generalmente. Crecimiento rápido. Follaje perenne de tonos plateados, muy ornamental. Sus hojas son de textura fina, de color verde y sus flores amarillas que aparecen en racimos grandes. Florece de Enero a Marzo (Hemisferio Norte). Legumbre de 5-9 cm de longitud, recta o ligeramente curvada, con los bordes algo constreñidos entre las semillas, que se disponen en el fruto longitudinalmente...",
  "cantidad_en_stock": 100,
  "precio_venta": 10,
  "precio_proveedor": 8
},{
  "codigo_producto": "OR-104",
  "nombre": "Mimosa Semilla Cyanophylla    ",
  "gama": "Ornamentales",
  "dimensiones": "200-225",
  "proveedor": "Viveros EL OASIS",
  "descripcion": "Acacia dealbata. Nombre común o vulgar: Mimosa fina, Mimosa, Mimosa común, Mimosa plateada, Aromo francés. Familia: Mimosaceae. Origen: Australia, Sureste, (N. G. del Sur y Victoria). Arbol de follaje persistente muy usado en parques por su atractiva floración amarilla hacia fines del invierno. Altura: de 3 a 10 metros generalmente. Crecimiento rápido. Follaje perenne de tonos plateados, muy ornamental. Sus hojas son de textura fina, de color verde y sus flores amarillas que aparecen en racimos grandes. Florece de Enero a Marzo (Hemisferio Norte). Legumbre de 5-9 cm de longitud, recta o ligeramente curvada, con los bordes algo constreñidos entre las semillas, que se disponen en el fruto longitudinalmente...",
  "cantidad_en_stock": 100,
  "precio_venta": 10,
  "precio_proveedor": 8
},{
  "codigo_producto": "OR-105",
  "nombre": "Mimosa Semilla Espectabilis  ",
  "gama": "Ornamentales",
  "dimensiones": "160-170",
  "proveedor": "Viveros EL OASIS",
  "descripcion": "Acacia dealbata. Nombre común o vulgar: Mimosa fina, Mimosa, Mimosa común, Mimosa plateada, Aromo francés. Familia: Mimosaceae. Origen: Australia, Sureste, (N. G. del Sur y Victoria). Arbol de follaje persistente muy usado en parques por su atractiva floración amarilla hacia fines del invierno. Altura: de 3 a 10 metros generalmente. Crecimiento rápido. Follaje perenne de tonos plateados, muy ornamental. Sus hojas son de textura fina, de color verde y sus flores amarillas que aparecen en racimos grandes. Florece de Enero a Marzo (Hemisferio Norte). Legumbre de 5-9 cm de longitud, recta o ligeramente curvada, con los bordes algo constreñidos entre las semillas, que se disponen en el fruto longitudinalmente...",
  "cantidad_en_stock": 100,
  "precio_venta": 6,
  "precio_proveedor": 4
},{
  "codigo_producto": "OR-106",
  "nombre": "Mimosa Semilla Longifolia   ",
  "gama": "Ornamentales",
  "dimensiones": "200-225",
  "proveedor": "Viveros EL OASIS",
  "descripcion": "Acacia dealbata. Nombre común o vulgar: Mimosa fina, Mimosa, Mimosa común, Mimosa plateada, Aromo francés. Familia: Mimosaceae. Origen: Australia, Sureste, (N. G. del Sur y Victoria). Arbol de follaje persistente muy usado en parques por su atractiva floración amarilla hacia fines del invierno. Altura: de 3 a 10 metros generalmente. Crecimiento rápido. Follaje perenne de tonos plateados, muy ornamental. Sus hojas son de textura fina, de color verde y sus flores amarillas que aparecen en racimos grandes. Florece de Enero a Marzo (Hemisferio Norte). Legumbre de 5-9 cm de longitud, recta o ligeramente curvada, con los bordes algo constreñidos entre las semillas, que se disponen en el fruto longitudinalmente...",
  "cantidad_en_stock": 100,
  "precio_venta": 10,
  "precio_proveedor": 8
},{
  "codigo_producto": "OR-107",
  "nombre": "Mimosa Semilla Floribunda 4 estaciones",
  "gama": "Ornamentales",
  "dimensiones": "120-140",
  "proveedor": "Viveros EL OASIS",
  "descripcion": "Acacia dealbata. Nombre común o vulgar: Mimosa fina, Mimosa, Mimosa común, Mimosa plateada, Aromo francés. Familia: Mimosaceae. Origen: Australia, Sureste, (N. G. del Sur y Victoria). Arbol de follaje persistente muy usado en parques por su atractiva floración amarilla hacia fines del invierno. Altura: de 3 a 10 metros generalmente. Crecimiento rápido. Follaje perenne de tonos plateados, muy ornamental. Sus hojas son de textura fina, de color verde y sus flores amarillas que aparecen en racimos grandes. Florece de Enero a Marzo (Hemisferio Norte). Legumbre de 5-9 cm de longitud, recta o ligeramente curvada, con los bordes algo constreñidos entre las semillas, que se disponen en el fruto longitudinalmente...",
  "cantidad_en_stock": 100,
  "precio_venta": 6,
  "precio_proveedor": 4
},{
  "codigo_producto": "OR-108",
  "nombre": "Abelia Floribunda",
  "gama": "Ornamentales",
  "dimensiones": "35-45",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 5,
  "precio_proveedor": 4
},{
  "codigo_producto": "OR-109",
  "nombre": "Callistemom (Mix)",
  "gama": "Ornamentales",
  "dimensiones": "35-45",
  "proveedor": "Viveros EL OASIS",
  "descripcion": "Limpitatubos. arbolito de 6-7 m de altura. Ramas flexibles y colgantes (de ahí lo de \\\"llorón\\\")..",
  "cantidad_en_stock": 100,
  "precio_venta": 5,
  "precio_proveedor": 4
},{
  "codigo_producto": "OR-110",
  "nombre": "Callistemom (Mix)",
  "gama": "Ornamentales",
  "dimensiones": "40-60",
  "proveedor": "Viveros EL OASIS",
  "descripcion": "Limpitatubos. arbolito de 6-7 m de altura. Ramas flexibles y colgantes (de ahí lo de \\\"llorón\\\")..",
  "cantidad_en_stock": 100,
  "precio_venta": 2,
  "precio_proveedor": 1
},{
  "codigo_producto": "OR-111",
  "nombre": "Corylus Avellana \\\"Contorta\\\"",
  "gama": "Ornamentales",
  "dimensiones": "35-45",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 5,
  "precio_proveedor": 4
},{
  "codigo_producto": "OR-112",
  "nombre": "Escallonia (Mix)",
  "gama": "Ornamentales",
  "dimensiones": "35-45",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 120,
  "precio_venta": 5,
  "precio_proveedor": 4
},{
  "codigo_producto": "OR-113",
  "nombre": "Evonimus Emerald Gayeti",
  "gama": "Ornamentales",
  "dimensiones": "35-45",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 120,
  "precio_venta": 5,
  "precio_proveedor": 4
},{
  "codigo_producto": "OR-114",
  "nombre": "Evonimus Pulchellus",
  "gama": "Ornamentales",
  "dimensiones": "35-45",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 120,
  "precio_venta": 5,
  "precio_proveedor": 4
},{
  "codigo_producto": "OR-115",
  "nombre": "Forsytia Intermedia \\\"Lynwood\\\"",
  "gama": "Ornamentales",
  "dimensiones": "35-45",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 120,
  "precio_venta": 7,
  "precio_proveedor": 5
},{
  "codigo_producto": "OR-116",
  "nombre": "Hibiscus Syriacus  \\\"Diana\\\" -Blanco Puro",
  "gama": "Ornamentales",
  "dimensiones": "35-45",
  "proveedor": "Viveros EL OASIS",
  "descripcion": "Por su capacidad de soportar podas, pueden ser fácilmente moldeadas como bonsái en el transcurso de pocos años. Flores de muchos colores según la variedad, desde el blanco puro al rojo intenso, del amarillo al anaranjado. La flor apenas dura 1 día, pero continuamente aparecen nuevas y la floración se prolonga durante todo el periodo de crecimiento vegetativo.",
  "cantidad_en_stock": 120,
  "precio_venta": 7,
  "precio_proveedor": 5
},{
  "codigo_producto": "OR-117",
  "nombre": "Hibiscus Syriacus  \\\"Helene\\\" -Blanco-C.rojo",
  "gama": "Ornamentales",
  "dimensiones": "35-45",
  "proveedor": "Viveros EL OASIS",
  "descripcion": "Por su capacidad de soportar podas, pueden ser fácilmente moldeadas como bonsái en el transcurso de pocos años. Flores de muchos colores según la variedad, desde el blanco puro al rojo intenso, del amarillo al anaranjado. La flor apenas dura 1 día, pero continuamente aparecen nuevas y la floración se prolonga durante todo el periodo de crecimiento vegetativo.",
  "cantidad_en_stock": 120,
  "precio_venta": 7,
  "precio_proveedor": 5
},{
  "codigo_producto": "OR-119",
  "nombre": "Laurus Nobilis Arbusto - Ramificado Bajo",
  "gama": "Ornamentales",
  "dimensiones": "40-50",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 120,
  "precio_venta": 5,
  "precio_proveedor": 4
},{
  "codigo_producto": "OR-128",
  "nombre": "Camelia japonica ejemplar",
  "gama": "Ornamentales",
  "dimensiones": "200-250",
  "proveedor": "Viveros EL OASIS",
  "descripcion": "Arbusto excepcional por su floración otoñal, invernal o primaveral. Flores: Las flores son solitarias, aparecen en el ápice de cada rama, y son con una corola simple o doble, y comprendiendo varios colores. Suelen medir unos 7-12 cm de diÃ metro y tienen 5 sépalos y 5 pétalos. Estambres numerosos unidos en la mitad o en 2/3 de su longitud.",
  "cantidad_en_stock": 50,
  "precio_venta": 98,
  "precio_proveedor": 78
},{
  "codigo_producto": "OR-129",
  "nombre": "Camelia japonica ejemplar",
  "gama": "Ornamentales",
  "dimensiones": "250-300",
  "proveedor": "Viveros EL OASIS",
  "descripcion": "Arbusto excepcional por su floración otoñal, invernal o primaveral. Flores: Las flores son solitarias, aparecen en el ápice de cada rama, y son con una corola simple o doble, y comprendiendo varios colores. Suelen medir unos 7-12 cm de diÃ metro y tienen 5 sépalos y 5 pétalos. Estambres numerosos unidos en la mitad o en 2/3 de su longitud.",
  "cantidad_en_stock": 50,
  "precio_venta": 110,
  "precio_proveedor": 88
},{
  "codigo_producto": "OR-130",
  "nombre": "Callistemom COPA",
  "gama": "Ornamentales",
  "dimensiones": "110/120",
  "proveedor": "Viveros EL OASIS",
  "descripcion": "Limpitatubos. arbolito de 6-7 m de altura. Ramas flexibles y colgantes (de ahí lo de \\\"llorón\\\")..",
  "cantidad_en_stock": 50,
  "precio_venta": 18,
  "precio_proveedor": 14
},{
  "codigo_producto": "OR-131",
  "nombre": "Leptospermum formado PIRAMIDE",
  "gama": "Ornamentales",
  "dimensiones": "80-100",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 50,
  "precio_venta": 18,
  "precio_proveedor": 14
},{
  "codigo_producto": "OR-132",
  "nombre": "Leptospermum COPA",
  "gama": "Ornamentales",
  "dimensiones": "110/120",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 50,
  "precio_venta": 18,
  "precio_proveedor": 14
},{
  "codigo_producto": "OR-133",
  "nombre": "Nerium oleander-CALIDAD \\\"GARDEN\\\"",
  "gama": "Ornamentales",
  "dimensiones": "40-45",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 50,
  "precio_venta": 2,
  "precio_proveedor": 1
},{
  "codigo_producto": "OR-134",
  "nombre": "Nerium Oleander Arbusto GRANDE",
  "gama": "Ornamentales",
  "dimensiones": "160-200",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 38,
  "precio_proveedor": 30
},{
  "codigo_producto": "OR-135",
  "nombre": "Nerium oleander COPA  Calibre 6/8",
  "gama": "Ornamentales",
  "dimensiones": "50-60",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 5,
  "precio_proveedor": 4
},{
  "codigo_producto": "OR-136",
  "nombre": "Nerium oleander ARBOL Calibre 8/10",
  "gama": "Ornamentales",
  "dimensiones": "225-250",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 18,
  "precio_proveedor": 14
},{
  "codigo_producto": "OR-137",
  "nombre": "ROSAL TREPADOR",
  "gama": "Ornamentales",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 4,
  "precio_proveedor": 3
},{
  "codigo_producto": "OR-138",
  "nombre": "Camelia Blanco, Chrysler Rojo, Soraya Naranja, ",
  "gama": "Ornamentales",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 4,
  "precio_proveedor": 3
},{
  "codigo_producto": "OR-139",
  "nombre": "Landora Amarillo, Rose Gaujard bicolor blanco-rojo",
  "gama": "Ornamentales",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 4,
  "precio_proveedor": 3
},{
  "codigo_producto": "OR-140",
  "nombre": "Kordes Perfect bicolor rojo-amarillo, Roundelay rojo fuerte",
  "gama": "Ornamentales",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 4,
  "precio_proveedor": 3
},{
  "codigo_producto": "OR-141",
  "nombre": "Pitimini rojo",
  "gama": "Ornamentales",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 4,
  "precio_proveedor": 3
},{
  "codigo_producto": "OR-142",
  "nombre": "Solanum Jazminoide",
  "gama": "Ornamentales",
  "dimensiones": "150-160",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 2,
  "precio_proveedor": 1
},{
  "codigo_producto": "OR-143",
  "nombre": "Wisteria Sinensis  azul, rosa, blanca",
  "gama": "Ornamentales",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 9,
  "precio_proveedor": 7
},{
  "codigo_producto": "OR-144",
  "nombre": "Wisteria Sinensis INJERTADAS DECÃ“",
  "gama": "Ornamentales",
  "dimensiones": "140-150",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 12,
  "precio_proveedor": 9
},{
  "codigo_producto": "OR-145",
  "nombre": "Bougamvillea Sanderiana Tutor",
  "gama": "Ornamentales",
  "dimensiones": "80-100",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 2,
  "precio_proveedor": 1
},{
  "codigo_producto": "OR-146",
  "nombre": "Bougamvillea Sanderiana Tutor",
  "gama": "Ornamentales",
  "dimensiones": "125-150",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 4,
  "precio_proveedor": 3
},{
  "codigo_producto": "OR-147",
  "nombre": "Bougamvillea Sanderiana Tutor",
  "gama": "Ornamentales",
  "dimensiones": "180-200",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 7,
  "precio_proveedor": 5
},{
  "codigo_producto": "OR-148",
  "nombre": "Bougamvillea Sanderiana Espaldera",
  "gama": "Ornamentales",
  "dimensiones": "45-50",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 7,
  "precio_proveedor": 5
},{
  "codigo_producto": "OR-149",
  "nombre": "Bougamvillea Sanderiana Espaldera",
  "gama": "Ornamentales",
  "dimensiones": "140-150",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 17,
  "precio_proveedor": 13
},{
  "codigo_producto": "OR-150",
  "nombre": "Bougamvillea roja, naranja",
  "gama": "Ornamentales",
  "dimensiones": "110-130",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 2,
  "precio_proveedor": 1
},{
  "codigo_producto": "OR-151",
  "nombre": "Bougamvillea Sanderiana, 3 tut. piramide",
  "gama": "Ornamentales",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 6,
  "precio_proveedor": 4
},{
  "codigo_producto": "OR-152",
  "nombre": "Expositor Árboles clima continental",
  "gama": "Ornamentales",
  "dimensiones": "170-200",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 6,
  "precio_proveedor": 4
},{
  "codigo_producto": "OR-153",
  "nombre": "Expositor Árboles clima mediterráneo",
  "gama": "Ornamentales",
  "dimensiones": "170-200",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 6,
  "precio_proveedor": 4
},{
  "codigo_producto": "OR-154",
  "nombre": "Expositor Árboles borde del mar",
  "gama": "Ornamentales",
  "dimensiones": "170-200",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 6,
  "precio_proveedor": 4
},{
  "codigo_producto": "OR-155",
  "nombre": "Acer Negundo  ",
  "gama": "Ornamentales",
  "dimensiones": "200-225",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 6,
  "precio_proveedor": 4
},{
  "codigo_producto": "OR-156",
  "nombre": "Acer platanoides  ",
  "gama": "Ornamentales",
  "dimensiones": "200-225",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 10,
  "precio_proveedor": 8
},{
  "codigo_producto": "OR-157",
  "nombre": "Acer Pseudoplatanus ",
  "gama": "Ornamentales",
  "dimensiones": "200-225",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 10,
  "precio_proveedor": 8
},{
  "codigo_producto": "OR-158",
  "nombre": "Brachychiton Acerifolius  ",
  "gama": "Ornamentales",
  "dimensiones": "200-225",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 6,
  "precio_proveedor": 4
},{
  "codigo_producto": "OR-159",
  "nombre": "Brachychiton Discolor  ",
  "gama": "Ornamentales",
  "dimensiones": "200-225",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 6,
  "precio_proveedor": 4
},{
  "codigo_producto": "OR-160",
  "nombre": "Brachychiton Rupestris",
  "gama": "Ornamentales",
  "dimensiones": "170-200",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 10,
  "precio_proveedor": 8
},{
  "codigo_producto": "OR-161",
  "nombre": "Cassia Corimbosa  ",
  "gama": "Ornamentales",
  "dimensiones": "200-225",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 6,
  "precio_proveedor": 4
},{
  "codigo_producto": "OR-162",
  "nombre": "Cassia Corimbosa ",
  "gama": "Ornamentales",
  "dimensiones": "200-225",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 10,
  "precio_proveedor": 8
},{
  "codigo_producto": "OR-163",
  "nombre": "Chitalpa Summer Bells   ",
  "gama": "Ornamentales",
  "dimensiones": "200-225",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 10,
  "precio_proveedor": 8
},{
  "codigo_producto": "OR-164",
  "nombre": "Erytrina Kafra",
  "gama": "Ornamentales",
  "dimensiones": "170-180",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 6,
  "precio_proveedor": 4
},{
  "codigo_producto": "OR-165",
  "nombre": "Erytrina Kafra",
  "gama": "Ornamentales",
  "dimensiones": "200-225",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 10,
  "precio_proveedor": 8
},{
  "codigo_producto": "OR-166",
  "nombre": "Eucalyptus Citriodora  ",
  "gama": "Ornamentales",
  "dimensiones": "170-200",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 6,
  "precio_proveedor": 4
},{
  "codigo_producto": "OR-167",
  "nombre": "Eucalyptus Ficifolia  ",
  "gama": "Ornamentales",
  "dimensiones": "170-200",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 6,
  "precio_proveedor": 4
},{
  "codigo_producto": "OR-168",
  "nombre": "Eucalyptus Ficifolia   ",
  "gama": "Ornamentales",
  "dimensiones": "200-225",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 10,
  "precio_proveedor": 8
},{
  "codigo_producto": "OR-169",
  "nombre": "Hibiscus Syriacus  Var. Injertadas 1 Tallo ",
  "gama": "Ornamentales",
  "dimensiones": "170-200",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 12,
  "precio_proveedor": 9
},{
  "codigo_producto": "OR-170",
  "nombre": "Lagunaria Patersonii  ",
  "gama": "Ornamentales",
  "dimensiones": "140-150",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 6,
  "precio_proveedor": 4
},{
  "codigo_producto": "OR-171",
  "nombre": "Lagunaria Patersonii   ",
  "gama": "Ornamentales",
  "dimensiones": "200-225",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 10,
  "precio_proveedor": 8
},{
  "codigo_producto": "OR-172",
  "nombre": "Lagunaria patersonii  calibre 8/10",
  "gama": "Ornamentales",
  "dimensiones": "200-225",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 18,
  "precio_proveedor": 14
},{
  "codigo_producto": "OR-173",
  "nombre": "Morus Alba  ",
  "gama": "Ornamentales",
  "dimensiones": "200-225",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 6,
  "precio_proveedor": 4
},{
  "codigo_producto": "OR-174",
  "nombre": "Morus Alba  calibre 8/10",
  "gama": "Ornamentales",
  "dimensiones": "200-225",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 18,
  "precio_proveedor": 14
},{
  "codigo_producto": "OR-175",
  "nombre": "Platanus Acerifolia   ",
  "gama": "Ornamentales",
  "dimensiones": "200-225",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 10,
  "precio_proveedor": 8
},{
  "codigo_producto": "OR-176",
  "nombre": "Prunus pisardii  ",
  "gama": "Ornamentales",
  "dimensiones": "200-225",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 10,
  "precio_proveedor": 8
},{
  "codigo_producto": "OR-177",
  "nombre": "Robinia Pseudoacacia Casque Rouge   ",
  "gama": "Ornamentales",
  "dimensiones": "200-225",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 15,
  "precio_proveedor": 12
},{
  "codigo_producto": "OR-178",
  "nombre": "Salix Babylonica  Pendula  ",
  "gama": "Ornamentales",
  "dimensiones": "170-200",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 6,
  "precio_proveedor": 4
},{
  "codigo_producto": "OR-179",
  "nombre": "Sesbania Punicea   ",
  "gama": "Ornamentales",
  "dimensiones": "170-200",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 6,
  "precio_proveedor": 4
},{
  "codigo_producto": "OR-180",
  "nombre": "Tamarix  Ramosissima Pink Cascade   ",
  "gama": "Ornamentales",
  "dimensiones": "170-200",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 6,
  "precio_proveedor": 4
},{
  "codigo_producto": "OR-181",
  "nombre": "Tamarix  Ramosissima Pink Cascade   ",
  "gama": "Ornamentales",
  "dimensiones": "200-225",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 10,
  "precio_proveedor": 8
},{
  "codigo_producto": "OR-182",
  "nombre": "Tecoma Stands   ",
  "gama": "Ornamentales",
  "dimensiones": "200-225",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 6,
  "precio_proveedor": 4
},{
  "codigo_producto": "OR-183",
  "nombre": "Tecoma Stands  ",
  "gama": "Ornamentales",
  "dimensiones": "200-225",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 10,
  "precio_proveedor": 8
},{
  "codigo_producto": "OR-184",
  "nombre": "Tipuana Tipu  ",
  "gama": "Ornamentales",
  "dimensiones": "170-200",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 6,
  "precio_proveedor": 4
},{
  "codigo_producto": "OR-185",
  "nombre": "Pleioblastus distichus-Bambú enano",
  "gama": "Ornamentales",
  "dimensiones": "15-20",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 6,
  "precio_proveedor": 4
},{
  "codigo_producto": "OR-186",
  "nombre": "Sasa palmata ",
  "gama": "Ornamentales",
  "dimensiones": "20-30",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 6,
  "precio_proveedor": 4
},{
  "codigo_producto": "OR-187",
  "nombre": "Sasa palmata ",
  "gama": "Ornamentales",
  "dimensiones": "40-45",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 10,
  "precio_proveedor": 8
},{
  "codigo_producto": "OR-188",
  "nombre": "Sasa palmata ",
  "gama": "Ornamentales",
  "dimensiones": "50-60",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 25,
  "precio_proveedor": 20
},{
  "codigo_producto": "OR-189",
  "nombre": "Phylostachys aurea",
  "gama": "Ornamentales",
  "dimensiones": "180-200",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 22,
  "precio_proveedor": 17
},{
  "codigo_producto": "OR-190",
  "nombre": "Phylostachys aurea",
  "gama": "Ornamentales",
  "dimensiones": "250-300",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 32,
  "precio_proveedor": 25
},{
  "codigo_producto": "OR-192",
  "nombre": "Phylostachys biseti",
  "gama": "Ornamentales",
  "dimensiones": "160-170",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 22,
  "precio_proveedor": 17
},{
  "codigo_producto": "OR-193",
  "nombre": "Phylostachys biseti",
  "gama": "Ornamentales",
  "dimensiones": "160-180",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 20,
  "precio_proveedor": 16
},{
  "codigo_producto": "OR-194",
  "nombre": "Pseudosasa japonica (Metake)",
  "gama": "Ornamentales",
  "dimensiones": "225-250",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 20,
  "precio_proveedor": 16
},{
  "codigo_producto": "OR-195",
  "nombre": "Pseudosasa japonica (Metake) ",
  "gama": "Ornamentales",
  "dimensiones": "30-40",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 6,
  "precio_proveedor": 4
},{
  "codigo_producto": "OR-196",
  "nombre": "Cedrus Deodara ",
  "gama": "Ornamentales",
  "dimensiones": "80-100",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 10,
  "precio_proveedor": 8
},{
  "codigo_producto": "OR-197",
  "nombre": "Cedrus Deodara \\\"Feeling Blue\\\" Novedad",
  "gama": "Ornamentales",
  "dimensiones": "rastrero",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 12,
  "precio_proveedor": 9
},{
  "codigo_producto": "OR-198",
  "nombre": "Juniperus chinensis \\\"Blue Alps\\\"",
  "gama": "Ornamentales",
  "dimensiones": "20-30",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 4,
  "precio_proveedor": 3
},{
  "codigo_producto": "OR-199",
  "nombre": "Juniperus Chinensis Stricta",
  "gama": "Ornamentales",
  "dimensiones": "20-30",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 4,
  "precio_proveedor": 3
},{
  "codigo_producto": "OR-200",
  "nombre": "Juniperus horizontalis Wiltonii",
  "gama": "Ornamentales",
  "dimensiones": "20-30",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 4,
  "precio_proveedor": 3
},{
  "codigo_producto": "OR-201",
  "nombre": "Juniperus squamata \\\"Blue Star\\\"",
  "gama": "Ornamentales",
  "dimensiones": "20-30",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 4,
  "precio_proveedor": 3
},{
  "codigo_producto": "OR-202",
  "nombre": "Juniperus x media Phitzeriana verde",
  "gama": "Ornamentales",
  "dimensiones": "20-30",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 4,
  "precio_proveedor": 3
},{
  "codigo_producto": "OR-203",
  "nombre": "Pinus Canariensis",
  "gama": "Ornamentales",
  "dimensiones": "80-100",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 10,
  "precio_proveedor": 8
},{
  "codigo_producto": "OR-204",
  "nombre": "Pinus Halepensis",
  "gama": "Ornamentales",
  "dimensiones": "160-180",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 10,
  "precio_proveedor": 8
},{
  "codigo_producto": "OR-205",
  "nombre": "Pinus Pinea -Pino Piñonero",
  "gama": "Ornamentales",
  "dimensiones": "70-80",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 10,
  "precio_proveedor": 8
},{
  "codigo_producto": "OR-206",
  "nombre": "Thuja Esmeralda ",
  "gama": "Ornamentales",
  "dimensiones": "80-100",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 5,
  "precio_proveedor": 4
},{
  "codigo_producto": "OR-207",
  "nombre": "Tuja Occidentalis Woodwardii",
  "gama": "Ornamentales",
  "dimensiones": "20-30",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 4,
  "precio_proveedor": 3
},{
  "codigo_producto": "OR-208",
  "nombre": "Tuja orientalis \\\"Aurea nana\\\"",
  "gama": "Ornamentales",
  "dimensiones": "20-30",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 4,
  "precio_proveedor": 3
},{
  "codigo_producto": "OR-209",
  "nombre": "Archontophoenix Cunninghamiana",
  "gama": "Ornamentales",
  "dimensiones": "80 - 100",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 80,
  "precio_venta": 10,
  "precio_proveedor": 8
},{
  "codigo_producto": "OR-210",
  "nombre": "Beucarnea Recurvata",
  "gama": "Ornamentales",
  "dimensiones": "130  - 150",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 2,
  "precio_venta": 39,
  "precio_proveedor": 31
},{
  "codigo_producto": "OR-211",
  "nombre": "Beucarnea Recurvata",
  "gama": "Ornamentales",
  "dimensiones": "180 - 200",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 5,
  "precio_venta": 59,
  "precio_proveedor": 47
},{
  "codigo_producto": "OR-212",
  "nombre": "Bismarckia Nobilis",
  "gama": "Ornamentales",
  "dimensiones": "200 - 220",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 4,
  "precio_venta": 217,
  "precio_proveedor": 173
},{
  "codigo_producto": "OR-213",
  "nombre": "Bismarckia Nobilis",
  "gama": "Ornamentales",
  "dimensiones": "240 - 260",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 4,
  "precio_venta": 266,
  "precio_proveedor": 212
},{
  "codigo_producto": "OR-214",
  "nombre": "Brahea Armata",
  "gama": "Ornamentales",
  "dimensiones": "45 - 60",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 0,
  "precio_venta": 10,
  "precio_proveedor": 8
},{
  "codigo_producto": "OR-215",
  "nombre": "Brahea Armata",
  "gama": "Ornamentales",
  "dimensiones": "120 - 140",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 112,
  "precio_proveedor": 89
},{
  "codigo_producto": "OR-216",
  "nombre": "Brahea Edulis",
  "gama": "Ornamentales",
  "dimensiones": "80 - 100",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 19,
  "precio_proveedor": 15
},{
  "codigo_producto": "OR-217",
  "nombre": "Brahea Edulis",
  "gama": "Ornamentales",
  "dimensiones": "140 - 160",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 64,
  "precio_proveedor": 51
},{
  "codigo_producto": "OR-218",
  "nombre": "Butia Capitata",
  "gama": "Ornamentales",
  "dimensiones": "70 - 90",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 25,
  "precio_proveedor": 20
},{
  "codigo_producto": "OR-219",
  "nombre": "Butia Capitata",
  "gama": "Ornamentales",
  "dimensiones": "90 - 110",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 29,
  "precio_proveedor": 23
},{
  "codigo_producto": "OR-220",
  "nombre": "Butia Capitata",
  "gama": "Ornamentales",
  "dimensiones": "90 - 120",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 36,
  "precio_proveedor": 28
},{
  "codigo_producto": "OR-221",
  "nombre": "Butia Capitata",
  "gama": "Ornamentales",
  "dimensiones": "85 - 105",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 59,
  "precio_proveedor": 47
},{
  "codigo_producto": "OR-222",
  "nombre": "Butia Capitata",
  "gama": "Ornamentales",
  "dimensiones": "130 - 150",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 87,
  "precio_proveedor": 69
},{
  "codigo_producto": "OR-223",
  "nombre": "Chamaerops Humilis",
  "gama": "Ornamentales",
  "dimensiones": "40 - 45",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 4,
  "precio_proveedor": 3
},{
  "codigo_producto": "OR-224",
  "nombre": "Chamaerops Humilis",
  "gama": "Ornamentales",
  "dimensiones": "50 - 60",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 7,
  "precio_proveedor": 5
},{
  "codigo_producto": "OR-225",
  "nombre": "Chamaerops Humilis",
  "gama": "Ornamentales",
  "dimensiones": "70 - 90",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 10,
  "precio_proveedor": 8
},{
  "codigo_producto": "OR-226",
  "nombre": "Chamaerops Humilis",
  "gama": "Ornamentales",
  "dimensiones": "115 - 130",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 38,
  "precio_proveedor": 30
},{
  "codigo_producto": "OR-227",
  "nombre": "Chamaerops Humilis",
  "gama": "Ornamentales",
  "dimensiones": "130 - 150",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 64,
  "precio_proveedor": 51
},{
  "codigo_producto": "OR-228",
  "nombre": "Chamaerops Humilis \\\"Cerifera\\\"",
  "gama": "Ornamentales",
  "dimensiones": "70 - 80",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 32,
  "precio_proveedor": 25
},{
  "codigo_producto": "OR-229",
  "nombre": "Chrysalidocarpus Lutescens -ARECA",
  "gama": "Ornamentales",
  "dimensiones": "130 - 150",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 22,
  "precio_proveedor": 17
},{
  "codigo_producto": "OR-230",
  "nombre": "Cordyline Australis -DRACAENA",
  "gama": "Ornamentales",
  "dimensiones": "190 - 210",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 38,
  "precio_proveedor": 30
},{
  "codigo_producto": "OR-231",
  "nombre": "Cycas Revoluta",
  "gama": "Ornamentales",
  "dimensiones": "55 - 65",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 15,
  "precio_proveedor": 12
},{
  "codigo_producto": "OR-232",
  "nombre": "Cycas Revoluta",
  "gama": "Ornamentales",
  "dimensiones": "80 - 90",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 34,
  "precio_proveedor": 27
},{
  "codigo_producto": "OR-233",
  "nombre": "Dracaena Drago",
  "gama": "Ornamentales",
  "dimensiones": "60 - 70",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 1,
  "precio_venta": 13,
  "precio_proveedor": 10
},{
  "codigo_producto": "OR-234",
  "nombre": "Dracaena Drago",
  "gama": "Ornamentales",
  "dimensiones": "130 - 150",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 2,
  "precio_venta": 64,
  "precio_proveedor": 51
},{
  "codigo_producto": "OR-235",
  "nombre": "Dracaena Drago",
  "gama": "Ornamentales",
  "dimensiones": "150 - 175",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 2,
  "precio_venta": 92,
  "precio_proveedor": 73
},{
  "codigo_producto": "OR-236",
  "nombre": "Jubaea Chilensis",
  "gama": "Ornamentales",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 100,
  "precio_venta": 49,
  "precio_proveedor": 39
},{
  "codigo_producto": "OR-237",
  "nombre": "Livistonia Australis",
  "gama": "Ornamentales",
  "dimensiones": "100 - 125",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 50,
  "precio_venta": 19,
  "precio_proveedor": 15
},{
  "codigo_producto": "OR-238",
  "nombre": "Livistonia Decipiens",
  "gama": "Ornamentales",
  "dimensiones": "90 - 110",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 50,
  "precio_venta": 19,
  "precio_proveedor": 15
},{
  "codigo_producto": "OR-239",
  "nombre": "Livistonia Decipiens",
  "gama": "Ornamentales",
  "dimensiones": "180 - 200",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 50,
  "precio_venta": 49,
  "precio_proveedor": 39
},{
  "codigo_producto": "OR-240",
  "nombre": "Phoenix Canariensis",
  "gama": "Ornamentales",
  "dimensiones": "110 - 130",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 50,
  "precio_venta": 6,
  "precio_proveedor": 4
},{
  "codigo_producto": "OR-241",
  "nombre": "Phoenix Canariensis",
  "gama": "Ornamentales",
  "dimensiones": "180 - 200",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 50,
  "precio_venta": 19,
  "precio_proveedor": 15
},{
  "codigo_producto": "OR-242",
  "nombre": "Rhaphis Excelsa",
  "gama": "Ornamentales",
  "dimensiones": "80 - 100",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 50,
  "precio_venta": 21,
  "precio_proveedor": 16
},{
  "codigo_producto": "OR-243",
  "nombre": "Rhaphis Humilis",
  "gama": "Ornamentales",
  "dimensiones": "150- 170",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 50,
  "precio_venta": 64,
  "precio_proveedor": 51
},{
  "codigo_producto": "OR-244",
  "nombre": "Sabal Minor",
  "gama": "Ornamentales",
  "dimensiones": "60 - 75",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 50,
  "precio_venta": 11,
  "precio_proveedor": 8
},{
  "codigo_producto": "OR-245",
  "nombre": "Sabal Minor",
  "gama": "Ornamentales",
  "dimensiones": "120 - 140",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 50,
  "precio_venta": 34,
  "precio_proveedor": 27
},{
  "codigo_producto": "OR-246",
  "nombre": "Trachycarpus Fortunei",
  "gama": "Ornamentales",
  "dimensiones": "90 - 105",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 50,
  "precio_venta": 18,
  "precio_proveedor": 14
},{
  "codigo_producto": "OR-247",
  "nombre": "Trachycarpus Fortunei",
  "gama": "Ornamentales",
  "dimensiones": "250-300",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 2,
  "precio_venta": 462,
  "precio_proveedor": 369
},{
  "codigo_producto": "OR-248",
  "nombre": "Washingtonia Robusta",
  "gama": "Ornamentales",
  "dimensiones": "60 - 70",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 15,
  "precio_venta": 3,
  "precio_proveedor": 2
},{
  "codigo_producto": "OR-249",
  "nombre": "Washingtonia Robusta",
  "gama": "Ornamentales",
  "dimensiones": "130 - 150",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 15,
  "precio_venta": 5,
  "precio_proveedor": 4
},{
  "codigo_producto": "OR-250",
  "nombre": "Yucca Jewel",
  "gama": "Ornamentales",
  "dimensiones": "80 - 105",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 15,
  "precio_venta": 10,
  "precio_proveedor": 8
},{
  "codigo_producto": "OR-251",
  "nombre": "Zamia Furfuracaea",
  "gama": "Ornamentales",
  "dimensiones": "90 - 110",
  "proveedor": "Viveros EL OASIS",
  "cantidad_en_stock": 15,
  "precio_venta": 168,
  "precio_proveedor": 134
},{
  "codigo_producto": "OR-99",
  "nombre": "Mimosa DEALBATA Gaulois Astier  ",
  "gama": "Ornamentales",
  "dimensiones": "200-225",
  "proveedor": "Viveros EL OASIS",
  "descripcion": "Acacia dealbata. Nombre común o vulgar: Mimosa fina, Mimosa, Mimosa común, Mimosa plateada, Aromo francés. Familia: Mimosaceae. Origen: Australia, Sureste, (N. G. del Sur y Victoria). Arbol de follaje persistente muy usado en parques por su atractiva floración amarilla hacia fines del invierno. Altura: de 3 a 10 metros generalmente. Crecimiento rápido. Follaje perenne de tonos plateados, muy ornamental. Sus hojas son de textura fina, de color verde y sus flores amarillas que aparecen en racimos grandes. Florece de Enero a Marzo (Hemisferio Norte). Legumbre de 5-9 cm de longitud, recta o ligeramente curvada, con los bordes algo constreñidos entre las semillas, que se disponen en el fruto longitudinalmente...",
  "cantidad_en_stock": 100,
  "precio_venta": 14,
  "precio_proveedor": 11
}]);


//================================================================================