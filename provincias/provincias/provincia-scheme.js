var mongoose = require('mongoose');
  
  var ProvinceSchema = new mongoose.Schema({
      id:{
          type: Number,
          default: 0
      },
    name: {
      type: String,
      default: "",
      trim: true,
      required: "Nombre no puede estar vacío."
    },
    enabled: {
      type: Boolean,
      default: true
    }
  });

  var Province = mongoose.model('Province',ProvinceSchema);
  
  exports.Province = Province