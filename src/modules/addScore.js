import Add from "./add";

const gameId = 'pRs2LPxCUOU3ynZslV7H';
const addScore = () =>{
    const addbtn = document.querySelector('.submit-btn');
    addbtn.addEventListener('click', (event)=>{
        event.preventDefault();
        const nameInput = document.querySelector('.name');
        const scoreInput = document.querySelector('.score');
        const userInput = new Add(nameInput.value, scoreInput.value);
        fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`, {
            method: 'POST',
            body: JSON.stringify(userInput),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }).then(response=> response.json())
        .then(message=>{
            alert(message.result)
            nameInput.value = ''
            scoreInput.value = ''
        })

       
    })
}

export default addScore;