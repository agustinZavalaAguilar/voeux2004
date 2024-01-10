console.log('hello');

function play() {
    const audio = document.getElementById("my-audio");
    console.log('audio');
    audio.volume = 0.1;
    audio.play();
  }

  function stop() {
    const audio = document.getElementById("my-audio");
    audio.volume = 0;
    audio.stop();
  }

  
function start () {

    
    play();
    
setTimeout(() => {
    

    step1();

    function step1(){
        //declaration de variables pour la prémière carte de voeux
        var step1 = document.getElementById('step1');
        var title = document.getElementById('voeux1');
        var imgPhilosophe = document.getElementById('imgPhilosophe');
        var citation = document.getElementById('citation');
    
        setTimeout(()=>{
        //entrée de la carte 1
        //=> entrée d'image de fonds
            step1.style.opacity = 1;
            //=> entrée des voeux
            title.style.opacity = 1;
        setTimeout(() => {
            title.style.top = 0;
            }, "1000");
            //=> entrée d'image du philosophe
        setTimeout(()=> {
            imgPhilosophe.style.opacity = 1;
            },"1500");
        citation.style.opacity=1;      
        citation.style.bottom = 0;
        //sortie des trois élements
        setTimeout(() => {
            step1.style.opacity = 0;  
            title.style.opacity = 0;
            imgPhilosophe.style.opacity = 0;
            citation.style.opacity=0; 
    
            step2();//appel de la fonction qui déploie la carte suivante            
        }, '8000');
       
        });
        
    }
} , 4500);/*Ferme le timeout ouvert avant la fonction afin de démarrer l'audio avant les
          fonctions*/
}
   
    function step2() {
    //declaration de variables pour la deuxième carte de voeux
    var step2 = document.getElementById('step2');
    var title2 = document.getElementById('voeux2');
    var imgPhilosophe2 = document.getElementById('imgPhilosophe2');
    var citation2 = document.getElementById('citation2');

    console.log(step2);
    console.log('testing fonction 2');
        
    setTimeout(()=>{
        //entrée de la carte 2
        //=> entrée d'image de fonds
            step2.style.opacity = 1;
            //=> entrée des voeux
            title2.style.opacity = 1;
            title2.style.right = 0;           
        setTimeout(() => {
            title2.style.top = 0;
            }, "1000");
            //=> entrée d'image du philosophe
        setTimeout(()=> {
            imgPhilosophe2.style.opacity = 1;
            },"1500");
        citation2.style.opacity=1;      
        citation2.style.left = 0;
        //sortie des trois élements
        setTimeout(() => {
            step2.style.opacity = 0;  
            title2.style.opacity = 0;
            imgPhilosophe2.style.opacity = 0;
            citation2.style.opacity=0; 
            step3();
        }, '8000');
       
        });

    function step3(){
        console.log("fonction step3 présente!");

       
            //declaration de variables pour la carte de voeux
            var step3 = document.getElementById('step3');
            var title3 = document.getElementById('voeux3');
            var imgPhilosophe3 = document.getElementById('imgPhilosophe3');
            var citation3 = document.getElementById('citation3');
                        
            setTimeout(()=>{
                //entrée de la carte 3
                //=> entrée d'image de fonds
                    step3.style.opacity = 1;
                    //=> entrée des voeux
                    title3.style.opacity = 1;
                    title3.style.left = 0;
                setTimeout(() => {
                    title3.style.top = 0;
                    }, "1000");
                    //=> entrée d'image du philosophe
                setTimeout(()=> {
                    imgPhilosophe3.style.transform = 'scale(1)';
                    imgPhilosophe3.style.opacity = 1;                    
                    },"1500");
                citation3.style.opacity=1;      
                citation3.style.right = 0;
                //sortie des trois élements
                setTimeout(() => {
                    step3.style.opacity = 0;  
                    title3.style.opacity = 0;
                    console.log(imgPhilosophe3);
                    imgPhilosophe3.style.opacity = 0;                    
                    citation3.style.opacity=0; 
                    step4();
                }, '8000');
               
                });
        
    


    }

    function step4(){
        console.log("fonction step4 présente!");
       
        //declaration de variables pour la carte de voeux
        var step4 = document.getElementById('step4');
        var title4 = document.getElementById('voeux4');
        var imgPhilosophe4 = document.getElementById('imgPhilosophe4');
        var citation4 = document.getElementById('citation4');
                    
        setTimeout(()=>{
            //entrée de la carte
            //=> entrée d'image de fonds
                step4.style.opacity = 1;
                //=> entrée des voeux
                title4.style.opacity = 1;
            setTimeout(() => {
                title4.style.top = 0;
                }, "1000");
                //=> entrée d'image du philosophe
            setTimeout(()=> {
                imgPhilosophe4.style.opacity = 1;
                },"1500");
            citation4.style.opacity=1;      
            citation4.style.bottom = 0;
            //sortie des trois élements
            setTimeout(() => {
                step4.style.opacity = 0;  
                title4.style.opacity = 0;
                imgPhilosophe4.style.opacity = 0;
                citation4.style.opacity=0; 
                step5();
            }, '8000');
            
        });
        
    }

    function step5() {
        console.log('fonction 5 présente!');       
           
        //declaration de variables pour la carte de voeux
        var step5 = document.getElementById('step5');
        var title5 = document.getElementById('voeux5');
        var imgPhilosophe5 = document.getElementById('imgPhilosophe5');
        var citation5 = document.getElementById('citation5');
                    
        setTimeout(()=>{
            //entrée de la carte
            //=> entrée d'image de fonds
                step5.style.opacity = 1;
                //=> entrée des voeux
                title5.style.opacity = 1;
            setTimeout(() => {
                title5.style.top = 0;
                }, "1000");
                //=> entrée d'image du philosophe
            setTimeout(()=> {
                imgPhilosophe5.style.transform = 'scale(1)';
                imgPhilosophe5.style.opacity = 1;
                },"1500");
            citation5.style.opacity=1;      
            citation5.style.bottom = 0;
            //sortie des trois élements
            setTimeout(() => {
                step5.style.opacity = 0;  
                title5.style.opacity = 0;
                imgPhilosophe5.style.opacity = 0;
                citation5.style.opacity=0;  
            setTimeout(() => {
            stop();
            }, 2000);                     
            }, '8000');
            
        });          
        
    }
    
}
