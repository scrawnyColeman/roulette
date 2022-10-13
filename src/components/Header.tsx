import Image from "next/image";
import React, { FC } from "react";

type Props = {
  chaosLevel: number;
};

const Header: FC<Props> = ({ chaosLevel }) => (
  <div className="flex flex-col items-center w-screen text-cyan-500 font-bold text-4xl mt-2">
    <div className="flex gap-2">
      <span>Chaos level: </span>
      <span className="animate-bounce">{chaosLevel}</span>
    </div>
    {chaosLevel > 8 && (
      <div>
        <br />
        <Image src="/ahh.gif" alt="AHHHH" width={300} height={300} />
      </div>
    )}
  </div>
);

export default Header;
