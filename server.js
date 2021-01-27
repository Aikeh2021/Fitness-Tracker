const express = require('express');
// const path = require('path');
const logger = require('morgan');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8080;

// const db = require("./models");
// const Cardio = require("./models/cardioModel.js");
// const Resistance = require("./models/resistanceModel.js");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {  useNewUrlParser: true,
useUnifiedTopology: true,
useFindAndModify: false,
useCreateIndex: true  });

//Routes
app.use(require("./Routes/api"));
app.use(require("./Routes/view"));


//API Test route

// app.get("/api/config", (req, res) => {
//     res.send("This is where my page will live.");
// });

//View Routes

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "public/index.html"));
// });

// app.get("/exercise", (req, res) => {
//     res.sendFile(path.join(__dirname, "public/exercise.html"));
// });

// app.get("/stats", (req, res) => {
//     res.sendFile(path.join(__dirname, "public/stats.html"));
// });


//API Routes
// app.get("/api/workouts", )



// app.post("/api/workouts", ({body}, res) => {
//     const cardio = newCardio(body);

//     Cardio.create(cardio)
//     .then(newCardio => {
//         res.json(newCardio);
//     })
// })

app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
});