import React from "react";
import DotSvg1 from "../../Components/sgv/svg1";
import classNames from "classnames";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <section className={classNames("Hero", "row", "container-fluid")}>
        <div className={classNames("col-12", "col-sm-6", "hero__content")}>
        <h1 className="hero__title">
        Hello guys !
          </h1>
          <h1 className="hero__title">
            <Typewriter
              options={{
                strings: ["I'am is a fullstack developer"],
                autoStart: true,
                loop: true,
              }}
            />
            <span> </span>
          </h1>
          <div className="hero__description">
            My name is Hoàng Tuấn Anh Đạt and I love programming
          </div>
          <a
            className={classNames("button", "button__primary")}
            href="mailto:hoang2811dat@gmail.com"
          >
            Contact ME ##
          </a>
        </div>
        <div
          className={classNames("col-12", "col-sm-6", "hero__illustrations")}
        >
          <img
            src="https://elias-dev.ml/images/logo-outline.svg"
            alt=""
            className="hero__logo"
          ></img>

          <img
            src="https://elias-dev.ml/images/hero.png"
            alt="Elias"
            className="hero__image"
          ></img>

          <div className="hero__status">
            Currently, I am studying at{" "}
            <a href="https://www.is.vnu.edu.vn/">VNUIS</a>
          </div>

          <DotSvg1 />
        </div>
      </section>
    </div>
  );
}
