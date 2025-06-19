"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cluster_1 = __importDefault(require("cluster"));
const os_1 = __importDefault(require("os"));
const index_1 = __importDefault(require("./index"));
const cpu_ct = os_1.default.cpus().length;
if (cluster_1.default.isPrimary) {
    console.log(`Master ${process.pid} is running`);
    for (let i = 0; i < cpu_ct; i++) {
        cluster_1.default.fork();
    }
}
else {
    console.log(`worker ${process.pid} is running`);
    index_1.default.listen(3000, () => {
        console.log("server is running on port 3000");
    });
}
