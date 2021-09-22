import { ThemeWrapper } from "retro-ui";
import bannerCat from "assets/banner.jpeg";
const Header = () => {
  return (
    <div>
      <ThemeWrapper>
        <img className="w-screen" src={bannerCat} alt="bannerCat" />
      </ThemeWrapper>
    </div>
  );
};

export default Header;
