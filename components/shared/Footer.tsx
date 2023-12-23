import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" border-t">
      <div className=" flex-center wrapper flex-between flex flex-col gap-5 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/png/logo-no-background.png"
            width={150}
            height={50}
            alt="Evently logo"
          />
        </Link>
        <p> 2023 Shoonya. All Rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
