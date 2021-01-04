const button = document.querySelector('#btn');
const inputArea = document.querySelector('#input-txtarea')
const outputArea = document.querySelector('#output-txtarea')


button.addEventListener('click' , ()=>{
    const url = 'https://api.funtranslations.com/translate/minion.json?text=' + inputArea.value
    fetch(url)
    .then(
       res=> res.json()
        )
    .then(
        json => {
            outputArea.innerHTML= json.contents.translated
        }
    ) 
    .catch( ()=>{
        alert('Error Occured')
    }
    )   

})