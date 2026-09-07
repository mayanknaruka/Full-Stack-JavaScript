const factorial = function(n) {
    if(!Number.isInteger(n) || n < 0  )
        if(n === 0)
            return 1
        return n * factorial(n-1)
};
