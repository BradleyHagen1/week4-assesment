const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment);


const fortuneBtn = document.getElementById('fortuneButton')

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
     });
};
    
fortuneBtn.addEventListener('click', getFortune);



const putGoals = () => {
    let goal = document.getElementById('inspiration')
    axios.put("http://localhost:4000/api/inspiration/", {input: goal})
        .then(res => {
            const data = res.data;
            alert(data);
     });
};

let goalList = []
function getGoals() {
    axios.get("http://localhost:4000/api/Goals/")
    .then(res => {
        console.log(goalList);
        goalList = res.data;
    });
};


goalsButton.addEventListener('click', putGoals);
deleteGoals.addEventListener('click', deleteGoals);
