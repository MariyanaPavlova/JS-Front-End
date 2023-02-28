function solve(text) {
    
    let reg = /[A-Z][a-z]*/
    let matches= text.split(/(?=[A-Z][a-z]*)/)

    console.log(matches.join(', '))
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan')
solve('HoldTheDoor')
solve('ThisIsSoAnnoyingToDo')