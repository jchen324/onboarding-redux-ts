import { StoredExpression } from "../../../slices/calculatorSlice";
import { HistoryItem } from "./HistoryItem";

export const HistoryList = (props: { history: StoredExpression[] }) => {
  return (
    <div className="history-list">
      {props.history.map((expr, i) => {
        return <HistoryItem expr={expr} />;
      })}
    </div>
  );
};
