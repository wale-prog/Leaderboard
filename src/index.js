import './style.css';

const mainBody = document.querySelector('.main-body');
const content = `<div class="heading">
<h2>Leadershipboard</h2>
</div>
<main class="main">
<div class="recent-scores">
    <div class="score-heading">
        <p>Recent scores</p>
        <a class="refresh" href="">Refresh</a>
    </div>
    <ul class="list-items">
        <li>Name: 100</li>
        <li>Name: 20</li>
        <li>Name: 50</li>
        <li>Name: 78</li>
        <li>Name: 125</li>
        <li>Name: 77</li>
        <li>Name: 42</li>
    </ul>
</div>

<div class="add-score">
    <p>Add your score</p>
    <form action="" class="form">
        <input class="name" type="text" placeholder="Your name">
        <input class="score" type="number" placeholder="Your score">
        <button class="submit-btn" type="submit">Submit</button>
    </form>
</div>  
</main>  `;

mainBody.innerHTML = content;