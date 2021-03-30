// Your Code Here.

let boardLayout = [
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
];

function checkHorizontal(board) {}

function checkVertical(board) {}

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
