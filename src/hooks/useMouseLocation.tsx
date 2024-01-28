import { useEffect } from "react";
import { useState } from "react";
function useMouseLocation() {
  const [mouseLocation, setMouseLocation] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (event:MouseEvent) => {
      setMouseLocation({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return mouseLocation;
}
export { useMouseLocation };
