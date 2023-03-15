import "./style.css";
import { useState } from "react";

const Check = () => {
  const [check, setCheck] = useState(false);
  const handleCheck = () => {};
  return (
    <div>
      <input type="checkbox" onClick={handleCheck} />
    </div>
  );
};

export default Check;
