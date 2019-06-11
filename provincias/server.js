const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var mongo = require("./coneccion-mongo/mongo")

var provincia = require("./provincias/provincia-service")

//inicia base de datos
mongo.iniciar();

// Para configurar los body content type application/json
app.use(bodyParser.json());

// para probar que el server funciona
app.get('/',function(req,res){
    response = {
        error: true,
        code: 200,
        message: 'Funciona'
    };
    res.send(response);
})

// GET /provincias
// trae una lista con todas las provincias
app.route('/provincias')
.get(async function (req, res) {
    res.json(await provincia.getProvincias())
})
// POST /provincias
// Guarda una provincia
/**
 * 
 * ejemplo {json} Mascota
{
    "id": 2,
    "name": "San Juan",
    "enable": true
}
 *
 */
.post(async function(req,res) {
    var idProvincia = await provincia.crearProvincia(req.body.id,req.body.name,req.body.enabled)

     res.json({id: idProvincia})
})


// GET /provincia
// Guarda una provincia
/**
 * 
 * ejemplo {json} Mascota
{
    "id": "5cfffd3f4adca131b8d43f95"
}
 *
 */
app.route('/provincia')
.get(async function (req, res) {
    res.json(await provincia.getProvinciaById(req.body.id))
})

app.listen(3010, () => console.log("Server iniciado"))