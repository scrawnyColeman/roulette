import React, { FC } from "react";
// import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

type Props = {
  chaosLevel: number;
};

const ConfettiComp: FC<Props> = ({ chaosLevel }) => {
  //   const { width, height } = useWindowSize();
  return <Confetti />;
};
export default ConfettiComp;
