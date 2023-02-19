import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../appStore/store";

export type Operator = "" | "+" | "-" | "*" | "/";
export type StoredExpression = {
  first: number;
  op: Operator;
  second: number;
  result: number;
};

export interface CalculatorState {
  // what goes here?
  mainDisplay: string;
  subDisplay: string;
  first: string;
  second: string;
  op: Operator;
  history: StoredExpression[];
}

const initialState: CalculatorState = {
  // what goes here?
  mainDisplay: "",
  subDisplay: "",
  first: "",
  second: "",
  op: "",
  history: [],
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  // what goes here?
  reducers: {
    setMainDisplay: (state, action: PayloadAction<string>) => {
      state.mainDisplay = action.payload;
    },
    setSubDisplay: (state, action: PayloadAction<string>) => {
      state.subDisplay = action.payload;
    },
    setFirst: (state, action: PayloadAction<string>) => {
      state.first = action.payload;
    },
    setSecond: (state, action: PayloadAction<string>) => {
      state.second = action.payload;
    },
    setOp: (state, action: PayloadAction<Operator>) => {
      state.op = action.payload;
    },
    updateHistory: (state, action: PayloadAction<StoredExpression>) => {
      state.history = [action.payload, ...state.history];
    },
  },
});

// remember to update this as you add more reducers!
export const {
  setMainDisplay,
  setSubDisplay,
  setFirst,
  setSecond,
  setOp,
  updateHistory,
} = calculatorSlice.actions;

// you will need selectors in order to select a value from the state
export const selectMainDisplay = (state: RootState) =>
  state.calculator.mainDisplay;
export const selectSubDisplay = (state: RootState) =>
  state.calculator.subDisplay;
export const selectFirst = (state: RootState) => state.calculator.first;
export const selectSecond = (state: RootState) => state.calculator.second;
export const selectOp = (state: RootState) => state.calculator.op;
export const selectHistory = (state: RootState) => state.calculator.history;

export default calculatorSlice.reducer;
