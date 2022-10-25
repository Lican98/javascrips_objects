function Hero(name){
    this.name = name
    this.sayName = function(){
        return"Mi nombre es " + (this.name)
    }
}

const names=[chapulin ]

var chapulin = new Hero("Chapulin")
var minion = new Hero("Stuart")
var minion2 = new Hero("Kevin")
var minion3 = new Hero("Doctor Nafario")
var minion4 = new Hero("Vector")

console.log(chapulin.name);
console.log(minion.name);
console.log(minion2.name);
console.log(minion3.name);
console.log(minion4.name);


const namess=["Chapulin","Stuart","Kevin","Doctor Nafario","Vector"]

const heroes = [ ]

for(let i = 0; i < namess.length; i++){
    heroes.push(new Hero(namess[i]))

}
console.log(heroes);

namess.forEach((name)=>{
    heroes.push(new Hero(name))
})

heroes.forEach((hero.sayName))