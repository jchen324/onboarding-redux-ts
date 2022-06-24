import { Operator, StoredExpression } from "../../../slices/calculatorSlice";

export const HistoryItem = (props: {
  expr: StoredExpression;
  setFirst: Function;
  setSecond: Function;
  op: Operator;
}) => {
  function fillFromHistory() {
    if (!props.op)
      props.setFirst("" + props.expr.result); // fills first slot from history
    else if (props.op) props.setSecond(props.expr.result); // fills second slot from history
    console.log(props.expr);
  }
  return (
    <div className="history-item" onClick={() => fillFromHistory()}>
      <p className="history-expression">
        {[props.expr.first, props.expr.op, props.expr.second].join(" ")}
      </p>
      <p className="history-result">{props.expr.result}</p>
    </div>
  );
};