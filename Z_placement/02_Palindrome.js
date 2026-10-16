function isPalindrome(str){

    let resversed = ""

    for(let i = str.length -1; i >= 0; i--){
        resversed = resversed + str[i]
    }

    if (str === resversed) {
        return "Palindrome";
    } else {
        return "Not a palindrome";
    }
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
