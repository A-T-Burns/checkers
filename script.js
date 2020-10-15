const board = [
    null, 0, null, 1, null, 2, null, 3, 
    4, null, 5, null, 6, null, 7, null,
    null, 8, null, 9, null, 10, null, 11,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    12, null, 13, null, 14, null, 15, null,
    null, 16, null, 17, null, 18, null, 19,
    20, null, 21, null, 22, null, 23, null,
]

const cells = document.querySelectorAll("td")
let redPieces = document.querySelectorAll(".redPiece")
let blackPieces = document.querySelectorAll(".blackPiece")
const divider = document.getElementById("divider")

let redScore = 12
let blackScore = 12
let turn = true
let playerPieces

let selectedPiece = {
    pieceId: -1,
    indexOfBoardPiece: -1,
    isKing: false,
    seventhSpace: false,
    ninthSpace: false,
    fourteenthSpace: false,
    eighteenthSpace: false,
    minusSeventhSpace: false,
    minusNinthSpace: false,
    minusFourteenthSpace: false,
    minusEighteenthSpace: false,
}

const giveListeners = () => {
    if (turn) {
        for (let i = 0; i < redPieces.length; i++) {
            redPieces[i].addEventListener("click", () => {
                console.log("click")
            })
        }
    } else {
        for (let i = 0; i < blackPieces.length; i++) {
            blackPieces[i].addEventListener("click", () => {
                console.log("click")
            })    
        }
    }
}
giveListeners()
// Is there hoisting in ES6 syntax? If so, how do you write a function in ES6 that allows
// for hoisting? And if not, why is there no hoisting? Step down rule
function getPlayerPieces() {
    if (turn) {
        playerPieces = redPieces

    } else {
        playerPieces = blackPieces
    }
    removeCellOnClick()
    resetBorders()
}
function removeCellOnClick() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].removeAttribute("onclick")
        
    }
}