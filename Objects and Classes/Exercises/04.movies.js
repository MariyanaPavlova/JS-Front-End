function movie(arr) {

    let movies = []

    for (let i of arr) {
        if (i.includes('addMovie')) {
            let movie = i.replace('addMovie ', '')
            movies.push({name: movie})

        } else if(i.includes("directedBy")) {
            let moviesplit = i.split(' directedBy ')
            let name = moviesplit[0]
            let director= moviesplit[1]
            
            movies.forEach(movie => {
                if(movie.name === name){
                    movie.director = director
                }
            })
        } else if (i.includes('onDate')) {
            let [name, date] = i.split(' onDate ')
            
            movies.forEach(movie => {
                if(movie.name === name) {
                    movie.date = date
                }
            })
        }
    }   
    movies.forEach(movie => {
        if(movie.name && movie.director && movie.date){
            console.log(JSON.stringify(movie))
            }
    
        })        
    
}


movie([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ])