const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const { getFortune } = require('./controller')
const { pushCompliment } = require('./controller')
const { getFavColor } = require('./controller')
const { getAnimal } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/addCompliment", pushCompliment);
app.get("/api/favColor", getFavColor)
app.get ("/api/animal", getAnimal )

app.listen(4000, () => console.log("Server running on 4000"));
