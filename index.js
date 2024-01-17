import express from "express";
import { rootRoutes } from "./src/routes/rootRoutes.js";
const app = express();
const port = 8080;

// middleware
app.use(express.json());
app.use(rootRoutes);

app.listen(port, () => {
    console.log(`BE is starting port, ${port}`);
});

app.get("/", (req, res) => {
    res.send("Test API success!");
});
