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