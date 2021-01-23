const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ResistanceSchema = new Schema ({

});

const Resistance = mongoose.model("Resistance", ResistanceSchema);

module.exports = Resistance;