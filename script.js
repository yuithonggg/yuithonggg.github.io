function Starttest(){
var questions = [{
        question: 'Q1:How many 9 comes between 1 and 100?',
        answer: '20',
        affirm: 'Yay! You got the correct answer!',
        rebuttal: 'Ops! There is a wrong answer you made.'
    },
    {
        question: 'Q2:What is the total of 1 to 10?',
        answer: '55',
        affirm: 'Good job! You have the right answer again!',
        rebuttal: 'Oh no! You have make a mistake!'
    },
    {
        question:'Q3:Zero is an odd number or even number?',
        answer:'even',
        affirm:'Congratulation! You got correct of all the quiz!',
        rebuttal:'Try it again! This is the last question of the quiz.'
    }
  ];

for (var i = 0; i < 3; i++) {
    answer = prompt(questions[i].question);


    if (answer !== questions[i].answer) {
        alert(questions[i].rebuttal);
        i--;
    } else {
        alert(questions[i].affirm);
    }
}

{var x = document.getElementById('quiz');
 x.innerHTML="You are done with the quiz!";
 x.style.color="grey";
}
}
