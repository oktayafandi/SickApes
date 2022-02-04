import welcomeLogo from "../assets/images/Logo-Welcome.svg";
import welcomeIcon1 from "../assets/images/welcome-icon-1.svg";
import welcomeIcon2 from "../assets/images/welcome-icon-2.svg";
import welcomeIcon3 from "../assets/images/welcome-icon-3.svg";
import welcomeIcon4 from "../assets/images/welcome-icon-4.svg";

export default () => {
  return (
    <>
      <section className="welcome">
        <div className="container welcome-container">
          <img className="welcome-logo" src={welcomeLogo} alt="" />
          <p className="welcome-p">
            Sick Ape are 4444 unique and randomly generated 2D NFT Avatars for
            your gaming experiences. <br />
            <span className="welcome-p-span">
              {" "}
              Be sick, Be loyal, Be strong.
            </span>
          </p>

          <a href="#">
            <button className="mint-now">MINT NOW</button>
          </a>

          <div className="welcome-social-icons">
            <a href="#">
              <img
                className="welcome-social-icons-img"
                src={welcomeIcon1}
                alt=""
              />
            </a>
            <a href="#">
              <img
                className="welcome-social-icons-img"
                src={welcomeIcon2}
                alt=""
              />
            </a>
            <a href="#">
              <img
                className="welcome-social-icons-img"
                src={welcomeIcon3}
                alt=""
              />
            </a>
            <a href="#">
              <img
                className="welcome-social-icons-img"
                src={welcomeIcon4}
                alt=""
              />
            </a>
          </div>
        </div>
      </section>

      <div className="green-bold-line"></div>
    </>
  );
};
