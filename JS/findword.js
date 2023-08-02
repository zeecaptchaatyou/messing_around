function findword(puzzle,word) {
    easyPuzzle[1, 2 ,3]
}

let easyPuzzle = [
    ['b', 'a', 't'],
    ['i', 'i', 'p'],
    ['t', 'o', 'n']
];
console.log(findWord(easyPuzzle, 'bit')); // should print true
console.log(findWord(easyPuzzle, 'bat')); // should print false
let hardPuzzle = [
    ['y', 'o', 't', 'v'],
    ['k', 'c', 'p', 's'],
    ['t', 'h', 'n', 's'],
    ['t', 'a', 'o', 'e'],
    ['t', 't', 'a', 'i'],
];
console.log(findWord(hardPuzzle, 'chat')); // should print true
console.log(findWord(hardPuzzle, 'set')); // should print false
console.log(findWord(hardPuzzle, 'i')); // should print true