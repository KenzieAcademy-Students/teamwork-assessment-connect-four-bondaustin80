
// Your Code Here.

let boardLayout = [
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null]
]




function checkHorizontal(board) {

}

function checkVertical(board) {
    
}

function checkDiagonalUp(board) {
    
}

function checkDiagonalDown(board) {

}

function analyzeBoard(board) {
    if (checkHorizontal(board)) {
        return true
    } else if (checkVertical(board)) {
        return true
    } else if (checkDiagonalUp(board)) {
        return true
    } else if (checkDiagonalDown(board)) {
        return true
    }
    return false
}