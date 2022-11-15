import './style.css';
import { addNameScore } from './modules/newScore.js';
import clearInput from './modules/clearInput.js';
import refreshPage from './modules/refresh.js';

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  addNameScore();
  clearInput();
});
refreshPage();