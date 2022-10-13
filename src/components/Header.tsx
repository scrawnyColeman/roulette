import React, { FC, useState } from "react";

import Image from "next/image";
import { useRouter } from "next/router";

const maxRickRollCount = 7;

type Props = {
  chaosLevel: number;
};

const Header: FC<Props> = ({ chaosLevel }) => {
  const { push } = useRouter();
  const [rickRollCount, setRickRollCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center w-screen text-cyan-500 font-bold text-xl mt-2 md:text-4xl text-center">
        <h1
          style={{
            fontSize: rickRollCount + 3 + "rem",
            lineHeight: rickRollCount + 5 + "rem",
          }}
        >
          {"Spin the shitty wheel"
            .split("")
            .map((char) =>
              rickRollCount > Math.random() * maxRickRollCount
                ? char.toUpperCase()
                : char
            )}
        </h1>
        <div className="flex gap-2">
          <span>Chaos level: </span>
          <span className="animate-bounce w-12">{chaosLevel}</span>
          <button
            style={{
              opacity: chaosLevel === 1 ? 0.2 : 1,
              zIndex: 99999,
              fontSize: "1rem",
            }}
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
              fontSize: `${Math.ceil(Math.exp(rickRollCount + 1) / 10)}rem`,
            }}
            onClick={() => {
              if (chaosLevel < 10 || rickRollCount > maxRickRollCount) {
                setRickRollCount(0);
                push(
                  { pathname: "/", query: { c: chaosLevel + 1 } },
                  undefined,
                  {
                    shallow: true,
                  }
                );
              } else if (chaosLevel === 10) {
                setRickRollCount((rrc) => rrc + 1);
              }
            }}
          >
            ⬆️
          </button>
        </div>
      </div>

      {chaosLevel > 8 && (
        <div
          style={{ position: "absolute", zIndex: 0, left: "calc(50% - 150px)" }}
        >
          <br />
          {chaosLevel === 11 ? (
            <Image alt="Rick" src={"/rickroll.gif"} width={300} height={300} />
          ) : (
            <Image alt="ahhhh" src={"/ahh.gif"} width={300} height={300} />
          )}
        </div>
      )}
    </>
  );
};

export default Header;
