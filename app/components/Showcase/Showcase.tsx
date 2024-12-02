import Button from "../Buttons/Button";
import styles from "./Showcase.module.css";
import Image from "next/image";

interface Props {
  title: string;
  subtitle: string;
  tags: any;
  description: string;
  buttonText?: string;
  imgSrc: string;
  imgAlt: string;
}

const Showcase = (props: Props) => {
  const { title, subtitle, tags, description, imgSrc, imgAlt } = props;
  return (
    <div className={styles.container}>
      <div className={styles.left_container}>
        <h2 className={styles.title}>{title}</h2>
        <h5 className={styles.subtitle}>{subtitle}</h5>
        <div className={styles.tags}>{tags}</div>
        <div className={styles.description}>{description}</div>
        <Button className="button_main">Contact</Button>
      </div>
      <div className={styles.img_container}>
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={1000}
          height={1000}
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default Showcase;
