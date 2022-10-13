import React, { FC, useState } from "react";

import Image from "next/image";
import { useRouter } from "next/router";

type Props = {
  chaosLevel: number;
};

const Header: FC<Props> = ({ chaosLevel }) => {
  const { push } = useRouter();
  const [rickRollCount, setRickRollCount] = useState(0);

  return (
    <div className="flex flex-col items-center w-screen text-cyan-500 font-bold text-4xl mt-2">
      <div className="flex gap-2">
        <span>Chaos level: </span>
        <span className="animate-bounce w-12">{chaosLevel}</span>
        <button
          style={{ opacity: chaosLevel === 1 ? 0.2 : 1 }}
          disabled={chaosLevel === 1}
          onClick={() => {
            push({ pathname: "/", query: { c: chaosLevel - 1 } }, undefined, {
              shallow: true,
            });
            setRickRollCount(0);
          }}
        >
          ⬇️
        </button>
        <button
          style={{
            opacity: chaosLevel >= 10 && !rickRollCount ? 0.2 : 1,
            zIndex: 99999,
            transform: `scale(${Math.ceil(Math.exp(rickRollCount + 1) / 10)})`,
          }}
          onClick={() => {
            if (chaosLevel < 10 || rickRollCount > 5) {
              setRickRollCount(0);
              push({ pathname: "/", query: { c: chaosLevel + 1 } }, undefined, {
                shallow: true,
              });
            } else if (chaosLevel === 10) {
              setRickRollCount((rrc) => rrc + 1);
            }
          }}
        >
          ⬆️
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
