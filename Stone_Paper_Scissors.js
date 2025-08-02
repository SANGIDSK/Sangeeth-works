let finalScore = JSON.parse(localStorage.getItem('score'));

      if(!finalScore){
        finalScore = { 
          wins: 0,
          losses: 0,
          ties: 0
        };
      }

      updateScoreElement();
      

      function finalResult(yourMove){
        const randomNum = Math.random();
        let computerMove = '';
        if(randomNum >= 0 && randomNum <1/3){
          computerMove = 'rock';
        }else if(randomNum >= 1/3 && randomNum <2/3){
          computerMove = 'paper';
        }else if(randomNum >= 2/3 && randomNum < 1){
          computerMove = 'scissors';
        }
        //console.log(computerMove);
        let result = '';
        if(yourMove === 'rock'){
          if(computerMove === 'rock'){
            result = 'DRAW';
          }else if(computerMove === 'paper'){
            result = 'YOU LOSE';
          }else if(computerMove === 'scissors'){
            result = 'YOU WON';
          }
        }else if(yourMove === 'paper'){
           if(computerMove === 'rock'){
              result = 'YOU WON';
            }else if(computerMove === 'paper'){
              result = 'DRAW';
            }else if(computerMove === 'scissors'){
              result = 'YOU LOSE';
            }
        }else if(yourMove === 'scissors'){
           if(computerMove === 'rock'){
              result = 'YOU LOSE';
            }else if(computerMove === 'paper'){
              result = 'YOU WON';
            }else if(computerMove === 'scissors'){
              result = 'DRAW';
            }
        }
        if(result === 'YOU WON'){
          finalScore.wins += 1;
        }else if(result === 'YOU LOSE'){
          finalScore.losses += 1;
        }else if(result === 'DRAW'){
          finalScore.ties += 1;
        }

        localStorage.setItem('score',JSON.stringify(finalScore));

        updateScoreElement();

        document.querySelector('.js-result').innerHTML = result;

        document.querySelector('.js-moves').innerHTML = `you 
        <img src="${yourMove}-emoji.png" class="move-icon">
        <img src="${computerMove}-emoji.png" class="move-icon">
        computer`;

      }   

      function updateScoreElement(){
        document.querySelector('.js-score')
          .innerHTML = `Wins: ${finalScore.wins}, Losses: ${finalScore.losses}, Draw: ${finalScore.ties}`;
      }
      