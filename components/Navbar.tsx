import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import AuthProviders from "./AuthProviders";

type Props = {};

const Navbar = (props: Props) => {
  const session = {};
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={115} height={42} />
        </Link>
        <ul className="xl:flex hidden text-sm gap-7">
          {NavLinks.map(({ href, key, text }) => (
            <Link key={key} href={href}>
              {text}
            </Link>
          ))}
        </ul>
      </div>

      <div className="flexCenter gap-4">
        {session ? (
          <>
            ProfilePhoto
            <Link href="create-project">Share Work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
