
let resultSound = document.getElementById("resultSound");

//countdown timer
let timer = document.getElementById("timer");


let result = document.getElementById("result");


console.log(timer);
let intervaltime = null;
class Countdown {
  constructor(second) {
    this.second = second;
  }

  start = (engine) => {
    intervaltime = setInterval(
      () => {
        let minute = 0;
        let second = 0;

        minute = Math.floor(this.second / 60);
        second = this.second - minute * 60;

        timer.innerHTML = `${minute} : ${second}`;
         
        if (second === 0 && minute === 0 ) {
          clearInterval(intervaltime);
          // console.log(intervaltime);
          // document.removeEventListener("keydown" , keydownHandler);
          
          result.style.display= "block";
          let resultEl = scoreDisplay.innerHTML.slice(1);
          
          console.log (resultEl);
          
          clearTimeout(engine.moneyGame);
          engine.enemies.forEach(dollar => {
            dollar.domElement.style.display="none";
          });

          
          if (resultEl < 100){
            resultSound.play();
            result.innerHTML = `You got $ ${resultEl} <br> You can't have a million dollar dream on a minimum wage!!`
            

          }

          else if (resultEl >= 100 && resultEl < 300 ){
            resultSound.play();
            result.innerHTML = `You got $ ${resultEl} <br> Remember your goal and never give up!`
            
          }

          else if (resultEl >= 300 ){
            resultSound.play();
            result.innerHTML = `You got $ ${resultEl} <br> Money needs a purpose, so what is your plan?`
          
          }
          

        }
        console.log(this.second)
        this.second--;
      },

      1000
    );
  };
}

//start button


let startEl = document.getElementById("startButton");

startEl.addEventListener("click", appear);

function appear() {
  if(intervaltime !== null){
    clearInterval(intervaltime);
  }
  document.getElementById("timer").innerHTML="1:00";
  let time = new Countdown(59);
  result.style.display= "none";

  scoreDisplay.innerHTML = "$0"
  gameEngine.score = 0;

  gameEngine.gameLoop();
  
  time.start(gameEngine);

  
}
