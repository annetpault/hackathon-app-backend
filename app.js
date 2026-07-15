const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://annet-paul:annet123@ac-rrnjxoo-shard-00-00.bcqym4j.mongodb.net:27017,ac-rrnjxoo-shard-00-01.bcqym4j.mongodb.net:27017,ac-rrnjxoo-shard-00-02.bcqym4j.mongodb.net:27017/hackathondb?ssl=true&replicaSet=atlas-stpu0i-shard-0&authSource=admin&appName=Cluster0").then(
    () => {
        console.log("mongodb connected")
    }
).catch(
    (error) => {
        console.log(error)
    }
)


const Team=mongoose.model("Teams",new mongoose.Schema(
    {
        teamId: String,
        teamName: String,
        teamLname: String,
        leaderEmail: String,
        leaderPhone: String,
        collegeName: String,
        noMembers: String,
        projectTitle: String,
        problemStat: String,
        techStack: String,
        mentorName: String,
        regDate: String,
        table: String
    }
))

app.post("/view-team",async(req,res)=> {
    const teams=await Team.find()
    res.json(teams);
});

app.post("/add-team",async (req,res) => {
    await Team.create(req.body)
    res.json({"status":"success"});
});

app.listen(4000, ()=> {
    console.log("server started")
});