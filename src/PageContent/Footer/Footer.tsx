import discordLogo from "assets/discord8bit.png";
import twitterLogo from "assets/twitter8bit.png";
import instagramLogo from "assets/instagram8bit.png";
const Footer = () => {
  return (
    <div className="w-screen h-64 bg-blue-400">
      <h1 className="text-4xl text-center">Contact me at @twitter @discord</h1>
      <div className="flex justify-center items-center">
        <img className="w-40 h-20" src={discordLogo} alt="discord logo" />
        <img className="w-20 h-20" src={instagramLogo} alt="instagram logo" />

        <img
          className="w-24 h-20 rounded-full"
          src={twitterLogo}
          alt="twitter logo"
        />
      </div>
    </div>
  );
};

export default Footer;
