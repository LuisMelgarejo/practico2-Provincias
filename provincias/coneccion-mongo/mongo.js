var mongoose = require('mongoose');

function iniciar(){

    mongoose.connect('mongodb://localhost/provincias', {useNewUrlParser:true});
    var db = mongoose.connection
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log("Conectado");

    });
}

exports.iniciar = iniciar  