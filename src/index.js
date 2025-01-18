const express = require("express")
require("dotenv").config()
const connectDb = require("./config/database")
const userRouter = require("./routes/userRouter")
const jobRouter = require("./routes/jobRouter")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const app = express()
const PORT = process.env.PORT || 5000


const corsOption = {
    // origin: [
    //     "http://localhost:5173",
    //     "https://job-listing-app-frontend-ratnesh.vercel.app"
    // ],
    origin:true,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}
app.use(cors(corsOption))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
app.use("/api/",userRouter)
app.use("/api/", jobRouter)



app.get("/", (req, res) => {
    res.send("Welcome to the Job Listing API");
})

app.use((req, res) => {
    res.status(404).json({
        message:"Route not found"
    });
})



connectDb()
.then(() => {
    app.listen(PORT, () => {
        console.log("Server is up and running on PORT No", PORT)
    })
}).catch((error) => {
    console.log("Issue in DB connection", error);
})


