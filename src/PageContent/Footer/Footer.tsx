import discordLogo from "assets/discord8bit.png";
import twitterLogo from "assets/twitter8bit.png";
import instagramLogo from "assets/instagram8bit.png";
import FrontPageText from "PageContent/FrontPageText/FrontPageText";
// import FrontPageText from "PageContent/FrontPageText/FrontPageText";
const Footer = () => {
  return (
    <div className="w-screen h-80 flex flex-col justify-evenly">
      <p className="text-4xl text-center text-blue-900">
        Contact mickyngub for website at
        <span className="text-4xl " id="dot3"></span>
        <FrontPageText
          textArray={["..."]}
          elementID="dot3"
          textColorArray={[
            "aqua",
            "rebeccapurple",
            "deepPink",
            "Pink",
            "Gold",
            "GreenYellow",
            "Indigo",
            "PaleGreen",
            "Yellow",
            "Wheat",
            "Teal",
            "Violet",
          ]}
        />
      </p>
      <div>
        <a
          className="flex w-80 h-auto justify-around items-center mx-auto"
          href="https://twitter.com/mickyngub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-20 h-20" src={discordLogo} alt="discord logo" />
          <img className="w-20 h-20" src={instagramLogo} alt="instagram logo" />
          <img className="w-24 h-20" src={twitterLogo} alt="twitter logo" />
        </a>
      </div>
      {/* <FrontPageText /> */}
    </div>
  );
};

export default Footer;
