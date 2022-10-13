import Image from "next/image";
import { useRouter } from "next/router";
import React, { FC } from "react";

type Props = {
  chaosLevel: number;
};

const Header: FC<Props> = ({ chaosLevel }) => {
  const { push } = useRouter();

  return (
    <div className="flex flex-col items-center w-screen text-cyan-500 font-bold text-4xl mt-2">
      <div className="flex gap-2">
        <span>Chaos level: </span>
        <span className="animate-bounce w-12">{chaosLevel}</span>
        <button
          style={{ opacity: chaosLevel === 11 ? 0.2 : 1 }}
          disabled={chaosLevel === 11}
          onClick={() =>
            push({ pathname: "/", query: { c: chaosLevel + 1 } }, undefined, {
              shallow: true,
            })
          }
        >
          ⬆️
        </button>
        <button
          style={{ opacity: chaosLevel === 1 ? 0.2 : 1 }}
          disabled={chaosLevel === 1}
          onClick={() =>
            push({ pathname: "/", query: { c: chaosLevel - 1 } }, undefined, {
              shallow: true,
            })
          }
        >
          ⬇️
        </button>
      </div>
      {chaosLevel > 8 && (
        <div>
          <br />
          <Image src="/ahh.gif" alt="AHHHH" width={300} height={300} />
        </div>
      )}
    </div>
  );
};

export default Header;
