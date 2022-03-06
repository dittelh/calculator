let result = document.getElementById('resultContainer').value

var value1 = 0
var value2 = 0
var sign = 0

const buttons = document.querySelectorAll('button');
const resultText = document.getElementById('resultText');

for(let button of buttons){
    button.addEventListener('click', function(){
        resultText.classList.remove('error')
        if(resultText.innerHTML === 'ERROR'){
            resultText.innerHTML = ''
        }
        if (button.value === 'enter'){
           try{
            let result = eval(resultText.innerHTML) 
            resultText.innerHTML = result
           } catch(e){
               resultText.innerHTML = 'ERROR'
               resultText.classList.add('error')
           }
        } else if(button.value === 'AC'){
            resultText.innerHTML = ''
        } 
        else{
            resultText.innerHTML += button.value

        }
    })
}