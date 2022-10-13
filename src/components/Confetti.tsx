import React, { FC } from "react";
import Confetti from "react-confetti";

type Props = {
  chaosLevel: number;
};

const ConfettiComp: FC<Props> = ({ chaosLevel }) => (
  <Confetti
    className="w-screen"
    numberOfPieces={2 * chaosLevel}
    wind={chaosLevel}
    gravity={chaosLevel}
  />
);

export default ConfettiComp;
