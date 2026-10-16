function reverseString(str){

    let resversed = ""

    for(let i = str.length -1; i >= 0; i--){
        resversed = resversed + str[i]
    }

    return resversed;
}

console.log(reverseString("hello"));
