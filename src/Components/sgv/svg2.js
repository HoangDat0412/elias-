import React from "react";
import classNames from "classnames";
export default function DotSvg2() {
  return (
    <div>
      <svg
        width="100%"
        className={classNames("dots", "dot1")}
        viewBox="0 0 80 80"
      >
        <circle cx="4" cy="4" r="4"></circle>
        <circle cx="4" cy="28" r="4"></circle>
        <circle cx="4" cy="52" r="4"></circle>
        <circle cx="4" cy="76" r="4"></circle>
        <circle cx="28" cy="4" r="4"></circle>
        <circle cx="28" cy="28" r="4"></circle>
        <circle cx="28" cy="52" r="4"></circle>
        <circle cx="28" cy="76" r="4"></circle>
        <circle cx="52" cy="4" r="4"></circle>
        <circle cx="52" cy="28" r="4"></circle>
        <circle cx="52" cy="52" r="4"></circle>
        <circle cx="52" cy="76" r="4"></circle>
        <circle cx="76" cy="4" r="4"></circle>
        <circle cx="76" cy="28" r="4"></circle>
        <circle cx="76" cy="52" r="4"></circle>
        <circle cx="76" cy="76" r="4"></circle>
      </svg>
    </div>
  );
}
