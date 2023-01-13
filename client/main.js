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

const form = document.getElementById('form')

const pushCompliment = () => {
    axios.push("http://localhost:4000/api/addCompliment")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};
  
form.addEventListener('submit', pushCompliment);

const favColor = document.getElementById('color')

const getFavColor = () => {
    axios.get("http://localhost:4000/api/favColor")
    .then()
    return favColor;



};


const animal = document.getElementById('animal')

const getAnimal = () => {
    axios.get("http://localhost:4000/api/animal")
    
    return animal;


}
