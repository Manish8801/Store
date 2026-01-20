import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex justify-between items-center">
        {/* left side */}
        <Link href={"/"} className="flex justify-start items-center">
          <Image
            alt={`${APP_NAME} logo`}
            src={"/images/logo.svg"}
            width={42}
            height={42}
          />
          <span className="span hidden font-bold text-2xl ml-3 lg:block">
            {APP_NAME}
          </span>
        </Link>

        {/* right side */}
        <div className="space-x-2">
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
