// JavaScript Document
// global variable
    var score = 0;
    
    // "2 dimensional" array questions
    var questions = [                            
        ['Hvad hedder instruktøren af Ringenes Herre?', 'Peter Jackson'],                  
        ['Hvad er verdens største ø?', 'Grøndland'],
        ['I hvilket år er Britney Spears født?', 1981],
          ['I hvilket land blev Adolf Hitler født?', 'Østrig'],
          ['Hvad hedder hovedstaden i Australien?', 'Canberra'],
          ['I hvilket år blev Avatar udgivet?', 2009],
          ['I hvilket år var Berlinmurens fald?', 1989],
          ['Hvem spiller Neo i Matrix?', 'Keanu Reeves']
    ];
    
    console.log(questions);
    console.log('First question: ' + questions[0][0]);
    console.log('First answer: ' + questions[0][1]);
    
    ////////////////////////////////////////////////////////////////////////////
    // Task: Use a for loop to run the whole quiz with ALL questions         //
    // Give the user feedback on how many questions were correctly answered! //
    //////////////////////////////////////////////////////////////////////////
    
    function askQuestion(q){
        
        var answer = prompt(questions[q][0], '');
        
        if (answer == questions[q][1]){
            alert('Rigtigt!');
            score++; // incrementer score by 1
            console.log(score);
        } else {
            alert('Ikke rigtigt! Det rigtige svar var ' + questions[q][1]);
        }
    }
    
    // Afvikling af quiz
    for(var i = 0; i < questions.length; i++){
        
        askQuestion(i);
        
    }
    
    // Afslutning af quiz
    alert('Du har svaret rigtig på ' + score + ' spørgsmål ud af ' + questions.length + '!');