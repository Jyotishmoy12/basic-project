const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

app.get("/home", (req, res) => {
    res.send({
        message: "Ok"
    });
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});