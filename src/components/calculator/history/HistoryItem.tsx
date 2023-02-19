import {
  selectOp,
  setFirst,
  setSecond,
  StoredExpression,
} from "../../../slices/calculatorSlice";
import { useAppSelector, useAppDispatch } from "../../../appStore/hooks";

export const HistoryItem = (props: { expr: StoredExpression }) => {
  const op = useAppSelector(selectOp);
  const dispatch = useAppDispatch();
  function fillFromHistory() {
    if (!op) dispatch(setFirst("" + props.expr.result));
    // fills first slot from history
    else if (op) dispatch(setSecond("" + props.expr.result)); // fills second slot from history
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
