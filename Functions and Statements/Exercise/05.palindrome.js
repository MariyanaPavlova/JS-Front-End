function palindrome(arr) {
    
    for (let el of arr) {
        let ell = String(el)
             
        if (ell[0] === ell[ell.length-1]){
            console.log(true)
        } else{
            console.log(false)
        }   
    } 
    
    // for (let el of arr) {
    //     let reversed = String(el).split('').reverse().join('');
 
    //      if (el == reversed) {
    //          console.log('true')
    //      } else {
    //          console.log('false')
    //      }
 
    //  }
}   

palindrome([123,323,421,121])
palindrome([32,2,232,1010])