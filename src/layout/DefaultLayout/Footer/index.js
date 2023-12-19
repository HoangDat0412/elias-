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

                  <div className="logo__name">DAT</div>
                </div>
                <a className="footer__email" href="mailto:hoang2811dat@gmail.com">
                  hoang2811dat@gmail.com
                </a>
              </div>

              <p className="footer__description">
                Happy Happy
              </p>
            </div>
            <div className={classNames("footer__media","col-12","col-md-4")}>
              <div className="footer__title">Media</div>
              <div className="footer__list">
                <a href="https://github.com/HoangDat0412" class="media">
                  <img
                    src="./images/github.png"
                    alt="github"
                    className="media__icon gitimg"
                  ></img>
                </a>
                <a
                  href="https://www.facebook.com/hoangtuananhdath/"
                  className="media"
                >
                  <img
                    src="./images/facebook.png"
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
