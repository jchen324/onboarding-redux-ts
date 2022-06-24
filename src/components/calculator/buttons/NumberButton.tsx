// A single button for a number
export const NumberButton = (props: { enterDigit: Function; value: string }) => {
  return (
    <button onClick={() => props.enterDigit(props.value)}>{props.value}</button>
  );
};