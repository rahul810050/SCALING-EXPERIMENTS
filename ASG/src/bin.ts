import cluster from "cluster"
import os from "os"
import app from "./index";

const cpu_ct = os.cpus().length;

if(cluster.isPrimary){
    console.log(`Master ${process.pid} is running`);
    for(let i = 0; i < cpu_ct; i++){
        cluster.fork()
    }
} else{
    console.log(`worker ${process.pid} is running`);
    app.listen(3000, ()=> {
        console.log("server is running on port 3000");
    })
}