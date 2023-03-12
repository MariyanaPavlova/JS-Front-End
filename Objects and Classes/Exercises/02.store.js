function store(stock, delivery) {
    
    let storeProd = {};

    for (let i = 0; i < stock.length; i += 2) {
        storeProd[stock[i]] = Number(stock[i + 1]);
    }

    for (let i = 0; i < delivery.length; i += 2) {
        let prod = delivery[i];

        if (!storeProd.hasOwnProperty(prod)) {
          storeProd[prod] = 0;
        }    
        storeProd[prod] += Number(delivery[i + 1]);
    }

    // for (let key of Object.keys(storeProd)) {
    for (let key in storeProd) {
        console.log(`${key} -> ${storeProd[key]}`);
    }
}

store(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
