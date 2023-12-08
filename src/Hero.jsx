import inst from "./img/instagram.png";
import twitter from "./img/twitter.png";

export const Hero = () => {
  return (
    <div className="hero">
      <ul>
        <li className="hero-left">
          <p>Follow us</p>
          <img
            src={inst}
            alt="instagram"
          />
          <img
            src={twitter}
            alt="twitter"
          />
        </li>
        <li className="hero-center">
          <h3 className="golden-text">A Hiking guide</h3>
          <h1>Be prepared for the Mountains and beyond!</h1>
          <h5>
            scroll down
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="24"
              viewBox="0 0 16 24"
              fill="none"
            >
              <path
                d="M16 16L14.59 14.59L9 20.17V0H7V20.17L1.42 14.58L0 16L8 24L16 16Z"
                fill="white"
              />
            </svg>
          </h5>
        </li>
        <li>
          <ul className="last-el-hero-list">
            <li>
              <ul className="list-in-list">
                <li>Start</li>
                <li>01</li>
                <li>02</li>
                <li>03</li>
              </ul>
            </li>
            <li>
              <hr className="hr-last-hero" />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
