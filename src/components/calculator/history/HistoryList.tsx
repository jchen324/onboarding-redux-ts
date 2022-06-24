import { Operator, StoredExpression } from "../../../slices/calculatorSlice";
import { HistoryItem } from "./HistoryItem";

export const HistoryList = (props: {
  history: StoredExpression[];
  setFirst: Function;
  setSecond: Function;
  op: Operator;
}) => {
  return (
    <div className="history-list">
      {props.history.map((expr, i) => {
        return (
          <HistoryItem
            expr={expr}
            setFirst={props.setFirst}
            setSecond={props.setSecond}
            op={props.op}
          />
        );
      })}
    </div>
  );
};

