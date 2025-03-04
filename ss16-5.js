function isPrime(a){
    if (a < 2){
        return false;
    }else if(a === 2) {
        return true;
    }else if (a % 2 === 0){ 
        return false;
    }else{    
        for(i = 2; i <= Math.sqrt(a); i = i + 1){
            if (a % i === 0){
               return false;
            };
        };
        return true;
    };
};
let a = +prompt("mời bạn nhập vào 1 số nguyên");
let b = isPrime(a);
alert(b);