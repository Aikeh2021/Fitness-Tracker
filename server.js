const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//API Test route

app.get("/api/config", (req, res) => {
    res.send("This is where my page will live.");
});

app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
});