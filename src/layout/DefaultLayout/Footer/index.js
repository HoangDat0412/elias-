import "./Footer.scss";
import classNames from "classnames";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className={classNames("footer__inner","row")}>
            <div className={classNames("footer__info","col-12","col-md-7")}>
              <div className="footer__header">
                <div className="logo">
                  <img
                    src="https://elias-dev.ml/images/logo.svg"
                    alt="logo"
                    className="logo__img"
                  ></img>
                  <div className="logo__name">Elias</div>
                </div>
                <a className="footer__email" href="mailto:elias@elias-dev.ml">
                  elias@elias-dev.ml
                </a>
              </div>

              <p className="footer__description">
                Web designer and front-end developer based in Ukraine
              </p>
            </div>
            <div className={classNames("footer__media","col-12","col-md-4")}>
              <div className="footer__title">Media</div>
              <div className="footer__list">
                <a href="https://figma.com/@elias_dev" class="media">
                  <img
                    src="https://elias-dev.ml/images/icons/figma.svg"
                    alt="figma"
                    class="media__icon"
                  ></img>
                </a>
                <a href="https://github.com/EliasDevis" class="media">
                  <img
                    src="https://elias-dev.ml/images/icons/github.svg"
                    alt="github"
                    className="media__icon"
                  ></img>
                </a>
                <a
                  href="https://discord.com/users/914240860101681163"
                  className="media"
                >
                  <img
                    src="https://elias-dev.ml/images/icons/discord.svg"
                    alt="discord"
                    className="media__icon"
                  ></img>
                </a>
              </div>
            </div>
          </div>
          <div className={classNames("footer__copyright","col-12")}>© Copyright 2022. Made by Hoàng Tuấn Anh Đạt</div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
