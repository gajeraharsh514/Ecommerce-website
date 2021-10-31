import React, { useEffect, useRef, useState } from "react";
import "./Slider.css";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { Sliderdata } from "./Sliderdata";
function Slider() {
  const [slider, setslider] = useState(0);
  const timeoutref = useRef(null);
  const length = Sliderdata.length;
  const sliderprev = () => {
    setslider(slider === 0 ? length - 1 : slider - 1);
  };
  const slidernext = () => {
    setslider(slider === length - 1 ? 0 : slider + 1);
  };
  const resettimeout = () => {
    if (timeoutref.current) {
      clearTimeout(timeoutref.current);
    }
  };

  useEffect(() => {
    resettimeout();
    timeoutref.current = setTimeout(() => {
      setslider((prev) => (slider === length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => {
      resettimeout();
    };
  }, [slider]);
  return (
    <>
      <div className="Slider">
        {Sliderdata.map((item, index) => {
          return (
            <div key={item.id}>
              <div
                className={slider === index ? "sliderimg active" : "sliderimg"}
              >
                {index === slider && <img src={item.src} alt="" />}
              </div>
              <div
                className={
                  slider == index ? "Slider_darkness active" : "Slider_darkness"
                }
              ></div>
            </div>
          );
        })}

        <div className="Slider_leftsideIcon" onClick={sliderprev}>
          <AiFillCaretLeft />
        </div>
        <div className="Slider_rightsideIcon" onClick={slidernext}>
          <AiFillCaretRight />
        </div>
      </div>
    </>
  );
}

export default Slider;
