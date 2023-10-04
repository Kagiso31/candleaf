import { useOutletContext } from "react-router-dom";
import Confirmation from "./Confirmation";
import ThanksFooter from "./ThanksFooter";

const Thanks = () => {
  const [data] = useOutletContext();
  return (
    <div className="thanks">
      <Confirmation {...data} />
      <ThanksFooter data={data} />
    </div>
  );
};

export default Thanks;
