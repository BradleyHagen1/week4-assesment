const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, putGoals, getGoals, deleteGoal } = require('./controller')


app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.put("/api/newGoal", putGoals);
app.get("/api/goals", getGoals);
app.get("/api/delete", deleteGoal);

app.listen(4000, () => console.log("Server running on 4000"));
