function passwordValidator(text) {

    let passwordLength = false
    if (text.length >= 6 && text.length <=10) {
        passwordLength = true        
    } 
    let passwordOtherSymb = false
    let passwordDigits = 0
    let passwordLetters = 0
    for (el of text){
        if ((el.charCodeAt(0) >= 65 && el.charCodeAt(0) <=90) ||
         (el.charCodeAt(0) >= 97 && el.charCodeAt(0) <= 122)) {
            passwordLetters +=1
        } else if ((el.charCodeAt(0) >= 48 && el.charCodeAt(0) <= 57)){
            passwordDigits +=1
        }
        else {
            passwordOtherSymb = true
        }
    
    } 
    if (!passwordLength) {
        console.log("Password must be between 6 and 10 characters")
    }
    if (passwordOtherSymb) {
        console.log("Password must consist only of letters and digits")
    } if (passwordDigits < 2) {
        console.log("Password must have at least 2 digits")
    } if ((passwordLength) && (passwordDigits>=2) && (!passwordOtherSymb)) {
        console.log("Password is valid")
    }

}
passwordValidator('logIn')
passwordValidator('Pa$s$s')
passwordValidator('Mys123')