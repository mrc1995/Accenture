var express = require('express');
var router = express.Router();
var msql = require('mssql');


/* GET users listing. */
router.post('/', function(req, res, next){
  var request = new msql.Request();
  let query = "INSERT INTO [Persona] (Id,nombre,apellido,fechaNacimiento) VALUES ('" +req.body.id+"','"+req.body.nombre+"','"+req.body.apellido+"','"+req.body.fechaNacimiento+"')"
  request.query(query, (err,response) => {
    if(response){
      respuesta={
        mensaje: 'Registro Exitoso',
        status: 200
      }
    }else{
      respuesta={
        mensaje: 'Ocurrió un error al registrar sus datos en nuestra base de datos',
        status: 200
      }
    }
    res.send(respuesta);
  })
 
});

module.exports = router;
