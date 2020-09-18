
class dog {
    constructor(name){
        this.name = name
    }
    bark(){
        return 'Woof woof, I am ${this.name}'
    }
}

module.exports = dog;
