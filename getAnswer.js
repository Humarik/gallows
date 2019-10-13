function getAnswer(string) {
    const answerField = document.querySelector('.answer');
    const answerContainer = document.querySelector('.container-word');
    const input = document.querySelector('.letter');
    const button = document.querySelector('.button');
    const answer = string.toLowerCase().split('');
    const arrUserAnswer = createArrUserAnswer(answer.length);

    getFullAnswer(answer.slice(0), drawEnd);

    button.addEventListener('click', getLetter);

    input.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            button.click();
        }
    });

    function checkLetter (letterOfUser) {
        answer.forEach((letterOfAnswer, index) => {
            if (letterOfUser === letterOfAnswer) {
                arrUserAnswer.splice(index, 1, letterOfAnswer.toUpperCase());
                answer.splice(index, 1, '');
                drawLetter();
            }
        })
    }

    function getLetter () {
        const letterOfUser = input.value.toLowerCase();
        input.value = '';
        if (letterOfUser == ' ' || !letterOfUser) return false;
        answer.some(letter => letter === letterOfUser) ? checkLetter(letterOfUser) : counter();
        answer.every(item => item === '') ? drawEnd('усе вiграл') : false;
    }

    function createArrUserAnswer (number) {
        const array = [];
        for(let i = number-1; i >= 0; i--){
            array.push('-');
        }
        return array;
    }

    function drawLetter () {
        answerField.innerHTML = arrUserAnswer.join(' ');
        answerContainer.appendChild(answerField);
    }
    drawLetter ();
    
    function drawEnd (result) {
        answerField.innerHTML = result;
        answerContainer.appendChild(answerField);
        input.style.display = 'none';
    }
}