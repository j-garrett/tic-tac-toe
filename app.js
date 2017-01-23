// since this will be command line, we can't rely on DOM

// We will us stdin's readable stream to get input
// and stdout to write results
process.stdin.setEncoding('utf8');

// Track turn so we can evaluate to makr and player message
let turn = 1;

// We will evaluate marks to add vals to board
// We will have 0 index be empty string to remove vals
const mark = ['_', 'X', 'O'];

// We want to have a player tracker so we can notify whose turn it is
// we will concat with tracker to make sure we put in proper val
const player = `player${turn}`;

// we want a message to tell us whose turn it is
// AND whether they are an x or o
const message = `It is ${player}'s turn. Play you're ${mark[turn]}, ${player}! Tell me the coordinates of you're move. (e.g. [0, 0] will put your mark at the top left point and [2, 2] will put it at the bottom right!)`;

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

console.log('Let\'s play Tic Tac Toe! Here is the board: \n', printBoard(board), `\n${message}`);

process.stdin.on('readable', () => {
  var chunk = process.stdin.read();
  // We will put game logic inside of here
  if (chunk !== null) {
    process.stdout.write(`data: ${chunk}`);
  }
});
