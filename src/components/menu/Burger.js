import React, { useState, useEffect, useRef } from "react";

import MenusItems from "./MenusItems";

function useOutsideAlerter(ref, action) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        action();
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, action]);
}

function Burger({ theme }) {
  const [active, setActive] = useState(false);
  const [activeClass, setActiveClass] = useState("");
  const [color, setColor] = useState("#484848");
  const burgerRef = useRef(null);

  const setActiveToFalse = () => setActive("");
  useOutsideAlerter(burgerRef, setActiveToFalse);

  useEffect(() => {
    if (theme === "dark") setColor("#484848");
    if (theme === "light") setColor("#E6E7E8");
  }, [theme]);

  useEffect(() => {
    active ? setActiveClass("burger-active") : setActiveClass("");
  }, [active]);

  const toggleMenu = e => {
    setActive(!active);
    active ? setActiveClass("") : setActiveClass("");
  };

  return (
    <div className='burger' ref={burgerRef} onClick={toggleMenu}>
      <div
        className={"line line1 " + activeClass}
        style={{
          background: color
        }}
      ></div>
      <div
        className={"line line2 " + activeClass}
        style={{
          background: color
        }}
      ></div>
      <div
        className={"line line3 " + activeClass}
        style={{
          background: color
        }}
      ></div>

      {/* menu options */}
      <ul className={`menuoptions ${active ? "menuoptions-visible" : ""}`}>
        <MenusItems />
      </ul>
    </div>
  );
}

export default Burger;
