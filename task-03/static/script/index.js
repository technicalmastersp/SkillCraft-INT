const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('resetBtn');
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let isGameActive = true;

function start() {
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    
    const handleCellClick = (event) => {
        const cell = event.target;
        const index = cell.getAttribute('data-index');
    
        if (board[index] !== '' || !isGameActive) {
            return;
        }
    
        board[index] = currentPlayer;
        cell.innerText = currentPlayer;
    
        checkResult();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    };
    
    const checkResult = () => {
        for (const condition of winningConditions) {
            const [a, b, c] = condition;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                alert(`Player ${board[a]} wins!`);
                isGameActive = false;
                return;
            }
        }
    
        if (!board.includes('')) {
            alert("It's a draw!");
            isGameActive = false;
        }
    };
    
    const resetGame = () => {
        board = ['', '', '', '', '', '', '', '', ''];
        isGameActive = true;
        currentPlayer = 'X';
        cells.forEach(cell => {
            cell.innerText = '';
        });
    };
    
    cells.forEach(cell => cell.addEventListener('click', handleCellClick));
    resetButton.addEventListener('click', resetGame);
}
