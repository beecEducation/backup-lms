import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const PassagePara = (props) => {
    const {passage} = props;
  const [reRenderQuizPara] = useSelector((state) => {
    return [state.quiz.reRenderQuizPara];
  });

  return (
    <div
      className={"description"}
      id={reRenderQuizPara}
      dangerouslySetInnerHTML={{
        __html:
          passage
      }}
    />
  );
};

export default PassagePara;
