class Team {
    constructor(id, avengers =[]){
        this.id = id;
        this.avengers = avengers;
    }
    battle(obj){
        for (let hero in this.avengers) {
            this.avengers[hero].hp -= (parseFloat(obj.damage));
        }
    }
    calculateLosses(team) {
        let lost = 0;
        for (let hero in team.avengers) {
            if (team.avengers[hero].hp <= 0)
                lost++;
        }
        if (!lost) {
            console.log("We haven't lost anyone in this battle");
            return;
        }
        console.log(`In this battle we lost ${lost} Avengers.`);
        return;
    }
    clone() {
        let obj = {};
        Object.assign(obj, this);
        return obj;
    }
}

