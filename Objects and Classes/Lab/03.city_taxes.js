function cityTaxes(name, population, treasury) {
    const city = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate
        },
        applyGrowth(percentage) {
            this.population += this.population * (percentage/100)
        },
        applyRecession(percentage) {
            this.treasury -= this.treasury * (percentage/100)
        }
    }
    return city


}

console.log(city =
    cityTaxes('Tortuga',
    7000,
    15000))
