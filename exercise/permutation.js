const insertIntoArray = function (array, position, value) {
  return [...array.slice(0, position), value, ...array.slice(position)];
};

const permutations = function(array) {
    if (array.length === 0){

        return [[]]
    }

    const firstElement = array[0]
    const rest = array.slice(1)

    const previousPermutations = permutations(rest)
    const newPermutations = []

    for(const permutations of previousPermutations){
        for(let i = 0; i <= permutations.length; i++){
             newPermutations.push(newPermutations)
        }

    }

    return newPermutations
  
};