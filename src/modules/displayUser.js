import generate from './generateUsers.js';

const gameId = 'pRs2LPxCUOU3ynZslV7H';

const fetchData = async () => {
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`);
  const users = await response.json();
  return users;
};

export const singleRun = async () => {
  let myData = [];
  myData = await fetchData();
  const users = myData.result;
  users.forEach((item) => {
    generate(item);
  });
};

export const getUsers = () => {
  const refreshBtn = document.querySelector('.refresh');
  const listItems = document.querySelector('.list-items');
  refreshBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    listItems.innerHTML = '';
    singleRun();
  });
};
