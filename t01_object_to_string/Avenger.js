
class ClassFunction extends Function{
    constructor(alias, powers){
        super('', 'return this.call()');
        this.alias = alias;
        this.powers = powers;
        return this.bind(this);
    }
    call(){
        return `${this.alias}\n${this.powers}`;
    }
}
class Avenger extends ClassFunction{
   constructor(args){
       super(args.alias, args.powers)
        this.Name = args.name;
        this.alias = args.alias;
        this.gender = args.gender;
        this.age = args.age;
        this.powers = args.powers; 
   }
   call(){
       let str ="";
       for(let item in this){
           if(item !=="Name" && item !=="gender" && item !=="age")
           str += `${this[item]}\n`
       }
       return str;
   }
    toString() {
        let str = "";
        for (let item in this) {
            if (item != "alias" && item != "powers") {
            str += `${item}: ${this[item]}\n`;
        }   
        }
        return str;
    }
}
module.exports = {Avenger};