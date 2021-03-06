const displayUI = () => {
  const mainBody = document.querySelector('.main-body');
  const mainContent = document.createElement('main');
  mainContent.setAttribute('class', 'main');

  mainContent.innerHTML = `
        <div class="recent-scores">
            <div class="score-heading">
                <p>Recent scores</p>
                <a class="refresh" href="">Refresh</a>
            </div>
            <ul class="list-items">
            </ul>
        </div>

        <div class="add-score">
            <p>Add your score</p>
            <form action="" class="form">
                <input class="name" type="text" placeholder="Your name">
                <input class="score" type="number" placeholder="Your score">
                <button class="submit-btn" type="submit">Submit</button>
            </form>
        </div>  `;

  mainBody.append(mainContent);
};

export default displayUI;