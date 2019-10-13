function getFullAnswer(answer, draw){
    const fullAnswer = document.querySelector('.full-answer');
    const addFullAnswer = document.querySelector('.add-full');
    addFullAnswer.addEventListener('click', guess);
    fullAnswer.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            addFullAnswer.click();
        }
    });

    function guess() {
        if (fullAnswer.value.trim()){
            guess.continue;
        }else{
            alert('you need to enter word!');
            return false;
        }  
        const userAnswer = fullAnswer.value.trim().toLowerCase().split('');
        fullAnswer.value = '';
        answer.every((letter, index) => { return letter === userAnswer[index] }) ? draw('усе вiграл') : draw('усе проiграл');
        fullAnswer.style.display = 'none';
    }
}