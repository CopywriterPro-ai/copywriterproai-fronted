import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// import { selectors as uiSelector } from "redux/slices/uiSlice";
import { useResponsive } from "@hooks/index";

const useSidebar = () => {
  const { isMobile } = useResponsive();
  // const { bookmark: isSidebar } = useSelector(uiSelector.getSidebar);

  // Temporay
  const isSidebar = true;

  const [showSidebar, setShowSidebar] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (!isMobile) {
      setShowSidebar(isSidebar);
    } else {
      setShowSidebar(!isMobile || isSidebar);
    }
    setShowContent(!isMobile || !showSidebar);
  }, [isMobile, isSidebar, showSidebar]);

  return { showSidebar, showContent };
};

export default useSidebar;
