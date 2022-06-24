function makeNegative(num) {
    let res;
    if(num > 0){
        res = num * -1
    }else if(num <= 0){
        res = num * 1}
    return res
}
function makeNegative1(num){
    return num > 0 ? num * -1:num * 1
}

console.log(makeNegative1(5));
