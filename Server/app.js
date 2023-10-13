import express from "express";
import morgan from "morgan";
import cors from "cors"
import dataRouter from "./Routes/data.js"
import config from "./Config/config.js";
import connectDB from "./Config/db.js";


const app = express();




connectDB(config)
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use(express.json());
app.use(cors());
app.use('/api/data', dataRouter);






app.listen(3000, () => {
    console.log('port is running on 3000')
})

export default app; 