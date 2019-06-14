var provincia = require("./provincia-scheme")
//import * as mongoose from "mongoose";

// export interface IProvincia extends mongoose.Document {
//   name: string;
//   enabled: Boolean;
// }

async function crearProvincia(id,name,enabled){
  var provi = await provincia.Province.findOne({
    id: id
  }).exec();
console.log(provi);
  if(provi == undefined){
    if(provi.name == name){
      return "Nombre repetido"
    }
    var prov = new provincia.Province();

    prov.id = id
    prov.name = name
    prov.enabled = true

    const saved = await prov.save();

    console.log("guardado");
    return saved.id;
  }else{    
    return "ID REPETIDO";
  }
}

async function getProvincias() {
    console.log("get");

    return await provincia.Province.find({
      enabled: true
    }).exec();
}

async function getProvinciaById(provinciaId){
  console.log(provinciaId);
  return await provincia.Province.findOne({
        id: provinciaId
      }).exec();
     
}

async function BorrarProvinciaById(provinciaId){
    console.log(provinciaId);

    var prov = await provincia.Province.findOne({
      id: provinciaId
    }).exec();
    prov.enabled = false;
    await prov.save();
    console.log("Provincia borrada");
    
       
}

exports.getProvincias = getProvincias
exports.crearProvincia = crearProvincia
exports.getProvinciaById = getProvinciaById
exports.BorrarProvinciaById = BorrarProvinciaById
