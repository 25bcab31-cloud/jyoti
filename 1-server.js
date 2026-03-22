const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname));

// 👇 load your custom file name
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/1-index.html");
});

app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;

    console.log("New Message:");
    console.log(name, email, message);

    res.send("Message received successfully!");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});