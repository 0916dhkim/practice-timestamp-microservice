const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

function timestamp(str) {
    return {};
}

app.get("/", (req, res) => res.send("Hello, World!"));
app.get("/api/timestamp/:date_string?", function (req, res) {
    res.json(
        timestamp(req.params.date_string)
    );
});

app.listen(port, function() {
    console.log(`Timestamp Microservice listening on port ${port}`);
});
