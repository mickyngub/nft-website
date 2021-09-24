import { Box, ThemeWrapper } from "retro-ui";
import bannerCat from "assets/banner.jpeg";
import TextAnimation from "PageContent/TextAnimation/TextAnimation";
const Header = () => {
  return (
    <div>
      <p className="text-2xl lg:text-5xl text-center h-24 lg:h-32 mt-12 md:mt-24 lg:mt-24 text-blue-900">
        What is the Stray Cat NFT Collection
        <span className="text-2xl lg:text-7xl" id="questionMark"></span>
        <TextAnimation
          textArray={["?"]}
          elementID="questionMark"
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
      <div className="flex justify-center mt-0 mb-8 lg:my-16 overflow-y-scroll">
        <ThemeWrapper>
          <Box className="w-2/3 h-64 " type="warning">
            <span className="text-yellow-800">
              <b>Stray Cat Collection</b> is a digital art collection. It is an
              NFT project on Etheruem that contains 205 unique NFT photos of
              each stray cat. It is unique (1/1 Edition), each one is 100% yours
              and cannot be duplicated or destroyed. Each cat is divided into
              levels as follows.
              <br />
              RARITY : ⭐️⭐️⭐️ (47 / 168) ⭐️⭐️⭐️⭐️ (8/ 28) ⭐️⭐️⭐️⭐️⭐️
              (1/ 7) ⭐️⭐️⭐️⭐️⭐️⭐️ (0/2) Stray cats have the ability to
              attract allies. People with stray cats in the collection Chance to
              get a stray cat (special) Owners of cats in pairs (male and
              female) Chance to get a stray kitten * Random giveaway once a
              month until the end of the collection.
            </span>
          </Box>
        </ThemeWrapper>
      </div>
      <img className="w-screen" src={bannerCat} alt="bannerCat" />
    </div>
  );
};

export default Header;
