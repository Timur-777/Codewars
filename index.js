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

console.log(defineSuit('13♣'));;

