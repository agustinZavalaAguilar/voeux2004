console.log('hello');

function start () {
    //declaration de variables
    var step1 = document.getElementById('step1');
    var title = document.getElementById('voeux');
    var imgPhilosophe = document.getElementById('imgPhilosophe');
    var citation = document.getElementById('citation');
    //entrée
    step1.style.opacity = 1;
    title.style.opacity = 1;
    setTimeout(() => {
        title.style.top = 0;
    }, "1000");
    setTimeout(()=> {
        imgPhilosophe.style.opacity = 1;
    },"2000");
    citation.style.opacity=1;      
    citation.style.bottom = 0;
    //sortie
    setTimeout(() => {
        step1.style.opacity = 0;  
        title.style.opacity = 0;
        imgPhilosophe.style.opacity = 0;
        citation.style.opacity=0; 
    }, '8000');
    }

