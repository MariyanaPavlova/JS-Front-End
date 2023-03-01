function perfectNum(n) {

    let number = 0
    for (i=1; i <= n; i++){
        if(n % i == 0){
            number += i
        }
    }
    if (number /2 == n){
        console.log('We have a perfect number!')
    } else{
        console.log("It's not so perfect.")
    }
}
perfectNum(6)
perfectNum(28)
perfectNum(1236498)