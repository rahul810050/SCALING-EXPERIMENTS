import express from "express";
import os from "os"


const app = express();
app.use(express.json());

app.get("/", (req, res)=> {
    res.json("hello world");
})


app.get("/cpu", (req, res)=> {
    for(let i = 0; i < 1000000000; i++){
        Math.random()
    }
    res.json("intense cpu work done")
})

app.get("/host", (req, res)=> {
    res.json(os.hostname());
})

export default app;