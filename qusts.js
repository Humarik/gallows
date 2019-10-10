const initQuest = (function (){
    const questContainer = document.querySelector('.quest-container');
    const questField = document.querySelector('.quest');
 
    const questions = [
        {
            q: 'Какой город был столицей Римской империи в течение самого длительного времени?',
            a: 'Константинополь'
        },
        {
            q: 'Единица измерения силы тока это ?',
            a: 'Ампер'
        },
    ]

    function getRandomItem() {
        const size = questions.length - 1;
        const number = Math.round(Math.random() * size);
        return questions[number];
    }
    const item = getRandomItem();
    getAnswer(item.a);
    questField.innerHTML = item.q;
    questContainer.appendChild(questField);
}())