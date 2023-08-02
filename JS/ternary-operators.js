function checkIfMirror(matrix){

    [[1, 5, 9, 5, 1],
      [2, 2],
      [3,-9,-9, 3] // true 
]
    [[10, 5, 6, 5, 10],
                           [2, 2],
                           [3, 19, 19, 7] 
]// false 
    [[10, 5, 16, 15, 100, 15, 16, 5, 10],
                           [2, 20, 20, 2],
                           [3, 19, -19, -177, -19, 19, 3],
                           [-9,-9,-9,-9,-9,-9,-9]] // true 
} 
     if checkIfMirror[0][0][0] == checkIfMirror[0][0][4] && checkIfMirror[0][0][1] == checkIfMirror[0][0][3] && checkIfMirror[0][1][0] == checkIfMirror[0][1][1] && checkIfMirror[0][2][0] == checkIfMirror[0][2][3] && checkIfMirror[0][2][1] == checkIfMirror[0][2][2]
     
     console.log("true");
        else console.log("false")
     
        if checkIfMirror[1][0][0] == checkIfMirror[1][0][4] && checkIfMirror[1][0][1] == checkIfMirror[1][0][3] && checkIfMirror[1][1][0] == checkIfMirror[1][1][1] && checkIfMirror[1][2][0] == checkIfMirror[1][2][3] && checkIfMirror[1][2][1] == checkIfMirror[1][2][2]
    console.log("true");
        else console.log("false")

        if checkIfMirror[2][0][0] == checkIfMirror[2][0][8] && checkIfMirror[2][0][1] == checkIfMirror[2][0][7] && checkIfMirror[2][0][2] == checkIfMirror[2][0][6] && checkIfMirror[2][0][3] == checkIfMirror[2][0][5] && checkIfMirror[2][1][0] == checkIfMirror[2][1][3] && checkIfMirror[2][1][1] == checkIfMirror[2][1][2] && checkIfMirror[2][2][0] == checkIfMirror[2][2][6] && checkIfMirror[2][2][1] == checkIfMirror[2][2][5] && checkIfMirror[2][2][2] == checkIfMirror[2][2][4] && checkIfMirror[2][3][0] == checkIfMirror[2][3][6] && checkIfMirror[2][3][1] == checkIfMirror[2][3][5] && checkIfMirror[2][3][2] == checkIfMirror[2][3][4]
        console.log("true");
        else console.log("false")

    console.log(checkIfMirror([[1, 5, 9, 5, 1],
                               [2, 2],
                               [3,-9,-9, 3]])); // true 
    console.log(checkIfMirror([[10, 5, 6, 5, 10],
                               [2, 2],
                               [3, 19, 19, 7]])); // false   
    console.log(checkIfMirror([[10, 5, 16, 15, 100, 15, 16, 5, 10],
                               [2, 20, 20, 2],
                               [3, 19, -19, -177, -19, 19, 3],
                               [-9,-9,-9,-9,-9,-9,-9]])); // true 