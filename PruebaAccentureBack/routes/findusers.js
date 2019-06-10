var express = require('express');
var router = express.Router();
var msql = require('mssql');

router.get('/', function (req, res, next) {
    var request = new msql.Request();
    let query = "select Id, nombre, apellido, fechaNacimiento from [Persona] where id ='"+req.query.idUsuario+"'";
    console.log(req);
    request.query(query, (err, response) => {
        if (response) {
            console.log(response.recordset);
            respuesta = {
                usuario: response.recordset,
                mensaje: 'El usuario se consulto correctamente',
                status: 200
            }
        } else {
            respuesta = {
                mensaje: 'Ocurrió un error consultando el usuario',
                status: 200
            }
        }
        res.send(respuesta);
    })
});

module.exports = router;