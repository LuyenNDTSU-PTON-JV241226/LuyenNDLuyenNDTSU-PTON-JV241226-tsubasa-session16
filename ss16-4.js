function isEven(a){
    if (a % 2 === 0){
        return true;
    }else {
        return false;
    };
};
let a = +prompt("mời bạn nhập vào 1 số nguyên");
let c = isEven(a);
alert(c);