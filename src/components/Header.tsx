import React, { FC } from "react";

type Props = {
  chaosLevel: number;
};

const Header: FC<Props> = ({ chaosLevel }) => (
  <div className="flex justify-center w-screen text-cyan-500 text-2xl">
    Chaos Level: {chaosLevel}
  </div>
);

export default Header;
