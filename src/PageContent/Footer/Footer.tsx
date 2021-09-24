import discordLogo from "assets/discord8bit.png";
import twitterLogo from "assets/twitter8bit.png";
import instagramLogo from "assets/instagram8bit.png";
import TextAnimation from "PageContent/TextAnimation/TextAnimation";
const Footer = () => {
  return (
    <div className="w-screen h-96 flex flex-col justify-center">
      <div className="h-32 w-auto lg:mb-32">
        <p className="text-xl lg:text-5.5xl text-center text-blue-900">
          Contact <span className="text-blue-600">mickyngub</span> for website
          at
          <span className="text-xl lg:text-5xl" id="dotFooter"></span>
          <TextAnimation
            textArray={["..."]}
            elementID="dotFooter"
            showUnderScore={false}
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
      </div>

      <div>
        <a
          className="flex w-80 h-auto justify-around items-center -mt-10 lg:-mt-24 mx-auto"
          href="https://twitter.com/mickyngub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-16 h-16 lg:w-20 lg:h-20 appLogo"
            src={discordLogo}
            alt="discord logo"
          />
          <img
            className="w-16 h-16 lg:w-20 lg:h-20 appLogo"
            src={instagramLogo}
            alt="instagram logo"
          />
          <img
            className="w-16 h-16 lg:w-24  lg:h-20 appLogo"
            src={twitterLogo}
            alt="twitter logo"
          />
        </a>
      </div>
      {/* <TextAnimation /> */}
    </div>
  );
};

export default Footer;
