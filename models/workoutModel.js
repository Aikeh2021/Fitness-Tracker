const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
    date: {
        type: Date
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter exercise type"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter the name of exercise"   
            },
            duration: {
                type: Number,
                required: "Enter exercise duration in minutes"
            },
            weight: {
                type: Number

            },
            reps: {
                type: Number
            },
            distance: {
                type: Number
            },
            sets: {
                type: Number
            }

        }
    ]


});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;