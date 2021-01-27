const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
    date: {
        type: Date,
        default: Date.now
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
        }, {
            toJSON: { virtuals: true },
            toObject: { virtuals: true }
        }
    ]


});


// WorkoutSchema.virtual("totalWorkoutDuration").get(function(){
//     // for(let i = 0; i < exercises.length; i++){
//     //     let durationArray = durationArray.push(exercises[i].duration);
//     //     sum = durationArray.reduce(function (a, b) {return a + b;}, 0);
//     //     return `${sum}`;
//     // }
  
//        let durationArray = exercises.map({duration});
//        let sum = durationArray.reduce(addDurations);
//        function addDurations(duration){ return total};
//        return `${sum}`;

// })
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;