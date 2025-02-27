function processConfirm (){
    let check = confirm('Bạn xác nhận có hoặc không ???')
    let result = '';
    if(check){
        result += "Excellent. We'll play a nice game of chess.";
    }else{
        result += "Maybe later then.";
    }
    return result;
}

console.log(processConfirm());


