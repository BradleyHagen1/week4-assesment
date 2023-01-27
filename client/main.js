const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('fortuneButton')
const goalsBtn = document.getElementById('goalsButton')
const deleteButton = document.getElementById('deleteGoals')

let goalList = []

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment);

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
     });
};
    
fortuneBtn.addEventListener('click', getFortune);

const putGoals = () => {
    let goal = document.getElementById('newGoal').value;
    axios.put("http://localhost:4000/api/newGoal/", {input: goal})
        .then(res => {
            const data = res.data;
            console.log('putgoal', data)
            alert(data);
            getGoals();
     });
};

const getGoals = () => {
    function getGoals() {
        axios.get("http://localhost:4000/api/goals/")
        .then(res => {
            goalList = res.data;
            console.log(goalList)
        });   

    };
}

const deleteGoals = () => {
    let goalToDelete = document.getElementById('deleteGoalsBtn').value;
    axios.delete(`http://localhost:4000/api/inspiration/${goalToDelete}`)
        .then(res => {
            alert('Goal Deleted');
            getGoals();
        });
};

goalsBtn.addEventListener('click', putGoals);
deleteGoalsBtn.addEventListener('click', deleteGoals);