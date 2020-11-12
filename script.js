function createBoard() {

}
function createBoardInfo() {
    
}

const board = [
    null, 0, null, 1, null, 2, null, 3, 
    4, null, 5, null, 6, null, 7, null,
    null, 8, null, 9, null, 10, null, 11,
    true, null, true, null, true, null, true, null,
    null, true, null, true, null, true, null, true,
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
let pieceIndex = 0

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
    opacity: 1, 
}


const giveListeners = () => {
    if (turn) {
        for (let i = 0; i < redPieces.length; i++) {
            redPieces[i].addEventListener("click", getPlayerPieces)
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
    resetOpacity()
}
function removeCellOnClick() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].removeAttribute("onclick")
        
    }
}
function resetOpacity() {
    for (let i = 0; i < playerPieces.length; i++) {
        playerPieces[i].style.opacity = .2;
        
    }
    resetSelectedPieceProps()
    getSelectedPiece()
}
function resetSelectedPieceProps() {
    selectedPiece.pieceId = -1;
    selectedPiece.indexOfBoardPiece = -1;
    selectedPiece.isKing = false;
    selectedPiece.seventhSpace = false;
    selectedPiece.ninthSpace = false;
    selectedPiece.fourteenthSpace = false;
    selectedPiece.eighteenthSpace = false;
    selectedPiece.minusSeventhSpace = false;
    selectedPiece.minusNinthSpace = false;
    selectedPiece.minusFourteenthSpace = false;
    selectedPiece.minusEighteenthSpace = false;
    selectedPiece.opacity = 1;
}
function getSelectedPiece() {
    console.log(event)
    selectedPiece.pieceId = parseInt(event.target.id)
    selectedPiece.indexOfBoardPiece = findPiece(selectedPiece.pieceId)
    console.log(selectedPiece.indexOfBoardPiece)
    isPieceKing()
}
function findPiece(pieceId) {
    let parsed = parseInt(pieceId)
    return board.indexOf(parsed)
}
function isPieceKing() {
    if (document.getElementById(selectedPiece.pieceId).classList.contains("king")) {
        selectedPiece.isKing = true
    } else {
        selectedPiece.isKing = false
    }
    getAvailableSpaces()
}
function getAvailableSpaces() {
    let potentialSpaces = []
    let index = 0
    for (let i = 0; i < cells.length; i++) {
      index = potentialSpaces.length
      const space = []
        if (cells[i].classList.contains("noPieceHere") == false) {
            const piece = cells[i].querySelector("p")
            space.push(cells[i])
            if (piece) {
                space.push(piece)
                console.log(piece.id)
                console.log(selectedPiece.pieceId)
                if (selectedPiece.pieceId == piece.id ) {
                    pieceIndex = i
                }
            }
        } else {
            space.push(cells[i])
        }
        potentialSpaces.push(space)
    }
    console.log(potentialSpaces)
    console.log(pieceIndex)
    console.log(potentialSpaces[pieceIndex + 9][1])
    getRealAvailableSpaces(potentialSpaces)
}
function getRealAvailableSpaces(allSpaces) {
    let trueAvailableSpaces = []
    if (pieceIndex < 9) {
        if (allSpaces[pieceIndex + 9] && !allSpaces[pieceIndex + 9][0].classList.contains("noPieceHere")) {
            trueAvailableSpaces.push(allSpaces[pieceIndex + 9])
        }
        if (allSpaces[pieceIndex + 7] && !allSpaces[pieceIndex + 7][0].classList.contains("noPieceHere")) {
            trueAvailableSpaces.push(allSpaces[pieceIndex + 7])
        } 
    } else if (pieceIndex == 9) {
        if (allSpaces[pieceIndex + 9] && !allSpaces[pieceIndex + 9][0].classList.contains("noPieceHere")) {
            trueAvailableSpaces.push(allSpaces[pieceIndex + 9])
        }
        if (allSpaces[pieceIndex + 7] && !allSpaces[pieceIndex + 7][0].classList.contains("noPieceHere")) {
            trueAvailableSpaces.push(allSpaces[pieceIndex + 7])
        }
        if (allSpaces[pieceIndex - 7] && !allSpaces[pieceIndex - 7][0].classList.contains("noPieceHere")) {
            trueAvailableSpaces.push(allSpaces[pieceIndex - 7])
        }
    } else if (pieceIndex > 55) {
        if (allSpaces[pieceIndex - 7] && !allSpaces[pieceIndex - 7][0].classList.contains("noPieceHere")) {
            trueAvailableSpaces.push(allSpaces[pieceIndex - 7])
        }
        if (allSpaces[pieceIndex - 9] && !allSpaces[pieceIndex - 9][0].classList.contains("noPieceHere")) {
            trueAvailableSpaces.push(allSpaces[pieceIndex - 9])
        }
    } else if (pieceIndex == 55) {
        if (allSpaces[pieceIndex + 7] && !allSpaces[pieceIndex + 7][0].classList.contains("noPieceHere")) {
            trueAvailableSpaces.push(allSpaces[pieceIndex + 7])
        }
        if (allSpaces[pieceIndex - 7] && !allSpaces[pieceIndex - 7][0].classList.contains("noPieceHere")) {
            trueAvailableSpaces.push(allSpaces[pieceIndex - 7])
        }
        if (allSpaces[pieceIndex - 9] && !allSpaces[pieceIndex - 9][0].classList.contains("noPieceHere")) {
            trueAvailableSpaces.push(allSpaces[pieceIndex - 9])
        }
    } else {
        if (allSpaces[pieceIndex + 9] && !allSpaces[pieceIndex + 9][0].classList.contains("noPieceHere")) {
            trueAvailableSpaces.push(allSpaces[pieceIndex + 9])
        }
        if (allSpaces[pieceIndex + 7] && !allSpaces[pieceIndex + 7][0].classList.contains("noPieceHere")) {
            trueAvailableSpaces.push(allSpaces[pieceIndex + 7])
        }
        if (allSpaces[pieceIndex - 7] && !allSpaces[pieceIndex - 7][0].classList.contains("noPieceHere")) {
            trueAvailableSpaces.push(allSpaces[pieceIndex - 7])
        }
        if (allSpaces[pieceIndex - 9] && !allSpaces[pieceIndex - 9][0].classList.contains("noPieceHere")) {
            trueAvailableSpaces.push(allSpaces[pieceIndex - 9])
        }
    }
    console.log(trueAvailableSpaces)
}
// double the value of the checked space's index if the space is occupied, and check the new value for vacancy.