// script.js
const cells = Array.from(document.querySelectorAll('.cell'));
const resetButton = document.getElementById('reset');
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const checkWinner = () => {
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return board.includes('') ? null : 'Empate';
};

const handleClick = (index) => {
    if (board[index] || checkWinner()) return;
    board[index] = currentPlayer;
    cells[index].textContent = currentPlayer;
    const winner = checkWinner();
    if (winner) {
        setTimeout(() => alert(winner === 'Empate' ? 'Empate!' : `${winner} ganhou!`), 10);
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
};

const initGame = () => {
    board = ['', '', '', '', '', '', '', '', ''];
    cells.forEach((cell, index) => {
        cell.textContent = '';
        cell.addEventListener('click', () => handleClick(index), { once: true });
    });
    currentPlayer = 'X';
};

resetButton.addEventListener('click', initGame);

initGame();
