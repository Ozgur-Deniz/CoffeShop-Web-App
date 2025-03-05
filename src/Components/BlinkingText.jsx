import { useState, useEffect } from "react";

const BlinkingText = ({ children }) => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => setOpacity((prev) => (prev === 1 ? 0 : 1)), 1500);
    return () => clearInterval(interval);
  }, []);

  return <p style={{ opacity, transition: "opacity 2s", color: "#3aa29f" }}>{children}</p>;
};

export default BlinkingText;
