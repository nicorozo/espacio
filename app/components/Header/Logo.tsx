import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"./"}>
      <Image
        src={"/logo.svg"}
        height={40}
        width={100}
        alt="Logo Espacio"
      ></Image>
    </Link>
  );
};

export default Logo;
