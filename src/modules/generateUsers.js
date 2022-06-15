const generate = (user) => {
  const listItems = document.querySelector('.list-items');
  const list = document.createElement('li');
  list.textContent = `${user.user}: ${user.score}`;
  listItems.append(list);
};

export default generate;