
let counterWrong = 1;
function counter(){
    const wrongNumber = document.querySelector('.wrong-number');
    wrongNumber.innerHTML = counterWrong;
    counterWrong++;
}