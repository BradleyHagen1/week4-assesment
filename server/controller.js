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

    putinspiration: (req, res) => {
        let inspirationalQuotes=['you got this!', 'Keep trying!', 'You are almost there!'];

        
    },

    goalList: [],
    
    getGoals: (req, res) => {
    
        res.status(200).send(this.goalList)

    },

    putGoals: (req, res) => {
    
        res.status(200).send(this.goalList.put(req.data))

    },

    deleteGoal: (req, res) => {
    
        res.status(200).send(this.goalList.delete(req.data))

    },

}