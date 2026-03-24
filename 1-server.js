const express = require("express");
const bodyParser = require("body-parser");
const Message = require("./2-db"); // 👈 import database

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname));

// 👇 load your custom file name
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/1-index.html");
});

// 👇 UPDATED CONTACT ROUTE (SAVES TO DB)
app.post("/contact", async (req, res) => {
    const { name, email, message } = req.body;

    try {
        // save to database
        const newMessage = new Message({
            name,
            email,
            message
        });

        await newMessage.save();

        console.log("Saved to DB:");
        console.log(name, email, message);

        res.send("Message saved successfully!");
    } catch (error) {
        console.log(error);
        res.send("Error saving message");
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});