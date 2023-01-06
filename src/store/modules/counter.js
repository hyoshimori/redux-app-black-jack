import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  win:0,
  lose: 0,
  playerPoints: 0,
  bankpoints: 0,
  finish: false,
  isGameEndMessage: "Let's play! Click 'BANK' to start playing!",
  bankButtonCounter: 0,
  alreadyPlaying: 0,
};

const counter = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // ***Pseudocode***
    // - When the game is not finished && When bank's score is not 0
    // -> Random number is given to the player
    // -> And display "Hit Finish when you want to stop!"
    // *****
    // - When player's score is 21 and the game is not finished
    // -> Player wins and the game is finished
    // - Else when player's score is less than 21 and the game is not finihsed yet
    // -> Player loses and the game is finished
    // ****************
    player(state, { type, payload }) {
      const player = {...state};
      if(player.finish !== true && player.bankpoints !== 0){
      player.isGameEndMessage = "Hit "FINISH" when you want to stop!"
      player.playerPoints = state.playerPoints + Math.floor(Math.random() * (11 - 1)) + 1
      }
      if(player.playerPoints === 21 && player.finish !== true){
        player.isGameEndMessage = "Black Jack, You win!"
        player.win += 1
        player.finish = true
      } else if(player.playerPoints > 21 && player.finish !== true){
        player.isGameEndMessage = "You lose!"
        player.lose += 1
        player.finish = true
      }
      return player;
    },
    // ***Pseudocode***
    // - When player's point is 0
    // -> Display "Now, click 'PLAYER' to add your score!"
    // *****
    // - When player is clicking the bank button multiple times
    // -> Player loses and the game is finished
    // *****
    // - When Played did not clicked the bank button multiple times and the game has not started yet
    // -> Random number is given to the bank
    // *****
    // - When bank's score is 21 and the game is not finished
    // -> Bank wins and the game is finished
    // ****************
    bank(state, { type, payload }) {
      const bank = {...state};
      if(bank.bankpoints === 0){
        bank.isGameEndMessage = "Now, click 'PLAYER' to add your score!"
      }
      if(bank.bankButtonCounter <= 2){
      bank.bankButtonCounter += 1
      }
      if(bank.bankButtonCounter === 2 && bank.finish === false){
        bank.isGameEndMessage = "Don't cheat! You lose!"
        bank.lose += 1
        bank.finish = true
      }
      if(bank.finish !== true){
      bank.bankpoints = Math.floor(Math.random() * (22 - 16)) + 16;
      }
      if(bank.bankpoints === 21 && bank.finish === false){
        bank.isGameEndMessage = "Black Jack, You lose!"
        bank.lose += 1
        bank.finish = true
      }
      // console.dir(bank);
      return bank;
    },
    // ***Pseudocode***
    // - When player's score is more than bank's score
    // -> Player wins
    // - Else when player's score is less than bank's score
    // -> Player wins
    // - Else when player's score is equal to bank's score
    // -> Both player and bank win
    // - In ant other situations
    // -> Player loese
    // *****
    // -> When the game is not finished
    // -> The game is finihsed
    // ****************
    finish(state, { type, payload }) {
      const result = {...state};
      if(result.playerPoints > result.bankpoints
         && result.playerPoints < 22
         && result.finish === false){
        result.isGameEndMessage = "You win!"
        result.win += 1
      } else if(result.playerPoints < result.bankpoints){
        result.isGameEndMessage = "You lose!"
        result.lose += 1
      } else if(result.playerPoints === result.bankpoints){
        result.isGameEndMessage = "Push!"
        result.win += 1
        result.lose += 1
      } else {
        result.isGameEndMessage = "You lose!"
        result.lose += 1
      }
      if(result.finish === false){
      result.finish = true
      return result;}
    },
    // ***Pseudocode***
    // Create a new state object that includes the values of win and lose from the previous state
    // *****
    // - When a game is started && when bank's score is not 0 && the game is not finished
    // -> Message "Haha, There is no way back." and player loese
    // ****************
    restart(state, { type, payload }) {
      const check = {...state};
      if(check.alreadyPlaying === 1 && check.bankpoints !== 0 && check.finish === false){
        check.isGameEndMessage = "Haha, There is no way back."
        check.lose += 1
        check.alreadyPlaying -= 1
        check.finish = true
        console.log("check");
        console.dir(check);
        return check;
      } else {
      const restart = {
        ...initialState,
        win: state.win,
        lose: state.lose,
      };
      restart.alreadyPlaying += 1
      return restart;
    }},
    reset: () => initialState
  }
});

// This if for dispacth
const { player, bank, restart, finish, reset } = counter.actions;

export { player, bank, restart, finish, reset }

// This if for reducer
export default counter.reducer;
