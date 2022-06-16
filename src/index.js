import './style.css';
import displayUI from './modules/createUI.js';
import { getUsers, singleRun } from './modules/displayUser.js';
import addScore from './modules/addScore.js';

displayUI();
getUsers();
singleRun();
addScore();
