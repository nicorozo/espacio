import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"./"} style={{ display: "flex", alignItems: "center" }}>
      <Image
        src={"/logo.svg"}
        height={35}
        width={125}
        alt="Logo Espacio"
      ></Image>
    </Link>
  );
};

export default Logo;
