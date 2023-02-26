let numbers = [31,2,432,32,5,-1]

let sortedAsc = [...numbers].sort((aNum, bNum) => {
    let result = aNum - bNum
    return result;
})


let sortedDesc = [...numbers].sort((aNum, bNum) => {
    let result = bNum - aNum
    return result;
})


//---------------------
let names = ["Kiro", 'Asw', 'Pesho']

let sortedNamesAsc = [...names].sort((aName, bName) => {
    let result = aName.localeCompare(bName)
    return result;
})

let sortedNamesDesc = [...names].sort((aName, bName) => {
    let result = bName.localeCompare(aName)
    return result;
})