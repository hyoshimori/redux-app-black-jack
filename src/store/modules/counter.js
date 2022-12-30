import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countPlayer: 0,
  countBank: 0,
  finish: false,
  endGame: ""
};

const counter = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    player(state, { type, payload }) {
      const player = {...state};
      player.countPlayer = state.countPlayer + Math.floor(Math.random() * (11 - 1)) + 1
      if(player.countPlayer === 21){
        player.endGame = "Black Jack, You win!"
        player.finish = true
      }
      return player;
    },
    bank(state, { payload }) {
      const bank = {...state};
      bank.countBank = Math.floor(Math.random() * (22 - 16)) + 16;
      if(bank.countBank === 21){
        bank.endGame = "Black Jack, You lose!"
        bank.finish = true
      }
      return bank;
    },
    finish(state, { payload }) {
      const result = {...state};
      if(result.countPlayer > result.countBank && result.countPlayer < 22){
        result.endGame = "You win!"
      } else if(result.countPlayer < result.countBank){
        result.endGame = "You lose!"
      } else if(result.countPlayer === result.countBank){
        result.endGame = "Push!"
      } else {
        result.endGame = "You lose!"
      }
      result.finish = true
      return result;
    },
    reset: () => initialState
  }
});

// This if for dispacth
const { player, bank, reset, finish } = counter.actions;

export { player, bank, reset, finish }

// This if for reducer
export default counter.reducer;
