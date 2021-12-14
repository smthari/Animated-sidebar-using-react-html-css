import React, { useEffect, useState } from "react";
// importing a icon from react icon
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Menu() {
  const [startAnimate, setStartAnimate] = useState(false);
  const [highlightTopPosition, setStateHighlightTopPosition] = useState(0);
  const [currCount, setCurrCount] = useState(0);

  // function for onclick
  const onClickTab = (count) => {
    // after onclick setStartAnimate will be false
    setStartAnimate(false);
    // setting a value of CurrCount to count
    setCurrCount(count);
    // setting a setStateHightLightTopPosition based on count value * 52
    setStateHighlightTopPosition(count * 52);
    // console logging value of count for testing
    console.log(count);

    // setting timeout after onClick setStartAnimate will be true in 100ms
    setTimeout(() => {
      setStartAnimate(true);
    }, 100);
  };

  // adding a useEffect to perform side effects automatically after 500ms setStartAnimated will be true on home element
  useEffect(() => {
    setTimeout(() => {
      setStartAnimate(true);
    }, 500);

    return () => {};
  }, []);

  // inline styling value of top based on highlightTopPosition
  const divStyle = {
    top: highlightTopPosition,
  };

  // condition in className when startAnimate true add a sidebar hightlight animate else nothing
  let className = startAnimate ? "sidebar__highlight__animate" : "";

  return (
    <>
      <div className="container">
        <div className="sidebar">
          <div
            style={divStyle}
            // adding multiple classes
            className={`${className} sidebar__highlight `}
          ></div>

          <a
            href="#home"
            className={currCount === 0 && "active"}
            onClick={() => onClickTab(0)}
          >
            <span className={currCount === 0 && "text-active"}>
              <AiOutlineArrowRight className="icons" /> Home
            </span>
          </a>
          <a
            href="#service"
            className={currCount === 1 && "active"}
            onClick={() => onClickTab(1)}
          >
            <span className={currCount === 1 && "textactive"}>
              <AiOutlineArrowRight className="icons" /> Service
            </span>
          </a>
          <a
            href="#contact"
            className={currCount === 2 && "active"}
            onClick={() => onClickTab(2)}
          >
            <span className={currCount === 2 && "textactive"}>
              <AiOutlineArrowRight className="icons" /> Contact
            </span>
          </a>
          <a
            href="#about"
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

