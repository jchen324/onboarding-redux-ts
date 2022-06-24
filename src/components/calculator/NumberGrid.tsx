import { NumberButton } from "./buttons/NumberButton";

// Displays the number grid
export const NumberGrid = (props: { enterDigit: Function }) => {
  return (
    <div className="number-grid">
      <div>
        {[1, 2, 3].map((digit: number) => {
          return (
            <NumberButton
              key={digit}
              enterDigit={props.enterDigit}
              value={"" + digit}
            />
          );
        })}
      </div>
      <div>
        {[4, 5, 6].map((digit: number) => {
          return (
            <NumberButton
              key={digit}
              enterDigit={props.enterDigit}
              value={"" + digit}
            />
          );
        })}
      </div>
      <div>
        {[7, 8, 9].map((digit: number) => {
          return (
            <NumberButton
              key={digit}
              enterDigit={props.enterDigit}
              value={"" + digit}
            />
          );
        })}
      </div>
      <NumberButton key={0} enterDigit={props.enterDigit} value={"" + 0} />
    </div>
  );
};



