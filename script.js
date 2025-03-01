let players = [];

function addPlayer() {
    const name = prompt("Enter player name:");
    if (name) {
        players.push(name);
        updatePlayerList();
    }
}

function updatePlayerList() {
    const playersDiv = document.getElementById("players");
    playersDiv.innerHTML = "<h3>Players:</h3>";
    players.forEach((player, index) => {
        playersDiv.innerHTML += `<div class="player">${index + 1}. ${player}</div>`;
    });
}

function generateBracket() {
    if (players.length < 2) {
        alert("At least two players are needed to generate a bracket.");
        return;
    }

    let shuffledPlayers = [...players].sort(() => Math.random() - 0.5);
    let bracketDiv = document.getElementById("bracket");
    bracketDiv.innerHTML = "<h3>Tournament Bracket:</h3>";

    for (let i = 0; i < shuffledPlayers.length; i += 2) {
        if (i + 1 < shuffledPlayers.length) {
            bracketDiv.innerHTML += `<div>${shuffledPlayers[i]} vs ${shuffledPlayers[i + 1]}</div>`;
        } else {
            bracketDiv.innerHTML += `<div>${shuffledPlayers[i]} (bye)</div>`;
        }
    }
}
