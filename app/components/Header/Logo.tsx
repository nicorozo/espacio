import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"./"}>
      <Image
        src={"/logo.svg"}
        fill={true}
        alt="Logo Espacio"
        style={{ color: "var(--background)" }}
      ></Image>
    </Link>
  );
};

export default Logo;
