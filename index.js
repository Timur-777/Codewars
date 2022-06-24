function stringClean(s){
  let result = '';
    for (let i = 0; i < s.length; i++) {
        if(isNaN(s[i])){
            result +=s[i]
        }
    }
    return result
}

console.log(stringClean('T777im%u%r'));
