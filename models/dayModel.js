const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DaySchema = new Schema ({
    date: {
        type: Date
    },
    exercise: {
        type: Array
    }

});

const Day = mongoose.model("Day", DaySchema);

module.exports = Day;