import express from "express";


const app = express();
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/pid", (req, res) => {
    res.send(`Worker ${process.pid} is running`);
});

export {app};