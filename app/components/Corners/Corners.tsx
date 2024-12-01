import styles from "./Corners.module.css";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const Corners = ({ children }: Props) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Corners;
