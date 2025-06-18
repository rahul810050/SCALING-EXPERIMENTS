import cluster from "cluster";
import os from "os";
import {app} from "./index.js";

const cpu_ct = os.cpus().length;
console.log(cpu_ct);


if(cluster.isPrimary){
    console.log(`Primary ${process.pid} is running`);
    for(let i = 0; i < cpu_ct; i++) cluster.fork();
} else{
    app.listen(3000, () => {
        console.log(`Worker ${process.pid} is running`);
    });
}