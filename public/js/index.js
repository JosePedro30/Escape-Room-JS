import * as utilizador from "../../models/utilizador.js";
import * as navbar from "../js/navbar.js";
import * as questoes from "../../models/questoes.js";
import * as room from "../../models/room.js";
import * as tempo from "../../models/temporizador.js";

utilizador.init();
navbar.navBar();
questoes.init();
room.init();
tempo.init();