const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
    date: {
        type: Date
    },
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: "Cardio"
        },
        {
            type: Schema.Types.ObjectId,
            ref: "Resistance"
        }
    ]


});

const Day = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;