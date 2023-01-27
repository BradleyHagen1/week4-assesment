const goalList = []
module.exports = {

    getCompliment: (req, res) => {
        let compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);

    },
    
    getFortune: (req, res) => {
        const fortunes = ['You are going to get through this.', 'Sometimes life isnt fair and you have to accept it.', 'Good things are coming soon.','A beautiful, smart, and loving person will be coming into your life.','An eye for an eye leaves everyone blind.','Trust you instincts.'];
        
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
        
        res.status(200).send(randomFortune);
        
    },


    goalList,
    
    getGoals: (req, res) => {
        if(goalList.length === 0) {
            res.status(200).send('No Goals Found');
        } else {
            res.status(200).send(goalList)
        }
    },

    putGoals: (req, res) => {
        if (!req.body) {
            res.status(400).send('Bad Request');
        } else {
            goalList.push(req.body.input);
            res.status(200).send(goalList);
        }
    },

    deleteGoal: (req, res) => {
        if (!req.body) {
            res.status(400).send('Bad Request');
        } else {
            goalList.splice(req.body.index, 1);
            res.status(200).send(goalList);
        }
    },

}
