import './style.css';
import { addNameScore } from './modules/newScore.js';
import clearInputs from './modules/clearInput.js';
import refreshPageList from './modules/refresh.js';

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  addNameScore();
  clearInputs();
});
refreshPageList();