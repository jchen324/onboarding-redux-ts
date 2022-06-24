import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../appStore/store';

export type Operator = "" | "+" | "-" | "*" | "/";
export type StoredExpression = {
  first: number;
  op: Operator;
  second: number;
  result: number;
};

export interface CalculatorState {
  // what goes here?
}

const initialState: CalculatorState = {
  // what goes here?
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  // what goes here?
  reducers: {
    increment: (state) => {

    },
  },
});


// remember to update this as you add more reducers!
export const { increment, } = calculatorSlice.actions;

// you will need selectors in order to 
export const selectCount = (state: RootState) => state.counter.value;

export default calculatorSlice.reducer;
