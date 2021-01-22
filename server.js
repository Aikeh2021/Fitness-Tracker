const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//API Test route

app.get("/api/config", (req, res) => {
    res.send("This is where my page will live.");
});

//View Routes

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"))
})

app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
});