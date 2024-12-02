import styles from "./Showcase.module.css";
import Image from "next/image";

interface Props {
  title: string;
  subtitle: string;
  tags: any;
  description: string;
  buttonText: string;
  imgSrc: string;
  imgAlt: string;
}

const Showcase = (props: Props) => {
  const { title, subtitle, tags, description, buttonText, imgSrc, imgAlt } =
    props;
  return (
    <div className={styles.container}>
      <div className={styles.left_container}>
        <h2>{title}</h2>
        <h5>{subtitle}</h5>
        <div>{tags}</div>
        <div className="description">{description}</div>
        <button className="button">{buttonText}</button>
      </div>
      <div className="img_container">
        <Image src={imgSrc} alt={imgAlt} width={1000} height={1000} />
      </div>
    </div>
  );
};

export default Showcase;
