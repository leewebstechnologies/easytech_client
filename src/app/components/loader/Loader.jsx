import { BounceLoader } from "react-spinners";
import "./loader.css";

const Loader = () => {
  return (
    <div className="spinner">
      <BounceLoader color="#09F" size={60} />
    </div>
  );
};
export default Loader;
