import express from "express";
const app = express();
const port = 8080;

app.use(express.json());

app.listen(port, () => {
    console.log(`BE is starting port, ${port}`);
});

app.get("/", (req, res) => {
    res.send("Test API success!");
});
