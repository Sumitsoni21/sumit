import { useState } from "react";
import "./Animate.css";

const Animate = (child) => {
  const [anim, setAnim] = useState(0);

  return (
    <span
      className={anim === 1 ? "fun animated" : "fun"}
      id={child.hovering ? "fun-animated" : "fun"}
      onMouseOver={() => setAnim(1)}
      onAnimationEnd={() => setAnim(0)}
    >
      {child.brand}
    </span>
  );
};

export default Animate;
