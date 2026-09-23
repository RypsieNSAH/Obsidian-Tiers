/* =========================================================
   GESPEICHERTE ADMIN-DATEN LADEN
========================================================= */

function savePlayerData() {

    localStorage.setItem(
        "minecraftTierlistPlayers",
        JSON.stringify(players)
    );

}


function loadPlayerData() {

    const savedData =
        localStorage.getItem(
            "minecraftTierlistPlayers"
        );

    if (!savedData) {
        return;
    }

    try {

        const savedPlayers =
            JSON.parse(savedData);

        if (!Array.isArray(savedPlayers)) {
            return;
        }

        for (
            let i = 0;
            i < players.length;
            i++
        ) {

            const savedPlayer =
                savedPlayers.find(
                    function(player) {
                        return player.name === players[i].name;
                    }
                );

            if (
                savedPlayer &&
                savedPlayer.points
            ) {

                players[i].points =
                    savedPlayer.points;

            }

        }

    } catch (error) {

        console.error(
            "Gespeicherte Daten konnten nicht geladen werden:",
            error
        );

    }

}