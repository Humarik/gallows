(function () {
    const questContainer = document.querySelector('.quest-container');
    const questField = document.querySelector('.quest');
    const answerField = document.querySelector('.answer');
    const answerContainer = document.querySelector('.container-word');
    const input = document.querySelector('.letter');
    const button = document.querySelector('.button');

    const item = getRandomItem();
    const answer = item.a.toLowerCase().split('');
    const userAnswer = createArr(answer.length);

    let count = 0;

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
                draw();
                count++;
            }
        });
        if (answer.length == count) {
            answerField .innerHTML = 'усе вiграл';
            answerContainer.appendChild(answerField );
            input.style.display = 'none'
        }
    }

    function createArr(number){
        const array = [];
        for(let i = number-1; i >= 0; i--){
            array.push('-');
        }
        return array;
    }

    function draw (){
        questField.innerHTML = item.q;
        answerField .innerHTML = userAnswer.join(' ');
        questContainer.appendChild(questField);
        answerContainer.appendChild(answerField);
    }
    draw();
}())