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

function pickIt(arr){
    let odd=[],even=[];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]%2===1){
            odd.push(arr[i])
        }
        if (arr[i]%2===0){
            even.push(arr[i])
        }
    }
    return [odd,even];
}

function repeatStr (n, s) {
    return s.repeat(n) ;
}

function removeEveryOther(arr){
    let res =[]
    for (let i = 0; i < arr.length; i++) {
        if([i]%2===0){
            res.push(arr[i])
        }
    }return res
}

function mergeArrays(arr1, arr2) {
    return [...new Set(arr1.concat(arr2).sort((a,b) => a - b))]
}

let replaceDots = function(str) {
    return str.split('.').join('-')
}

function squareSum(numbers){
    let res = 0
    numbers.forEach((item) => {
        res += Math.pow(item,2)
    })
    return res
}

function simpleMultiplication(number) {
    let res = 0
    if(number%2===0){
        res = number * 8
    }else{
        res = number * 9
    }
    return res
}

function fakeBin(x){
    return x.split('').map(function(num){
        if(num<5) {return 0} else{return 1}
    }).join('')
}

function square(num){
    return Math.pow(num,2)
}

const reverseSeq = n => {
    let arr = [];
    for (let i = n; i > 0 ; i--) {
        arr.push(i)
    }
    return arr
};

function greet(name){
    return `Hello, ${name} how are you doing today?`;
}

function between(a, b) {
    let arr = [];
    for (let i = a; i <= b; i++) {
        arr.push(i)
    }
    return arr

}

function makeNegative(num){
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

function stringClean(s){
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if(isNaN(s[i])){
            result +=s[i]
        }
    }
    return result
}

function chromosomeCheck(sperm) {
    return `Congratulations! You're going to have a ${sperm === 'XY' ? 'son' : 'daughter'}.`
}

function powersOfTwo(n){
    let arr = [];
    for (let i = 0; i <= n ; i++) {
        let res = Math.pow(2,i)
        arr.push(res)
    }
    return arr
}

function xor(a, b) {
    if(a == true && b == true){
        return false
    }else if(a == true || b ==true){
        return true
    }else {return false}
}

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    let res = distanceToPump/fuelLeft
    return res <= mpg?true:false;
};

function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
    this.isWorthIt = function(){
        return(draft >= (crew * 1.5 + 20))
    }
}

function warnTheSheep(queue) {
    let arr = queue.reverse()
    for (let i = 0; i < arr.length; i++) {
        if(arr[0] == 'wolf'){
            return 'Pls go away and stop eating my sheep'
        }
        if(arr[i] == 'wolf'){
            return `Oi! Sheep number ${i}! You are about to be eaten by a wolf!`
        }
    }
}

function lovefunc(flower1, flower2){
    let same1 = flower1 % 2 ===0 && flower2 % 2 ===0;
    let same2 = flower1 % 2 ===1 && flower2 % 2 ===1;
    if (same1 || same2){
        return false
    }else{return true}
}

function binToDec(bin){
    return parseInt(bin,2)
}

function opposite(number) {
    if(number < 0){
        return Math.abs(number);
    }else if(number > 0){
        let res = number - number * 2;
        return res
    }else{return 0}
}

function sayHello( name, city, state ) {
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}

function setAlarm(employed, vacation){
    if(employed === true && vacation === false){
        return true
    }else{return false}
}

function toCsvText(array) {
    return array.join('\n')

}

function nearestSq(n) {
    let num;
    num = Math.round(Math.sqrt(n))
    return Math.pow(num,2)
}

function points(games) {
    let total = 0;
    for(let item of games){
        if(item[0] > item[2]){
            total += 3
        }else if(item[0] === item[2]){
            total += 1
        }else{
            total += 0
        }
    }
    return total
}

function sum (numbers) {
    "use strict";
    let total = 0
    if(numbers.length === 0){
        total += 0
    }else{
        for(let i of numbers){
            total += i
        }
    }
    return total

};

function capitalizeWord(word) {
    return word.slice(0,1).toUpperCase() + word.substr(1)

}