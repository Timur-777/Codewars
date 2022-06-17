function defineSuit(card) {
    let res ='';
    let cards = card.split('');
    switch (cards[cards.length-1]) {
        case '♣' :
            res = 'clubs';
            break;
        case '♦' :
            res= 'diamonds';
            break;
        case '♥' :
            res = 'hearts';
            break;
        case '♠' :
            res = 'spades';
            break;

    }
    return res;
}

function century(year) {
    if(year <=100) return 1;
    return  Math.ceil(year/100);
}

function arrayPlusArray(arr1, arr2) {
    let sum = 0;
    let newArr =arr1.concat(arr2);
    for (let i = 0; i < newArr.length; i++) {
        sum += newArr[i];
    }
    return sum
}

function stringToArray(string) {
    let str = string.split(' ');
    return str
}

let min = function(list){
    return Math.min(...list)
}

let max = function(list){
    return Math.max(...list)
}

function humanYearsCatYearsDogYears(humanYears) {
    let res = []
    switch (humanYears) {
        case 1:
            res = [1, 15, 15]
            break
        case 2:
            res = [2, 24, 24];
            break
        default:
            let catYears = 24
            let dogYears = 24
            for (let i = 2; i < humanYears ; i++) {
                catYears += 4
                dogYears += 5
            }
            res = [humanYears,catYears,dogYears];
    }
    return res

}

