function radar(speed, place) {

        
        speedLimit = 0
    switch(place){
        case "city": 
        speedLimit = 50; break
        case "residential": 
        speedLimit = 20; break
        case "interstate": 
        speedLimit = 90; break
        case "motorway": 
        speedLimit = 130; break
    }
    if (speed <= speedLimit){
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)

    }
    else {
        let diff = speed - speedLimit
        let statusOverspeed = ""

        if (diff <= 20){
            overSpeed = speed - speedLimit
            statusOverspeed = "speeding"
        } else if (diff <= 40) {
            overSpeed = speed - speedLimit
            statusOverspeed = "excessive speeding"
        } else {
            overSpeed = speed - speedLimit
            statusOverspeed = "reckless driving"
        }
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${statusOverspeed}`);
    }
}



radar(40, 'city')
radar(21, 'residential')
radar(120, 'interstate')
radar(200, 'motorway')