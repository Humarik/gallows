const fullAnswer = document.querySelector('.full-answer');
const addFullAnswer = document.querySelector('.add-full');

function getFullAnswer(answer, answerField, answerContainer, input){
    addFullAnswer.addEventListener('click', guess);
    
    function guess() {
        if (fullAnswer.value.trim()){
            guess.continue;
        }else{
            return alert('word!');
        }
        const userAnswer = fullAnswer.value.trim().toLowerCase().split('');
        fullAnswer.value = '';
        let flag = false;
        for(let i = 0; i < answer.length; i++){
            let x = userAnswer[i];
            if(answer[i] != x ){
                flag = true;
                break;
            }
        }
        flag ? draw('0 ходов') : draw('усе вiграл');
    }

    function draw(result) {
        answerField.innerHTML = result;
        answerContainer.appendChild(answerField);
        input.style.display = 'none';
        fullAnswer.style.display = 'none';
    }
}