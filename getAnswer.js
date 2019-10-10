function getAnswer(string) {
    const answerField = document.querySelector('.answer');
    const answerContainer = document.querySelector('.container-word');
    const input = document.querySelector('.letter');
    const button = document.querySelector('.button');
    const answer = string.toLowerCase().split('');
    const userAnswer = createArr(answer.length);

    let count = 0;
    getFullAnswer(answer, draw);

    button.addEventListener('click', getLetter);

    input.addEventListener("keyup", function(event){
        if (event.keyCode === 13) {
            event.preventDefault();
            button.click();
        }
    });

    function getLetter(){
        const text = input.value.toLowerCase();
        input.value = '';
        answer.forEach((elem,index) => {
            if (text == elem){
                userAnswer.splice(index, 1, elem.toUpperCase());
                drawLeter();
                count++;
            }
        });
        if (answer.length == count) {
            draw('усе вiграл');
        }
    }

    function createArr(number){
        const array = [];
        for(let i = number-1; i >= 0; i--){
            array.push('-');
        }
        return array;
    }

    function drawLeter (){
        answerField .innerHTML = userAnswer.join(' ');
        answerContainer.appendChild(answerField);
    }
    drawLeter();
    
    function draw(result) {
        answerField.innerHTML = result;
        answerContainer.appendChild(answerField);
        input.style.display = 'none';
    }
}