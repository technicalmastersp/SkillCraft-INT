const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('resetBtn');
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let isGameActive = true;
let i = 0;

function start() {
    function myFunction() {
        swal("Good job!", "You clicked the button!", "success");
        console.log("Function executed");
    }
    if (!sessionStorage.getItem("functionExecuted")) {
        myFunction();
        sessionStorage.setItem("functionExecuted", "true");
    }
    window.addEventListener("beforeunload", function() {
        sessionStorage.removeItem("functionExecuted");
    });
    
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
                swal({
                    title: `Congratulation ${board[a]} wins!`,
                    text: `Player ${board[a]} wins!`,
                    imageUrl: "static/media/win.png"
                });
                isGameActive = false;
                return;
            }
        }
    
        if (!board.includes('')) {
            swal({
                title: "It's a draw!",
                text: "Please restart game and play again!",
                imageUrl: "static/media/draw.png"
            });
            isGameActive = false;
        }
    };
    
    const resetGame = () => {
        swal({
            title: "Are you sure?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, Restart the Game!",
            closeOnConfirm: false
          },
          function(){
            swal({
                title: "Restarted!",
                text: "Your game has been restarted.",
                type: "success",
                timer: 1200
            });
          });
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
