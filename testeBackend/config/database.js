const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/db_Iot', { useNewUrlParser: true }, function(err, db){
  if(err) throw err
  console.log("heu");
})

mongoose.Error.messages.general.required = "O atributo`{PATH}` é obrigatório."
