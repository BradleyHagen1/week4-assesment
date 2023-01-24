const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const { getFortune } = require('./controller')
const { putGoals } = require('./controller')
const { getGoals } = require('./controller')


app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.put("/api/inspiration", putGoals);
app.get("/api/goals", getGoals);

app.listen(4000, () => console.log("Server running on 4000"));
