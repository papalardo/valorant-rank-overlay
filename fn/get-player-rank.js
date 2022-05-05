import getRank from "./get-rank.js";
import { objIsEmpty } from "../helpers.js";

async function getPlayerRank(region, playerName, playerTag) {
    const players = await getRank(region);
    const player = players.find((player) => (
        player['gameName'] !== undefined
        && player['gameName'].toLowerCase() === playerName.toLowerCase()
        && player['tagLine'].toLowerCase() === playerTag.toLowerCase()
    ));

    if (objIsEmpty(player)) return null;
    return player;
}

export default getPlayerRank;