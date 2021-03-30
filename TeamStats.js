const team = {
  _players: [ 
    {
      firstName: 'Alex',
      lastName: 'C',
      age: 28
    },
    {
      firstName: 'Jake',
      lastName: 'C',
      age: 23
    },
    {
      firstName: 'Drexel',
      lastName: 'Heard',
      age: 35
    }
    ],
  _games: [
    {
  opponent: 'Cowboys',
  teamPoints: 42,
  opponentPoints: 27
    },
    {
  opponent: 'Broncos',
  teamPoints: 22,
  opponentPoints: 46
  },
  {
  opponent: 'Packers',
  teamPoints: 32,
  opponentPoints: 28
  }
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    let newPlayer = {
      firstName: firstName,
      lastName: lastName,
      age: age
    }
    this._players.push(newPlayer);
  },
  addGame(opponentsName, teamPoints, opponentPoints){
    let newGame = {
      opponentsName,
      teamPoints,
      opponentPoints
    }
    this._games.push(newGame)
  }
}

team.addPlayer('Steph', 'Curry', 28)
team.addPlayer('Lisa', 'Leslie', 44)
team.addPlayer('Bugs', 'Bunny', 76)

team.addGame('Steelers', 45, 32);
team.addGame('Saints', 25, 34);
team.addGame('Raiders', 12, 22);

console.log(team.players)
console.log(team.games)