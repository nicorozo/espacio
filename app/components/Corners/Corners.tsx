import React from "react";
import styles from "./Corners.module.css";

interface CornersProps {
  isCornerBottom?: boolean;
}

const Corners: React.FC<CornersProps> = ({ isCornerBottom }) => {
  return (
    <div
      className={`${styles.corner} ${isCornerBottom && styles.bottom}`}
    ></div>
  );
};

export default Corners;
