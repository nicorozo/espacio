import styles from "./TextBlock.module.css";

interface TextProps {
  children: string | JSX.Element | JSX.Element[] | unknown | undefined;
}

/* const Text = (props: TextProps) => {
  return (
    <>
      <h2>{props.h2}</h2>
      <p>{props.p}</p>
    </>
  );
}; */

const TextBlock = ({ children }: TextProps) => {
  return (
    <div className={styles.block}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default TextBlock;
