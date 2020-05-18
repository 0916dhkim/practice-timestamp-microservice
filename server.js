const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

function timestamp(str) {
    const date = str === undefined ? new Date() : new Date(str);
    if (Number.isNaN(date.valueOf())) {
        return {
            error: "Invalid Date"
        };
    }

    return {
        unix: date.getTime(),
        utc: date.toUTCString()
    };
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
