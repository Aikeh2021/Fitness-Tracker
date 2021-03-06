const router = require("express").Router();
const Workout = require("../models/workoutModel");

router.post("/api/workouts", (req, res) =>{
    Workout.create({})
    .then((dbWorkout) =>{
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.json(err);
    })
});

router.put("/api/workouts/:id", ({body,params}, res) =>{
    Workout.findByIdAndUpdate(params.id, {$push: {exercises: body}}, {new: true, runValidators: true})
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.json(err);
    })
});

router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .limit(7)
    .sort(`-date`)
    .exec()
    .then((dbWorkouts) => {
        res.json(dbWorkouts)
    })
    .catch((err) =>{
        res.json(err);
    })
});


// router.get("/api/workouts/range",)
// Workout.workouts.aggregate( [

// ])


// Workout.workouts.aggregate( [
//     {
//       $addFields: {
//         totalHomework: { $sum: "$weight" } ,
//         totalQuiz: { $sum: "$quiz" }
//       }
//     },
//     {
//       $addFields: { combinedWeight:
//         { $add: [ "$totalHomework", "$totalQuiz", "$extraCredit" ] } }
//     }
//  ] )


module.exports = router;
