import { useAppSelector } from "../../appStore/hooks";
import {
  selectMainDisplay,
  selectSubDisplay,
} from "../../slices/calculatorSlice";
export const Display = () => {
  const mainDisplay = useAppSelector(selectMainDisplay);
  const subDisplay = useAppSelector(selectSubDisplay);
  return (
    <>
      <p className="sub-display">{subDisplay}</p>
      <p className="main-display">{mainDisplay}</p>
    </>
  );
};
