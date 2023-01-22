import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
  // Helps in rendering the page from the TOP only
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>
};

export default ScrollToTop;