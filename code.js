// Your Code Here.

let boardLayout = [
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, "red", "red", "red", "red"],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null]
]




function checkHorizontal(board) {
    for (let row = 0; row < board.length - 3; row++) {
        let tempRow = board[row]
        for (let space = 0; space < tempRow.length; space++) {
            let piece = board[row][space]
            if (piece === null) {
                continue
            } else {
                if (piece === board[row + 1][space] && piece === board[row + 2][space] && piece === board[row + 3][space]) {
                    return true
                }
            }
       }
    }
    return false
}

//console.log(checkHorizontal(boardLayout))

function checkVertical(board) {
    for (let row = 0; row < board.length; row++) {
        let tempRow = board[row]
        for (let space = 0; space < tempRow.length - 3; space ++) {
            let piece = board[row][space]
            if (piece === null) {
                continue
            } else {
                if (piece === board[row][space + 1] && piece === board[row][space + 2] && piece === board[row][space + 3]) {
                    return true
                }
            }
        }
    }
    return false
}

console.log(checkVertical(boardLayout))

function checkDiagonalUp(board) {}

function checkDiagonalDown(board) {}

function analyzeBoard(board) {
  if (checkHorizontal(board)) {
    return true;
  } else if (checkVertical(board)) {
    return true;
  } else if (checkDiagonalUp(board)) {
    return true;
  } else if (checkDiagonalDown(board)) {
    return true;
  }
  return false;
}

let firstColumn = document.getElementById("column1");
let secondColumn = document.getElementById("column2");
let thirdColumn = document.getElementById("column3");
let fourthColumn = document.getElementById("column4");
let fifthColumn = document.getElementById("column5");
let sixthColumn = document.getElementById("column6");
let seventhColumn = document.getElementById("column7");
