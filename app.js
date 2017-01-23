// since this will be command line, we can't rely on DOM

// We will us stdin's readable stream to get input
// and stdout to write results

// Track turn so we can evaluate to makr and player message
let turn = 1;

// We will evaluate marks to add vals to board
// We will have 0 index be empty string to remove vals
const mark = ['_', 'X', 'O'];

// We want to have a player tracker so we can notify whose turn it is
// we will concat with tracker to make sure we put in proper val
const player = `player${turn}`;

// We will use an array of array's to represent our board
// We will accept coordinates for where player is playing val
let board = [
  ['________'],
  ['|', '_', '_', '_', '|'],
  ['|', '_', '_', '_', '|'],
  ['|', '_', '_', '_', '|'],
  [' _______']
];

const printBoard = (board) => {
  return board.slice().join('\n');
};

const addPiece = (tuple) => {
  console.log('parseInt(tuple[0]): ', parseInt(tuple[0]) + 1);
  console.log('parseInt(tuple[0]): ', parseInt(tuple[1]) + 1);
  console.log('board: ', board);

  console.log('mark[turn: ', mark[turn]);
  board[parseInt(tuple[0]) + 1][parseInt(tuple[1]) + 1] = mark[turn];
  console.log('board: ', board);

};

const alternatePlayer = (turn) => {
  if (turn === 1) {
    return 2;
  }
  return 1;
};

// we want a message to tell us whose turn it is
// AND whether they are an x or o
const takeTurnMessage = `It is ${player}'s turn. Play you're ${mark[turn]}, ${player}! Tell me the coordinates of you're move. (e.g. '00' will put your mark at the top left point and '22' will put it at the bottom right!)`;

const playedTurnMessage = `${player} played an ${mark[turn]}. Here is the new board: `;

const printBoardMessage = (board) => `Here is the board: \n ${printBoard(board)} \n${takeTurnMessage}`;

console.log('Let\'s play Tic Tac Toe! \n', '\n', printBoardMessage(board));

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  var chunk = process.stdin.read();
  // We will put game logic inside of here
  // console.log(chunk);
  if (chunk !== null
    // && chunk.length === 2
    // && chunk[0] >= 0
    // && chunk[0] < 3
    // && chunk[1] >= 0
    // && chunk[1] < 3
    ) {

    // process.stdout.write('data: ' + chunk);
    process.stdout.write(playedTurnMessage);
    addPiece(chunk);
    turn = alternatePlayer(turn);
    var newPrintBoardMessage = printBoardMessage(board);
    process.stdout.write(newPrintBoardMessage);
    process.stdout.write(takeTurnMessage);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('end');
});