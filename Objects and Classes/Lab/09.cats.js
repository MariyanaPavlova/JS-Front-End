function cats(input) {
    class Cat {
        constructor(name, age ){
            this.name = name
            this.age = age
        }

        meow () {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }
    let cats = []
    for (let i of input) {
        let token = i.split(" ")
        let newCat = new Cat(token[0], token[1])
        cats.push(newCat)     
    }

    for (let i of cats){
        i.meow()
    }
}

cats(['Mellow 2', 'Tom 5'])
cats(['Candy 1', 'Poppy 3', 'Nyx 2'])