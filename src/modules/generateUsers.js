const generate = (user) => {
  const listItems = document.querySelector('.list-items');
  const list = document.createElement('li');
  const userPara = document.createElement('p');
  userPara.textContent = user.user;
  const scorePara = document.createElement('P');
  scorePara.textContent = user.score;
  const medal = document.createElement('i');
  medal.setAttribute('class', 'fa-solid fa-medal');
  list.append(medal, userPara, scorePara);
  listItems.append(list);
};
export default generate;