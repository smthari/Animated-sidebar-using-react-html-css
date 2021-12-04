import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Menu() {
  const [startAnimate, setStartAnimate] = useState(false);
  const [highlightTopPosition, setStateHighlightTopPosition] = useState(0);
  const [currCount, setCurrCount] = useState(0);

  const onClickTab = (count) => {
    setStartAnimate(false);
    setCurrCount(count);
    setStateHighlightTopPosition(count * 52);
    console.log(count);

    setTimeout(() => {
      setStartAnimate(true);
    }, 100);
  };

  useEffect(() => {
    setTimeout(() => {
      setStartAnimate(true);
    }, 500);

    return () => {};
  }, []);

  const divStyle = {
    top: `${highlightTopPosition}px`,
  };

  let className = startAnimate ? "sidebar__highlight__animate" : "";

  return (
    <>
      <div className="container">
        <div className="sidebar">
          <div
            style={divStyle}
            className={`${className} sidebar__highlight `}
          ></div>

          <a
            href="#home"
            className={currCount === 0 && "active"}
            onClick={() => onClickTab(0)}
          >
            <span className={currCount === 0 && "text-active"}>
              <AiOutlineArrowRight className="icons" />
              Home
            </span>
          </a>
          <a
            href="#home"
            className={currCount === 1 && "active"}
            onClick={() => onClickTab(1)}
          >
            <span className={currCount === 1 && "textactive"}>
              <AiOutlineArrowRight className="icons" /> Contact
            </span>
          </a>
          <a
            href="#home"
            className={currCount === 2 && "active"}
            onClick={() => onClickTab(2)}
          >
            <span className={currCount === 2 && "textactive"}>
              <AiOutlineArrowRight className="icons" /> News
            </span>
          </a>
          <a
            href="#home"
            className={currCount === 3 && "active"}
            onClick={() => onClickTab(3)}
          >
            <span className={currCount === 3 && "textactive"}>
              <AiOutlineArrowRight className="icons" /> About
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
