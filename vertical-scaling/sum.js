import cluster from "cluster";
import os from "os";

const cpu_ct = os.cpus().length;

const Big_Number = 100_000_000_000;


if(cluster.isPrimary){
    console.time("Total Time");
    let total_sum = 0;
    let completed_workers = 0;


    console.log(`Primary ${process.pid} is running`);
    for(let i = 0; i < cpu_ct; i++){
        const worker = cluster.fork();
        const start = i * Big_Number / cpu_ct;
        const end = (i + 1) * Big_Number / cpu_ct;

        setInterval(() => {
            worker.send({start, end});
        }, 100);

        worker.on("message", (message) => {
            total_sum += (message.sum);
            completed_workers++;

            if(completed_workers === cpu_ct){
                console.timeEnd("Total Time");
                console.log(`Total Sum: ${total_sum}`);
                process.exit();
            }
        });
    }
} else {
    process.on("message", (message) => {
        let sum = 0;
        for(let i = message.start; i <= message.end; i++){
            sum += i;
        }
        process.send({sum});
    });
}