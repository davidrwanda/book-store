import express, {Express, NextFunction, Request, Response } from "express"
import { config } from "./res/config";
import router from "./routes/bookRoutes";
import bodyParser = require("body-parser");
import mongoose from "mongoose";
import Logger from "./helpers/Logging";
import payload from "./helpers/Response";
import httpStatus = require("http-status");

const app: Express = express()

mongoose.set('strictQuery', true)
mongoose.connect(config.mongo.url, { 
    retryWrites: true,w:"majority",
})
.then(()=>{
    Logger.info("connected successfully")
    createServer()
})
.catch((err)=>{
    Logger.log(err)
})

const createServer = ():void =>{
    app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));
    app.use(bodyParser.text({ limit: "50mb" }));
    app.use(bodyParser.json({ limit: "50mb", type: "application/json" }));

    app.use("/api/v1", router)
    app.get('/', (req: Request, res: Response)=>{
        payload.success(res, null, "Api initialized", httpStatus.OK)
        Logger.info("Api initialized")
    })
    app.use("*", (req: Request, res: Response, next:NextFunction)=>{
        payload.fail(res, "OOps routes not found", httpStatus.NOT_FOUND)
    })
}
app.listen(config.server.port, ()=>{
    Logger.log(`listening on port ${config.server.port}`)
})

export default app