import { useEffect, useState } from "react";

export default function useMobile () {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 425)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 425);
    window.addEventListener("resize", handleResize);
  },[])

  return {isMobile}
}