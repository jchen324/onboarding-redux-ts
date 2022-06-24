// A single button for operator
export const OperatorButton = (props: { enterOp: Function; value: string }) => {
  return (
    <button onClick={() => props.enterOp(props.value)}>{props.value}</button>
  );
};


