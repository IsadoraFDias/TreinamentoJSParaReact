
import './src/style/settings/colors.css'
import './src/style/generic/generic.css'
import './src/style/elements/base.css'
import CardGame from "./src/components/cardGame";

const $root = document.querySelector("#root");
const $htmlCardGame = CardGame()


$root.insertAdjacentHTML("beforeend", $htmlCardGame, $htmlCardGame);
