const connectDB = require("./db/connect")
const express = require("express");     
const app = express();
const tasks = require("./routes/tasks")
require("dotenv").config()


    
// middleware

//required for data in req.body
app.use(express.static("./public"))
app.use(express.json()); 


// routes




 // app.get("/api/v1/tasks")  - get all tasks
 app.use("/api/v1/tasks", tasks);
 // app.post("/api/v1/tasks") - create new task
 // app.get("/api/v1/tasks/:id") -get specific task
 // app.patch("/api/v1/tasks/:id") -update specific task
 // app.delete("/api/v1/tasks/:id") - delete specific task
const port = 3000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`server is running on port ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()