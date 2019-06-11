var provincia = require("./provincia-scheme")
//import * as mongoose from "mongoose";

// export interface IProvincia extends mongoose.Document {
//   name: string;
//   enabled: Boolean;
// }

async function crearProvincia(id,name,enabled){

    var prov = new provincia.Province();

    prov.id = id
    prov.name = name
    prov.enabled = enabled

    const saved = await prov.save();

    console.log("guardado");
    return saved._id;
    
}

async function getProvincias() {
    console.log("get");

    return await provincia.Province.find({});
}

async function getProvinciaById(provinciaId){
  console.log(provinciaId);
  return await provincia.Province.findOne({
        _id: provinciaId
      }).exec();
     
  }

exports.getProvincias = getProvincias
exports.crearProvincia = crearProvincia
exports.getProvinciaById = getProvinciaById
