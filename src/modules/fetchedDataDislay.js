
const gameId = 'pRs2LPxCUOU3ynZslV7H';
const fetchData = () =>{
    
    fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`)
    .then(response => response.json())
    .then(data => { 
        const listItems = document.querySelector('.list-items')
        if(data.length > 1){
            data.forEach(item => {
                const list = document.createElement('li');
                list.textContent = `${item.user}: ${item.score}`;
                listItems.append(list)
           });
        }   
    })
}

export default fetchData;
