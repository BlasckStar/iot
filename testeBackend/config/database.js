const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/db_Iot', { useNewUrlParser: true }, function(err, db){
  if(err != null) {
    console.log("Database Error: ", err);
  }
})

mongoose.Error.messages.general.required = "O atributo`{PATH}` é obrigatório."
